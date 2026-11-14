---
slug: swing-highs-lows
name: Swing Highs and Swing Lows
aka: [Swing points, Pivot highs and lows, Fractals (2-bar version)]
type: price-action
states: [trend]
weak_states: [range]
purposes: [stop, filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "3 bars on each side (Williams fractals use 2)"
pairs_with: [market-structure, support-and-resistance, structure-stop, williams-fractals]
related: [break-of-structure, trendline, pullback-trading, price-action, fibonacci-retracement, pivot-points]
compare: []
glossary: [swing-high, swing-low, fractal, lookback-period]
wave: 1
reviewed: 14 November 2026
---

A swing high is a price peak with lower highs on both sides. A swing low is a trough with higher lows on both sides. Traders use these turning points to read trends, draw support and resistance, and place stops just beyond them. The number of bars needed on each side is a setting, so the rule must be written down.

## At a glance

| | |
|---|---|
| Type | Price action building block |
| Best market states | Trend |
| Weak in | Ranges and choppy markets, where small swings are meaningless |
| Best uses | Stop placement, trend filter, levels |
| Default rule | A high with 3 lower highs on each side (3-bar swing) |
| Short version | Bill Williams' fractal: 2 bars on each side |
| Origin | Not attributed to one person |

## What are swing highs and swing lows?

Price rises, stalls and falls, then falls, stalls and rises. The stall points are the swings. A swing high is a bar whose high is higher than the highs of the bars around it. A swing low is a bar whose low is lower than the lows around it.

Chart readers have used these turning points since the early days of technical analysis. They are the peaks and troughs used in Dow theory, as described by Edwards and Magee and by Murphy (1999). Al Brooks (2012) uses them throughout his price action books, and Bill Williams (1995) turned a fixed version into the fractal indicator in *Trading Chaos*.

A swing is only known after the fact. Until enough bars have printed on the right side, a candidate high may still be exceeded. This delay is a built-in cost of the idea.

## How it is identified

Pick a number N, the number of bars on each side.

- **Swing high:** the high of a bar is higher than the highs of the N bars before it and the N bars after it.
- **Swing low:** the low of a bar is lower than the lows of the N bars before it and the N bars after it.

With N = 2 this is Williams' fractal, a five-bar pattern. With N = 3 it is a seven-bar pattern, and fewer but more significant swings. Larger N finds only major turning points.

**Worked example.** Highs for seven bars are 101, 103, 104, 108, 105, 103, 102. The middle bar's high is 108. The three bars before it have lower highs (101, 103, 104) and the three after it do too (105, 103, 102). With N = 3, the 108 bar is a swing high. It can only be confirmed three bars later, when the 102 bar prints.

If the last two highs had been 109 and 106, the 108 bar would fail the test and 109 would become the candidate.

**Ties.** If two bars share the same high, platforms differ. Pick one rule, such as using the first bar, and stay with it.

## How to read it

**Trend labels.** Compare swings in sequence to label higher highs, higher lows, and so on. See [Market structure](/market-structure/).

**Levels.** A previous swing high that price returned to often becomes resistance. A swing low becomes support. See [Support and resistance](/support-and-resistance/).

**Stops.** A common rule places the stop beyond the last swing: below the swing low for a long, above the swing high for a short. See [Structure stop](/structure-stop/).

**Pullback depth.** Measuring from swing low to swing high gives the range for retracement tools such as [Fibonacci retracement](/fibonacci-retracement/).

**Order of significance.** A swing found with N = 10 is a bigger turning point than one found with N = 2. Many traders use two sizes: a small one for entries and a large one for direction.

## Best market states

**Trends (best).** Swings are orderly and the last protected swing gives a logical stop and a direction check.

**Ranges (weak).** Price makes many small swings that mean little. The range top and bottom matter more.

**Fast markets.** Spikes produce one-bar highs that are clear swings by rule but not meaningful levels. Use a larger N or ignore swings that cover a tiny range.

## Confirmation rules

| Check | What to look for |
|---|---|
| Fixed rule | The same N on every chart and time frame being compared |
| Confirmed only | A swing is counted only after N bars on the right have closed |
| Size | The swing's range is meaningful, such as larger than one average bar |
| Tested | Price has reacted at the level at least once before |
| Close | A break counts when a bar closes beyond it, not only on a wick |
| Time frame | The swing is read on the time frame being traded |

## Common mistakes

- Using the latest high as a swing before it has been confirmed. Price may still go higher.
- Changing N from chart to chart so the swings look right.
- Marking every tiny zigzag. Too many swings mean no level matters.
- Placing a stop exactly at the swing. Many traders put theirs there, so allow a margin for noise or spread.
- Expecting a swing to hold forever. A level is only valid until price breaks it.
- Using automatic swing indicators without checking what N they use. Platforms differ.

## Pairs well with

- **[Market structure](/market-structure/)**: the sequence of swings tells you the trend.
- **[Support and resistance](/support-and-resistance/)**: swings are where most levels are drawn.
- **[Structure stop](/structure-stop/)**: uses the last swing to place a stop.
- **[Williams fractals](/williams-fractals/)**: a fixed two-bar-each-side version built into many platforms.

## Sources

- Williams, Bill (1995). *Trading Chaos*. Wiley. (Fractals, the 2-bar version.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Edwards, Robert D. and Magee, John (1948, later editions). *Technical Analysis of Stock Trends*.
- Brooks, Al (2012). *Trading Price Action Trends*. Wiley.

## FAQ

**How many bars do you need for a swing high?**
There is no standard. Williams' fractal uses 2 lower highs on each side, and many traders use 3 to 5. More bars find fewer, more significant swings. Pick one number, apply it consistently and test it on your market.

**What is the difference between a swing high and a fractal?**
A fractal, as defined by Bill Williams, is a swing high or low with two lower highs or higher lows on each side. It is simply a swing with N fixed at 2. A swing can use any N.

**Why does a swing high repaint?**
It does not repaint once confirmed, but it cannot be confirmed until N bars after it have closed. A candidate high may be replaced by a higher bar before then. Indicators that draw swings early are showing candidates, not confirmed points.

**Are swing highs support or resistance?**
Often, yes. A swing high that price reversed from can act as resistance when price returns. It may not happen. Levels that were touched several times, on larger time frames, are usually treated as stronger.

**Can I use swing points on any time frame?**
Yes. The same rule works on any chart, but swings on higher time frames carry more weight than swings on one-minute charts. State the time frame when you describe a swing.
