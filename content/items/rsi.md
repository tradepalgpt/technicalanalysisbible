---
slug: rsi
name: Relative Strength Index (RSI)
aka: [RSI, Wilder's RSI]
type: momentum-oscillator
states: [range, reversal]
weak_states: [trend]
purposes: [entry, confirmation, filter]
inventor: J. Welles Wilder Jr.
year: 1978
default_settings: "14 periods; levels 70 and 30"
pairs_with: [support-and-resistance, exponential-moving-average, adx, macd]
related: [stochastic-oscillator, stochastic-rsi, williams-r, cci, connors-rsi, money-flow-index]
compare: [rsi-vs-stochastic, rsi-vs-macd, cci-vs-rsi, mfi-vs-rsi, stochastic-rsi-vs-rsi]
glossary: [overbought, oversold, divergence, smoothing, oscillator, lookback-period]
wave: 1
reviewed: 14 November 2026
---

The Relative Strength Index (RSI) is a momentum oscillator that measures how strong recent gains are compared with recent losses, on a scale from 0 to 100. Readings above 70 are usually called overbought and below 30 oversold. Traders use it to time entries in ranges, spot fading momentum and confirm other signals.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Range, reversal |
| Weak in | Strong trends |
| Best uses | Entry timing, confirmation, filter |
| Default settings | 14 periods, levels 70 / 30 |
| Created by | J. Welles Wilder Jr., 1978 |
| Leading or lagging | Mostly lagging (built from past closes), but divergences can warn early |

## What is the Relative Strength Index?

RSI answers one question: over the last 14 bars, have the up-moves been bigger than the down-moves, and by how much? If almost every bar closed higher, RSI sits near 100. If almost every bar closed lower, it sits near 0. Around 50, buyers and sellers have been roughly even.

Wilder introduced it in his 1978 book *New Concepts in Technical Trading Systems*, alongside ATR, ADX and Parabolic SAR. Despite the name, it has nothing to do with "relative strength" in the sense of comparing one stock against another; it only looks at one market's own price.

Because it is bounded between 0 and 100, RSI makes it easy to compare momentum across different markets and time frames, which is one reason it became one of the most used indicators in the world.

## Formula

1. For each bar, work out the change from the previous close.
2. Split changes into **gains** (positive changes, losses counted as 0) and **losses** (negative changes as positive numbers, gains counted as 0).
3. First average: simple average of the last 14 gains, and of the last 14 losses.
4. After that, Wilder's smoothing:
   Average gain = (previous average gain x 13 + current gain) / 14
   Average loss = (previous average loss x 13 + current loss) / 14
5. Relative strength: RS = average gain / average loss
6. RSI = 100 - 100 / (1 + RS)

**Worked example.** Say the average gain is 1.20 and the average loss is 0.80.
RS = 1.20 / 0.80 = 1.5
RSI = 100 - 100 / (1 + 1.5) = 100 - 40 = **60**

If the average loss is zero, RSI is 100 by definition.

Note: some platforms use a simple or exponential average instead of Wilder's smoothing, so RSI values can differ slightly between charting packages.

## How to read it

**Overbought and oversold.** Above 70 means recent gains have been strong; below 30 means recent losses have been strong. In a range, these readings often line up with the top and bottom of the range. They are not sell and buy signals on their own.

**The 50 line.** RSI holding above 50 suggests buyers are in control; below 50, sellers. Many traders use 50 as a simple trend filter (only look for longs above 50).

**Divergence.** Price makes a higher high but RSI makes a lower high (bearish divergence), or price makes a lower low but RSI makes a higher low (bullish divergence). This shows momentum fading and can warn of a turn, but divergences can run for a long time before price reacts.

**Hidden divergence.** Price makes a higher low while RSI makes a lower low, in an uptrend. This is read as trend continuation, the opposite of regular divergence.

**Failure swings.** Wilder's own signal: RSI goes above 70, pulls back, fails to make a new high, then breaks below its own pullback low. The mirror version works at 30.

**Range shift.** In strong uptrends RSI often moves between about 40 and 80 instead of 30 and 70; in downtrends between about 20 and 60. Noticing which range RSI lives in tells you about the trend.

## Best market states

**Ranges (best).** When price moves sideways between clear support and resistance, RSI's overbought and oversold readings tend to match the edges, so it is useful for timing entries near those edges.

**Reversals (good, with care).** Divergence near a major level is one of RSI's most watched signals. It works best as confirmation alongside a price signal at that level, not as a reason to trade on its own.

**Strong trends (weak).** In a strong trend RSI can stay above 70 or below 30 for weeks. Selling "because RSI is overbought" in a strong uptrend is the most common way people lose money with it.

**Breakouts (mixed).** A breakout from a range often pushes RSI straight into overbought. That is a sign of strength, not a reason to fade it.

**Volatility.** RSI does not measure volatility. Fast, wide-ranging markets make it swing between extremes more often.

## Settings

| Setting | Period | Levels | What it does |
|---|---|---|---|
| Short-term | 2 to 9 | 90 / 10 or 80 / 20 | Very fast, many signals, more noise. Short periods such as RSI(2) are popular for pullback entries in mean-reversion systems |
| Default | 14 | 70 / 30 | Wilder's original. A sensible balance for most markets and time frames |
| Long-term | 21 to 30 | 70 / 30 or 60 / 40 | Smoother, fewer signals, slower to react |

Changing the period changes how far back RSI looks. Shorter periods reach the extremes more often, so the levels are usually widened (80/20, 90/10) to compensate. Longer periods rarely reach 70 or 30, so levels are often narrowed.

## Common mistakes

- Treating 70 as "sell" and 30 as "buy" in a trending market.
- Trading every divergence. Many divergences never lead to a turn, and some appear several times in a row before price finally reverses.
- Changing the period after every losing trade until it "fits" past data.
- Using RSI alone without looking at price structure, support and resistance or the bigger time frame.
- Comparing RSI values from two platforms that calculate the average differently.
- Placing the stop based on RSI instead of on price. Stops belong on the chart, not on the indicator.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: an oversold RSI at a known support level is far more meaningful than one in the middle of nowhere.
- **[Exponential moving average](/exponential-moving-average/)**: a 200-period EMA tells you the bigger trend, so you only take RSI signals in that direction.
- **[ADX](/adx/)**: a low ADX says the market is ranging, which is where RSI's overbought and oversold readings work best.
- **[MACD](/macd/)**: a second momentum view; agreement between the two strengthens a divergence.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Brown, Constance (1999). *Technical Analysis for the Trading Professional*. McGraw-Hill. (Source of the RSI range-shift idea.)

## FAQ

**Is RSI a leading or lagging indicator?**
It is built from past closing prices, so strictly it lags. Divergences can give early warning that momentum is fading, which is why some people call it leading. In practice, treat it as a momentum gauge rather than a forecast.

**What is the best RSI setting for day trading?**
There is no single best setting. Many day traders keep the default 14 and change the levels to 80/20, while others use shorter periods such as 7 or 9. Whatever you pick, test it on the market and time frame you trade before relying on it.

**What does RSI above 70 mean?**
It means recent gains have been much bigger than recent losses. In a range, that often comes near resistance. In a strong uptrend, it is normal and can last a long time, so it is not a sell signal by itself.

**What is the difference between RSI and Stochastic?**
RSI compares the size of recent gains with recent losses. The Stochastic compares the latest close with the high-low range over a period. Stochastic usually moves faster and gives more signals. See [RSI vs Stochastic](/compare/rsi-vs-stochastic/).

**Does RSI work on forex, crypto and stocks?**
Yes. RSI only needs a price series, so it works the same way on any market. What changes is how often each market trends or ranges, which affects how reliable the overbought and oversold readings are.

**What is RSI divergence?**
Divergence is when price and RSI disagree: price makes a new high but RSI does not, or price makes a new low but RSI does not. It shows momentum is weakening, but it is a warning, not a timing signal.

