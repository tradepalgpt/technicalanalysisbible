---
slug: what-is-a-bollinger-squeeze
title: "What is a Bollinger squeeze?"
description: A Bollinger squeeze is when Bollinger BandWidth falls to its lowest level in about six months. How to spot one, a worked example, and what it does not predict.
query: what is a bollinger squeeze
pillar: volatility-guide
publish: 2028-02-18
reviewed: 17 November 2026
guides: [bollinger-squeeze, bollinger-band-width, bollinger-bands]
siblings: [what-is-the-ttm-squeeze, does-low-volatility-come-before-big-moves]
value: [chart, table, example, verdict]
chart: bollinger-squeeze
---

A Bollinger squeeze is a period when the Bollinger Bands pinch unusually close together, defined by John Bollinger as BandWidth falling to its lowest level in about six months. It marks low volatility that may give way to a bigger move, but it says nothing about the direction of that move.

## Where the idea comes from

[Bollinger Bands](/bollinger-bands/) widen and narrow with volatility. Bollinger noticed that very narrow bands were often followed by wider ones, because volatility tends to cycle between quiet and busy spells. In *Bollinger on Bollinger Bands* (2001) he called this "The Squeeze" and gave a simple rule to spot it: [BandWidth](/bollinger-band-width/) at a six-month low.

## How to spot a squeeze

1. Use the default bands: 20 periods, 2 standard deviations.
2. Calculate BandWidth = (upper band - lower band) / middle band for each bar.
3. Compare today's reading with roughly the last six months of readings (about 125 daily bars).
4. If today's BandWidth is the lowest in that window, the [Bollinger squeeze](/bollinger-squeeze/) is on.

Some traders use a looser rule, such as BandWidth in the lowest tenth of its six-month range. That is a variant, not Bollinger's own definition.

## Worked example

Ten weekly snapshots of BandWidth on a daily chart. Assume no reading in the six months before was below 4.0%.

| Week | BandWidth | Lowest so far in window? |
|---|---|---|
| 1 | 6.2% | No |
| 2 | 5.8% | No |
| 3 | 5.1% | No |
| 4 | 4.6% | No |
| 5 | 4.4% | No |
| 6 | 4.1% | No |
| 7 | 3.9% | Yes: squeeze |
| 8 | 4.3% | No, but still near the low |
| 9 | 6.0% | Expansion under way |
| 10 | 8.1% | Expansion under way |

Week 7 is the squeeze: the narrowest bands in six months. Weeks 9 and 10 show the expansion that often follows. Nothing in the BandWidth column says whether price went up or down in those weeks. It could have been either.

## The direction problem

The squeeze is a volatility signal. It only says "quiet now, maybe busier later". To decide direction, traders use something else. Bollinger's own approach was to wait for the breakout and watch for a "head fake": an initial move out of the squeeze in one direction that quickly reverses and becomes the real move in the other. That is why many traders wait for a close outside the bands, sometimes with volume or momentum confirmation, rather than guessing.

| What a squeeze tells you | What it does not |
|---|---|
| Volatility is at a six-month low | Which way price will break |
| An expansion has become more plausible | When the expansion starts |
| Bands are tight, so a stop just outside them is close | That the breakout will follow through |

## Squeeze and risk

A squeeze can make a tight stop look attractive, because the range is small. Measured in R, 1R is the distance from your side-correct fill to the first stop, times size. A tighter stop means a bigger position for the same 1R. The risk is that the first breakout is the head fake: a clean stop-out is exactly -1R, and a fast reversal through a thin market can slip past the stop and cost more. Commission is on top. Stops can only tighten after entry, so plan the first stop with the head fake in mind.

## Related squeezes

The [TTM squeeze](/answers/what-is-the-ttm-squeeze/) defines the squeeze differently: Bollinger Bands moving inside Keltner Channels. Both describe the same idea, low volatility relative to recent history, with different measuring sticks.

## Common mistakes

- Treating the squeeze as a buy signal. It has no direction.
- Entering on the first poke out of the bands without allowing for a head fake.
- Changing the band settings, which changes what a six-month low means.
- Expecting the expansion to start right away. Squeezes can last for weeks.

## Verdict

A Bollinger squeeze is BandWidth at its lowest in about six months. It flags a quiet market that may turn busy, which is useful for planning, but it gives no direction. Wait for price to show the direction, allow for a head fake, and size the trade so a stop-out costs exactly the 1R you planned.

More in [the volatility guide](/guide/volatility-guide/).
