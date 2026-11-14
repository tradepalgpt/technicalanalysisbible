---
slug: trin
name: Arms Index (TRIN)
aka: [TRIN, Arms Index, Short-Term Trading Index, STKS]
type: breadth-sentiment
states: [reversal]
weak_states: [trend]
purposes: [confirmation]
inventor: Richard W. Arms Jr.
year: 1967
default_settings: "Daily reading; 1.00 is neutral; extremes often treated as below about 0.50 and above about 2.00; some use a 10-day average"
pairs_with: [advance-decline-line, nyse-tick, divergence, support-and-resistance]
related: [advance-decline-line, mcclellan-oscillator, mcclellan-summation-index, nyse-tick, new-highs-new-lows, put-call-ratio]
compare: []
glossary: [overbought, oversold, divergence, momentum]
wave: 3
reviewed: 14 November 2026
---

The Arms Index, or TRIN, is a market breadth indicator that compares the ratio of rising to falling stocks with the ratio of rising volume to falling volume. A reading of 1.00 is neutral. Very low readings point to heavy buying and very high readings to heavy selling, so traders use it to spot stretched short-term extremes.

## At a glance

| | |
|---|---|
| Type | Breadth and sentiment indicator |
| Best market states | Short-term reversals at extremes |
| Weak in | Strong trends, where extremes can persist |
| Best uses | Confirmation |
| Default reading | Daily value; 1.00 is neutral |
| Typical extremes | Below about 0.50 and above about 2.00 (conventions vary) |
| Inventor | Richard W. Arms Jr., 1967 |
| Scale | Inverse: high values are bearish, low values bullish |

## What is the Arms Index?

The Arms Index measures whether volume is flowing into rising stocks or falling ones, relative to how many of each there are. It was developed by Richard W. Arms Jr. in 1967. It is also called TRIN, from "trading index", and on some data services the Short-Term Trading Index.

It is usually calculated for an exchange, most often the NYSE. The calculation compares two ratios. The first is the number of advancing stocks divided by the number of declining stocks. The second is the volume of advancing stocks divided by the volume of declining stocks.

If the two ratios match, the index is 1.00. If volume is concentrated in advancing stocks beyond what their numbers suggest, the index falls below 1.00. If volume is concentrated in declining stocks, it rises above 1.00.

Its scale runs opposite to most indicators: low readings are bullish and high readings are bearish. This catches many new users out. It is a market-wide measure, not one that applies to a single stock.

## Formula

TRIN = (Advancing issues / Declining issues) / (Advancing volume / Declining volume)

**Worked example.** Suppose 1,500 stocks rise and 1,000 fall. The first ratio is 1,500 / 1,000 = 1.5. Advancing volume is 600 million shares and declining volume is 300 million, so the second ratio is 600 / 300 = 2.0. TRIN = 1.5 / 2.0 = **0.75**.

That is below 1.00, meaning volume is favouring the advancers more than their numbers alone would suggest.

Now flip the example: 1,000 stocks rise and 1,500 fall, with advancing volume of 300 million and declining volume of 600 million. The first ratio is 1,000 / 1,500, about 0.67. The second is 300 / 600 = 0.5. TRIN = 0.67 / 0.5 = about **1.33**. Volume is favouring the decliners.

## How to read it

**Around 1.00.** The market is balanced. There is no signal.

**Below 1.00.** Volume is concentrated in rising stocks, a sign of buying pressure.

**Above 1.00.** Volume is concentrated in falling stocks, a sign of selling pressure.

**Extreme lows.** Very low readings, often cited as below about 0.50, are treated by some traders as a sign of stretched buying and a possible short-term top.

**Extreme highs.** Very high readings, often cited as above about 2.00, are treated as a sign of panic selling and a possible short-term bottom.

These thresholds are conventions, not fixed rules. Traders and sources differ on what counts as extreme.

**Smoothing.** Because single-day readings are noisy, some traders use a moving average, with 10 days being a common choice. A smoothed reading can be read like an oscillator: high means oversold and low means overbought.

**Divergence.** If the index makes a new extreme while price does not, or the other way round, some traders treat it as a warning. See [divergence](/divergence/).

## Best market states

**Short-term reversals at extremes (best).** The index is most often used to spot exhaustion after a sharp fall or rise.

**Strong trends (weak).** In a powerful trend, extreme readings can persist for days. A high reading in a falling market can be followed by more selling.

**Ranges.** Extremes in ranges can be useful for fading short moves, but there is no strong evidence either way.

**Volatility.** Readings swing wildly in volatile markets, so the usual thresholds are crossed more often.

## Settings

| Setting | Common value |
|---|---|
| Data | Exchange-wide issues and volume, most often NYSE |
| Frequency | Daily; some intraday versions exist |
| Neutral | 1.00 |
| Low extreme | Below about 0.50 |
| High extreme | Above about 2.00 |
| Smoothing | Optional; 10-day average is a common choice |

Definitions of "advancing volume" and the data source can differ between providers. Reading levels may vary slightly as a result.

## Common mistakes

- Forgetting that the scale is inverse. High is bearish pressure, low is bullish pressure.
- Treating the thresholds as fixed. They are conventions.
- Selling into a low reading in a strong uptrend. Extremes can persist.
- Using it on a single stock. It is a market-wide measure.
- Acting on a single day's reading without any other confirmation.
- Comparing values from different data sources without noting differences in how they are built.

## Pairs well with

- **[Advance-decline line](/advance-decline-line/)**: the cumulative breadth measure that gives the longer-term background.
- **[NYSE TICK](/nyse-tick/)**: an intraday gauge of buying and selling pressure.
- **[Divergence](/divergence/)**: disagreement between TRIN and price is often watched.
- **[Support and resistance](/support-and-resistance/)**: extremes at a known level are more interesting.

## Sources

- Arms, Richard W. Jr. (1994). *Volume Cycles in the Stock Market*. Equis International.

## FAQ

**What is TRIN?**
TRIN is the Arms Index, a breadth indicator. It compares the ratio of advancing to declining stocks with the ratio of advancing to declining volume. A reading of 1.00 is neutral.

**Is a high TRIN bullish or bearish?**
A high reading means volume is concentrated in falling stocks, a sign of selling pressure. Many traders treat very high readings as a sign of panic and a possible short-term low. The scale is inverse.

**What is a good TRIN level?**
There is no single level. Readings below about 0.50 and above about 2.00 are often called extremes, but conventions vary. Context matters, especially whether the market is trending.

**Who created the Arms Index?**
Richard W. Arms Jr. developed it in 1967. It is also known as TRIN or, on some data services, the Short-Term Trading Index.

**Does TRIN predict reversals?**
It highlights stretched short-term conditions, but extremes can persist in strong trends. Many traders use it as confirmation alongside price and other breadth measures, not as a signal on its own.
