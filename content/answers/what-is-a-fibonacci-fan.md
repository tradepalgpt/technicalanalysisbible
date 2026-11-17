---
slug: what-is-a-fibonacci-fan
title: What is a Fibonacci fan?
description: A Fibonacci fan draws sloping lines from a swing point through retracement levels, giving support or resistance that changes over time. How it is worked out.
query: what is a fibonacci fan
pillar: fibonacci-guide
publish: 2028-01-10
reviewed: 17 November 2026
guides: [fibonacci-fan, fibonacci-arcs, fibonacci-retracement]
siblings: [what-are-fibonacci-time-zones]
value: [table, example, verdict]
---

A Fibonacci fan is a set of sloping lines drawn from the start of a swing through the 38.2%, 50% and 61.8% retracement levels, measured at the time of the swing's end. Instead of flat levels, it gives diagonal lines whose price changes every bar, a little like trendlines with fixed angles.

## How it is drawn

A [Fibonacci fan](/fibonacci-fan/) uses the same two anchor points as a [Fibonacci retracement](/fibonacci-retracement/): a swing low and a swing high. The tool then:

1. Places the retracement levels on the vertical line at the swing high's bar.
2. Draws a line from the swing low through each of those points.
3. Extends the lines to the right.

In a rise, the shallowest line (through 38.2%) is the steepest, and the deepest line (through 61.8%) is the flattest. Price falling through one line is often read as a move towards the next.

## Worked example

A swing low of 100 on bar 0, a swing high of 200 on bar 20. The retracement points at bar 20 are 161.8 (38.2%), 150 (50%) and 138.2 (61.8%). Each fan line starts at 100 on bar 0:

Slope = (level at bar 20 - 100) / 20

| Fan line | Price at bar 20 | Slope per bar | Price at bar 30 |
|---|---|---|---|
| 38.2% | 161.8 | 3.09 | 192.7 |
| 50% | 150.0 | 2.50 | 175.0 |
| 61.8% | 138.2 | 1.91 | 157.3 |

So a pullback that reaches 157 on bar 30 would be sitting on the 61.8% fan line, even though it is well above the flat 61.8% retracement at 138.2. The fan's levels rise as time passes.

## Why fans are less used than retracements

**The chart scale changes the picture.** The slope in price per bar does not change, but how steep the lines look depends on how the chart is squeezed. That does not alter the calculation, but it does change how traders judge "touches" by eye.

**Two choices instead of one.** A fan depends on the swing's prices and on its timing. Choose a swing high one bar earlier or later and every line's slope changes.

**Log or linear.** On a logarithmic chart, the same anchors give different lines. Platforms do not all handle this the same way.

**Lines can run far from price.** After a long time, the steep lines are far above current prices and the flat ones far below, so only one or two lines are relevant.

| Tool | Uses price | Uses time | Main use |
|---|---|---|---|
| Fibonacci retracement | Yes | No | Flat pullback levels |
| Fibonacci fan | Yes | Yes | Sloping support or resistance |
| [Fibonacci arcs](/fibonacci-arcs/) | Yes | Yes (curved) | Curved levels around the swing end |
| Fibonacci time zones | No | Yes | Dates to watch |

## Using a fan in a trade plan

The R arithmetic is the same as with any level. Suppose a long fills at 157.60 (the ask) near the 61.8% fan line on bar 30, with a first stop at 151.60 under the recent swing low. 1R is 6.00 per unit times size. A clean stop-out is exactly -1R, with commission on top and any gap making it worse. Because the fan line rises each bar, some traders trail the stop under it, which only ever tightens the stop.

## Verdict

A Fibonacci fan turns retracement levels into sloping lines from the swing start. It adds a time element, but also adds a second subjective choice and depends on chart scale. It is a niche tool with no established edge; treat its lines as sloping zones to watch, drawn from swing points you fixed in advance.
