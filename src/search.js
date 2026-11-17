// Site search (to-do #488): loads /assets/search.json on first use; rows are [title, url, kind, aka].
function tabRank(rows, q) {
  var words = String(q || '').toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  var out = [];
  for (var i = 0; i < rows.length; i++) {
    var t = rows[i][0].toLowerCase(), hay = t + ' ' + (rows[i][3] || '').toLowerCase();
    if (!words.every(function (w) { return hay.indexOf(w) >= 0; })) continue;
    var score = t === words.join(' ') ? 0 : t.indexOf(words[0]) === 0 ? 1 : (' ' + t).indexOf(' ' + words[0]) >= 0 ? 2 : 3;
    out.push([score, t.length, i]);
  }
  out.sort(function (a, b) { return a[0] - b[0] || a[1] - b[1] || a[2] - b[2]; });
  return out.slice(0, 30).map(function (o) { return rows[o[2]]; });
}
if (typeof document !== 'undefined') (function () {
  var input = document.getElementById('q'), list = document.getElementById('results'), note = document.getElementById('search-note'), rows = null;
  if (!input) return;
  function show() {
    var q = input.value.trim();
    history.replaceState(null, '', q ? '?q=' + encodeURIComponent(q) : location.pathname);
    if (!rows) return;
    var hits = tabRank(rows, q);
    list.innerHTML = '';
    hits.forEach(function (r) {
      var li = document.createElement('li'), a = document.createElement('a'), k = document.createElement('small');
      a.href = r[1]; a.textContent = r[0]; k.textContent = ' ' + r[2];
      li.appendChild(a); li.appendChild(k); list.appendChild(li);
    });
    note.textContent = q ? (hits.length ? hits.length + (hits.length === 30 ? '+' : '') + ' results' : 'No results. Try the A to Z or the glossary.') : '';
  }
  function load() {
    if (rows) return show();
    fetch('/assets/search.json').then(function (r) { return r.json(); }).then(function (d) { rows = d; show(); })
      .catch(function () { note.textContent = 'Search could not load. Try the A to Z instead.'; });
  }
  input.addEventListener('input', load);
  var q0 = new URLSearchParams(location.search).get('q');
  if (q0) { input.value = q0; load(); }
})();
