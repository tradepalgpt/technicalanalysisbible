// Site search (to-do #488): loads /assets/search.json on first use; rows are [title, url, kind, aka].
function tabRank(rows, q) {
  var words = String(q || '').toLowerCase().split(/[^a-z0-9%.]+/).filter(Boolean);
  if (!words.length) return [];
  var toks = function (s) { return String(s || '').toLowerCase().split(/[^a-z0-9%.]+/).filter(Boolean); };
  var out = [];
  for (var i = 0; i < rows.length; i++) {
    var tt = toks(rows[i][0]), at = toks(rows[i][3]), all = tt.concat(at);
    // every typed word must start a word in the title or the other names (so "rsi" never matches "reversion")
    if (!words.every(function (w) { return all.some(function (t) { return t.indexOf(w) === 0; }); })) continue;
    var phrase = words.join(' ');
    var exact = tt.join(' ') === phrase || at.join(' ') === phrase || (words.length === 1 && (at.indexOf(phrase) >= 0 || tt.indexOf(phrase) >= 0) && /\(/.test(rows[i][0]) && rows[i][0].toLowerCase().indexOf('(' + phrase + ')') >= 0);
    var score = exact ? 0 : tt[0] && tt[0].indexOf(words[0]) === 0 ? 1 : words.every(function (w) { return tt.some(function (t) { return t.indexOf(w) === 0; }); }) ? 2 : 3;
    var kind = rows[i][2] === 'guide' ? 0 : 1;
    out.push([score, kind, tt.length, i]);
  }
  out.sort(function (a, b) { return a[0] - b[0] || a[1] - b[1] || a[2] - b[2] || a[3] - b[3]; });
  return out.slice(0, 30).map(function (o) { return rows[o[3]]; });
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
