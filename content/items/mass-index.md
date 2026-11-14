---
slug: mass-index
name: Mass Index
aka: [Dorsey Mass Index, Reversal bulge]
type: trend
states: [reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Donald Dorsey
year: 1990s
default_settings: "9-period EMA of the range; 25-period sum; reversal bulge: above 27, then below 26.5"
pairs_with: [support-and-resistance, exponential-moving-average, macd, atr]
related: [atr, choppiness-index, bollinger-band-width, trend-intensity-index]
compare: []
glossary: [reversal, volatility, smoothing, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Mass Index looks at how wide the daily high-low range is becoming. It sums a ratio of two smoothed ranges over 25 bars. A "reversal bulge" occurs when the index rises above 27 and then falls back below 26.5, which Donald Dorsey presented as a warning that a trend may reverse. It gives no direction.

## At a glance

| | |
|---|---|
| Type | Trend indicator (range-based) |
| Best market states | Reversal |
| Weak in | Ranges |
| Best uses | Confirmation of a possible reversal |
| Default settings | 9-period EMA, 25-bar sum; bulge 27 then 26.5 |
| Created by | Donald Dorsey, 1990s |
| Leading or lagging | Neither clearly; it flags a change in range behaviour |

## What is the Mass Index?

Most reversal tools look at the direction of price. The Mass Index ignores direction entirely. It watches the size of the bar range (high minus low) and asks whether that range is widening or narrowing.

The theory is that, before a trend turns, the range widens as the market becomes unstable. Then the range contracts again. Dorsey called the pattern in the index a "reversal bulge". The index itself says nothing about which way the turn will go, so it is paired with a trend reading. If the bulge appears while price is in an uptrend, a downward reversal is the thing to look for, and vice versa.

The Mass Index is described in the technical analysis literature in a standard way, but its predictive record is mixed and there is no strong independent evidence for the bulge rule. Treat it as one idea to test, not an established law.

## Formula

1. Range = high - low for each bar.
2. Single EMA = 9-period EMA of the range.
3. Double EMA = 9-period EMA of the single EMA.
4. Ratio = single EMA / double EMA.
5. **Mass Index = sum of the ratio over the last 25 bars.**

**Worked example.** Suppose the ratio is exactly 1.08 on each of the last 25 bars.

Mass Index = 25 x 1.08 = **27.0**

If the ratio is 1.00 for all 25 bars (a steady range), the index is 25.0. A ratio above 1 means the recent range is wider than its longer smoothed average, and the index rises above 25.

Note: the ratio is built from two smoothings of the same data, so its value stays close to 1. The index therefore moves in a narrow band, mostly between 23 and 28.

## How to read it

**The reversal bulge.** Dorsey's signal has two steps. The index first rises above 27. It then falls back below 26.5. The completed bulge is read as a warning that the current trend may reverse.

**Direction from elsewhere.** The bulge gives no direction. Dorsey suggested using a 9-period EMA of the close: if it is falling when the bulge completes, a bullish reversal is expected; if rising, a bearish one. This pairing is a common recipe.

**Below 27.** When the index never crosses 27, the system gives no signal.

**Level of the index.** Readings near 25 mean a steady range. Higher readings mean the range has been expanding.

**Alerts, not entries.** The bulge happens at some distance from the actual turn. Traders use it as an alert to start looking for price confirmation, such as a break of a trendline or a level.

## Best market states

**Reversals (intended use).** The idea is to flag exhausted trends. The bulge may appear near turning points, but it also appears with no reversal following.

**Trends (mixed).** In a strong trend the range can widen and contract without any turn, so some bulges are false alarms.

**Ranges (weak).** Without a trend, there is nothing to reverse, and the index hovers around 25 with few signals.

**Breakouts.** A breakout with wide bars can push the index up quickly. That reflects expansion, not necessarily a reversal.

**Volatility.** The index is a volatility measure at heart. Markets with bursty ranges, such as around news, can produce bulges more often.

## Settings

| Setting | Values | What it does |
|---|---|---|
| EMA length | 9 | Dorsey's standard smoothing of the range |
| Sum length | 25 | Number of bars added up |
| Trigger levels | 27 and 26.5 | The bulge thresholds |
| Direction filter | 9-period EMA of close | A common companion for direction |

Changing the sum length changes the usual range of the index, so the 27 and 26.5 levels would need to be rethought. Most traders keep the standard set. Some platforms use slightly different thresholds, such as 26.5 for the trigger, so check the one you use.

## Common mistakes

- Expecting a direction from the index. It only reports on the range.
- Treating every bulge as a certain reversal.
- Trading the first cross above 27 instead of waiting for the drop below 26.5.
- Changing the sum length but keeping the 27 and 26.5 levels.
- Using it on an instrument with little range variation, where bulges almost never occur.
- Skipping price confirmation such as a trendline break.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: a bulge at a key level is more worth noticing than one in open space.
- **[Exponential moving average](/exponential-moving-average/)**: supplies the direction that the Mass Index lacks.
- **[MACD](/macd/)**: a momentum view that can confirm a slowing trend.
- **[ATR](/atr/)**: a more direct measure of volatility to compare against the index.

## Sources

- Achelis, Steven B. (2001). *Technical Analysis from A to Z* (2nd ed.). McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on reversal and volatility ideas.)

## FAQ

**What is a reversal bulge?**
It is the Mass Index rising above 27 and then falling back below 26.5. Donald Dorsey presented it as a warning that the trend may reverse. The index does not say which direction the reversal would take.

**Does the Mass Index predict direction?**
No. It only measures whether the daily range is widening or narrowing. Direction has to come from a separate trend reading, such as a moving average.

**What are the standard Mass Index settings?**
A 9-period EMA of the high-low range, a double EMA of the same length, and a 25-bar sum of their ratio. The bulge levels are 27 and 26.5.

**Is the Mass Index reliable?**
Its record is mixed. Bulges can appear with no reversal, and reversals can happen without a bulge. It is best treated as an alert to look at price, not as a signal by itself.

**Is the Mass Index a momentum indicator?**
No. It does not use closing changes at all. It uses the high-low range, so it is closer to a volatility measure.
