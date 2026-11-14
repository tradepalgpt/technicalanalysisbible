---
slug: moving-average-envelope
name: Moving Average Envelope
aka: [MA envelope, percentage envelope, trading bands]
type: moving-average
states: [range, trend]
weak_states: [breakout]
purposes: [entry, exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "20-period moving average with bands at 2.5 percent (no universal standard)"
pairs_with: [support-and-resistance, adx, atr, bollinger-bands]
related: [bollinger-bands, keltner-channels, donchian-channels, simple-moving-average, exponential-moving-average]
compare: [bollinger-bands-vs-keltner-channels]
glossary: [lagging-indicator, smoothing, lookback-period, trend, whipsaw]
wave: 2
reviewed: 14 November 2026
---

A moving average envelope is a moving average with two lines drawn a fixed percentage above and below it. The lines form a channel around price. Traders use the outer lines as possible turning zones in a range and as a guide to how stretched price is from its average.

## At a glance

| | |
|---|---|
| Type | Moving average (band or channel) |
| Best market states | Range, trend |
| Weak in | Breakouts, where price rides the band |
| Best uses | Entry timing, exit targets |
| Default settings | 20-period average, 2.5 percent bands (varies widely) |
| Created by | Not attributed to one person; year unknown |
| Leading or lagging | Lagging, since the centre is a moving average |

## What is a Moving Average Envelope?

An envelope takes a [simple](/simple-moving-average/) or [exponential](/exponential-moving-average/) moving average and wraps it with an upper and a lower line. Each line sits a set percentage away from the average. If the percentage is 2.5, the upper line is 2.5 percent above the average and the lower is 2.5 percent below.

No single person is credited with the envelope. It is one of the oldest band-type tools in technical analysis, and variations are in common use. It is the simplest relative of [Bollinger Bands](/bollinger-bands/) and [Keltner Channels](/keltner-channels/). Those two change their width with volatility. The envelope does not: its width is a fixed percentage of the average, so it widens only as price rises in absolute terms.

The idea is that price tends to move away from its average and return. The outer lines mark where that stretch is large enough to be worth noticing.

## How it is drawn

1. Choose the average type and length (for example a 20-period SMA).
2. Choose a percentage band (for example 2.5 percent).
3. Upper line = average x (1 + percentage / 100).
4. Lower line = average x (1 - percentage / 100).

**Worked example.** Suppose the 20-period SMA is 100 and the band is 2.5 percent.

Upper = 100 x 1.025 = **102.5**
Lower = 100 x 0.975 = **97.5**

If the SMA rises to 110 later, the bands move to 112.75 and 107.25. The width in points grows from 5 to 5.5, but stays 5 percent of the average.

Note: some platforms let you set the bands as a percentage; others use fixed points or let you shift the whole average. Check what your software does before comparing.

## How to read it

**Edge touches in a range.** When price runs to the upper line in a sideways market, traders look for a possible turn down. At the lower line, a possible turn up. The envelope shows a stretched move but does not confirm a reversal.

**Closes outside the band.** In a range a close outside the envelope suggests an extreme, which often pulls back toward the average. In a trend it can signal strength, not exhaustion.

**The centre line.** The moving average itself serves as a target for a return trade and as a gauge of the trend: price staying on one side suggests a trend.

**Riding the band.** In a strong trend price may hug or walk along one edge for many bars. Trading against that is a classic way to lose with envelopes.

**Fixed width.** Because the bands are a set percentage, a quiet market can sit well inside them and a wild one can burst through often. The envelope does not know about volatility.

## Best market states

**Ranges (best).** If price moves between rough boundaries, the envelope can sit near the edges and offer a visual for entries and exits. It works best when the percentage matches the typical swing.

**Trends (workable).** The centre line can act as a pullback reference, and the band on the trend side marks where price is stretched. Fading that band is risky.

**Breakouts (weak).** Price leaves the envelope and stays out. Treating the band as a ceiling here is a common error.

**Volatility changes.** A fixed percentage fits only one volatility level. After a regime change the bands may be too tight or too wide.

## Confirmation rules

- Ask whether the market is ranging first; an [ADX](/adx/) reading can help.
- Look for a price signal at the outer line, such as a rejection candle, rather than trading the touch alone.
- Check that the band percentage fits recent swings: price should reach the bands sometimes, not never or constantly.
- Place the stop on the chart using price structure or [ATR](/atr/), not on the envelope.
- If price closes outside the band and keeps going, stop fading it.

## Common mistakes

- Fading the band in a strong trend.
- Using one percentage on every market and time frame. Each needs its own fit.
- Confusing it with Bollinger Bands, which adjust width to volatility.
- Treating a band touch as a signal on its own.
- Never adjusting the percentage when volatility changes.
- Picking the percentage that looks perfect on past data and assuming it will hold.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: an envelope edge that lines up with a known level carries more weight.
- **[ADX](/adx/)**: shows whether the market is in a range, where the envelope works best.
- **[ATR](/atr/)**: helps size stops and judge whether the band percentage fits current volatility.
- **[Bollinger Bands](/bollinger-bands/)**: a volatility-adjusted alternative to compare against.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Covers moving average envelopes and bands.)
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press. (General reference on moving average bands.)

## FAQ

**What is a moving average envelope?**
It is a moving average with a line a fixed percentage above it and another the same percentage below. The three lines form a channel around price, used to spot stretched moves and possible turns.

**What percentage should I use for an envelope?**
There is no standard. A 2.5 percent band on a 20-period average is a common starting point on daily charts. The right figure depends on the market and time frame, so check where price usually reaches.

**How is an envelope different from Bollinger Bands?**
Bollinger Bands set their width from standard deviation, so they widen and narrow with volatility. The envelope uses a fixed percentage, so its width does not respond to volatility. See [Bollinger Bands](/bollinger-bands/).

**Does price always return to the average?**
No. In ranges it often does. In trends price can stay on one side of the average and walk along the outer band for a long time. That is why the tool is weak when a market is trending hard.

**Is an envelope an entry signal?**
Not on its own. A touch of the outer line marks a stretched move. Most traders want a confirming price signal and a view of the wider market before acting.
