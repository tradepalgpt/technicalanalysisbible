---
slug: kagi-chart
name: Kagi Chart
aka: [Kagi, Kagi lines]
type: chart-type
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Reversal amount set by the user, commonly a percentage of price or an ATR multiple"
pairs_with: [renko-chart, point-and-figure, three-line-break, trendline]
related: [renko-chart, point-and-figure, three-line-break, line-chart, heikin-ashi]
compare: []
glossary: [reversal-amount, trend, whipsaw]
wave: 3
reviewed: 14 November 2026
---

A Kagi chart is a line chart that ignores time. It draws a vertical line while price keeps moving in one direction and switches to a new column only when price reverses by a set amount. The line changes between thick and thin when it breaks the previous high or low, which is used to mark shifts between demand and supply.

## At a glance

| | |
|---|---|
| Type | Chart type (time-independent) |
| Best market states | Trend |
| Weak in | Ranges, which produce many small reversals |
| Best uses | Filter: remove noise and see the main swings |
| Default settings | User-set reversal amount; platforms vary |
| Created by | Not attributed to one person; generally described as Japanese in origin |
| Leading or lagging | Lagging; a line changes only after a reversal has already happened |

## What is a Kagi chart?

A normal chart plots one point for every minute, hour or day, whether or not much happened. A Kagi chart plots only meaningful moves. If price keeps rising, the line extends upward. If price falls back by less than the reversal amount, nothing changes. Only a larger fall starts a new column in the other direction.

Kagi charts are generally said to come from Japan, but there is no agreed inventor or date, so this guide gives neither. They were brought to wider Western attention by Steve Nison in his book *Beyond Candlesticks* (1994), which also covers renko and three line break charts.

Because time is removed, small moves are filtered out and the chart shows the larger swings. The cost is that you lose the sense of how long each move took.

## How it works

1. Choose the **reversal amount**. This is the move against the current direction needed to start a new column. It may be a fixed number of points, a percentage of price or a multiple of ATR (see [ATR](/atr/)).
2. Start with a vertical line in the direction of the first move.
3. If price continues in the same direction, extend the line. Time does not matter, only price.
4. If price reverses by at least the reversal amount, draw a short horizontal step across to a new column and draw the line in the opposite direction.
5. **Thick and thin lines.** The line is thin (yin) when it is moving after breaking a previous low. It becomes thick (yang) when it rises above the previous high. It switches back to thin when it falls below the previous low.

**Worked example.** Take a reversal amount of 2 points. Price rises from 100 to 108, so the line runs up to 108. Price falls to 107, then 106.5. The fall is 1.5 points, less than 2, so nothing changes. Price then falls to 105.5, a fall of 2.5 from 108. A new column starts and the line runs down from 108. If price then falls below the earlier low in the chart, the line turns thin. If a later rally takes it above 108, it turns thick again.

Rules differ between platforms on which prices are used (close only or high and low) and on whether the first column uses the reversal amount. Results can differ from one package to the next.

## How to read it

**Thick lines.** A thick line means price has risen above a previous high. This is read as demand dominating.

**Thin lines.** A thin line means price has fallen below a previous low, which is read as supply dominating.

**Switches.** The change from thin to thick, or thick to thin, is the main signal. Traders treat these as trend-change cues, with the usual warning that they come after the move has started.

**Shoulders and waists.** A "shoulder" is a high where a column turns down and a "waist" is a low where a column turns up. Higher shoulders and higher waists show an uptrend.

**Trend lines.** Ordinary trendlines can be drawn on Kagi charts, and support and resistance can be read from the shoulders and waists.

**Whipsaws.** If price chops back and forth across a level, the line can flip between thick and thin repeatedly. That is the chart's weakness.

## Best market states

**Trends (good).** Sustained moves produce long columns with clear thick or thin lines, which makes the direction easy to read.

**Ranges (weak).** In a sideways market, price keeps crossing the previous highs and lows, and the line flips often.

**Breakouts.** A break to a new high that turns the line thick is clear, but there is a delay while price covers the reversal amount.

**Reversals.** Changes in line thickness mark possible turns, always after price has already moved.

**Volatility.** A fixed reversal amount behaves differently in calm and wild markets. Using an ATR-based amount adapts to it.

## Settings

| Setting | Options | Effect |
|---|---|---|
| Reversal amount | Points, percentage or ATR multiple | The main setting. Small gives many columns and noise; large gives few columns and slow signals |
| Price source | Close, or high and low | Changes where reversals are detected |
| Time frame of data | Daily, intraday | Smaller data gives more detail to the chart |

There is no universal default. Different platforms start with different reversal values, so a Kagi chart seen in one program will not match another set to its own default. The setting should suit the market's usual range of movement.

## Common mistakes

- Reading a Kagi chart as if it had a time axis.
- Using a reversal amount that is too small, so the chart is as noisy as a line chart.
- Comparing charts from two platforms with different default settings.
- Acting on a thick or thin flip in a sideways market.
- Forgetting that the lines are redrawn using past data and appear after reversals.
- Ignoring volume, which Kagi charts do not display.

## Pairs well with

- **[Renko chart](/renko-chart/)**: another time-independent chart, useful for comparing how each filters noise.
- **[Point and figure chart](/point-and-figure/)**: a similar method built on reversals instead of time.
- **[Three line break](/three-line-break/)**: a Japanese-style reversal chart with a different rule.
- **[Trendline](/trendline/)**: ordinary trendlines drawn on the shoulders and waists.

## Sources

- Nison, Steve (1994). *Beyond Candlesticks: New Japanese Charting Techniques Revealed*. John Wiley & Sons.

## FAQ

**What is a Kagi chart?**
It is a chart made of connected vertical lines that follows price without regard to time. The line extends while price continues and turns when price reverses by a set amount. Its thickness changes when it breaks past a previous high or low.

**What do thick and thin Kagi lines mean?**
A thick line appears when price rises above the previous high, read as strength. A thin line appears when it falls below the previous low, read as weakness. The change from one to the other is the main signal.

**What reversal amount should I use?**
There is no standard value. It should be large enough to filter noise and small enough to show swings you care about. Many traders use a percentage of price or a multiple of ATR so it scales with volatility.

**Where did Kagi charts come from?**
They are generally described as Japanese in origin. There is no agreed inventor or date. They were explained to Western traders in Steve Nison's *Beyond Candlesticks*.

**Is a Kagi chart better than a candlestick chart?**
Neither is better. A Kagi chart removes time and small moves, which helps see trends but loses detail and volume. A candlestick chart shows every period. Many traders use both for different jobs.
