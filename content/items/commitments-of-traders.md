---
slug: commitments-of-traders
name: Commitments of Traders (COT)
aka: [COT report, COT data, Commitment of Traders]
type: volume
states: [trend, reversal]
weak_states: [range, breakout]
purposes: [filter]
inventor: Not attributed to one person (published by the US CFTC)
year: Unknown
default_settings: "Weekly data; positions as of Tuesday, released Friday"
pairs_with: [open-interest, market-structure, support-and-resistance, trend-following]
related: [open-interest, volume, tick-volume, absorption, volume-climax, relative-volume]
compare: []
glossary: [momentum, trend, liquidity]
wave: 2
reviewed: 14 November 2026
---

The Commitments of Traders (COT) report is a weekly publication from the US Commodity Futures Trading Commission (CFTC). It shows how large and small participants are positioned in US futures markets. Traders use it as a slow-moving filter to see whether large groups are heavily long or short, and to spot extremes in positioning.

## At a glance

| | |
|---|---|
| Type | Positioning data (not a price indicator) |
| Best market states | Trend, reversal |
| Weak in | Ranges, and short-term timing |
| Best uses | Filter, background context |
| Default settings | Weekly; data as of Tuesday, released Friday |
| Created by | Published by the CFTC; not attributed to one person |
| Leading or lagging | Lagging by design (several days old when released) |

## What is the Commitments of Traders report?

Large traders in US futures markets must report their positions to the regulator once they pass set size limits. The CFTC totals these reports and publishes them as the COT report. It covers commodities, currencies, interest rates and stock index futures traded in the US.

The data is grouped by type of trader. Three common versions exist:

- **Legacy:** splits traders into commercial (hedgers), non-commercial (large speculators) and non-reportable (small traders).
- **Disaggregated:** for physical commodities; splits into producers/merchants, swap dealers, managed money and other reportables.
- **Traders in Financial Futures (TFF):** for financial futures; splits into dealers, asset managers, leveraged funds and others.

Positions are measured on Tuesday and normally released on Friday afternoon, which means the data is already several days old. The CFTC's holiday schedule can move this timing.

Because every long has a matching short, the groups' net positions roughly offset. What traders look at is which group is on which side and how extreme that positioning is compared with its own history.

## Formula

There is no formula to calculate; the report publishes position counts. The numbers traders build from it are simple:

1. **Net position** = long contracts - short contracts, for one group.
2. **Change** = this week's net position - last week's.
3. **Percentile or index** (an optional step): rank the current net position against its range over a past window, such as the last three years, on a 0 to 100 scale.

**Worked example.** A group holds 80,000 long and 50,000 short contracts.
Net position = 80,000 - 50,000 = **+30,000**
If its net position over the past three years ranged from -20,000 to +40,000, the position index is (30,000 - (-20,000)) / (40,000 - (-20,000)) = 50,000 / 60,000 = about **83**.

The window length and the choice of group are up to the user; there is no single standard.

## How to read it

**Extremes.** Some traders watch for a group's net position near the high or low of its range. Extremes among large speculators are sometimes read as crowded trades, though crowded positions can stay crowded for months.

**Commercials versus speculators.** Commercials are hedgers. Their trades often fall against the trend, so they tend to be on the opposite side of speculators. This is a pattern, not a signal.

**Trend following.** Some use managed money positions as trend confirmation. If the trend is up and large speculators keep adding, the trend has participation.

**Changes in positioning.** A shift in net positions while price stalls is sometimes read as an early warning of a turn.

**Limits.** The data is delayed, weekly and limited to US futures. It does not cover spot forex directly, only the matching currency futures. It cannot time an entry.

## Best market states

**Trends (good as context).** It can show whether large groups are pushing the trend or leaning against it.

**Reversals (useful with care).** Extremes in positioning can be a background factor for turns, but timing is poor.

**Ranges (weak).** In a sideways market positioning changes tell little.

**Breakouts (weak).** The weekly delay means a breakout is over before the data arrives.

**Volatility.** Big moves can change positions a lot week to week, which makes thresholds less stable.

## Settings

| Choice | Typical options |
|---|---|
| Report type | Legacy, Disaggregated, TFF |
| Group | Commercial, managed money, leveraged funds and so on |
| Measure | Net position, change, percentile index |
| Lookback for index | 1 to 5 years (user choice) |

A "futures only" or "futures and options combined" version is also available. Pick one and stay consistent.

## Common mistakes

- Using it for short-term timing. It is weekly and delayed.
- Assuming one group is always "smart money". Hedgers have their own motives.
- Mixing legacy and disaggregated groups as if they were the same.
- Treating an extreme as an instant reversal signal. Extremes can last.
- Applying it to markets with no US futures contract.
- Forgetting that positions are as of Tuesday, not Friday.

## Pairs well with

- **[Open interest](/open-interest/)**: shows whether positions are being added or closed across the whole market.
- **[Market structure](/market-structure/)**: price structure supplies the timing that COT lacks.
- **[Support and resistance](/support-and-resistance/)**: a positioning extreme at a key level carries more weight.
- **[Trend following](/trend-following/)**: COT can show whether the trend has large-trader backing.

## Sources

- Briese, Stephen (2008). *The Commitments of Traders Bible*. Wiley.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- US Commodity Futures Trading Commission, Commitments of Traders reports and explanatory notes (published on the CFTC website).

## FAQ

**What is the COT report?**
It is a weekly report from the US CFTC showing how groups of traders are positioned in US futures markets. Traders use it to see where large groups stand and how extreme their positions are compared with the past.

**When is the COT report released?**
Normally on Friday afternoon, US Eastern time, with data as of the previous Tuesday. Holidays can delay release. Because of the lag, it is a background tool, not a short-term signal.

**What is the difference between commercial and non-commercial traders?**
Commercials use futures to hedge business risk, such as a producer locking in a price. Non-commercials are mainly speculators such as funds. The two groups often sit on opposite sides, but this is a tendency, not a rule.

**Can COT data predict price?**
Not reliably on its own. Extreme positioning can mark crowded trades, but those can last a long time. Most traders treat it as a filter or context rather than a timing tool.

**Does COT work for forex?**
Only indirectly. The report covers currency futures traded in the US, not the spot forex market. Many traders use these as a rough guide to positioning, knowing that spot activity is much larger and not covered.
