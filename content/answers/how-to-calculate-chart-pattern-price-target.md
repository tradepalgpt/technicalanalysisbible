---
slug: how-to-calculate-chart-pattern-price-target
title: How do you calculate a chart pattern's price target?
description: Measure the pattern's height and project it from the breakout. The rule for every main pattern in one table, with worked targets turned into R.
query: chart pattern price target calculation
pillar: chart-patterns
publish: 2027-01-25
reviewed: 16 November 2026
guides: [measured-move, profit-target, risk-reward-ratio]
siblings: [what-is-a-measured-move, where-to-put-a-stop-loss-on-a-breakout]
value: [table, example, verdict]
---

Measure the height of the pattern at its widest point, then add it to (or subtract it from) the breakout level. That is the measured-move target. It is a rough guide to how far a move might go, not where it will stop, so it is best used to check whether a trade is worth taking in R.

## The general rule

Almost every classic chart pattern uses the same idea:

1. Find the **height**: the distance from the pattern's extreme to its trigger line.
2. Find the **breakout point**: where price closed through the trigger line.
3. **Project** the height from the breakout point in the direction of the break.

The [measured move](/measured-move/) guide covers the idea in general. Below is the rule for each main pattern.

## Target rules by pattern

| Pattern | Height to measure | Project from | Direction |
|---|---|---|---|
| Head and shoulders | Top of the head to the neckline, straight down | Neckline break | Down |
| Inverse head and shoulders | Bottom of the head to the neckline | Neckline break | Up |
| Double top | Peak to the middle trough | Trough break | Down |
| Double bottom | Trough to the middle peak | Peak break | Up |
| Triple top / bottom | Peaks (or troughs) to the neckline | Neckline break | Away from the pattern |
| Rectangle | Top of the box to the bottom | Edge that broke | Direction of break |
| Ascending / descending triangle | Widest part (the first swing) | Break point | Direction of break |
| Symmetrical triangle | Widest part | Break point | Direction of break |
| Rising / falling wedge | Widest part, or back to where the wedge began | Break point | Against the wedge's slope |
| Flag / pennant | The pole, from its start to the top of the pause | Break of the pause | Direction of the pole |
| Cup and handle | Bottom of the cup to the rim | Rim or handle break | Up |

Two details trip people up:

- **Sloping necklines.** For a head and shoulders with a sloping neckline, measure straight down from the head to the neckline directly below it, then project that from the point where price actually broke the neckline.
- **Which flagpole?** Measure the pole from where the sharp move began, not from the start of the wider trend. Starting the pole too early inflates the target.

## Turning the target into R

A target on its own tells you nothing about whether a trade is worth taking. You need a stop. The distance from entry to stop is 1R, and the target becomes a multiple of that. The [risk-reward ratio](/risk-reward-ratio/) guide explains the idea.

### Worked example: a rectangle

This is an illustration with round numbers, not a real trade.

A share trades between 48 and 54 for two months. It closes at 54.40.

- Height: 54 − 48 = 6. Target: 54 + 6 = 60.
- Entry: next open, 54.50.
- Stop option A, below the middle of the box: 50.90. Risk 3.60. Reward 5.50. **1.5R.**
- Stop option B, below the box: 47.90. Risk 6.60. **0.8R.**
- Stop option C, below the breakout bar's low: 53.40. Risk 1.10. **5.0R.**

Same target, three very different trades. Option C looks best in R, but a normal retest of 54 would likely stop it out. Option B gives the pattern the most room but is worth less than 1R. Which is right depends on how the market usually behaves after breaks, and that is something only a written rule and a record of results can tell you.

### Worked example: a symmetrical triangle

Also invented. A currency pair forms a triangle whose first swing runs from 1.1000 to 1.1200: height 200 pips. Price breaks down at 1.1080, closing at 1.1070.

- Target: 1.1080 − 0.0200 = 1.0880.
- Entry: 1.1068. Stop above the last swing high in the triangle: 1.1125. Risk: 57 pips.
- Reward: 188 pips. **3.3R.**

Triangles often give larger R multiples than double tops, because the last swing before the break sits close to the trigger line.

## How to treat the target

- **As a ceiling to check, not a promise.** Price often stops short. Look at what is between entry and target: a prior swing, a round number, a weekly level. The nearest of these is often the more realistic target. See the [profit target](/profit-target/) guide.
- **As a filter.** If the measured target is worth less than about 1R with a sensible stop, many traders skip the trade.
- **With costs.** Subtract the spread and any commission from the reward and add them to the risk. On small patterns this can change the answer.
- **Alongside a plan for the rest.** Some traders take part at the target and trail the remainder; some exit in full; some take part earlier. Decide before entering.

## Where the rule comes from

The measured-move idea is old. It appears in Edwards and Magee's *Technical Analysis of Stock Trends* and in most later books. Thomas Bulkowski's *Encyclopedia of Chart Patterns* looks at how often targets were reached for each pattern in US stocks. We have not tested target rules ourselves, so there are no figures of our own here.

## Verdict

The calculation is easy: height of the pattern, projected from the break. The judgement is harder. A measured target is a rough guide to the size of a move, useful for deciding whether a trade is worth the risk, and weaker as an exit price. Always turn it into R with a real stop, check the levels in between, and include costs. See the [chart patterns guide](/guide/chart-patterns/) for more worked examples.
