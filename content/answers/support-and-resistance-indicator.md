---
slug: support-and-resistance-indicator
title: Do support and resistance indicators work?
description: Automatic support and resistance indicators use pivots, fractals, swing points or volume. What each does, the repainting and clutter traps, how to check one.
query: support and resistance indicator
pillar: support-and-resistance-guide
publish: 2027-07-23
reviewed: 16 November 2026
guides: [support-and-resistance, williams-fractals, pivot-points, swing-highs-lows]
siblings: [how-to-draw-support-and-resistance, pivot-points-vs-support-and-resistance]
value: [table, example, verdict]
---

They can help, as long as you know how they find levels. Most use pivot formulas, fractals, swing points or volume, and they are consistent where hand-drawing is not. The common problems are too many levels, levels that only appear after the fact, and lines that move or vanish as new bars arrive.

## The main types

| Type | How it finds levels | Strength | Weakness |
|---|---|---|---|
| Pivot point tools | Formula on previous high, low, close | Objective, no repainting | Ignores chart history |
| Fractal or swing tools | Marks highs and lows with N lower bars each side | Matches hand-drawing roughly | Confirms N bars late |
| Zigzag-based tools | Joins swings above a size threshold | Clean picture of swings | Last leg changes until confirmed |
| Clustering tools | Groups many swing points into zones | Fewer, stronger zones | Settings change results a lot |
| Volume profile tools | Volume at each price | Shows acceptance | Needs good volume data |
| Round number tools | Lines every N points | Simple | Too many lines |

## Repainting and late confirmation

The biggest trap is how swing-based tools look in history versus live.

A [Williams fractal](/williams-fractals/) high needs two lower highs after it. So the fractal appears two bars after the high. On a historical chart, the arrow sits on the high bar, and it looks as if the tool marked the level at the time. It did not. Live, you would not have known for two more bars.

Zigzag tools are worse. The last leg keeps changing as price moves. A swing high can appear, then move higher, then vanish if price keeps rising. On history, you see only the final version.

That does not make these tools useless. It means you should judge them by what they show live, not by how clean they look on old charts. If a tool's levels change after they are drawn, it repaints.

## The clutter problem

Many indicators draw every level they find. A chart with twenty lines will always have price near one, so the tool will always look right. Look for settings that limit the number of levels, merge nearby ones into zones, or only keep levels with a minimum number of touches.

## Worked example: checking a tool before trusting it

A trader adds a swing-point level indicator with a setting of 5 bars on each side.

1. **Check the delay.** With 5 bars each side, a level appears 5 bars after the turn. On a daily chart, that is a week. Note it.
2. **Watch it live.** Over two weeks, screenshot the levels each day. Do old levels move or vanish? If yes, it repaints.
3. **Count the levels.** On a typical chart, how many lines are within one ATR of price? More than two or three is clutter.
4. **Compare with your own drawing.** Do its levels match the ones you would draw from the weekly and daily charts? If not, why not?
5. **Look at the code or description.** Is it using [swing highs and lows](/swing-highs-lows/), [pivot points](/pivot-points/), volume, or something it does not explain?

If the tool passes, it can save time and make your levels more consistent. If it fails the repaint check, use it only for drawing reference levels after the fact, not for decisions.

## What indicators do well

- **Consistency.** The same rule every time, which helps for testing.
- **Speed.** Useful when scanning many markets.
- **Objectivity.** No temptation to move a line to fit what you hope.

## What they do badly

- **Judging importance.** Most tools treat a tiny swing and a major multi-year high the same, unless you filter by timeframe.
- **Context.** They do not know about news, sessions or which levels other traders are watching.
- **Honest history.** Many look far better on old charts than they ever were live.

A tool that only uses information available at each bar, and that you can explain in one sentence, is a better starting point than one that promises to find "the real levels". See the [support and resistance](/support-and-resistance/) guide for what hand-drawn levels should capture.

## Verdict

Support and resistance indicators are useful as consistent helpers, not as replacements for judgement. Pivot tools are objective and do not repaint. Swing and fractal tools roughly match hand-drawing but confirm late. Zigzag-based tools often repaint. Check any tool live for a couple of weeks, limit the number of levels, and keep the ones that match what the higher timeframes show.
