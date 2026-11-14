---
slug: three-line-break
name: Three Line Break
aka: [Three-line break chart, Line break chart]
type: chart-type
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Three-line reversal; closing prices"
pairs_with: [kagi-chart, renko-chart, trendline, support-and-resistance]
related: [kagi-chart, renko-chart, point-and-figure, heikin-ashi, line-chart]
compare: []
glossary: [reversal, trend, whipsaw, close]
wave: 3
reviewed: 14 November 2026
---

A Three Line Break chart is a time-independent chart made of rising (white) and falling (black) blocks, drawn from closing prices. A new block in the same direction is added whenever price closes beyond the last block. To reverse, price must close beyond the high or low of the last three blocks, which filters out small pullbacks.

## At a glance

| | |
|---|---|
| Type | Chart type (reversal-based) |
| Best market states | Trend |
| Weak in | Ranges, where reversals trigger and flip repeatedly |
| Best uses | Filter: keep trades aligned with the main direction |
| Default settings | Three lines for a reversal; closing prices |
| Created by | Not attributed to one person; generally described as Japanese in origin |
| Leading or lagging | Lagging; a reversal appears only after price has moved a long way |

## What is a Three Line Break chart?

Most charts add a new bar at every time period. A Three Line Break chart adds a new block only when price does something meaningful. If price keeps rising, it adds white blocks. If price falls back a little, nothing is drawn. A new black block appears only when price falls below the low of the last three white blocks.

The style comes from Japan, but there is no agreed inventor or date, so this guide gives none. It was explained to Western readers in Steve Nison's *Beyond Candlesticks* (1994), which also covers Kagi and renko charts.

The chart is built from closing prices only. Highs and lows within a period are ignored. The result is a clean series of blocks where one-off wiggles are removed, and the direction of the main trend is easy to see. The cost is that the chart lags: reversals arrive after a sizeable move against the trend.

## How it works

The standard version uses three lines.

1. Start with a block for the first period: white if the close is higher than the previous close, black if lower.
2. **Continuation.** If the next close is above the high of the last white block, add a new white block on top. If a close is below the low of the last black block, add a new black block below.
3. **Reversal.** To switch direction, the close must go beyond the opposite extreme of the last three blocks. After white blocks, a close below the lowest low of the last three white blocks draws a black block. After black blocks, a close above the highest high of the last three black blocks draws a white block.
4. If neither happens, nothing is drawn for that period.

**Worked example.** Closes build three white blocks: 100 to 102, 102 to 104, 104 to 106. The lowest low of the three is 100. If price closes at 103, no block is drawn (103 is not below 100). If price closes at 99, a black block is drawn from 100 down to 99. A single close at 101 does nothing, even though it is below the last block's low of 104.

Some platforms let you change the number of lines (for example, two or four). Others show blocks in different colours, or use the previous block's close as the starting point instead of its high. Check platform defaults when comparing charts.

## How to read it

**Colour as direction.** A run of white blocks shows an uptrend; a run of black blocks shows a downtrend.

**Colour change.** A switch from white to black, or the reverse, is the main signal. It means price has closed beyond the extreme of three blocks, which is a bigger move than a simple pullback.

**Long runs.** Long sequences of the same colour show a sustained trend. Many traders stay with the trade while the colour holds.

**Support and resistance.** The top or bottom of the last blocks acts as a reference. A break of these is shown on the chart.

**Whipsaws.** In a sideways market, price may flip the chart between white and black repeatedly. A cluster of alternating blocks is a warning that there is no trend.

**No volume or time.** The chart contains no volume or time information, so use other tools for those.

## Best market states

**Trends (good).** Sustained moves produce long runs of one colour, and small counter-moves are filtered out.

**Ranges (weak).** Price crosses the three-block extremes back and forth, so colours alternate and signals are poor.

**Breakouts.** A breakout beyond recent blocks adds new blocks quickly, but the reversal rule means a turn from a long run is slow to appear.

**Reversals.** The three-line rule requires a significant move against the trend. This reduces false turns but delays real ones.

**Volatility.** Volatile swings that close beyond three blocks cause flips; calmer markets give steadier runs.

## Settings

| Setting | Options | Effect |
|---|---|---|
| Number of lines | Three is the standard; some platforms allow two, four or more | Fewer lines give faster, noisier reversals; more lines give slower, steadier ones |
| Price source | Closing prices (standard) | Highs and lows are ignored |
| Block colours | White and black, or user-chosen | Display only |
| Data time frame | Daily, intraday | Finer data gives more blocks |

Check how your platform defines a reversal before comparing charts. Some builds start the first block differently or use block closes instead of highs and lows, so the same data can produce slightly different charts. As a filter, it is best checked against a normal price chart and the larger trend, and stops belong on the price chart, not on the blocks.

## Common mistakes

- Trading every colour change, including in a sideways market.
- Forgetting that the chart uses closes only, so intraday highs and lows are hidden.
- Reading block size as price range. Block size depends on the closes and varies.
- Comparing charts built with different line counts or different bar-start rules.
- Placing stops by block levels without checking the real price chart.
- Expecting an early signal. The reversal rule means the chart signals late.

## Pairs well with

- **[Kagi chart](/kagi-chart/)**: another Japanese reversal chart, useful for comparing how each filters noise.
- **[Renko chart](/renko-chart/)**: a fixed-size alternative with its own reversal rule.
- **[Trendline](/trendline/)**: ordinary trendlines can be drawn across the block tops and bottoms.
- **[Support and resistance](/support-and-resistance/)**: levels on the main chart help judge whether a colour change matters.

## Sources

- Nison, Steve (1994). *Beyond Candlesticks: New Japanese Charting Techniques Revealed*. John Wiley & Sons.

## FAQ

**What is a Three Line Break chart?**
It is a chart of white and black blocks built from closing prices, with no time axis. A new block is added when price closes beyond the last block. A colour reversal requires a close beyond the extreme of the last three blocks.

**What do white and black blocks mean?**
White blocks show price rising, with a close above the previous block's high. Black blocks show price falling, with a close below the previous block's low. A change of colour is the main signal.

**Why is it called Three Line Break?**
Because a reversal must break the high or low of the previous three lines (blocks). The number is adjustable on many platforms, but three is the standard setting.

**Is it better than a candlestick chart?**
It is different. It removes time and small moves, so it suits trend filtering. A candlestick chart shows every period with its open, high, low and close. Many traders use both.

**Does it work in sideways markets?**
Poorly. Price crosses the three-block extremes back and forth, so the colour flips often. Many traders skip the chart signals when the colours have alternated several times in a row.
