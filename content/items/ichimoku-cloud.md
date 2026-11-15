---
slug: ichimoku-cloud
name: Ichimoku Cloud
aka: [Ichimoku Kinko Hyo, Ichimoku]
type: trend
states: [trend]
weak_states: [range]
purposes: [entry, filter, stop, confirmation]
inventor: Goichi Hosoda (often credited)
year: 1969
default_settings: "9, 26, 52 periods; cloud and Chikou Span shifted 26 periods"
pairs_with: [support-and-resistance, adx, rsi, atr]
related: [exponential-moving-average, moving-average-crossover, parabolic-sar, supertrend, trend-following]
compare: [ichimoku-vs-moving-averages]
glossary: [trend, lagging-indicator, crossover, confluence, whipsaw]
wave: 1
improved: 15 November 2026, backtesting note from our look-ahead test
reviewed: 15 November 2026
---

The Ichimoku Cloud is a trend indicator made of five lines that show trend direction, momentum and support and resistance on one chart. The shaded area between two of the lines, the cloud (Kumo), is the key feature. Price above the cloud is read as an uptrend, below it as a downtrend, and inside it as indecision.

## At a glance

| | |
|---|---|
| Type | Trend indicator (five-line system) |
| Best market states | Trends |
| Weak in | Sideways ranges, where lines tangle and signals flip |
| Best uses | Entry, trend filter, stop placement, confirmation |
| Default settings | 9, 26, 52 periods; 26-period displacement |
| Created by | Goichi Hosoda, published in Japan in the late 1960s (often given as 1969) |
| Leading or lagging | Mostly lagging; the cloud is projected 26 bars ahead, but it is built from past prices |

## What is the Ichimoku Cloud?

"Ichimoku Kinko Hyo" is usually translated as "one glance equilibrium chart". The idea is that one look at the chart tells you the trend, the strength of the move and where support and resistance sit.

The system is often credited to the Japanese journalist Goichi Hosoda, who published it under the pen name Ichimoku Sanjin after years of development. It was designed for daily charts, and the original settings were based on the Japanese trading week of about six days. The numbers 9, 26 and 52 are roughly one and a half weeks, one month and two months of trading days.

It was little known outside Japan until English-language books and charting platforms picked it up. Today it is built into almost every charting package.

## Formula

Each line uses the midpoint of the highest high and lowest low over a period.

1. **Tenkan-sen (conversion line)** = (highest high of last 9 periods + lowest low of last 9 periods) / 2
2. **Kijun-sen (base line)** = (highest high of last 26 periods + lowest low of last 26 periods) / 2
3. **Senkou Span A (leading span A)** = (Tenkan-sen + Kijun-sen) / 2, plotted 26 periods ahead
4. **Senkou Span B (leading span B)** = (highest high of last 52 periods + lowest low of last 52 periods) / 2, plotted 26 periods ahead
5. **Chikou Span (lagging span)** = today's close, plotted 26 periods back
6. The **cloud (Kumo)** is the area between Senkou Span A and Senkou Span B.

**Worked example.** Over the last 9 bars the highest high is 110 and the lowest low is 100. Over the last 26 bars they are 115 and 95.
Tenkan-sen = (110 + 100) / 2 = 105
Kijun-sen = (115 + 95) / 2 = 105
Senkou Span A = (105 + 105) / 2 = **105**, drawn 26 bars to the right of today.

Because the spans are drawn ahead and the Chikou Span behind, the "current" cloud under today's bar was calculated 26 bars ago.

## How to read it

**Price and the cloud.** Price above the cloud suggests an uptrend. Price below suggests a downtrend. Price inside the cloud means no clear trend.

**Cloud colour and thickness.** When Span A is above Span B the cloud is usually shaded as bullish; when below, bearish. A thick cloud is a stronger zone of support or resistance than a thin one, which price can slice through.

**Tenkan and Kijun cross.** Tenkan crossing above Kijun is a bullish signal (the "TK cross"); crossing below is bearish. Many traders count it as stronger when it happens on the trend side of the cloud.

**Kijun as a guide.** In a trend, price often pulls back to the Kijun-sen and resumes. A close beyond it is an early sign the move is weakening.

**Chikou Span.** If the Chikou Span sits above the price from 26 bars ago, it supports the bullish case. Below that price, it supports the bearish case.

**Future cloud.** The cloud ahead twists when Span A and Span B cross. Some traders watch twists as hints of a coming change in trend, but it is an observation, not a forecast.

## Best market states

**Trends (best).** Ichimoku is built to follow trends. When price, cloud, Tenkan, Kijun and Chikou all agree, the picture is clear.

**Ranges (weak).** In sideways markets price keeps entering the cloud, the TK lines tangle and the crosses flip often. A flat, thin cloud with price inside it is a sign to stand aside.

**Breakouts.** A close out of the cloud after a quiet period is often watched as a sign a new trend is starting. It is a lagging confirmation, so some of the move has usually happened.

**Volatility.** The lines use highs and lows, so spikes can distort them. Wide ranges give wide clouds.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Default | 9, 26, 52 (shift 26) | Hosoda's original. Most widely used and most watched by others |
| Crypto and 24/7 markets | 10, 30, 60 (shift 30) | A variant used because these markets trade seven days a week. It is a convention, not a standard |
| Faster | 7, 22, 44 | More signals, more noise. Used on short time frames by some traders |

Changing settings changes which levels many other traders are watching. Most platforms let you change the displacement, but keeping 26 is common practice.

## Common mistakes

- Using it in a sideways market and acting on every TK cross.
- Treating the cloud as a fixed support or resistance line. Price can pass through.
- Forgetting the cloud is shifted: the cloud under today's candle is old information.
- Trading every signal as equal. A TK cross far from the cloud on the wrong side is weak.
- Using all five parts at once as a checklist that never gives a signal, or ignoring most of them. Decide which parts your rules use.
- Placing stops inside the cloud where noise is high, without a plan for what invalidates the idea.

## Backtesting note

The lagging span (Chikou) is today's close drawn 26 bars in the past. On a chart that is fine. In a backtest or a trading script it is a trap: if a rule reads the lagging span at an old bar, it is quietly using a price from 26 bars later. Our own look-ahead test (which scrambles all prices after a chosen bar and checks that nothing before it changes) flags the lagging span for exactly this reason. Use it to read a chart, not as a signal input, unless your code compares it only with prices from 26 bars earlier.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: the cloud edges and Kijun are dynamic levels; horizontal levels help confirm them.
- **[ADX](/adx/)**: a rising ADX says the trend has strength, which is where Ichimoku works best.
- **[RSI](/rsi/)**: a momentum check against entering late after a TK cross.
- **[ATR](/atr/)**: sizes stops and shows how much room the cloud gives.

## Sources

- Elliott, Nicole (2007). *Ichimoku Charts: An Introduction to Ichimoku Kinko Clouds*. Harriman House.
- Patel, Manesh (2010). *Trading with Ichimoku Clouds*. Wiley.

## FAQ

**What do the Ichimoku numbers 9, 26 and 52 mean?**
They are look-back periods for the high-low midpoints. The numbers reflect the old Japanese trading week of about six days: 9 is about a week and a half, 26 about a month and 52 about two months. They are the standard defaults on most platforms.

**What is the Kumo?**
Kumo is the Japanese word for cloud. It is the shaded area between Senkou Span A and Senkou Span B. Price above it is read as bullish, below it as bearish and inside it as unclear. A thicker cloud is usually seen as a stronger zone.

**Is Ichimoku a leading or lagging indicator?**
Mostly lagging, because every line is built from past highs and lows. The cloud is drawn 26 bars ahead, which looks like a forecast, but it is only a projection of current levels. It does not predict price.

**Does Ichimoku work on forex and crypto?**
It can be applied to any market with highs and lows. The original settings were designed for daily stock charts. Some traders change the numbers for markets that trade all week. Test any change on the market and time frame you use.

**What is a TK cross?**
It is the crossing of the Tenkan-sen (9-period line) and the Kijun-sen (26-period line). Tenkan crossing above Kijun is read as bullish and below as bearish. It is stronger when it happens on the trend side of the cloud and weak when it happens inside it.
