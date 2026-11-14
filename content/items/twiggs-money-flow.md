---
slug: twiggs-money-flow
name: Twiggs Money Flow
aka: [TMF, Twiggs Money Flow Indicator]
type: volume
states: [trend]
weak_states: [range]
purposes: [confirmation]
inventor: Colin Twiggs
year: Unknown
default_settings: "21 periods; zero line"
pairs_with: [chaikin-money-flow, on-balance-volume, divergence, trendline]
related: [chaikin-money-flow, accumulation-distribution, chaikin-oscillator, money-flow-index, williams-accumulation-distribution, on-balance-volume]
compare: []
glossary: [oscillator, divergence, smoothing, true-range]
wave: 3
reviewed: 14 November 2026
---

Twiggs Money Flow is a volume oscillator that measures whether buying or selling pressure has dominated over the last 21 bars. It is a variation of Chaikin Money Flow that uses the true range, which includes gaps, and Wilder-style smoothing. Readings above zero suggest accumulation and below zero suggest distribution. Traders mainly use it to confirm a trend or spot divergence.

## At a glance

| | |
|---|---|
| Type | Volume oscillator |
| Best market states | Trend |
| Weak in | Sideways ranges, where it hovers around zero |
| Best uses | Confirmation of trend strength, divergence warnings |
| Default settings | 21 periods, zero line |
| Created by | Colin Twiggs (year not firmly documented) |
| Leading or lagging | Lagging, because it is a smoothed average of past bars |

## What is Twiggs Money Flow?

Money flow indicators ask a simple question: on the bars in the window, did the close sit near the top of the bar's range with heavy volume, or near the bottom? Heavy volume with closes near the high suggests buyers were pushing. Heavy volume with closes near the low suggests sellers were pushing.

Twiggs Money Flow, created by Colin Twiggs, follows that idea and changes two things compared with [Chaikin Money Flow](/chaikin-money-flow/). First, it measures each bar against its true range instead of the plain high-to-low range. The true range counts the gap from the previous close, so a bar that opens far above yesterday's close is not treated as if the gap never happened. Second, it smooths with an exponential average (Wilder's method) instead of a simple sum over a fixed window. This stops the line jumping when one very large volume bar drops out of the window.

The result is a line that moves around zero. It is a volume-based tool, so it needs a market that reports reliable volume. On spot forex, where volume is often tick volume, treat it with extra caution.

## Formula

1. True high = the higher of today's high and yesterday's close.
2. True low = the lower of today's low and yesterday's close.
3. Money flow volume = volume x ((close - true low) - (true high - close)) / (true high - true low).
4. Smooth the money flow volume with a 21-period Wilder moving average.
5. Smooth the plain volume with the same 21-period average.
6. Twiggs Money Flow = smoothed money flow volume / smoothed volume.

**Worked example.** One bar has volume of 1,000, a true high of 12 and a true low of 10. It closes at 11.5.
(11.5 - 10) - (12 - 11.5) = 1.5 - 0.5 = 1.0
1.0 / (12 - 10) = 0.5
Money flow volume = 1,000 x 0.5 = 500.
If the smoothed money flow volume is 500 and the smoothed volume is 2,000 across the window, Twiggs Money Flow = 500 / 2,000 = **0.25**.

The value is bounded between -1 and +1. Some platforms show it as a percentage. Smoothing details can differ between platforms, so values may not match exactly from one package to another.

## How to read it

**Zero line.** Above zero means buying pressure has led over the window. Below zero means selling pressure has led. A cross of the zero line is a basic signal, but it can flip back and forth in a sideways market.

**Trend confirmation.** In a healthy uptrend the line tends to stay above zero while price makes higher highs. In a downtrend it tends to stay below zero. If price rises while the line stays below zero, buying may be weak.

**Divergence.** Price makes a higher high but Twiggs Money Flow makes a lower high. This suggests fewer buyers are driving the move. It is a warning, not a timing signal. The reverse (price lower low, indicator higher low) can mark fading selling pressure. See [divergence](/divergence/).

**Trendline breaks.** Some traders draw a [trendline](/trendline/) on the indicator itself. A break of that line can come before a break in price, but it can also be noise.

**Level of the reading.** Extreme readings, well above or below zero, show one-sided pressure. They are not overbought or oversold signals, because the line has no fixed ceiling that traders treat that way.

## Best market states

**Trend (best).** The indicator is built to show whether volume agrees with a trend. A rising price with a positive and rising line is a consistent picture.

**Reversal (mixed).** Divergence can hint at a turn, but it often appears early and can persist for many bars.

**Range (weak).** The line hovers around zero and crosses it often, which produces many meaningless signals.

**Breakout.** A real breakout often has strong volume, so the line may move quickly away from zero. A breakout with a flat line has less volume support.

**Volatility.** Large gaps are included in the true range, which makes the indicator more stable than Chaikin Money Flow around gaps.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Faster | 10 to 14 | Reacts sooner, crosses zero more often, more noise |
| Default | 21 | The setting normally used with this indicator |
| Slower | 30 or more | Smoother, fewer signals, slower to confirm |

Chaikin Money Flow is more often shown with 20 or 21 periods, which is why the two indicators look similar. Changing the period changes how much recent history counts. Test any change on the market and time frame you trade.

## Common mistakes

- Using it on a market with no reliable volume data, such as spot currencies, and treating the result as real order flow.
- Taking every zero-line cross as a signal in a sideways market.
- Treating divergence as a reason to trade without waiting for price to confirm.
- Assuming it is identical to Chaikin Money Flow. The true range and smoothing method change the values.
- Reading very high values as "overbought" and selling into a strong trend.
- Using it alone, without any view of price structure or the bigger trend.

## Pairs well with

- **[Chaikin Money Flow](/chaikin-money-flow/)**: the closest relative; comparing the two shows whether gaps are distorting the signal.
- **[On-balance volume](/on-balance-volume/)**: a cumulative volume view that gives a second opinion on accumulation or distribution.
- **[Divergence](/divergence/)**: the main reading technique, since the indicator is most useful when it disagrees with price.
- **[Trendline](/trendline/)**: a trendline on price tells you the direction, and the indicator tells you whether volume supports it.

## Sources

- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What is the difference between Twiggs Money Flow and Chaikin Money Flow?**
Both measure buying and selling pressure using volume and where the close sits in the bar. Twiggs Money Flow uses the true range, which includes gaps, and smooths with an exponential average. Chaikin Money Flow uses the plain high-low range and a fixed-window sum.

**What is the default setting for Twiggs Money Flow?**
The usual default is 21 periods, with a zero line. Some charting packages let you change the period. A shorter period reacts faster but gives more false signals, and a longer period is smoother but slower.

**Is Twiggs Money Flow a leading indicator?**
Mostly no. It is a smoothed average of past bars, so it lags. Divergence between the line and price can give early warning that a trend is weakening, but it is not a forecast and can last a long time.

**What does a positive reading mean?**
A positive reading means that, over the smoothing window, closes tended to sit in the upper part of the true range on volume. This is read as buying pressure. It does not say price must keep rising.

**Does Twiggs Money Flow work on forex?**
It can be calculated, but spot forex has no central volume figure. Most platforms use tick volume, which counts price changes and is only a rough proxy. Results are less reliable than on stocks or futures.
