---
slug: fast-vs-slow-stochastic
title: "Fast vs slow stochastic: what is the difference?"
description: Fast and slow stochastic differ only in smoothing. A table of fast, slow and full stochastic from the same inputs, and which most charts show by default.
query: fast vs slow stochastic
pillar: rsi-and-momentum-oscillators
publish: 2027-03-29
reviewed: 16 November 2026
guides: [stochastic-oscillator, williams-r, simple-moving-average]
siblings: [rsi-vs-stochastic-which-is-better, williams-r-vs-stochastic]
value: [chart, table, example, verdict]
chart: stochastic-oscillator
---

The fast and slow stochastic use the same formula and differ only in smoothing. The slow version's %K is the fast version's %D, a 3-bar average, so it moves more smoothly and gives fewer signals. Most platforms show the slow version, written 14, 3, 3, by default.

## The raw ingredient

Every version of the [stochastic oscillator](/stochastic-oscillator/) starts from one calculation, raw %K:

raw %K = 100 x (close - lowest low over 14 bars) / (highest high over 14 bars - lowest low over 14 bars)

It is the close's position within the recent range: 0 at the bottom, 100 at the top. Everything else is smoothing with a 3-bar [simple moving average](/simple-moving-average/).

## The three versions

| Version | %K line | %D line | Settings written as |
|---|---|---|---|
| Fast | raw %K | 3-bar average of raw %K | 14, 3 |
| Slow | 3-bar average of raw %K | 3-bar average of slow %K | 14, 3, 3 |
| Full | x-bar average of raw %K (you choose x) | y-bar average of full %K | 14, x, y |

The naming is the source of most confusion. The **fast %D** and the **slow %K** are the same line. "Slow" shifts everything one smoothing step along. A full stochastic with both smoothings set to 3 is the slow stochastic; with the first smoothing set to 1, it is the fast one.

## A worked example with the same inputs

Here are five days of raw %K, after a sharp rally and a stall:

| Day | Raw %K (fast %K) | Fast %D = Slow %K | Slow %D |
|---|---|---|---|
| 1 | 62 | | |
| 2 | 88 | | |
| 3 | 95 | 81.7 | |
| 4 | 71 | 84.7 | |
| 5 | 54 | 73.3 | 79.9 |

Working: day 3 fast %D = (62 + 88 + 95) / 3 = 81.7. Day 4 = (88 + 95 + 71) / 3 = 84.7. Day 5 = (95 + 71 + 54) / 3 = 73.3. Slow %D on day 5 = (81.7 + 84.7 + 73.3) / 3 = 79.9.

What a trader sees on day 5:

- **Fast stochastic:** %K at 54 has crashed through %D at 73.3. Overbought at 95 on day 3, back to the middle two days later. A sell cross fired on day 4, when %K (71) fell below %D (84.7).
- **Slow stochastic:** %K at 73.3 sits below %D at 79.9 and has just fallen below 80. Its first sell reading comes a day later and from a lower level.

The fast version reacted to day 4's drop immediately. The slow version waited for the drop to show up in a 3-day average. If the stall turns into a fall, the fast version was earlier. If day 6 rallies back to 90, the fast version gave a false cross and the slow one may have given none.

## Why the slow version is the default

George Lane's original fast stochastic swings very sharply. On a single wide-ranging bar, the raw %K can jump from 20 to 80. That makes the fast %K/%D crosses frequent and noisy. Smoothing once more removes much of that jumpiness at the cost of a bar or so of delay. That trade suited most users, which is why "Stochastic (14, 3, 3)" is the usual default and why most people who say "stochastic" mean the slow one.

## Which suits what

| You want | Version | Why |
|---|---|---|
| Earliest possible reading, short holds | Fast | Reacts on the same bar |
| Fewer crosses, cleaner chart | Slow | One extra smoothing step |
| To tune smoothing to a market | Full | Both smoothings adjustable |
| The fast %K with no signal line | [Williams %R](/williams-r/) | Same shape as fast %K, inverted |

Williams %R is worth knowing here: it is raw %K minus 100, plotted from 0 to -100. If you like the fast stochastic's speed but find two lines cluttered, %R is the same information in one line. [Williams %R vs stochastic](/answers/williams-r-vs-stochastic/) covers it.

## A common confusion with settings

"Stochastic 5, 3, 3" and "Stochastic 14, 3, 3" are both slow stochastics. The first number is the lookback period for the high-low range; it controls the speed much more than the fast/slow choice does. A slow stochastic with a 5-bar range is faster than a fast stochastic with a 21-bar range. When comparing, change one thing at a time.

Platforms also differ on the smoothing type. Most use simple averages for the smoothing steps; some offer exponential ones. The levels are usually 80 and 20 for all versions.

## Verdict

Fast and slow stochastic are the same indicator with one smoothing step of difference. The fast version is earlier and noisier; the slow version, the usual default, is a bar or so later and cleaner. The lookback period matters more than the fast-or-slow choice. Pick one, learn which lines your platform is actually drawing, and compare against the [pillar guide's](/guide/rsi-and-momentum-oscillators/) advice on matching settings to your holding period.
