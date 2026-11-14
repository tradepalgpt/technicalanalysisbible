---
slug: supertrend
name: Supertrend
aka: [SuperTrend, ATR trailing line]
type: trend
states: [trend]
weak_states: [range]
purposes: [stop, exit, filter]
inventor: Often credited to Olivier Seban
year: Unknown
default_settings: "ATR period 10, multiplier 3"
pairs_with: [adx, exponential-moving-average, support-and-resistance, rsi]
related: [parabolic-sar, atr, atr-stop, chandelier-exit, trailing-stop]
compare: [parabolic-sar-vs-supertrend, supertrend-vs-atr-stop]
glossary: [trailing-stop, volatility, whipsaw, trend, smoothing]
wave: 1
reviewed: 14 November 2026
---

Supertrend is a trend indicator drawn as a single line that sits below price in an uptrend and above price in a downtrend. The line is placed a set multiple of the Average True Range (ATR) away from the midpoint of each bar. A close through the line flips the trend, so it works as a trailing stop and a trend filter.

## At a glance

| | |
|---|---|
| Type | Trend indicator, volatility-based trailing stop |
| Best market states | Trends |
| Weak in | Sideways ranges, where it flips back and forth |
| Best uses | Trailing stop, exit, trend filter |
| Default settings | ATR period 10, multiplier 3 |
| Created by | Often credited to Olivier Seban; year not firmly established |
| Leading or lagging | Lagging; it follows price |

## What is Supertrend?

Supertrend belongs to the same family as the Chandelier Exit and the ATR stop: a line that trails price at a distance set by volatility. When the market is calm the line sits close. When it is wild the line gives price more room.

It is not described in a classic book by one named author. The indicator is often credited to Olivier Seban and became popular through charting platforms. Its settings and exact calculation can differ between platforms, so treat any single description as one version of the idea.

Unlike [Parabolic SAR](/parabolic-sar/), the distance does not shrink on its own as the trend ages. It only moves when price and volatility move.

## Formula

1. Midpoint: HL2 = (high + low) / 2
2. Average True Range over the chosen period (default 10), see [ATR](/atr/)
3. Basic upper band = HL2 + multiplier x ATR
4. Basic lower band = HL2 - multiplier x ATR
5. **Final upper band** = the basic upper band if it is lower than the previous final upper band or the previous close was above the previous final upper band; otherwise keep the previous final upper band. This stops the upper band from rising while a downtrend continues.
6. **Final lower band** = the basic lower band if it is higher than the previous final lower band or the previous close was below it; otherwise keep the previous one. The lower band only moves up in an uptrend.
7. Trend: in an uptrend the Supertrend line is the final lower band. If price closes below it, the trend flips to down and the line becomes the final upper band. The reverse applies in a downtrend.

**Worked example.** HL2 = 100, ATR = 2, multiplier = 3.
Basic upper band = 100 + 3 x 2 = **106**
Basic lower band = 100 - 3 x 2 = **94**
In an uptrend the line is at 94. If the close drops below 94, the line flips to the upper band and the trend turns down.

Platforms differ on how ATR is smoothed (Wilder's method or a simple average), so lines may differ slightly between charts.

## How to read it

**Line below price.** Uptrend; the line is a trailing stop that only moves up.

**Line above price.** Downtrend; the line only moves down.

**Flip.** A close through the line changes the direction. Many traders use the flip as an exit for an open trade, or as the trigger for a new trade in the new direction.

**Gap between price and line.** A wide gap shows the market is volatile or has moved far from the line. A tight gap means price is close to being stopped out.

**Trend filter.** Only taking longs while the line is below price (and shorts while above) is a simple way to stay with the trend.

## Best market states

**Trends (best).** A steady trend lets price stay on one side of the line, with the line moving up or down in step.

**Ranges (weak).** In a sideways market price crosses the line repeatedly. Each flip is a small loss, and the line follows price but arrives late. This is the main weakness of the tool.

**Reversals.** The flip comes after price has already turned. The drawdown from the peak can be large when the multiplier is high.

**Volatility.** Because it uses ATR, the line adapts to volatility. A sudden spike widens the bands, which can keep a trade open longer than expected or make a stop too wide for your risk limit.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Default | ATR 10, multiplier 3 | The most common values on charting platforms |
| Tighter | ATR 7 to 10, multiplier 1.5 to 2 | Closer line, more flips, quicker exits |
| Looser | ATR 14 to 20, multiplier 3 to 4 | Wider line, fewer flips, larger give-back |

Raise the multiplier and the line sits farther away: fewer whipsaws, but bigger losses when it does flip. Lower it and the opposite happens. There is no setting that removes this trade-off.

## Common mistakes

- Using it in a range and acting on every flip.
- Treating the line as an entry signal in itself without checking trend strength.
- Using a stop distance set by the indicator without checking it against your own risk per trade.
- Assuming the same settings suit every market and time frame.
- Comparing lines from two platforms that smooth ATR differently.
- Optimising the multiplier to past data until it looks perfect.

## Pairs well with

- **[ADX](/adx/)**: only take flips when ADX shows a trending market.
- **[Exponential moving average](/exponential-moving-average/)**: a slower EMA on a higher time frame gives the bigger trend direction.
- **[Support and resistance](/support-and-resistance/)**: a flip at a major level carries more weight.
- **[RSI](/rsi/)**: helps spot a trend that is getting stretched before a flip.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (Source of the Average True Range used in the formula.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What are the default Supertrend settings?**
The most common defaults are an ATR period of 10 and a multiplier of 3. Some platforms use different numbers, and some smooth the ATR differently, so the line can differ slightly from one chart to another.

**Who invented Supertrend?**
It is often credited to Olivier Seban, but it was spread mainly through trading platforms rather than a classic book, so the exact origin is not firmly documented. The idea is closely related to older ATR trailing stops.

**Is Supertrend good for day trading?**
It can be used on any time frame. On short time frames there is more noise and more flips. Many traders use it as a trailing stop for a trade already in profit rather than as an entry signal. Test it on your market first.

**What is the difference between Supertrend and Parabolic SAR?**
Supertrend sits a set multiple of ATR from price and adapts to volatility. Parabolic SAR accelerates towards price with a fixed schedule. See [Parabolic SAR vs Supertrend](/compare/parabolic-sar-vs-supertrend/).

**Does Supertrend repaint?**
On closed bars it does not change. On the current open bar the line can move until the bar closes, which looks like repainting. Wait for the close if you want a fixed signal.
