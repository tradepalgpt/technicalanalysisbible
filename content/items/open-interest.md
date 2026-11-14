---
slug: open-interest
name: Open Interest
aka: [OI]
type: volume
states: [trend, reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "Daily count of open contracts; no settings"
pairs_with: [volume, trend-following, commitments-of-traders, support-and-resistance]
related: [volume, commitments-of-traders, on-balance-volume, volume-climax, cumulative-volume-delta, relative-volume]
compare: []
glossary: [trend, liquidity, momentum]
wave: 2
reviewed: 14 November 2026
---

Open interest is the total number of derivative contracts, such as futures or options, that are open and not yet closed or settled. It rises when new positions are opened and falls when positions are closed. Traders compare it with price and volume to judge whether a move has fresh money behind it or is driven by closing positions.

## At a glance

| | |
|---|---|
| Type | Derivatives data (not price-based) |
| Best market states | Trend, reversal |
| Weak in | Ranges, and short-term timing |
| Best uses | Confirmation |
| Default settings | None; usually reported once per day |
| Created by | Not attributed to one person |
| Leading or lagging | Mostly confirming; reported with a delay in many markets |

## What is open interest?

Every futures or options contract has a buyer and a seller. Open interest counts contracts (not people) that remain open at the end of the day. It is not the same as volume. Volume counts how many contracts traded during the period. Open interest counts how many are still alive.

An example shows the difference. If a trader opens a new long and another opens a new short with one contract, open interest rises by 1. If a trader who is long sells to a trader opening a new long, open interest does not change, as one position simply passed to another. If both sides are closing existing positions, open interest falls by 1.

Open interest exists only for derivatives such as futures and options. Shares and spot forex have no equivalent number. For futures, exchanges publish it daily, normally with a delay. Intraday estimates exist on some platforms and are less reliable. For crypto derivatives, each exchange reports its own figure, so totals across venues can differ.

No individual is credited with the measure. It is a basic exchange statistic that traders have used alongside price for a long time.

## Formula

There is no formula. The exchange or clearing house counts open contracts. What traders calculate is the change:

Change in open interest = today's open interest - yesterday's open interest

**Worked example.** Open interest was 100,000 contracts yesterday and is 104,000 today. The change is **+4,000**, which means a net 4,000 new contracts were opened. Compare that with price direction to read the move.

Some traders also normalise it, for example as a percentage change over a set number of days, to compare across markets.

## How to read it

The classic reading compares the direction of price with the direction of open interest:

| Price | Open interest | Common reading |
|---|---|---|
| Rising | Rising | New money entering on the long side; trend has support |
| Rising | Falling | Rally driven by short covering; may be weaker |
| Falling | Rising | New money entering on the short side; downtrend has support |
| Falling | Falling | Long liquidation; selling may be running out of fuel |

These are rules of thumb from classic texts, not guarantees. The table says what is consistent with each combination, not what will happen next.

**Divergence.** Price makes a new high while open interest fails to, suggesting fewer new positions behind the move.

**Spikes.** A sudden jump with a sharp price move can mark a build-up of positions that may later unwind sharply.

**Contract rolls.** In futures, open interest shifts from the expiring contract to the next. Look at the combined figure, or the active contract, to avoid misreading a roll as a collapse.

## Best market states

**Trends (good).** Rising open interest in the direction of a trend suggests participation.

**Reversals (useful with care).** Falling open interest as price runs may show a move losing its fuel. Timing is imprecise.

**Ranges (weak).** Open interest drifts and gives little.

**Breakouts (mixed).** A rise in open interest on a breakout suggests new positions are entering. It can also mean traders who are about to be trapped.

**Volatility.** Big price spikes with large open interest changes show forced position changes, such as liquidations.

## Settings

Open interest has no period setting. Choices are about data and display:

| Choice | Effect |
|---|---|
| Single contract or all months combined | Combined data avoids misleading drops at rolls |
| Daily or intraday data | Daily is official; intraday is often an estimate |
| Raw change or percentage change | Percentage makes markets easier to compare |
| Exchange or aggregate (crypto) | Single exchange covers only part of the market |

## Common mistakes

- Confusing open interest with volume.
- Reading a drop at contract expiry as a loss of interest.
- Using it for precise timing. Data is daily and delayed.
- Treating the price and open interest table as certain forecasts.
- Combining numbers from different exchanges without checking they are comparable.
- Looking for open interest in spot forex or shares, where it does not exist.

## Pairs well with

- **[Volume](/volume/)**: volume and open interest together show activity and how many positions remain.
- **[Trend following](/trend-following/)**: rising open interest helps check a trend has participation.
- **[Commitments of Traders](/commitments-of-traders/)**: shows who holds the open positions.
- **[Support and resistance](/support-and-resistance/)**: open interest changes at key levels show whether positions are being added or closed there.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**What is open interest in simple terms?**
It is the number of derivative contracts that are still open. When a new buyer and a new seller create a contract, it rises. When existing holders close out, it falls. It shows how much is at stake in a market.

**What is the difference between open interest and volume?**
Volume counts contracts traded in a period. Open interest counts contracts still open at the end of it. Volume can be huge while open interest barely changes, such as when traders only swap existing positions.

**Does rising open interest mean the market will go up?**
No. Rising open interest means new positions are being opened. Whether price goes up or down depends on which side is more aggressive. It only says new money is entering, not on which side it will win.

**Is open interest available for forex?**
Not for spot forex, which is traded over the counter with no central count. Currency futures have open interest, and the weekly COT report gives some positioning data.

**How often is open interest updated?**
Exchanges normally publish it once a day, with a delay. Some platforms show intraday estimates, which are less reliable. Crypto exchanges often update more often but only for their own contracts.
