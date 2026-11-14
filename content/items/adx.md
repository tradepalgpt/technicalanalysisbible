---
slug: adx
name: Average Directional Index (ADX)
aka: [ADX, Average Directional Movement Index, ADX/DMI]
type: trend
states: [trend, range]
weak_states: [reversal]
purposes: [filter]
inventor: J. Welles Wilder Jr.
year: 1978
default_settings: "14 periods; 25 often used as the trend-strength threshold"
pairs_with: [moving-average-crossover, rsi, exponential-moving-average, atr]
related: [dmi, aroon, choppiness-index, vertical-horizontal-filter, supertrend, parabolic-sar, macd]
compare: [adx-vs-aroon]
glossary: [trend, range, smoothing, lookback-period, lagging-indicator, whipsaw]
wave: 1
reviewed: 14 November 2026
---

The Average Directional Index (ADX) measures how strong a trend is, on a scale from 0 to 100, without saying whether it is up or down. A low reading suggests a range; a high reading suggests a strong trend. Traders use it as a filter to switch between trend-following and range tactics.

## At a glance

| | |
|---|---|
| Type | Trend-strength indicator |
| Best market states | Trend and range (it tells you which one you are in) |
| Weak in | Spotting reversals, because it lags and has no direction |
| Best uses | Filter |
| Default settings | 14 periods; 25 is a common threshold |
| Created by | J. Welles Wilder Jr., 1978 |
| Leading or lagging | Lagging (it is smoothed twice) |

## What is the ADX?

ADX answers a different question from most indicators. It does not ask whether price will rise or fall. It asks whether price is trending at all. A market can trend up or down with a high ADX; a market going nowhere has a low ADX.

Wilder introduced it in his 1978 book *New Concepts in Technical Trading Systems*, along with the Directional Movement System that it belongs to. The system has three lines: +DI (upward pressure), -DI (downward pressure) and ADX itself. ADX is built from the other two. See also [DMI](/dmi/).

A rising ADX means the trend is getting stronger, whichever way it points. A falling ADX means it is weakening or the market is going sideways. It only describes strength, so many traders pair it with a direction tool such as a [moving average](/exponential-moving-average/) or the +DI and -DI lines.

## Formula

1. For each bar, compare today's high and low with yesterday's.
   - Up move = today's high - yesterday's high
   - Down move = yesterday's low - today's low
2. +DM is the up move if it is larger than the down move and above zero, otherwise 0. -DM is the down move if it is larger than the up move and above zero, otherwise 0.
3. True range (TR) is the largest of: high - low, |high - previous close|, |low - previous close|. (See [ATR](/atr/).)
4. Smooth +DM, -DM and TR over 14 periods using Wilder's smoothing.
5. +DI = 100 x (smoothed +DM / smoothed TR)
   -DI = 100 x (smoothed -DM / smoothed TR)
6. DX = 100 x |+DI - -DI| / (+DI + -DI)
7. ADX = Wilder's 14-period smoothed average of DX.

**Worked example.** Say +DI = 30 and -DI = 10 on a given bar.
DX = 100 x |30 - 10| / (30 + 10) = 100 x 20 / 40 = **50**
ADX is then a 14-period smoothed average of values like this. If DX stays near 50 for a while, ADX will climb toward 50 gradually, which shows how slowly it responds.

Platforms can differ in how they start the smoothing, so values may differ slightly between charting packages.

## How to read it

**Below 20.** Often read as a weak trend or a range. Trend-following tools tend to whipsaw here.

**20 to 25.** A grey area. A trend may be starting, or may not.

**Above 25.** Often read as a trending market. Higher readings suggest a stronger trend. Wilder suggested watching for readings above 25 for trend trades; the cut-off is a rule of thumb, not an exact boundary.

**Direction of ADX.** A rising ADX means the trend is strengthening. A falling ADX after a high reading means the trend is losing strength, not that it has reversed. Price can keep rising while ADX falls.

**+DI and -DI crossovers.** When +DI crosses above -DI, buyers have the upper hand; the reverse for sellers. These crosses are more useful when ADX is above 20 or 25.

**Very high readings.** ADX above 40 or 50 shows a very strong trend, which is often late. A turn down from a very high ADX warns that the trend is maturing.

## Best market states

**Trends (best).** ADX confirms that a trend exists and whether it is strengthening. It helps you decide whether trend-following tools are worth using.

**Ranges (useful).** A low and flat ADX is a flag that the market is sideways. Range tools such as oscillators then tend to work better than moving average crossovers.

**Reversals (weak).** ADX has no direction and lags. It rises only after a new trend is well under way, so it is poor at calling turns.

**Volatility.** Sharp one-way moves raise ADX quickly. It is not a volatility measure, but volatile trends push it up.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short-term | 7 to 10 | Reacts faster, more false readings |
| Default | 14 | Wilder's original. A balance for most markets |
| Long-term | 20 to 30 | Smoother, slower, fewer false readings |

A shorter period makes ADX more jumpy, so traders usually widen the threshold. A longer period makes it smoother but later. The 20 and 25 thresholds are conventions; some traders use 30 for a stricter filter. Test any threshold on your market.

## Common mistakes

- Reading ADX as a direction signal. It only shows strength.
- Treating a falling ADX as a reversal signal.
- Expecting ADX to give early entries. It confirms trends that are already running.
- Using 25 as a precise on/off switch rather than a rule of thumb.
- Using very short periods and getting constant false readings.
- Comparing ADX values between platforms without checking their smoothing.

## Pairs well with

- **[Moving average crossover](/moving-average-crossover/)**: use ADX to skip crossovers when the market is not trending.
- **[RSI](/rsi/)**: low ADX favours RSI's range-style signals; high ADX warns against fading RSI extremes.
- **[Exponential moving average](/exponential-moving-average/)**: gives the direction ADX does not.
- **[ATR](/atr/)**: sizes stops once ADX has told you a trend is in play.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What is a good ADX value?**
Above 25 is commonly read as a trending market and below 20 as weak or ranging. These are rules of thumb, not exact boundaries. Judge the readings against the market you trade.

**Does ADX show direction?**
No. ADX measures strength only. To get direction, look at the +DI and -DI lines or use another tool such as a moving average.

**What does a falling ADX mean?**
It means the trend is losing strength or the market is moving sideways. It does not mean price has reversed. Price can still drift in the same direction while ADX falls.

**What is the best ADX setting?**
Wilder's default of 14 is the standard. Shorter periods react faster and are noisier. Longer ones are smoother and later. Test any change on your own market and time frame.

**How is ADX different from Aroon?**
Both measure trend strength. ADX is built from price ranges and smoothed twice, and Aroon from how recently the highest high and lowest low occurred. See [ADX vs Aroon](/compare/adx-vs-aroon/).
