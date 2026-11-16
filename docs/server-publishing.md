# Scheduled publishing on the Hetzner server

Written 16 November 2026. Moves the daily build from the laptop to the server, so scheduled guides and answers go live on their dates without the laptop. The finished drafts can then leave the laptop (forum to-do #469).

## How it works
- The site's source (guides, answers, build tool) lives in a **private GitHub repo**. GitHub was picked over a bare repo on the server because it is also the off-laptop backup, which #469 needs before any local copies are deleted.
- The server has its own read-only copy at `/home/tft/tabible`. It can pull but never push.
- Every day at 00:20 UTC, cron (as user `tft`) runs `deploy/server-build.sh`. It pulls, builds for today's date, checks the result, and swaps it into `/home/tft/tabible-site`, the folder Caddy already serves.
- If the pull, check or build fails, or the build has fewer than 300 pages, the live site is left as it was. Everything is written to `/home/tft/tabible-build.log`.
- The TFT compose stack, its env files and its containers are never touched. Caddy only reads the folder, as it does today. If the server has no Node, the build runs in a throwaway `node:20-alpine` container that is removed after each run.
- The swap uses rsync with delayed updates. All the new files land at the end in one quick step. The folder itself is never renamed, because it is mounted into Caddy.

## Steps for Dean (one at a time, check after each)

**Step 1. Create the private repo on GitHub.**
On github.com: New repository, name `technicalanalysisbible`, **Private**, no README. Copy its SSH address.
*Check:* the repo page says "Private" and is empty.

**Step 2. Push from the laptop.** In Git Bash, run the two commands under "Commands" below (step 2).
*Check:* the GitHub page now shows the files, and the `master` branch has the newest commit (the stop losses guide).

**Step 3. Give the server a read-only key.** On the laptop, connect to the server:
`ssh -i ~/.ssh/tft_hetzner tft@178.104.148.4`
Then, on the server, make a key that is used only for this repo:
`ssh-keygen -t ed25519 -f ~/.ssh/tabible_deploy -N "" && cat ~/.ssh/tabible_deploy.pub`
Copy the line it prints. On GitHub, open the repo's **Settings → Deploy keys → Add deploy key**, paste it, and leave **Allow write access unticked**.
*Check:* the deploy key is listed as "Read-only".

**Step 4. Clone on the server.** Still on the server:
`GIT_SSH_COMMAND="ssh -i ~/.ssh/tabible_deploy" git clone git@github.com:<you>/technicalanalysisbible.git ~/tabible && git -C ~/tabible config core.sshCommand "ssh -i ~/.ssh/tabible_deploy"`
*Check:* `ls ~/tabible/content` shows `answers` and `guide`.

**Step 5. Check the tools.**
`command -v node || docker version --format '{{.Server.Version}}'; command -v rsync flock`
*Check:* you see a Node path or a Docker version, plus paths for rsync and flock. If rsync is missing, tell Cal before going on.

**Step 6. Dry run. This changes nothing live.**
`bash ~/tabible/deploy/server-build.sh --dry-run; tail -25 ~/tabible-build.log`
*Check:* the log shows "built 3xx pages", the schedule list, and "dry run: live site NOT changed". The schedule must match the laptop's `npm run schedule`.

**Step 7. First real build.**
`bash ~/tabible/deploy/server-build.sh; tail -5 ~/tabible-build.log`
*Check:* the log ends "live: 3xx pages. done". https://technicalanalysisbible.com still loads and looks the same.

**Step 8. Turn on the daily run.**
`(crontab -l 2>/dev/null; echo '20 0 * * * bash $HOME/tabible/deploy/server-build.sh') | crontab -`
*Check:* `crontab -l` shows the line. Next morning, `tail -5 ~/tabible-build.log` shows a run at about 00:20 UTC.

**Step 9. Tell Cal.** Cal then checks a full week of clean nightly runs and that the first scheduled post went live on its date, before clearing laptop drafts under #469. The repo itself stays on the laptop.

## Undo
- Put the previous build back: `bash ~/tabible/deploy/server-build.sh --rollback`
- Stop the daily run: `crontab -e` and delete the `tabible` line.
- Remove everything: also `rm -rf ~/tabible ~/tabible-site.prev ~/tabible-site.stage ~/tabible-build.log`. The live folder `~/tabible-site` stays, because Caddy serves it.

## After this
- New guides go live by committing and pushing from wherever they were written. The server picks them up at the next nightly run.
- The old laptop upload (`scripts/deploy-hetzner.sh`) still works as a manual override. Don't use it once the nightly run is on, or the next nightly build will overwrite it.

## Commands
Step 2 (Git Bash on the laptop, replace `<you>`):
`cd /c/technicalanalysisbible && git remote add origin git@github.com:<you>/technicalanalysisbible.git`
`git push -u origin master`
