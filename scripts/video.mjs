// One video block for every page type (to-do #484, 17 November 2026).
// Data: data/videos.json, keyed by page path ("/rsi/", "/guide/fibonacci-guide/").
// A page shows nothing until its entry has a YouTube id or a file URL, so the
// hosting choice (YouTube or a file host) is a data change only.
// Never point "src" at the TA Bible server's own disk: video files live elsewhere.
import fs from 'node:fs';
import path from 'node:path';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const YT_ID = /^[A-Za-z0-9_-]{11}$/;
const HTTPS = /^https:\/\/[^\s"'<>]+$/;
const ISO_DUR = /^PT(\d+H)?(\d+M)?(\d+S)?$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

// Returns { videos: {path: entry}, errors: [string] }. Entries that are not ready
// (no id and no src) are dropped quietly; broken ones are dropped with an error.
export function loadVideos(root) {
  const file = path.join(root, 'data', 'videos.json');
  if (!fs.existsSync(file)) return { videos: {}, errors: [] };
  const raw = JSON.parse(fs.readFileSync(file, 'utf8'));
  const videos = {};
  const errors = [];
  const base = raw.media_base || '';
  if (base && !/^https:\/\/[^\s"'<>]+\/$/.test(base)) errors.push(`media_base must be an https address ending in /`);
  for (const [p, v0] of Object.entries(raw.videos || {})) {
    const v = resolveMedia(v0, base);
    const err = checkVideo(p, v);
    if (err === null) continue; // not ready yet
    if (err) { errors.push(`${p}: ${err}`); continue; }
    videos[p] = v;
  }
  return { videos, errors };
}

// The file host (Cloudflare R2, Dean 17 November 2026) is set once as media_base;
// entries name only their files ("rsi/tabible-rsi.mp4"). A full https link still works.
export function resolveMedia(v, base) {
  if (!v || typeof v !== 'object' || v.provider !== 'file') return v;
  const abs = (x) => (x && !/^https?:\/\//.test(x) && base ? base + x.replace(/^\/+/, '') : x);
  return { ...v, src: v.src || abs(v.file), poster: abs(v.poster), captions: abs(v.captions) };
}

// null = not ready (shows nothing); '' = ok; otherwise the problem.
// "live": false keeps a filled-in entry hidden (e.g. until the file is uploaded).
export function checkVideo(p, v) {
  if (!/^\/([a-z0-9-]+\/)+$/.test(p)) return 'page path must look like /rsi/ or /guide/fibonacci-guide/';
  if (!v || typeof v !== 'object') return 'entry must be an object';
  if (v.live === false) return null;
  const ready = (v.provider === 'youtube' && v.id) || (v.provider === 'file' && v.src);
  if (!ready) return null;
  if (v.provider === 'youtube' && !YT_ID.test(v.id)) return 'YouTube id must be 11 characters';
  if (v.provider === 'file') {
    if (!HTTPS.test(v.src) || !/\.mp4$/i.test(new URL(v.src).pathname)) return 'src must be an https link to an .mp4';
    // The site's own host is the Hetzner server (disk 80% full). A media. subdomain on R2 is fine.
    if (/^(www\.)?technicalanalysisbible\.com$/i.test(new URL(v.src).hostname)) return 'video files must not be served from the site itself (server disk)';
    for (const k of ['poster', 'captions']) if (v[k] && !HTTPS.test(v[k])) return `${k} must be an https link`;
  }
  if (!v.title || v.title.length > 100) return 'title is required (at most 100 characters)';
  if (!v.description || v.description.length > 300) return 'description is required (at most 300 characters)';
  if (!ISO_DUR.test(v.duration || '')) return 'duration must look like PT1M20S';
  if (!DATE.test(v.uploaded || '')) return 'uploaded must be a date like 2026-11-18';
  if (v.placement && !['beside', 'replace'].includes(v.placement)) return 'placement is beside or replace';
  return '';
}

const thumb = (v) => v.poster || (v.provider === 'youtube' ? `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg` : '');

// The figure. YouTube loads only on click (privacy-enhanced domain), so the page
// stays fast and sets no third-party cookies until the reader asks for the video.
export function videoHtml(v) {
  const cap = `<figcaption>${esc(v.title)} <span class="credit">Video, ${esc(durText(v.duration))}. Education only, not advice.</span></figcaption>`;
  if (v.provider === 'file') {
    const track = v.captions ? `<track kind="captions" src="${esc(v.captions)}" srclang="en" label="English" default>` : '';
    // Captions from another host (R2) only load with CORS, so the player asks for it.
    return `<figure class="video"><video controls preload="none" playsinline width="1280" height="720"${v.captions ? ' crossorigin="anonymous"' : ''}${v.poster ? ` poster="${esc(v.poster)}"` : ''}>`
      + `<source src="${esc(v.src)}" type="video/mp4">${track}</video>${cap}</figure>`;
  }
  const watch = `https://www.youtube.com/watch?v=${v.id}`;
  return `<figure class="video"><a class="yt" href="${watch}" data-yt="${esc(v.id)}" aria-label="Play video: ${esc(v.title)}">`
    + `<img src="${esc(thumb(v))}" width="480" height="360" loading="lazy" decoding="async" alt=""><span class="play" aria-hidden="true"></span></a>${cap}</figure>`;
}

// Inline script, added once per page that has a YouTube block.
export const VIDEO_JS = `document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a.yt[data-yt]');if(!a)return;e.preventDefault();var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+a.dataset.yt+'?autoplay=1&rel=0';f.title=a.getAttribute('aria-label')||'Video';f.allow='autoplay; encrypted-media; picture-in-picture';f.allowFullscreen=true;f.width=1280;f.height=720;a.replaceWith(f);});`;

export function videoLd(v, absUrl) {
  return {
    '@context': 'https://schema.org', '@type': 'VideoObject', name: v.title, description: v.description,
    thumbnailUrl: thumb(v) || undefined, uploadDate: v.uploaded, duration: v.duration,
    ...(v.provider === 'file' ? { contentUrl: v.src } : { embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}` }),
    isPartOf: absUrl,
  };
}

// The one place pages ask for "chart and/or video".
export function mediaHtml(v, chartFigure) {
  if (!v) return chartFigure || '';
  if (v.placement === 'replace' || !chartFigure) return videoHtml(v);
  return videoHtml(v) + chartFigure;
}

function durText(d) {
  const m = d.match(ISO_DUR);
  const h = parseInt(m[1] || 0, 10), mi = parseInt(m[2] || 0, 10), s = parseInt(m[3] || 0, 10);
  const total = h * 3600 + mi * 60 + s;
  const mm = Math.floor(total / 60), ss = total % 60;
  return mm ? `${mm} min ${ss ? `${ss} s` : ''}`.trim() : `${ss} s`;
}
