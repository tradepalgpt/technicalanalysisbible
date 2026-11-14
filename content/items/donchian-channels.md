---
slug: donchian-channels
name: Donchian Channels
aka: [Donchian Bands, Price Channel, N-day high-low breakout]
type: volatility
states: [breakout, trend]
weak_states: [range]
purposes: [entry, stop, exit]
inventor: Richard Donchian
year: 1950s
default_settings: "20 periods; upper = highest high, lower = lowest low"
pairs_with: [atr, adx, support-and-resistance, volume]
related: [keltner-channels, bollinger-bands, turtle-trading, breakout-trading, chandelier-exit, trendline]
compare: [donchian-vs-bollinger]
glossary: [breakout, trend, lookback-period, highest-high, lowest-low]
wave: 1
reviewed: 14 November 2026
---

Donchian Channels plot the highest high and lowest low of the last N bars, with a middle line halfway between. A close above the upper line is a new N-bar high, which trend followers treat as a breakout signal. A close below the lower line is a new N-bar low. The default is 20 bars.

## At a glance

| | |
|---|---|
| Type | Volatility channel (price range) |
| Best market states | Breakout, trend |
| Weak in | Ranges, where breakouts fail and signals whipsaw |
| Best uses | Entry on breakouts, trailing stop, exit |
| Default settings | 20 periods (the Turtle rules also used 55 and 10) |
| Created by | Richard Donchian, mid-20th century |
| Leading or lagging | Lagging: it only reports what price has already done |

## What are Donchian Channels?

Richard Donchian, an early pioneer of systematic trend following, built his rules around a simple idea: buy when price makes a new high for the period, sell when it makes a new low. The channel is that idea drawn on a chart.

Unlike [Bollinger Bands](/bollinger-bands/) or [Keltner Channels](/keltner-channels/), the Donchian Channel has no averages or standard deviations. It uses only the highest high and lowest low over a set number of bars. The width of the channel is therefore the recent price range, so it widens in volatile markets and narrows in quiet ones.

The Turtle Trading system, taught by Richard Dennis and William Eckhardt in the 1980s, used Donchian-style breakouts, notably 20-day and 55-day highs and lows. See [Turtle Trading Rules](/turtle-trading/).

A simple "four-week rule" (buy a four-week high, sell a four-week low) is often linked to his work.

## Formula

1. Upper channel = highest high of the last N bars (default N = 20)
2. Lower channel = lowest low of the last N bars
3. Middle line = (Upper + Lower) / 2

**Worked example.** Over the last 20 bars the highest high is 110 and the lowest low is 90.
Upper = **110**
Lower = **90**
Middle = (110 + 90) / 2 = **100**
A close at 111 would be a breakout above the upper channel, a new 20-bar high.

Note: some platforms include the current bar in the lookback, and others use the previous N bars. For a breakout signal, the second is cleaner, because the current bar cannot be above a high it helped to set. Check how yours is plotted.

## How to read it

**Breakout entry.** A close above the upper line is a long signal for trend followers. A close below the lower line is a short signal.

**Trailing exit.** In the classic setup, a shorter channel is used to exit. For example, enter on a 20-bar breakout and exit on a break of the 10-bar low, as in the Turtle rules.

**Trailing stop.** The lower line (for a long) rises as price makes higher lows, giving a stop that follows the trend.

**Middle line.** Some traders use it as a trend filter: price above the middle suggests an uptrend.

**Channel width.** A narrow channel shows a tight range and low volatility. A wide channel shows a volatile market or a strong trend.

## Best market states

**Breakouts (best).** The channel is designed to flag new highs and lows, so it marks the start of breakouts clearly.

**Trends (good).** Once a trend is under way, the channel's edge follows price and works as a trailing exit or stop. Trend followers accept that many entries will be small losers while a few trends pay for them.

**Ranges (weak).** In a sideways market, price pokes beyond the edges and falls back repeatedly. Each such breakout is a false signal. This is the main weakness of any breakout system.

**Volatility.** Because it reacts only to price extremes, a single spike can distort the channel for N bars after it.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 10 | Fast, many signals; often used for exits |
| Default | 20 | A common entry period, about one month on daily bars |
| Long | 55 | Slow, fewer entries, catches only big moves |

Longer periods give fewer signals and later entries, but fewer whipsaws. Many systems use two periods: a long one to enter and a shorter one to exit.

## Common mistakes

- Trading every breakout in a range and being whipsawed.
- Using the same period on every market and time frame without testing.
- Placing no stop. The lower line is a trailing exit, not a protective stop at entry.
- Ignoring volatility. A spike can leave a channel too wide to be useful.
- Expecting a high hit rate. Trend-following breakout systems often lose more trades than they win and rely on a few large winners.
- Confusing it with Bollinger Bands. Donchian uses highs and lows, not standard deviations.

## Pairs well with

- **[ATR](/atr/)**: sets position size and stop distance on a breakout.
- **[ADX](/adx/)**: checks whether a trend is actually present before taking a breakout.
- **[Support and resistance](/support-and-resistance/)**: a Donchian high that matches an old resistance level is a stronger breakout.
- **[Volume](/volume/)**: breakouts on rising volume are easier to trust.

## Sources

- Covel, Michael W. (2007). *The Complete TurtleTrader*. HarperBusiness. (Turtle rules.)
- Faith, Curtis (2007). *Way of the Turtle*. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What are Donchian Channels used for?**
They are used mainly for trend-following breakout entries, and for trailing exits and stops. The upper and lower lines show the highest high and lowest low of the last N bars.

**What is the default Donchian Channel setting?**
The common default is 20 periods. The Turtle rules used 20 and 55 for entries and 10 and 20 for exits. There is no best value, so test any setting on your market.

**What is the difference between Donchian Channels and Bollinger Bands?**
Donchian Channels use the highest high and lowest low. Bollinger Bands use a moving average and standard deviation. Donchian lines step with price extremes; Bollinger Bands curve smoothly. See [Donchian vs Bollinger](/compare/donchian-vs-bollinger/).

**Do Donchian Channels repaint?**
No. Once a bar closes, its channel values are fixed. The lines can change during the current bar as it makes new highs and lows, so wait for the close.

**Do Donchian breakouts work?**
They have been used by trend followers for decades, but they suffer in ranging markets and often have many small losses. Results depend on the market, the period and risk control, so test before relying on them.
