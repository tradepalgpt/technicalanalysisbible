#!/usr/bin/env bash
# Upload the built site to the Hetzner VM (content only; Caddy serves the new files at once).
# Run from Git Bash on the laptop:   bash scripts/deploy-hetzner.sh
# Roll back to the previous upload:  bash scripts/deploy-hetzner.sh --rollback
set -euo pipefail
cd "$(dirname "$0")/.."
KEY="$USERPROFILE/.ssh/tft_hetzner"
HOST="tft@178.104.148.4"
DEST="/home/tft/tabible-site"   # mounted into Caddy; update its contents in place (never rename it)

if [ "${1:-}" = "--rollback" ]; then
  ssh -i "$KEY" "$HOST" "test -d $DEST.prev && find $DEST -mindepth 1 -delete && cp -a $DEST.prev/. $DEST/ && echo rolled back"
  exit 0
fi

npm run build
tar -C dist -czf - . | ssh -i "$KEY" "$HOST" "set -e
  rm -rf $DEST.new && mkdir -p $DEST.new $DEST && tar -xzf - -C $DEST.new
  rm -rf $DEST.prev && cp -a $DEST $DEST.prev
  find $DEST -mindepth 1 -delete && cp -a $DEST.new/. $DEST/ && rm -rf $DEST.new
  echo deployed: \$(find $DEST -name index.html | wc -l) pages"
