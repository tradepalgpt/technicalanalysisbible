// Video block (scripts/video.mjs): nothing shows until an entry is ready; bad entries fail the build.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { checkVideo, loadVideos, videoHtml, mediaHtml, videoLd } from '../video.mjs';

const yt = { provider: 'youtube', id: 'abcdefghijk', title: 'RSI: how it works', description: 'RSI on real prices.', duration: 'PT1M20S', uploaded: '2026-11-18' };
const file = { provider: 'file', src: 'https://media.example.org/rsi.mp4', captions: 'https://media.example.org/rsi.vtt', title: 'RSI', description: 'd', duration: 'PT55S', uploaded: '2026-11-18' };

test('an entry with no id or file shows nothing and is not an error', () => {
  assert.equal(checkVideo('/rsi/', { provider: 'youtube', id: '' }), null);
  assert.equal(checkVideo('/rsi/', { provider: 'file' }), null);
  assert.equal(checkVideo('/rsi/', {}), null);
});

test('ready entries pass; broken ones say why', () => {
  assert.equal(checkVideo('/rsi/', yt), '');
  assert.equal(checkVideo('/guide/fibonacci-guide/', file), '');
  assert.match(checkVideo('rsi', yt), /page path/);
  assert.match(checkVideo('/rsi/', { ...yt, id: 'short' }), /11 characters/);
  assert.match(checkVideo('/rsi/', { ...file, src: 'http://media.example.org/rsi.mp4' }), /https/);
  assert.match(checkVideo('/rsi/', { ...file, src: 'https://technicalanalysisbible.com/v/rsi.mp4' }), /server disk/);
  assert.match(checkVideo('/rsi/', { ...yt, duration: '80s' }), /PT1M20S/);
  assert.match(checkVideo('/rsi/', { ...yt, uploaded: '18 Nov' }), /date/);
  assert.match(checkVideo('/rsi/', { ...yt, placement: 'top' }), /beside or replace/);
});

test('loadVideos keeps ready entries, drops unready ones, reports broken ones', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'tab-video-'));
  fs.mkdirSync(path.join(root, 'data'));
  fs.writeFileSync(path.join(root, 'data', 'videos.json'), JSON.stringify({ videos: { '/rsi/': yt, '/atr/': { provider: 'youtube', id: '' }, '/macd/': { ...yt, id: 'bad' } } }));
  const { videos, errors } = loadVideos(root);
  assert.deepEqual(Object.keys(videos), ['/rsi/']);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /^\/macd\//);
  assert.deepEqual(loadVideos(path.join(root, 'none')), { videos: {}, errors: [] });
});

test('YouTube loads only on click, from the privacy-enhanced domain', () => {
  const h = videoHtml(yt);
  assert.match(h, /data-yt="abcdefghijk"/);
  assert.doesNotMatch(h, /<iframe/);
  assert.match(h, /href="https:\/\/www\.youtube\.com\/watch\?v=abcdefghijk"/); // works with JavaScript off
  assert.match(videoLd(yt, 'https://x/rsi/').embedUrl, /youtube-nocookie\.com\/embed\/abcdefghijk/);
});

test('a file video uses the browser player with captions and loads nothing up front', () => {
  const h = videoHtml(file);
  assert.match(h, /<video controls preload="none"/);
  assert.match(h, /<track kind="captions" src="https:\/\/media\.example\.org\/rsi\.vtt"/);
  assert.equal(videoLd(file, 'https://x/rsi/').contentUrl, file.src);
});

test('mediaHtml: chart alone, video above chart, or video instead of chart', () => {
  const chart = '<figure class="chart"></figure>';
  assert.equal(mediaHtml(undefined, chart), chart);
  assert.equal(mediaHtml(undefined, undefined), '');
  assert.ok(mediaHtml(yt, chart).endsWith(chart) && mediaHtml(yt, chart).startsWith('<figure class="video">'));
  assert.ok(!mediaHtml({ ...yt, placement: 'replace' }, chart).includes('class="chart"'));
  assert.ok(mediaHtml(yt, undefined).startsWith('<figure class="video">'));
});

test('text is escaped', () => {
  assert.doesNotMatch(videoHtml({ ...yt, title: '<b>x</b>' }), /<b>/);
});

test('the shipped data file has no ready videos yet (pages unchanged until Dean picks hosting)', () => {
  const { videos, errors } = loadVideos(path.resolve(import.meta.dirname, '..', '..'));
  assert.deepEqual(errors, []);
  assert.deepEqual(videos, {});
});
