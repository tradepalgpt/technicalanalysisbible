# Deploying Technical Analysis Bible to the TFT Hetzner VM

Written 14 November 2026. Plain-English version for Dean is in the chat; this is the reference.

## How it fits
- The VM (178.104.148.4) runs TFT's Docker stack: `app`, `db`, `caddy`. Caddy owns ports 80 and 443 and gets HTTPS certificates automatically.
- TA Bible is plain HTML files. Caddy can serve them directly: no new container, no new ports, no change to the TFT app or database.
- Two additions only:
  1. `deploy/tabible.caddy` appended to `/opt/tft/deploy/hetzner/Caddyfile` (new site block).
  2. `deploy/docker-compose.override.yml` copied next to TFT's compose file (adds one read-only folder mount to Caddy).
- Site files live in `/home/tft/tabible-site` and are refreshed by `scripts/deploy-hetzner.sh`.

## One-time setup (Dean runs, in order)
1. Back up the two TFT files on the server.
2. Append the site block and add the override file.
3. Upload the site files.
4. Check the Caddy config is valid **before** applying it.
5. Recreate only the Caddy container. TFT is unreachable for a few seconds while Caddy restarts; the app and database keep running. Do it at a quiet time.

## Rollback
- Site content: `bash scripts/deploy-hetzner.sh --rollback`.
- Whole thing: restore `Caddyfile.bak-tabible`, delete `docker-compose.override.yml`, run `docker compose up -d caddy`.

## DNS (Namecheap, Advanced DNS for technicalanalysisbible.com)
- A record, host `@`, value `178.104.148.4`
- A record, host `www`, value `178.104.148.4`
- Remove any parking or URL-redirect records Namecheap added.
HTTPS: Caddy issues the certificate on the first visit after DNS points at the server (minutes to a few hours).

## Must not be forgotten
- **The TFT repo's own `deploy/hetzner/Caddyfile` must get the same block.** TFT deploys copy the repo's Caddyfile over the server's one; without this, the next TFT deploy silently removes TA Bible. That change is a TFT repo edit, so it goes through Cal's worktree and gate. The override file is not in the TFT repo, so a TFT deploy leaves it alone.
- **Ads stay off on this setup.** The ad loader needs Cloudflare's country check (`/cdn-cgi/trace`). Without Cloudflare in front, it shows nothing (by design). That is fine until to-do #441 is done (the loss % is still blank). To switch ads on later: put the domain behind Cloudflare (free, "proxied" A record to the same IP, SSL mode "Full (strict)"), or change the loader to use a country header.
- The `_headers` file in `dist/` is for Cloudflare Pages and is ignored here; Caddy sets the same headers.
