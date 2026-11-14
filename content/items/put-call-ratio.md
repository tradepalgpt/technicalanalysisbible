---
slug: put-call-ratio
name: Put/Call Ratio
aka: [Put-call ratio, PCR, equity put/call ratio]
type: breadth-sentiment
states: [reversal]
weak_states: [trend, range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "Daily ratio of put volume to call volume; often smoothed with a 5 to 10 day average"
pairs_with: [vix, fear-and-greed-index, support-and-resistance, divergence]
related: [retail-sentiment, implied-volatility, open-interest, commitments-of-traders, overbought-oversold]
compare: []
glossary: [overbought, oversold, divergence, smoothing]
wave: 2
reviewed: 14 November 2026
---

The put/call ratio compares how many put options are traded with how many call options. Puts are mostly used to bet on or protect against falls, calls to bet on rises. Because the crowd is often most fearful near lows and most relaxed near highs, extreme readings are read as a contrarian sign that a turn may be near.

## At a glance

| | |
|---|---|
| Type | Breadth and sentiment indicator |
| Best market states | Reversals after stretched sentiment |
| Weak in | Trends and ranges, where readings can stay extreme for long periods |
| Best uses | Confirmation |
| Default settings | Daily put volume divided by call volume; a 5 to 10 day average is common |
| Created by | Not attributed to one person; published as a daily series by the Cboe options exchange from the 1990s |
| Leading or lagging | Coincident with sentiment; used as a contrarian warning |

## What is the put/call ratio?

An option is a contract that gives the holder the right, not the duty, to buy (a call) or sell (a put) an asset at a set price. The put/call ratio simply divides the number of puts traded by the number of calls traded over a period, usually one day.

A high ratio means more puts than usual are being traded. That shows fear or heavy hedging. A low ratio means calls dominate, which shows optimism or greed. The contrarian idea is that when almost everyone has already positioned one way, there are few buyers or sellers left to push price further.

Several versions exist. The **equity** ratio covers single-stock options and is mostly retail activity. The **index** ratio covers index options and is mostly institutional hedging, so it is naturally higher. The **total** ratio combines both. They are not interchangeable, and each has its own normal range.

The ratio is often used next to the [VIX](/vix/) and the [Fear and Greed Index](/fear-and-greed-index/). All three try to measure the same thing from different angles: how worried the market is.

## Formula

Put/Call Ratio = put volume / call volume

Some sources use open interest (contracts still open) instead of volume. Volume is more common for daily sentiment readings.

**Worked example.** On one day 800,000 puts and 1,000,000 calls trade.
Ratio = 800,000 / 1,000,000 = **0.80**

If 1,200,000 puts and 1,000,000 calls trade, the ratio is 1.20, which means more puts than calls.

Because single-day readings are noisy, many users smooth the ratio with a moving average over 5 to 10 days. Platforms and data vendors differ in which options they include, so the same day can show different numbers on different sites.

## How to read it

**Extreme highs.** A ratio well above its own recent norm shows heavy put buying. Contrarians read this as fear that may be close to a low. For the equity ratio, readings above 1.0 are unusual in many periods, but the right threshold depends on the era and the data source.

**Extreme lows.** A ratio well below its norm shows heavy call buying and complacency. Contrarians read this as a possible warning near a high.

**Relative, not absolute.** There is no universal "70 and 30" line. Most users compare today's reading with a moving average or with percentile ranks over the past year or two.

**Smoothing.** A 5 or 10 day average removes single-day spikes caused by options expiry or one large hedge.

**Divergence.** If price makes a new high while the smoothed ratio does not fall to a new low (calls are not rising with price), some traders read this as weak conviction. This is a hint, not a timing tool.

**Confirmation, not trigger.** The ratio says sentiment is stretched. It does not say when price will turn. Traders usually wait for a price signal, such as a break of support or a reversal candle, before acting.

## Best market states

**Reversals (best).** After a sharp fall or a long run-up, an extreme ratio can add weight to a turning point that price is already showing.

**Strong trends (weak).** In a steady uptrend the ratio can stay low for months. In a crash it can stay high while price keeps falling. Fading these readings early is a common way to be wrong.

**Ranges (limited).** The ratio can swing with expiry dates and hedging flows rather than real conviction, so signals in sideways markets are noisy.

**Volatility.** Spikes in volatility often come with spikes in put buying, so the ratio and the VIX tend to rise together.

## Settings

| Setting | What it does |
|---|---|
| Raw daily ratio | Fast but noisy; affected by expiry days and large single trades |
| 5-day average | Common short-term sentiment gauge |
| 10-day average | Smoother; fewer, slower signals |
| Equity vs index vs total | Equity shows retail mood, index shows hedging, total blends both |
| Percentile rank | Compares today with its own 1 to 2 year history rather than a fixed level |

There is no standard published setting. Pick a version, keep it consistent and note which data source you used.

## Common mistakes

- Using a fixed level, such as "above 1.0 means buy", without checking how that source behaves.
- Mixing the equity, index and total ratios.
- Acting on one day's reading rather than a smoothed trend.
- Treating extreme fear as a buy signal while price is still falling hard.
- Ignoring that large hedges by institutions can raise the ratio without any bearish view.
- Applying a stock-market ratio to an unrelated market such as forex, where it does not exist.

## Pairs well with

- **[VIX](/vix/)**: a second view of fear; agreement between the two strengthens the sentiment reading.
- **[Fear and Greed Index](/fear-and-greed-index/)**: combines several sentiment measures, so it gives context for the ratio.
- **[Support and resistance](/support-and-resistance/)**: an extreme ratio at a known level gives a more useful turning point than one in empty space.
- **[Divergence](/divergence/)**: price and ratio disagreeing is a common early warning.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Covers sentiment and contrary opinion.)
- Pring, Martin J. (2002). *Technical Analysis Explained*, 4th edition. McGraw-Hill. (Covers sentiment indicators.)

## FAQ

**What does a high put/call ratio mean?**
More puts than usual are being traded, which shows fear or heavy hedging. Contrarians treat very high readings as a sign that sentiment may be near a low, but price can keep falling while the ratio stays high.

**What is a good put/call ratio level?**
There is no single level. The equity, index and total ratios each have different normal ranges, and those ranges shift over time. Compare today's reading with its own recent history rather than a fixed number.

**Is the put/call ratio a leading indicator?**
It measures current positioning, so it does not predict on its own. Used as a contrarian gauge, extremes can precede turns, but the timing is loose. Most traders wait for a price signal before acting.

**What is the difference between the equity and index put/call ratio?**
The equity ratio covers single-stock options, which are heavily traded by retail participants. The index ratio covers index options, which are used a lot for institutional hedging, so it usually sits higher.

**Can the put/call ratio be used on forex or crypto?**
Not in the same form. The classic ratio comes from listed options exchanges. Some crypto options venues publish similar ratios, but they cover different participants and are not directly comparable with stock-market readings.
