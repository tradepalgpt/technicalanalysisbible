---
slug: walking-the-bollinger-band
title: "What does it mean when price walks the Bollinger Band?"
description: Walking the band means price keeps closing at or near the outer Bollinger Band in a strong trend. How to spot it with %B, and why it is not a reversal signal.
query: walking the bollinger band
pillar: volatility-guide
publish: 2028-02-14
reviewed: 17 November 2026
guides: [bollinger-bands, percent-b, trend-following]
siblings: [how-do-bollinger-bands-work, what-is-bollinger-band-width]
value: [table, example, verdict]
---

Walking the band means price closes at or near the upper Bollinger Band bar after bar in an uptrend, or the lower band in a downtrend. It is a sign of a strong trend, not of an overstretched market, and John Bollinger warned against treating those band touches as reversal signals.

## What it looks like

In a quiet range, closes bounce between the bands and rarely stay near one edge. In a strong trend, the middle band climbs with price, the bands widen, and closes keep landing near the outer band. Each new close pushes the standard deviation up, so the band moves out just ahead of price. The result is a run of closes that "walk" up the upper band, with small pullbacks that often stop near the middle band.

## Spotting it with %B

[%B](/percent-b/) measures where the close sits inside the [Bollinger Bands](/bollinger-bands/):

%B = (close - lower band) / (upper band - lower band)

A walk shows up as a run of %B readings near or above 1 (uptrend) or near or below 0 (downtrend).

## Worked example

Five daily bars on a share in a strong rise. Band values are from a 20, 2 setting.

| Bar | Close | Upper band | Lower band | %B |
|---|---|---|---|---|
| 1 | 53.6 | 53.75 | 49.90 | 0.961 |
| 2 | 54.1 | 54.05 | 50.05 | 1.013 |
| 3 | 54.5 | 54.40 | 50.30 | 1.024 |
| 4 | 54.6 | 54.70 | 50.60 | 0.976 |
| 5 | 54.3 | 54.85 | 51.00 | 0.857 |

Bars 1 to 4 are the walk: every %B is near 1, and two closes finish just above the upper band. A trader selling bar 2 "because it closed outside the band" would have been selling into strength. Bar 5 shows the first close clearly back inside. That is not a reversal by itself; in a trend it often just means a pause.

## Walk or reversal?

| Clue | Leans towards a walk (trend) | Leans towards reversion (range) |
|---|---|---|
| Middle band slope | Rising (or falling) steadily | Flat |
| Band width | Widening from a low | Already wide and stable |
| Pullbacks | Hold near or above the middle band | Reach the opposite band |
| Momentum | Makes new highs with price | Fails to confirm the new high |

Bollinger's own suggestion was to confirm band touches with a separate indicator, such as a momentum or volume measure, rather than reading the touch alone. A close above the upper band with momentum making new highs fits a walk. A close above the band with momentum lower than before is the kind of "unconfirmed" touch he treated as a warning.

## How traders use a walk

- **Trend followers** treat it as confirmation that the trend is strong, and look for entries on pullbacks towards the middle band. This is one form of [trend following](/trend-following/).
- **Range traders** treat it as a reason to stand aside, because their usual signal, a fade of the outer band, is working against the trend.
- **Exits.** Some traders hold while the walk continues and treat a close back below the middle band as a sign the walk has ended. That is a rule for managing an exit, not a prediction.

If you manage an open trade during a walk, the stop can be tightened as the trend extends, but never moved further away. The first stop sets 1R at the fill; trailing behind a walk only locks in more of the move.

## Common mistakes

- Shorting every upper-band close in a trend.
- Expecting the walk to last a set number of bars. There is no fixed length.
- Ignoring the middle band slope, the simplest way to tell a walk from a range.
- Reading a single close back inside the band as the end of the trend.

## Verdict

A band walk is what a strong trend looks like on Bollinger Bands: repeated closes at the outer band, a sloping middle line and widening bands. It argues against fading the move, not for it. Treat it as a description of trend strength, and use the middle band and a separate momentum check to judge when it may be ending.

See [the volatility guide](/guide/volatility-guide/) for more.
