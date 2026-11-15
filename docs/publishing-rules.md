# Rules for publishing a backtest figure

From the Fable stats review (15 November 2026). Enforced in `btcore/stats.py`; Technical Analysis Bible pages follow them.

1. Net R first, gross beside it, random-entry baseline beside both. Lead with the edge over random entry, not raw expectancy.
2. Always show: trade count, markets, date span, month count, and whether it is tuning or holdout.
3. No figure under 30 trades. No range under 12 months of blocks. No headline under 100 trades and 24 months.
4. A headline needs: adjusted p at or below 0.05 across everything tried for that article (Benjamini-Hochberg over the family), edge range above zero, and a positive holdout edge on 30 or more trades (holdout p at or below 0.10). Read the holdout once.
5. Anything else is labelled "exploratory, not a tested result". That includes "no evidence of an edge", which is a fair and useful thing to publish.
6. Show the count of variants tried and of holdout reads.
7. Show the daily-bar caveats (entry-bar exits, same-bar exits, gap fills, tiny-risk trades). Above 25% entry-bar exits, no headline.
8. Say "what happened in this sample", never "what will happen". Before any figure feeds automated trading, require a second unseen period.

Holdout rule: one holdout date per study (the earliest last bar across its markets minus 12 months). Tuning = trades that enter and exit before it; holdout = trades that enter on or after it; trades straddling it are excluded from both and counted.

Forward returns ("price N bars later") are not published as an edge until the runner writes baseline forward returns; then they are paired per horizon, each horizon counts as a variant, and 20+ bar horizons use quarter blocks.
