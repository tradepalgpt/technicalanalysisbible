---
slug: parabolic-sar
name: Parabolic SAR
aka: [PSAR, Parabolic Stop and Reverse, SAR]
type: trend
states: [trend]
weak_states: [range]
purposes: [stop, exit]
inventor: J. Welles Wilder Jr.
year: 1978
default_settings: "Acceleration factor start 0.02, step 0.02, maximum 0.20"
pairs_with: [adx, atr, exponential-moving-average, support-and-resistance]
related: [supertrend, chandelier-exit, atr-stop, trailing-stop, atr]
compare: [parabolic-sar-vs-supertrend, chandelier-exit-vs-parabolic-sar]
glossary: [trailing-stop, whipsaw, trend, lookback-period]
wave: 1
reviewed: 14 November 2026
---

Parabolic SAR (stop and reverse) is a trend indicator that plots a series of dots above or below price. In an uptrend the dots sit below price and rise; in a downtrend they sit above and fall. The dots speed up as a trend ages, so it works as a trailing stop and an exit signal.

## At a glance

| | |
|---|---|
| Type | Trend indicator, trailing stop |
| Best market states | Trends |
| Weak in | Sideways ranges, where it flips often |
| Best uses | Trailing stop, exit signal |
| Default settings | Acceleration factor 0.02, step 0.02, maximum 0.20 |
| Created by | J. Welles Wilder Jr., 1978 |
| Leading or lagging | Lagging; it follows price and never leads it |

## What is Parabolic SAR?

Wilder designed Parabolic SAR as a system that is always in the market: when a position is stopped out, it reverses. The name comes from the curved, parabola-like shape of the dots. They start slowly, then accelerate towards price the longer a trend lasts, squeezing the room price has to pull back.

He introduced it in his 1978 book *New Concepts in Technical Trading Systems*, in the same book as RSI, ATR and ADX.

Today it is rarely used as a stand-alone reversal system. Traders mostly use it as a way to trail a stop behind price once a trade is already running.

## Formula

SAR means "stop and reverse". For the next bar in an uptrend:

SAR(next) = SAR(today) + AF x (EP - SAR(today))

- **EP (extreme point)**: the highest high of the current uptrend (lowest low in a downtrend).
- **AF (acceleration factor)**: starts at 0.02. Every time price makes a new extreme point, AF rises by 0.02 (the step), up to a maximum of 0.20.

**Rules.**
1. In an uptrend, SAR for the next bar may not be above the lows of the current or previous bar. If it would be, it is set to the lower of those lows. (Reverse in a downtrend with highs.)
2. If price trades through SAR, the trend flips. The new SAR is the old extreme point, and AF resets to 0.02.

**Worked example.** Uptrend, SAR today = 100, EP = 110, AF = 0.02.
Next SAR = 100 + 0.02 x (110 - 100) = 100 + 0.2 = **100.2**.
If price makes a new high of 112, EP becomes 112 and AF rises to 0.04. Next SAR = 100.2 + 0.04 x (112 - 100.2) = **100.672**.

Initial direction and starting SAR vary slightly between platforms, so the first few dots on a chart may not match.

## How to read it

**Dots below price.** Uptrend. Hold longs, trail stops up with the dots.

**Dots above price.** Downtrend. Hold shorts, trail stops down with the dots.

**A flip.** When price touches or crosses a dot, the dots jump to the other side. That is the stop-and-reverse signal. As an exit, a flip means the trailing stop has been hit.

**Distance of dots.** Dots far from price mean the trend has room. Dots hugging price near the end of a long move show the stop is tight and a pullback may end the trend.

**Trend filter.** Some traders only take longs when the dots are below price on a higher time frame.

## Best market states

**Trends (best).** In steady, trending markets SAR keeps traders in the move and trails the stop in a systematic way.

**Ranges (weak).** In sideways markets price keeps crossing the dots, giving a run of small losses. This is the classic "whipsaw", when a signal reverses quickly after it is given. Wilder himself paired it with a measure of trend strength, ADX, for this reason.

**Reversals.** Because it only flips after price has already turned, it never calls a top or bottom. It confirms that the trend has changed late.

**Volatility.** A sharp spike against the position can flip the dots even if the trend is intact. The fixed formula does not adapt to volatility the way an ATR-based stop does.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Default | Start 0.02, step 0.02, max 0.20 | Wilder's original values |
| Slower | Start 0.01, step 0.01, max 0.10 | Dots stay further from price; fewer flips, bigger give-back |
| Faster | Start 0.03 to 0.04, max 0.30 | Tighter trailing; more flips |

Some platforms call these "start", "increment" and "maximum". A higher maximum makes dots catch price faster, which protects profit but increases early stop-outs.

## Common mistakes

- Using it in a sideways market and treating every flip as a new trade.
- Trading it alone as a reversal system, which was Wilder's idea but is widely seen as weak without a trend filter.
- Ignoring the position size when the dots are far away. The stop distance is set by the formula, not by your risk limit.
- Expecting it to catch tops and bottoms. It always reacts after the turn.
- Changing the maximum AF after every loss to fit past data.

## Pairs well with

- **[ADX](/adx/)**: trade SAR flips only when ADX shows a trend, and ignore them when it is low.
- **[ATR](/atr/)**: compares the SAR distance with normal volatility to see if the stop is sensible.
- **[Exponential moving average](/exponential-moving-average/)**: a higher-time-frame EMA keeps you trading with the bigger trend.
- **[Support and resistance](/support-and-resistance/)**: a flip that also breaks a key level carries more weight.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What are the default Parabolic SAR settings?**
The standard values are an acceleration factor starting at 0.02, increasing by 0.02 each time a new extreme point is made, up to a maximum of 0.20. These are Wilder's original numbers and the default on most platforms.

**Is Parabolic SAR a good indicator?**
It does one job well: trailing a stop in a clean trend. It is poor in ranges, where it flips often. Most traders use it for exits rather than entries, and pair it with a trend-strength filter such as ADX.

**What does it mean when the dots flip?**
Price has touched the SAR level. In an uptrend that means the trailing stop is hit and the system reverses to a downtrend. It is a lagging signal, so some of the move has already happened.

**Does Parabolic SAR work for day trading?**
It can be applied on any time frame. On short time frames there is more noise and more flips. Many day traders use it only to trail a stop once a trade is in profit. Test the settings on the market you trade.

**What is the difference between Parabolic SAR and Supertrend?**
Parabolic SAR accelerates towards price over time, using a fixed acceleration factor. [Supertrend](/supertrend/) sits a set multiple of ATR from price, so it adapts to volatility. See [Parabolic SAR vs Supertrend](/compare/parabolic-sar-vs-supertrend/).
