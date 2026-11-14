---
slug: zweig-breadth-thrust
name: Zweig Breadth Thrust
aka: [ZBT, Zweig Breadth Thrust indicator, breadth thrust]
type: breadth-sentiment
states: [breakout]
weak_states: [range]
purposes: [confirmation]
inventor: Martin Zweig
year: 1980s
default_settings: "10-day EMA of advancing issues / (advancing + declining issues); trigger: below 0.40 to above 0.615 within 10 trading days"
pairs_with: [advance-decline-line, mcclellan-oscillator, new-highs-new-lows, percent-above-moving-average]
related: [advance-decline-line, mcclellan-oscillator, trin, new-highs-new-lows, percent-above-moving-average, bullish-percent-index]
compare: []
glossary: [momentum, trend, smoothing, lookback-period, oversold]
wave: 3
reviewed: 14 November 2026
---

The Zweig Breadth Thrust is a market breadth signal created by Martin Zweig. It tracks the share of stocks that are rising each day, smoothed over 10 days. When that share jumps from a weak level (below 0.40) to a strong level (above 0.615) within 10 trading days, it marks an unusually broad burst of buying, which some traders read as the start of a new advance.

## At a glance

| | |
|---|---|
| Type | Breadth indicator |
| Best market states | Breakout, after a weak or oversold market |
| Weak in | Ranges, where there is no weak-to-strong swing worth marking |
| Best uses | Confirmation of a broad advance |
| Default settings | 10-day EMA of the advancing share; low 0.40, high 0.615, window 10 days |
| Created by | Martin Zweig, 1980s |
| Leading or lagging | Mostly coincident. It confirms a thrust once it has happened |

## What is the Zweig Breadth Thrust?

Breadth describes how many stocks take part in a market move. A rally led by a few large names has narrow breadth. A rally in which most stocks rise has wide breadth. The Zweig Breadth Thrust looks for the rare case of extremely wide breadth, appearing quickly after a weak market.

Martin Zweig was an American investment analyst and newsletter writer. He described the indicator in his 1986 book *Winning on Wall Street*. It is normally calculated on the New York Stock Exchange, using the daily counts of advancing and declining stocks.

The idea is simple. After a market has been weak, a sudden spread of buying across almost all stocks is a strong show of demand. Zweig treated it as a sign that a new advance was beginning. The signal is rare, which is why it is shown in markets as an event, not as a regular indicator. Readers should treat historical claims about its record cautiously, since the sample of signals is small and results depend on how they are counted.

## Formula

1. For each day, work out the advancing share: advancing issues / (advancing issues + declining issues).
2. Smooth it with a 10-day exponential moving average (EMA), where alpha = 2 / 11.
3. The signal fires when the smoothed ratio rises from below 0.40 to above 0.615 within 10 trading days or fewer.

Unchanged issues are left out of the ratio.

**Worked example.** One day, 1,800 stocks rise and 1,200 fall.
Advancing share = 1,800 / (1,800 + 1,200) = 1,800 / 3,000 = **0.60**

Suppose the previous smoothed value was 0.50.
New EMA = 0.50 + (2 / 11) x (0.60 - 0.50) = 0.50 + 0.018 = **0.518**

To reach 0.615 from below 0.40 within 10 days, the daily advancing share must run well above 0.60 for many days in a row. That is why the signal is uncommon.

Note: some data sources count by exchange (NYSE, Nasdaq or both), and some include volume. The version above is the widely used original on NYSE issues.

## How to read it

**The thrust.** A move from below 0.40 to above 0.615 inside the 10-day window is the signal. Both levels, and the time limit, must be met.

**Level of the starting point.** Starting below 0.40 means the market was weak or oversold. The signal is meant to catch a turn from weakness, not a continuing rally.

**Speed matters.** A slow climb through the range over a longer period does not count as a thrust.

**After the signal.** Zweig interpreted it as a sign of a new advance. Traders who follow it usually treat it as confirmation of a broad move, and then look at price and trend for details.

**Rare occurrence.** Because the signal comes up only on a few occasions in a long period, it cannot be used as a regular trading tool. Do not expect to see it often.

## Best market states

**Breakouts from a weak market (best).** The signal is built for a quick change from weak to strong breadth, such as after a sharp decline.

**Trends (supporting).** In a rising market, broad participation supports the trend, though the thrust only fires from a low level.

**Ranges (weak).** In a sideways market, the ratio rarely dips below 0.40 and then surges above 0.615 within 10 days. The signal is mostly silent.

**Reversals.** It can appear near the end of a decline, but it is not a bottom-calling tool. A signal can fire and the market can still fall back.

**Volatility.** Large swings in the number of advancing stocks can drive the ratio quickly, but that does not guarantee the pattern will complete.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Smoothing | 10-day EMA | Reduces day-to-day noise in the advancing share |
| Low level | 0.40 | The starting threshold. The ratio must be below this first |
| High level | 0.615 | The threshold the ratio must reach to fire the signal |
| Window | 10 trading days | The maximum time from low level to high level |

These are Zweig's published values. Changing them makes a different indicator, so any signal list will not match published ones. If you test other values, record them and test across many markets and decades.

## Common mistakes

- Treating the signal as a frequent buy trigger. It is rare.
- Forgetting the starting condition. The ratio must come from below 0.40.
- Using a different smoothing period and still calling it a Zweig Breadth Thrust.
- Using other exchanges or all stocks without noting that the original used NYSE issues.
- Treating one signal as proof of a lasting trend.
- Quoting a record of past signals without saying how many there were and how they were counted.

## Pairs well with

- **[Advance-decline line](/advance-decline-line/)**: shows whether breadth keeps expanding after the thrust.
- **[McClellan Oscillator](/mcclellan-oscillator/)**: another breadth momentum measure built from advancing and declining issues.
- **[New highs and new lows](/new-highs-new-lows/)**: checks whether strong participation is also showing up at the extremes.
- **[Percent above moving average](/percent-above-moving-average/)**: shows what share of stocks are in uptrends.

## Sources

- Zweig, Martin E. (1986). *Winning on Wall Street*. Warner Books.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on market breadth.)

## FAQ

**What is the Zweig Breadth Thrust?**
It is a breadth signal built on the share of NYSE stocks that advance each day, smoothed with a 10-day EMA. It fires when that ratio rises from below 0.40 to above 0.615 within 10 trading days.

**Who created the Zweig Breadth Thrust?**
Martin Zweig, an American analyst and newsletter writer. He described it in his 1986 book *Winning on Wall Street*. It is usually dated to the 1980s.

**How often does the Zweig Breadth Thrust signal appear?**
Rarely. The ratio must drop below 0.40 and then climb above 0.615 within 10 days, which needs unusually broad buying. The exact count depends on the data and the period, so it is best not to quote one number.

**Is the Zweig Breadth Thrust a reliable buy signal?**
It is a confirmation of broad buying, not a guarantee. With so few signals, no strong claim can be made, and the market can still fall back afterwards. Most traders pair it with price and trend analysis.

**Can I use it on markets other than the NYSE?**
You can calculate the same ratio for another exchange or index, but the original thresholds were set for NYSE issues. Treat other versions as new indicators and test them before relying on them.
