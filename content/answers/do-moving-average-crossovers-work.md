---
slug: do-moving-average-crossovers-work
title: Do moving average crossovers work?
description: Do moving average crossovers work? They catch big trends late and lose small amounts in ranges. The research, and a worked run of trades in R.
query: do moving average crossovers work
pillar: moving-averages
publish: 2027-05-19
reviewed: 16 November 2026
guides: [moving-average-crossover, trend-following, adx]
siblings: [what-is-a-golden-cross, 9-ema-vs-20-ema]
value: [chart, table, example, verdict]
chart: moving-average-crossover
---

Moving average crossovers catch large trends, always late, and lose small amounts repeatedly when price goes sideways. Whether that adds up to a gain depends on the market, the period, costs and how often big trends come. The research is mixed, and a crossover alone is not a reliable edge.

## What a crossover system is betting on

A [moving average crossover](/moving-average-crossover/) buys when a fast average crosses above a slow one and sells when it crosses back. It is a [trend-following](/trend-following/) rule. It will never buy the low or sell the high. It aims to capture the middle of big moves.

That means the system's results come from a simple trade-off:

- **In trends:** a few large winners.
- **In ranges:** many small losers, each one a cross that reversed (a whipsaw).

The system works, in the sense of making money over a period, only if the trends are big enough to pay for all the whipsaws plus costs.

## A worked run of trades

A made-up year on a daily chart with a 20/50 SMA crossover. Each trade risks 1R (the stop is set from the slow average at entry).

| Trade | Market state | Result |
|---|---|---|
| 1 | Range | −1.0R |
| 2 | Range | −0.6R |
| 3 | Range | −1.0R |
| 4 | Trend | +4.5R |
| 5 | Range | −0.8R |
| 6 | Range | −1.0R |
| 7 | Choppy trend | +0.4R |
| 8 | Range | −1.0R |

Total: −0.5R before costs. Two of eight trades made money, and one large winner paid for most of the losers but not all of them. Change trade 4 to +7R (a bigger trend) and the year is clearly positive. Remove it (no big trend that year) and it is clearly negative.

The numbers are invented, but the shape is typical of crossover results: low hit rate, a few large winners, and an outcome that depends heavily on whether a big trend came along. That makes short track records very misleading in both directions.

## What the research says

The best-known study is Brock, Lakonishok and LeBaron (1992), "Simple Technical Trading Rules and the Stochastic Properties of Stock Returns", in the Journal of Finance. It tested moving-average rules on a long history of the Dow and reported results unlikely to be chance in that sample.

Sullivan, Timmermann and White (1999), also in the Journal of Finance, revisited this with a method that accounts for how many rules had been tried on the same data. Their work found that the best rules' apparent edge weakened in the later years after the original sample. That is the problem with all crossover research: there are thousands of possible pairs, and some will look good on any history.

The trend-following literature in futures is larger, but it usually involves many markets, risk sizing and exits that go well beyond a simple crossover. It is not evidence that a 20/50 cross on one stock will work.

We have not tested crossover rules ourselves yet. When we do, the results will follow our [methods](/methods/).

## What changes the results most

1. **Market behaviour.** Markets that trend for long stretches suit crossovers better than markets that mostly range.
2. **The slow period.** Longer slow averages trade less, whipsaw less and enter later.
3. **Costs.** A fast crossover on a short timeframe can trade hundreds of times a year. Spread and commission add up.
4. **Filters.** Taking signals only when a trend filter agrees (for example [ADX](/adx/) above a level, or the slow average clearly sloping) cuts whipsaws and some good trades.
5. **Exits.** Exiting on the opposite cross gives back a lot of profit at the end of each trend. Trailing stops change the shape of results.

Note what is not on the list: the type of average. Swapping SMA for EMA or Hull changes the signals a little. It rarely changes whether a rule makes or loses money.

## What the chart shows

Our chart shows a fast/slow crossover drawn by our own indicator code on real daily data. Look at two things: how far price had already moved from its turn when each cross came, and how many crosses happened during sideways stretches. It is a teaching example, not a test result.

## How to test a crossover honestly

- Fix the periods before testing. Do not search for the best pair.
- Fill at the next bar's open after the signal, not at the signal close.
- Include spread, commission and slippage.
- Test on several markets and a holdout period you have not looked at.
- Compare with a simple baseline, such as holding the market or random entries with the same exits.
- Look at the worst losing streak, not just the total. Crossover systems can lose for a long time.

## Verdict

Moving average crossovers do what they are designed to do: get you into big trends late and out late. Whether that is worth it depends on the market and period, and the published evidence does not show a reliable edge for any one pair. A crossover can be the skeleton of a trend system; on its own, with no filter and no cost control, it usually is not enough. More in [the moving averages guide](/guide/moving-averages/).
