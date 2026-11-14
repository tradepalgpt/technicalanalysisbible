---
slug: equivolume
name: Volume Bars / Equivolume
aka: [Equivolume, Equivolume charting, Volume-width bars]
type: chart-type
states: [breakout]
weak_states: [range]
purposes: [confirmation]
inventor: Richard W. Arms Jr.
year: 1980s
default_settings: "Box width = volume per bar; box height = high minus low"
pairs_with: [volume, support-and-resistance, volume-profile, on-balance-volume]
related: [candlestick-chart, ohlc-bar-chart, range-bars, tick-charts, point-and-figure, market-profile]
compare: []
glossary: [volume, breakout, support-and-resistance]
wave: 3
reviewed: 14 November 2026
---

Equivolume is a chart type that draws each bar as a box. The box is as tall as the bar's high-low range and as wide as the bar's volume. Heavy volume makes a wide box and light volume a narrow one, so price and volume are read together in one picture instead of in separate panes.

## At a glance

| | |
|---|---|
| Type | Chart type (price and volume combined) |
| Best market states | Breakouts |
| Weak in | Quiet ranges, where boxes are all similar |
| Best uses | Confirmation of moves and breakouts |
| Default settings | Height = high minus low; width = volume |
| Created by | Richard W. Arms Jr., 1980s (approximate) |
| Leading or lagging | Neither; it is a way of drawing existing data |

## What is Equivolume?

On an ordinary bar or candlestick chart, every bar takes the same width on the time axis, and volume sits in a separate pane below. Equivolume changes that. The horizontal axis is no longer evenly spaced time. Instead, each bar takes up horizontal space in proportion to the volume traded in it.

The idea is that a price move on heavy volume matters more than the same move on thin volume, so it should look bigger. A tall, wide box shows a large range with large participation. A tall, thin box shows a large range on little volume. A short, wide box shows heavy trading that went nowhere, which traders often read as a battle between buyers and sellers.

Richard Arms, who also created the Arms Index (see [TRIN](/trin/)), is generally credited with developing Equivolume charting. The exact year is hard to pin down, so this guide says only that it dates from around the 1980s. Some platforms offer a related display called a volume-weighted bar or "Candlevolume", which keeps the candle body and shadow but varies the candle's width.

## How it is drawn

Each period (a day, an hour or any other bar) becomes one rectangle.

1. **Height:** the distance from the period's low to its high.
2. **Width:** the volume traded in the period.
3. **Position:** boxes sit side by side, left to right, in time order, with no gaps.
4. **Colour:** usually by close compared with the previous close (or with the open), as on a normal chart.
5. **Midpoint mark:** some versions mark the close, or draw a line at the midpoint of the box.

**Worked example.** Three bars trade as follows:

| Bar | Low | High | Volume | Box height | Box width |
|---|---|---|---|---|---|
| 1 | 100 | 102 | 10,000 | 2 | 10 units |
| 2 | 101 | 105 | 40,000 | 4 | 40 units |
| 3 | 104 | 105 | 5,000 | 1 | 5 units |

Bar 2 is both taller and four times wider than bar 1, so it dominates the picture. Bar 3 is narrow and short: a small move on little interest.

Because widths depend on volume, the horizontal axis is not evenly spaced in time. This makes the chart harder to line up with time-based indicators.

## How to read it

**Wide, tall boxes.** A big range on high volume shows strong conviction. If it breaks above a prior resistance zone, the breakout looks well supported.

**Narrow, tall boxes.** A big range on low volume. Moves like this are often seen as less trustworthy, because few traders took part.

**Wide, short boxes.** Heavy volume with little price progress. This is sometimes called a congested box. At the end of a rise it can suggest sellers are absorbing the buying. After a long decline it can suggest the opposite. It is a clue, not a signal.

**Breakout through a stack of narrow boxes.** Price has been drifting in a tight cluster, then a wide box breaks out of it. Traders read this as new interest arriving.

**Pushing through a congested area.** Price that moves up through several wide, short boxes needs a lot of buying to continue. Where it clears them with ease it may mean supply has been used up.

## Best market states

**Breakouts (best).** The chart is designed to show whether a move out of a base or level had real participation behind it.

**Trends (useful).** In a healthy trend, boxes in the trend direction tend to be wider than those against it. A trend that continues on narrowing boxes may be tiring.

**Reversals (mixed).** A wide, short box at an extreme can be a warning, but it is only one clue and needs a price signal to back it up.

**Ranges (weak).** In a quiet range, volumes and heights are all similar, so the chart gives little extra information.

**Volatility.** Volume spikes on news make a single box dominate the screen, which can hide the rest of the chart.

## Settings

Equivolume has few settings.

| Setting | Options | Notes |
|---|---|---|
| Width source | Volume, or tick volume | Tick volume (the count of price changes) is used where real volume is unavailable, such as spot forex |
| Colour rule | Close vs open, or close vs previous close | Platforms differ |
| Time frame | Any | Heavier volume on a higher time frame makes boxes more meaningful |
| Scaling | Linear or logarithmic | Wide boxes can use a lot of screen space |

Support for Equivolume varies. Some platforms offer it as a built-in chart style, some as an add-on, and many have no version at all. The shape of the display can differ from one platform to another.

## Common mistakes

- Using it on markets with no reliable volume figure. Tick volume is only a proxy.
- Treating a wide box as bullish or bearish by itself. Width shows activity, not direction.
- Forgetting the time axis is stretched. Time-based tools such as moving averages and trendlines can look odd or be hard to place.
- Reading too much into one box. Look at the sequence, not a single bar.
- Comparing box widths across very different periods, such as pre-market and the regular session, without allowing for it.

## Pairs well with

- **[Volume](/volume/)**: the foundation. Equivolume is a different way to show the same data, so reading volume normally helps you interpret it.
- **[Support and resistance](/support-and-resistance/)**: a breakout box means more when it clears a known level.
- **[Volume profile](/volume-profile/)**: shows where volume built up at each price, while Equivolume shows how volume built up through time.
- **[On-balance volume](/on-balance-volume/)**: a running volume total that can confirm whether the participation is rising.

## Sources

- Arms, Richard W. Jr. (1994). *Volume Cycles in the Stock Market*. Equis International.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What is an Equivolume chart?**
It is a chart where each bar is a box, with the height set by the price range and the width set by the volume. Busy periods look wide and quiet periods look narrow, so price and volume appear together in one display.

**Who invented Equivolume?**
Richard Arms Jr. is generally credited with developing it. He is also known for the Arms Index, or TRIN. The exact year is unclear, so treat the 1980s as an approximate date.

**Is Equivolume the same as Candlevolume?**
They are close relatives. Candlevolume keeps the candlestick body and wicks but varies the width with volume. Equivolume uses plain boxes for the high-low range. Both use width to show volume, and platforms may use the names differently.

**Does Equivolume work on forex?**
Only loosely. Spot forex has no single central volume figure, so platforms use tick volume, which counts price updates. That can still be useful, but it is a proxy and may differ between data feeds.

**Is Equivolume predictive?**
No. It redraws data you already have, and it does not forecast anything by itself. It may help you judge whether a move had broad participation, which is one input into a decision rather than a signal.
