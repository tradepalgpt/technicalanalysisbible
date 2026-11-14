---
slug: retail-sentiment
name: Retail Sentiment (positioning)
aka: [retail positioning, client sentiment, long/short ratio, retail long short ratio, crowd positioning]
type: breadth-sentiment
states: [reversal]
weak_states: [trend]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "No standard; extremes such as 70% or more of accounts on one side are often used as a rough flag"
pairs_with: [support-and-resistance, divergence, commitments-of-traders, put-call-ratio]
related: [commitments-of-traders, put-call-ratio, fear-and-greed-index, currency-strength-meter, open-interest]
compare: []
glossary: [trend, divergence, overbought, oversold, momentum]
wave: 3
reviewed: 14 November 2026
---

Retail sentiment, or retail positioning, is a measure of how small private traders are placed in a market, usually the share of accounts that are long and the share that are short. Some traders read an extreme as a contrarian warning, on the idea that the crowd is often on the wrong side near a turn. The data covers a sample, not the whole market.

## At a glance

| | |
|---|---|
| Type | Sentiment (positioning) |
| Best market states | Reversal, as a contrarian filter near turning points |
| Weak in | Strong trends, where the crowd can stay on one side for a long time |
| Best uses | Filter |
| Default settings | None. Extremes such as 70% on one side are a rough rule of thumb |
| Created by | Not attributed to one person |
| Leading or lagging | Positions are current, but the signal is used loosely as a leading hint |

## What is retail sentiment?

Retail traders are individuals who trade for themselves, as opposed to banks, funds and dealers. Some brokers and data providers publish how their retail clients are positioned in each market, for example "68% of accounts are long, 32% are short". Charting sites and market data services show the same figures, often as a bar or a ratio.

The common use is contrarian. The reasoning goes that when most small traders are on one side, the market has often already moved a long way, so the room for the crowd to be right is smaller. Where most clients are long, a fall is considered more likely than a rise. This is a market belief widely shared among traders, not a rule.

There is no academic consensus that these ratios predict returns, and any findings depend on the provider, the market and the period studied. Treat the data as one input to a wider view of price, not as a standalone signal.

## Formula

Retail sentiment has no single formula because each provider chooses what to count.

Share long = long positions / (long positions + short positions) x 100
Share short = 100 - share long

Some sources report the number of accounts, others report the size of the positions, and others report the ratio of longs to shorts directly (long / short). These can show quite different pictures for the same market.

**Worked example.** A provider reports 700 long accounts and 300 short accounts.
Share long = 700 / (700 + 300) x 100 = **70%**
Share short = **30%**
Long to short ratio = 700 / 300 = 2.33

Someone reading this contrarian-style would note that the crowd is clearly long, and would look for price evidence of a top before acting on it.

Note: the figures come from a sample of one provider's clients. Another provider can show a different split on the same day, and neither one is the whole market.

## How to read it

**Extreme readings.** A lopsided split, such as 70% or more on one side, is the usual flag. The exact threshold is a personal choice, since no standard exists.

**Contrarian reading.** A crowd that is heavily long is treated as a caution on further gains, and a crowd that is heavily short is treated as a caution on further falls.

**Change over time.** Some traders watch the direction of change. A crowd that keeps adding to losing positions as price moves against it is a different picture from a crowd that is flat.

**Agreement between providers.** If several sources show a similar lean, the signal looks more consistent. If they disagree, the sample is a weak guide.

**Needs price confirmation.** Because the crowd can stay wrong for a long time, many traders only act on an extreme when price shows a turn at a level, for example a break of structure or a failed breakout.

## Best market states

**Reversals (best, with price confirmation).** An extreme next to a clear level, plus a price signal, is the setting where the contrarian idea is most often used.

**Trends (weak).** In strong trends, traders trying to pick the top or bottom pile into one side, and a crowd that is consistently counter-trend can stay that way for a long period. A contrarian reading against a trend has often been costly.

**Ranges (mixed).** In a range, extremes can line up with the edges, but the data lags and changes slowly. It does not give a timing signal.

**Volatility.** Around big news events, positions can shift quickly, so a stale reading may mislead.

## Settings

| Item | Choice | What it does |
|---|---|---|
| Threshold | 60%, 70% or 80% | Higher thresholds flag fewer but more lopsided readings |
| Basis | Accounts or position size | Account counts can differ from the size of money behind them |
| Time frame | Current, daily or weekly change | Slower changes show broad positioning; fast changes are noisier |
| Source | One provider or several | Several sources reduce the risk of one skewed sample |

There is no tested best setting. If you use thresholds, keep a written rule and test it on past data from the same provider before relying on it.

## Common mistakes

- Treating the figure as the whole market. It is a sample of one provider's clients.
- Acting on an extreme alone. The crowd can stay wrong for weeks.
- Fighting a strong trend because the crowd is on the other side of it.
- Comparing data from two providers who count accounts and positions differently.
- Ignoring that the data may be stale or delayed.
- Reading it as a forecast. It shows positioning, not future price.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: an extreme next to a known level is easier to act on than one in open space.
- **[Divergence](/divergence/)**: a crowd leaning one way while momentum fades gives a combined warning.
- **[Commitments of Traders](/commitments-of-traders/)**: positions of large traders in futures give a view that is not retail.
- **[Put/call ratio](/put-call-ratio/)**: a different sentiment gauge for comparison.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on contrarian opinion and sentiment indicators in general; it does not cover broker client data.)

## FAQ

**What is retail sentiment?**
It is a measure of how private traders are positioned, usually the percentage of accounts that are long and short in a market. It comes from a provider's sample of clients, not from the whole market.

**Is retail sentiment a contrarian indicator?**
Many traders use it that way, on the belief that small traders are often wrong at extremes. There is no strong academic consensus that it works, and it can fail for long periods in a trend. Use it with price confirmation.

**Where does retail sentiment data come from?**
It comes from firms that can see their own clients' positions, and from data services that collect or display that information. Because each source uses its own sample, two sources can show different splits.

**What level counts as an extreme?**
There is no standard. Many traders use 70% or more on one side as a rough guide, and some use 80%. Pick a rule, write it down and test it on past data from the same source.

**Can I use retail sentiment on its own?**
It is better as a filter than as a trigger. The crowd can stay on one side while price keeps moving against it. Most traders combine it with price structure, such as a key level or a failed breakout.
