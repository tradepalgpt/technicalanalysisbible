/*
 * Shared partner ad loader (no framework, no cookies).
 * Usage: <div class="partner-ad" data-ad-size="300x250|728x90|text" data-ad-config='{...ic-markets.json...}'></div>
 * Shows nothing until the visitor's country is known and allowed.
 * Country comes from Cloudflare's /cdn-cgi/trace (works on any Cloudflare-proxied site).
 * Any failure = no ad (fail closed).
 */
(function () {
  function country() {
    return fetch('/cdn-cgi/trace', { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw 0; return r.text(); })
      .then(function (t) { var m = t.match(/^loc=([A-Z]{2})$/m); if (!m) throw 0; return m[1]; });
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function warning(cfg) {
    var w = cfg.risk_warning;
    if (cfg.risk_loss_pct != null) {
      w = cfg.risk_loss_pct + '% of retail investor accounts lose money when trading CFDs with this provider. ' + w;
    }
    return el('p', 'partner-ad__risk', w);
  }

  function render(slot, cfg) {
    var size = slot.getAttribute('data-ad-size') || 'text';
    var box = el('div', 'partner-ad__box');
    box.appendChild(el('span', 'partner-ad__label', 'Advertisement'));
    var a = el('a', 'partner-ad__link');
    a.href = cfg.link;
    a.target = '_blank';
    a.rel = 'sponsored nofollow noopener';
    if (size === 'text' || !cfg.banners[size]) {
      a.appendChild(el('strong', null, cfg.text_ad.title));
      a.appendChild(el('span', 'partner-ad__body', cfg.text_ad.body));
      a.appendChild(el('span', 'partner-ad__cta', cfg.text_ad.cta + ' →'));
    } else {
      var img = new Image();
      var wh = size.split('x');
      img.width = +wh[0]; img.height = +wh[1];
      img.loading = 'lazy';
      img.alt = cfg.partner + ' advertisement';
      img.src = cfg.banners[size];
      img.onerror = function () { slot.hidden = true; };
      a.appendChild(img);
    }
    box.appendChild(a);
    box.appendChild(warning(cfg));
    slot.appendChild(box);
    slot.classList.add('partner-ad--on');
  }

  var slots = document.querySelectorAll('.partner-ad[data-ad-config]');
  if (!slots.length) return;
  country().then(function (cc) {
    slots.forEach(function (slot) {
      var cfg;
      try { cfg = JSON.parse(slot.getAttribute('data-ad-config')); } catch (e) { return; }
      if ((cfg.hide_in_countries || []).indexOf(cc) !== -1) return;
      render(slot, cfg);
    });
  }).catch(function () { /* unknown country: show nothing */ });
})();
