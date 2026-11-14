---
slug: atr
name: Average True Range (ATR)
aka: [ATR, Wilder's ATR]
type: volatility
states: [volatility]
weak_states: [reversal]
purposes: [stop, filter]
inventor: J. Welles Wilder Jr.
year: 1978
default_settings: "14 periods"
pairs_with: [atr-stop, adx, support-and-resistance, moving-average-crossover]
related: [atr-stop, chandelier-exit, normalized-atr, keltner-channels, bollinger-bands, standard-deviation, supertrend, average-daily-range]
compare: [atr-vs-standard-deviation, supertrend-vs-atr-stop, chandelier-exit-vs-parabolic-sar]
glossary: [volatility, smoothing, lookback-period, gap, stop-loss, position-size]
wave: 1
reviewed: 14 November 2026
---

The Average True Range (ATR) measures how much a market typically moves per bar, in price units. It does not show direction. Traders use it to set stop distances, size positions and tell quiet markets from active ones. A higher ATR means wider ranges; a lower ATR means tighter ones.

## At a glance

| | |
|---|---|
| Type | Volatility indicator |
| Best market states | Volatility (measuring it); useful in any state for stops |
| Weak in | Predicting direction or reversals, which it cannot do |
| Best uses | Stop placement, filter, position sizing |
| Default settings | 14 periods |
| Created by | J. Welles Wilder Jr., 1978 |
| Leading or lagging | Lagging (an average of past ranges) |

## What is the ATR?

Every bar has a range from low to high. ATR takes the average of those ranges over a set number of bars, with one improvement: it also counts gaps. If a market closes at 100 and opens the next day at 105, the day's high-low range might be small, but price clearly moved. The "true" range includes that gap.

Wilder introduced ATR in his 1978 book *New Concepts in Technical Trading Systems*, designed for commodities, where gaps and limit moves were common. It has since spread to every market.

ATR is measured in the market's own price units, such as dollars, points or pips. That makes it useful for sizing a stop relative to what the market actually does, but harder to compare between markets with different price levels. [Normalized ATR](/normalized-atr/) expresses it as a percentage of price to fix that.

## Formula

1. True range (TR) for each bar is the largest of:
   - high - low
   - |high - previous close|
   - |low - previous close|
2. The first ATR is the simple average of the first 14 true ranges.
3. After that, Wilder's smoothing:
   ATR = (previous ATR x 13 + current TR) / 14

**Worked example.** Yesterday's close = 100. Today's high = 104, low = 101.
- high - low = 3
- |104 - 100| = 4
- |101 - 100| = 1
TR = the largest = **4**. The high-low range alone (3) would have missed the gap up from 100.

If the previous ATR was 2.0, the new ATR = (2.0 x 13 + 4) / 14 = 30 / 14 = **2.14**.

Some platforms use a simple or exponential average instead of Wilder's smoothing, so values can differ slightly between packages.

## How to read it

**Rising ATR.** Ranges are expanding. This often happens during breakouts, sell-offs and news events.

**Falling ATR.** Ranges are shrinking, which often happens in quiet consolidations. A very low ATR relative to its history can precede a larger move, but it does not say which way.

**Stop distance.** A common use is to place a stop a multiple of ATR away from entry, such as 2 x ATR. This scales the stop to current volatility. See [ATR stop](/atr-stop/) and [Chandelier exit](/chandelier-exit/).

**Position sizing.** If the stop is 2 x ATR away, the position size can be set so that this distance equals a fixed amount of account risk. A higher ATR means a smaller position.

**Filter.** Some traders skip trades when ATR is too low (not enough movement for the target) or too high (too erratic).

**Context.** ATR has no fixed scale, so judge it relative to its own recent history, not against a set number.

## Best market states

**Volatility (what it measures).** ATR is built for describing how active a market is. It shows when volatility is expanding or contracting.

**Trends (useful).** In a trend, ATR-based stops and trailing stops adapt as the swings widen or narrow.

**Ranges (useful).** ATR helps judge whether a range is wide enough to trade and sets sensible stops outside it.

**Reversals (weak).** ATR says nothing about direction. A spike in ATR can accompany a turn, but it does not predict one.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short-term | 5 to 10 | Reacts quickly to new volatility; more jumpy |
| Default | 14 | Wilder's original. The usual balance |
| Long-term | 20 to 50 | Smoother and slower; shows the typical range over a longer span |

ATR multiples matter as much as the period. A stop at 1 x ATR is tight and is often hit by noise. A stop at 3 x ATR gives price more room but means a bigger loss when it is hit. Pick the multiple by testing on the market and time frame you trade.

ATR depends on the time frame: the ATR of a 5-minute chart is far smaller than that of a daily chart.

## Common mistakes

- Reading ATR as a direction signal. A rising ATR does not mean price will rise.
- Setting stops at 1 x ATR and being stopped out by normal noise.
- Comparing ATR values between markets with different price levels. Use [Normalized ATR](/normalized-atr/) instead.
- Ignoring that ATR is slow to react after a sudden spike and slow to fall afterwards.
- Using a stop distance from a calm period during a volatile one.
- Forgetting that ATR is in price units, so it changes if the price level changes a lot.

## Pairs well with

- **[ATR stop](/atr-stop/)**: the direct use of ATR as a stop distance.
- **[ADX](/adx/)**: ADX shows trend strength while ATR shows how much it moves.
- **[Support and resistance](/support-and-resistance/)**: place stops beyond a level plus an ATR buffer.
- **[Moving average crossover](/moving-average-crossover/)**: an ATR stop gives each crossover trade a defined risk.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**What does ATR tell you?**
It tells you how much price typically moves per bar, in price units, including gaps. It says nothing about direction. A higher ATR means wider bars; a lower ATR means narrower bars.

**What is a good ATR setting?**
Wilder's 14 periods is the standard. Shorter settings react faster and are noisier. Longer ones are smoother. The multiple used for stops often matters more than the period.

**How do you use ATR for a stop loss?**
Place the stop a set multiple of ATR from your entry or from a recent swing point, such as 2 x ATR. This makes the stop wider in volatile markets and tighter in quiet ones. Test the multiple before using it.

**Is a high ATR good or bad?**
Neither. A high ATR means the market is moving a lot, which gives more opportunity and more risk. Stops need to be wider and position sizes smaller to keep risk the same.

**How is ATR different from standard deviation?**
ATR averages bar ranges and includes gaps. Standard deviation measures how far closing prices spread around their average. They describe volatility differently. See [ATR vs standard deviation](/compare/atr-vs-standard-deviation/).
