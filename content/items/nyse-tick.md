---
slug: nyse-tick
name: NYSE TICK
aka: [$TICK, TICK index, NYSE TICK index]
type: breadth-sentiment
states: [range, reversal]
weak_states: [trend]
purposes: [entry]
inventor: Not attributed to one person
year: Unknown
default_settings: "Real-time reading; extremes often watched near +1000 and -1000, but levels vary by period"
pairs_with: [vwap, support-and-resistance, trin, advance-decline-line]
related: [trin, advance-decline-line, mcclellan-oscillator, vwap, put-call-ratio]
compare: []
glossary: [overbought, oversold, momentum]
wave: 3
reviewed: 14 November 2026
---

The NYSE TICK is an intraday breadth reading. It counts how many New York Stock Exchange stocks last traded on an uptick minus how many last traded on a downtick. Day traders watch it for extreme readings, which can mark short-term exhaustion, and use it as a quick gauge of whether buying or selling is broad.

## At a glance

| | |
|---|---|
| Type | Intraday breadth reading |
| Best market states | Range, reversal |
| Weak in | Strong trending days, when extremes can repeat |
| Best uses | Entry timing for short-term trades, intraday market read |
| Default settings | Raw real-time value; extremes near +1000 and -1000 are commonly watched, but this varies |
| Created by | Not attributed to one person |
| Leading or lagging | Coincident; it shows current buying and selling pressure |

## What is the NYSE TICK?

Every trade in a stock is either at a higher price than the last trade in that stock (an uptick) or at a lower one (a downtick). The NYSE TICK takes the latest trade in every NYSE-listed stock and subtracts the number on downticks from the number on upticks.

If 2,000 stocks last traded up and 1,000 last traded down, the TICK is +1,000. If more stocks last traded down, it goes negative.

It updates continuously during the day, so it behaves like a very fast oscillator around zero. It is not a measure of the market's long-term trend. It captures the balance of buying and selling right now.

Which data a platform uses can differ. Some versions include only NYSE common stocks, others include all NYSE-listed issues, and a few traders watch a Nasdaq equivalent. Reading levels also changed over time as trading became more automated, so extremes from older books may not suit today's market.

## Formula

TICK = number of stocks whose last trade was an uptick - number whose last trade was a downtick

**Worked example.** At one moment, 1,800 stocks last traded on an uptick and 900 on a downtick.
TICK = 1,800 - 900 = **+900**

A few minutes later, 700 up and 1,500 down gives 700 - 1,500 = **-800**.

**Smoothing.** Many traders use a moving average of the TICK or plot its high and low for each bar. This reduces noise from single moments.

## How to read it

**Zero line.** Staying mostly above zero shows buyers in control during the session. Staying mostly below zero shows sellers in control.

**Extremes.** Very high or very low readings show strong, broad one-sided activity. In a range, these can mark short-term exhaustion, and traders watch for a reversal back toward zero. The levels that count as extreme depend on the period and the platform.

**Failure to reach an extreme.** If price makes a new high but the TICK peaks lower, buying is fading.

**Trend days.** On a strong trend day, the TICK can stay on one side of zero for hours and hit repeated extremes without a reversal.

**Time of day.** Readings near the open are often more extreme because many orders arrive at once. They carry less meaning than a reading in the middle of the day.

## Best market states

**Ranges (best).** When price moves between clear levels, TICK extremes near those levels can help time short-term entries.

**Reversals (useful).** A TICK extreme followed by a divergence can warn of an intraday turn, with confirmation from price.

**Trends (weak).** On trend days, TICK extremes show strength rather than exhaustion, so fading them often fails.

**Volatility.** News-driven spikes can send the TICK to extremes in seconds. Wait for price action to confirm.

## Settings

| Setting | Choice | Effect |
|---|---|---|
| Display | Raw line, or high-low-close bars | Bars show the extremes within each period |
| Smoothing | None, or a short moving average | Smoothing cuts noise but adds lag |
| Levels | +1000 / -1000 are commonly cited | Test on current data; they have changed over time |
| Time frame | 1 to 5 minutes for day trading | Shorter frames are noisier |

There is no official default. These are common choices, not standards.

## Common mistakes

- Fading TICK extremes on a trend day.
- Using fixed levels from older books without checking how the index behaves today.
- Trading on the TICK alone without price levels.
- Overreacting to readings near the open and close, when order flow is unusual.
- Forgetting that TICK is an intraday measure and has little to say about weekly direction.

## Pairs well with

- **[VWAP](/vwap/)**: shows whether price is above or below the day's average price, adding context to TICK readings.
- **[Support and resistance](/support-and-resistance/)**: TICK extremes at a known level are more meaningful.
- **[TRIN (Arms Index)](/trin/)**: another short-term breadth measure that includes volume.
- **[Advance-decline line](/advance-decline-line/)**: gives the broader picture of breadth over days or weeks.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on breadth indicators.)

## FAQ

**What does the NYSE TICK measure?**
It measures the number of NYSE stocks currently trading on an uptick minus those on a downtick. It is a real-time gauge of whether buying or selling is broad across the market.

**What is an extreme TICK reading?**
Many day traders watch for +1000 and -1000 as extremes. Because market structure changed over time, these levels are not fixed rules. Check how often your chosen levels occurred in recent months before relying on them.

**Is the TICK a good entry signal?**
It can help time short-term entries in a range, especially at a known price level. It works poorly on strong trend days, so most traders combine it with price structure and a view of the day.

**Does the TICK work after hours?**
It is built from NYSE trading, so it is meaningful mostly during regular hours. Thin trading outside those hours makes readings unreliable.

**Is there a TICK for other markets?**
Yes. Similar readings exist for other exchanges and groups, such as a Nasdaq version or index-specific TICK readings. The idea is the same, but levels differ.
