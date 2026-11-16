#!/usr/bin/env bash
# Daily self-build on the Hetzner VM (runs as user tft from cron; never touches TFT's stack).
# Pulls the repo, builds the site for today's date, checks it, then swaps it into the folder Caddy serves.
# If anything fails, the live site is left exactly as it was.
#
#   bash ~/tabible/deploy/server-build.sh            normal run (cron does this daily)
#   bash ~/tabible/deploy/server-build.sh --dry-run  build and check only; live site untouched
#   bash ~/tabible/deploy/server-build.sh --rollback put the previous build back
set -euo pipefail

REPO="$HOME/tabible"                 # git clone of the TA Bible repo
LIVE="$HOME/tabible-site"            # mounted read-only into Caddy; never rename or remove this folder
PREV="$HOME/tabible-site.prev"       # last good build, for rollback
STAGE="$HOME/tabible-site.stage"     # new build is copied here first, then swapped in
LOG="$HOME/tabible-build.log"
MIN_PAGES=300                        # refuse to publish a build smaller than this (the site has ~350 pages)

exec >>"$LOG" 2>&1
exec 9>"$HOME/.tabible-build.lock"
flock -n 9 || { echo "$(date -u +%FT%TZ) another build is running, skipping"; exit 0; }
echo "=== $(date -u +%FT%TZ) start ${1:-}"

if [ "${1:-}" = "--rollback" ]; then
  [ -d "$PREV" ] || { echo "no previous build to roll back to"; exit 1; }
  rsync -a --delete --delay-updates "$PREV/" "$LIVE/"
  echo "rolled back"; exit 0
fi

# Node: use the server's own if installed, otherwise a throwaway container (no TFT containers involved).
run_node() {
  if command -v node >/dev/null 2>&1; then (cd "$REPO" && "$@")
  else docker run --rm -u "$(id -u):$(id -g)" -e HOME=/tmp -v "$REPO:/w" -w /w node:20-alpine "$@"
  fi
}

cd "$REPO"
git fetch --quiet origin
git reset --quiet --hard origin/HEAD          # the server copy is never edited by hand
echo "commit $(git rev-parse --short HEAD)"

run_node npm ci --silent --no-audit --no-fund
run_node npm run -s build                      # import + check + build; any check error stops here

pages=$(find "$REPO/dist" -name index.html | wc -l)
echo "built $pages pages"
[ "$pages" -ge "$MIN_PAGES" ] || { echo "too few pages ($pages < $MIN_PAGES), live site NOT changed"; exit 1; }

if [ "${1:-}" = "--dry-run" ]; then
  run_node npm run -s schedule | tail -15
  echo "dry run: live site NOT changed"; exit 0
fi

# Keep the current live site as the rollback copy, then swap the new build in.
mkdir -p "$LIVE"
rsync -a --delete "$LIVE/" "$PREV/"
rsync -a --delete "$REPO/dist/" "$STAGE/"
# --delay-updates writes every changed file aside and renames them all into place at the end,
# so visitors see the old site or the new one, not a half-copied mix.
rsync -a --delete --delete-after --delay-updates "$STAGE/" "$LIVE/"
echo "live: $(find "$LIVE" -name index.html | wc -l) pages. done $(date -u +%FT%TZ)"
