---
slug: relative-rotation-graph
name: Relative Rotation Graph (RRG)
aka: [RRG, relative rotation graphs]
type: breadth-sentiment
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Julius de Kempenaer
year: 2000s
default_settings: "RS-Ratio and RS-Momentum centred on 100, with a trail of recent weeks"
pairs_with: [relative-strength-comparative, correlation-coefficient, moving-average-crossover, seasonality]
related: [relative-strength-comparative, correlation-coefficient, currency-strength-meter, intermarket-analysis]
compare: []
glossary: [trend, momentum, smoothing]
wave: 3
reviewed: 14 November 2026
---

A Relative Rotation Graph (RRG) plots many securities against a benchmark on one chart, showing both how strong each is relative to the benchmark and whether that strength is rising or falling. Each one moves clockwise through four quadrants over time. Traders use it to compare sectors or markets and to see which are gaining or losing leadership.

## At a glance

| | |
|---|---|
| Type | Relative strength visual tool |
| Best market states | Trend |
| Weak in | Ranges, and for single stocks with no stable benchmark |
| Best uses | Filter; ranking sectors or markets against a benchmark |
| Default settings | RS-Ratio and RS-Momentum, centred on 100, with a trail of recent periods |
| Created by | Julius de Kempenaer, 2000s |
| Leading or lagging | Built from past prices, but the rotation shows relative momentum changing before relative strength fully turns |

## What is a Relative Rotation Graph?

A normal relative strength line shows one stock against a benchmark. An RRG does this for a whole group at once, such as the sectors of an index, and adds the direction of change.

The graph has two axes:

- **Horizontal: RS-Ratio.** Whether the security is stronger or weaker than the benchmark. Above 100 is stronger; below 100 is weaker.
- **Vertical: RS-Momentum.** Whether that relative strength is improving or fading. Above 100 is improving; below 100 is fading.

Together they give four quadrants:

- **Leading** (top right): strong and improving.
- **Weakening** (bottom right): still strong, but momentum is fading.
- **Lagging** (bottom left): weak and still fading.
- **Improving** (top left): still weak, but momentum is turning up.

Securities tend to rotate clockwise: improving, leading, weakening, lagging, and back to improving. Each dot has a trail showing where it has been.

The tool was created by Julius de Kempenaer, and the exact formulas belong to his company, RRG Research. Charting platforms offer versions that may not match exactly.

## Formula

The exact RRG formulas are proprietary, so open implementations are approximations. The general idea is:

1. Divide the security's price by the benchmark's price to get a relative strength line.
2. Smooth it and scale it around 100 to get RS-Ratio.
3. Take the rate of change of RS-Ratio, smooth it and scale around 100 to get RS-Momentum.
4. Plot RS-Ratio on the horizontal axis and RS-Momentum on the vertical axis, with a trail of recent points.

**Worked example (simplified).** A sector's price is 110 and the benchmark is 100.
Relative strength = 110 / 100 = **1.10**

If a month later the sector is 115 and the benchmark 110, relative strength is 115 / 110 = 1.045. The sector is still ahead of the benchmark but less so than before. On an RRG, that would show as falling RS-Momentum while RS-Ratio may still be above 100, so the dot would be moving from Leading toward Weakening.

The scaling to 100 is done by the tool, not by hand.

## How to read it

**Quadrant.** Tells you the current state: leading, weakening, lagging or improving.

**Direction of travel.** The trail shows where the dot is heading. A dot heading from Improving into Leading is gaining strength.

**Speed.** Long gaps between points mean fast change; short ones mean slow change.

**Rotation.** A complete clockwise loop describes a cycle of relative leadership. Not every security completes loops, and some turn back before reaching the next quadrant.

**Benchmark choice.** The graph depends on the benchmark. Change it and the picture changes.

## Best market states

**Trends (best).** Relative leadership shows most clearly when sectors or markets are trending against the benchmark.

**Reversals (useful).** Movement from Lagging into Improving shows the earliest relative turn, though many such turns fail.

**Ranges (weak).** In sideways markets the dots cluster near the centre and give little guidance.

**Volatility.** Sharp swings can produce large jumps in dots, so look at the trail, not one point.

## Settings

| Setting | Choice | Effect |
|---|---|---|
| Benchmark | Broad index for the group | Defines what "strong" means |
| Time frame | Daily or weekly | Weekly is steadier and common for sector rotation |
| Trail length | Several recent periods | Longer trails show more history but clutter the chart |
| Universe | Sectors, countries, or a watchlist | Groups of 10 to 20 are easier to read |

Platforms can set the smoothing differently, so graphs from different tools may not match exactly.

## Common mistakes

- Treating the quadrant as a buy or sell instruction.
- Reading a single point instead of the trail.
- Comparing graphs made with different benchmarks or platforms.
- Putting too many securities on one chart.
- Expecting every security to complete clockwise rotation.
- Ignoring the absolute trend. A security can be leading its benchmark while both fall.

## Pairs well with

- **[Relative strength (comparative)](/relative-strength-comparative/)**: the single-pair idea the RRG extends.
- **[Correlation coefficient](/correlation-coefficient/)**: checks how closely securities track the benchmark.
- **[Moving average crossover](/moving-average-crossover/)**: gives a simple trend check on the individual security.
- **[Seasonality](/seasonality/)**: adds a view of calendar patterns that might influence rotation.

## Sources

- Murphy, John J. (2004). *Intermarket Analysis: Profiting from Global Market Relationships*. Wiley. (Background on relative strength and sector rotation; RRGs themselves were created by Julius de Kempenaer.)

## FAQ

**What does an RRG show?**
It shows many securities against one benchmark, using two measures: relative strength and the momentum of that strength. Each security sits in one of four quadrants, and a trail shows its recent path.

**What do the four quadrants mean?**
Leading means strong and improving. Weakening means strong but fading. Lagging means weak and fading. Improving means weak but turning up. Securities tend to move clockwise through them.

**Can I trade directly from an RRG?**
Most traders use it to rank where to look, then confirm with price charts. The quadrant alone does not say when to enter or exit, and many moves reverse before completing a cycle.

**Why do RRGs differ between platforms?**
The exact formulas belong to RRG Research. Other platforms use approximations with different smoothing and scaling, so dots can land in slightly different places.

**Is it only for sectors?**
No. It can compare countries, asset classes, currencies or any watchlist, as long as you choose a sensible benchmark.
