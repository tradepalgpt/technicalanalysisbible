---
slug: advance-decline-line
name: Advance-Decline Line
aka: [A/D line, AD line, ADL]
type: breadth-sentiment
states: [trend, reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "Running total of (advancing issues minus declining issues), usually daily"
pairs_with: [dow-theory, divergence, trendline, mcclellan-oscillator]
related: [mcclellan-oscillator, mcclellan-summation-index, trin, new-highs-new-lows, percent-above-moving-average, zweig-breadth-thrust]
compare: []
glossary: [divergence, trend, confirmation]
wave: 2
reviewed: 14 November 2026
---

The Advance-Decline Line (A/D line) is a market breadth indicator. Each day it adds the number of stocks that rose minus the number that fell on an exchange or index, and keeps a running total. Traders use it to check whether a rally or fall is broad or narrow, and to spot divergences from a headline index.

## At a glance

| | |
|---|---|
| Type | Market breadth indicator |
| Best market states | Trend, reversal |
| Weak in | Ranges, and very short time frames |
| Best uses | Confirmation |
| Default settings | Daily net advances, cumulative |
| Created by | Not attributed to one person (in use since the early to mid 20th century) |
| Leading or lagging | Can lead the index at turning points; often lags in short-term moves |

## What is the Advance-Decline Line?

An index like the S&P 500 is weighted by company size, so a few giant stocks can push it up while most stocks stagnate. The A/D line ignores size. It counts each stock equally: did it go up or down today?

If more stocks rise than fall, the line goes up. If more fall than rise, it goes down. When the index rises and the A/D line rises with it, the rally is broad. When the index makes a new high but the A/D line does not, only a few stocks are carrying it. This is a classic warning sign, though not a timing signal.

The line has no single named inventor. Breadth measures were in use by market analysts early in the 20th century, and the A/D line is discussed in standard textbooks. It is most often applied to the New York Stock Exchange, but exists for other exchanges, indices and sectors.

## Formula

1. Advancing issues = number of stocks that closed higher today.
2. Declining issues = number that closed lower today.
3. Net advances = advancing issues - declining issues.
4. A/D line = yesterday's A/D line + today's net advances.

**Worked example.** The line stands at 1,000. Today 1,800 stocks rise and 1,200 fall.
Net advances = 1,800 - 1,200 = 600
New A/D line = 1,000 + 600 = **1,600**
The next day 900 rise and 2,100 fall: net = -1,200, line = 400.

Variations: some versions use the ratio of advancers to decliners rather than the difference. Unchanged stocks are normally ignored. The absolute level means nothing: only the direction and the comparison with price matter. Different data vendors count different sets of securities (for example, common stocks only or all listings including funds), so the line looks different from source to source.

## How to read it

**Confirmation.** Index and A/D line both making new highs suggests broad participation behind the rise. Both making new lows suggests broad selling.

**Bearish divergence.** The index makes a higher high but the A/D line makes a lower high. Fewer stocks are taking part. This has often shown up before market tops, but divergences can last many months before price reacts, and sometimes do not lead to a fall at all.

**Bullish divergence.** The index makes a lower low but the A/D line does not. Selling is narrowing. It can precede a bottom, with the same caution about timing.

**Trend lines on the A/D line.** Because it is a line chart, you can draw trendlines on it. A break of an A/D trendline ahead of the index is read as an early warning.

**Dow Theory link.** The idea that averages should confirm each other (see [Dow Theory](/dow-theory/)) is the same logic applied to breadth.

## Best market states

**Trends (good).** In a lasting uptrend, a rising A/D line adds confidence that the move has wide support.

**Reversals (good, as a warning).** Divergences near major highs and lows are the most watched use. They tell you the move is weakening beneath the surface, but not when it will end.

**Ranges (weak).** In sideways markets the line wanders, and divergences carry little information.

**Short time frames (weak).** Daily noise swamps the signal. The tool is meant for weeks and months.

**Single stocks (not applicable).** It measures a group of stocks, not an individual one.

## Settings

The line has no inputs. Choices that matter:

| Choice | Effect |
|---|---|
| Universe | NYSE common stocks, NASDAQ, S&P 500 or a sector. Different universes can tell different stories |
| Time frame | Daily is standard; weekly smooths noise |
| Smoothing | Some traders add a moving average to the A/D line to define its trend |
| Weighting | Equal count (standard) versus volume-weighted versions (for example up volume minus down volume) |

## Common mistakes

- Using the absolute level of the line. Only changes and comparisons matter.
- Treating a divergence as a timing signal. It can persist for a long time.
- Mixing universes, such as comparing the S&P 500 index to the NYSE A/D line.
- Ignoring what is in the count, such as preferred shares and funds that distort the NYSE line.
- Expecting it to work on single stocks or forex pairs.
- Reading short-term daily wiggles as meaningful.

## Pairs well with

- **[Dow Theory](/dow-theory/)**: the principle of confirmation between averages that underlies breadth analysis.
- **[Divergence](/divergence/)**: the main way the A/D line is used against price.
- **[Trendline](/trendline/)**: trendlines drawn on the A/D line give early warnings.
- **[McClellan Oscillator](/mcclellan-oscillator/)**: a momentum measure built from the same advance and decline data.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Chapter on market breadth.)

## FAQ

**What does a falling A/D line with a rising index mean?**
It means fewer stocks are participating in the rise, so a small group is carrying the index. It is read as a warning that the rally is narrow. It is not a signal to sell by itself, as such divergences can last a long time.

**Is the A/D line a leading indicator?**
Sometimes it turns before the index, which is why it is called leading at market tops. But the lead time is irregular, and it also lags in short-term moves. Treat it as a health check, not a forecast.

**How is the A/D line different from the McClellan Oscillator?**
The A/D line is a running total of net advances. The McClellan Oscillator takes the difference between two exponential averages of net advances, so it measures breadth momentum and swings around zero.

**Can I use the A/D line on a single stock?**
No. It counts many stocks. For single instruments use volume-based tools such as [On-Balance Volume](/on-balance-volume/) instead.

**Where can I find A/D line data?**
Many charting platforms carry exchange and index breadth lines. Different providers count different securities, so pick one source and stay with it.
