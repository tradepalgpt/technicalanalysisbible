---
slug: what-does-volume-tell-you-about-a-breakout
title: What does volume tell you about a breakout?
description: Rising volume on a breakout suggests more traders are taking part. How to measure it, why it means less in forex and crypto, and how to use it as a filter.
query: breakout volume confirmation
pillar: chart-patterns
publish: 2027-02-24
reviewed: 16 November 2026
guides: [volume, relative-volume, tick-volume, breakout-trading]
siblings: [what-is-a-false-breakout, should-you-wait-for-a-retest-after-a-breakout]
value: [table, example, verdict, chart]
chart: volume
---

Volume tells you how many traders took part in the break. A breakout on clearly higher volume than usual suggests real buying or selling behind it; one on normal or light volume is more open to doubt. It is a useful filter in stocks and futures, a rougher one in forex and crypto, and never a certainty.

## The classic rule

Edwards and Magee, and most books since, describe a valid breakout as one that comes with a clear rise in [volume](/volume/). The reasoning is plain. A level held because enough traders defended it. For price to move through it and stay through, a lot of new orders need to arrive. Volume is a count of that activity.

A break on light volume may just be a few orders in a quiet market pushing through a level no one was defending that day. When normal trading returns, price may fall back.

## How to measure "high volume"

Raw volume is hard to read because it varies from market to market and over time. Traders compare it with its own average.

- **[Relative volume](/relative-volume/):** today's volume divided by the average of the last 20 or 50 bars. A reading of 1.0 is normal; 2.0 is twice normal.
- **Time-of-day adjustment:** on intraday charts, volume is naturally higher at the open and close. Compare the breakout bar with the same time on previous days, not with the bar before it.
- **Volume in the pattern:** in many textbook patterns, volume shrinks as the pattern forms, then expands on the break. A drop in volume during a flag or triangle is part of the classic picture.

There is no agreed threshold. Some traders use 1.5 times average, some use 2 times. Any threshold is a choice that trades fewer false breaks for more missed ones.

## Volume by market

| Market | What "volume" is | How useful for breakouts |
|---|---|---|
| Stocks | Shares traded on exchanges, consolidated | Most useful: a real count |
| Futures | Contracts traded on one exchange | Useful, but check the front contract at roll times |
| Spot forex | Usually [tick volume](/tick-volume/): a count of price changes from one broker | Rough proxy for activity |
| Crypto | Units traded on one exchange | Partial: trading is spread across many venues |
| Index (cash) | Often not shown, or the sum of members | Use futures or a tracking fund instead |

Tick volume tends to rise and fall with real activity, so it is not useless, but it is one broker's count and not a measure of the whole market.

## What volume does not tell you

- **Direction.** Heavy volume on a breakout bar that closes back inside the pattern is a sign of a fight that sellers won, not of a healthy break.
- **Who is trading.** High volume can be new buyers, or short sellers covering, or stops being hit. All three push price the same way for a while, but only the first adds lasting demand.
- **The future.** Plenty of high-volume breakouts fail and plenty of quiet ones run. Volume shifts the odds in the textbook account; it does not settle them.

We have not tested volume as a breakout filter ourselves.

## Worked example in R

This is an illustration with round numbers, not a real trade.

A share has a flat top at 30.00 for two months. Its 20-day average volume is 2 million shares. On two separate occasions, it closes above 30.

**Break 1.** Closes at 30.40 on 1.8 million shares: relative volume 0.9. The bar closes in the lower half of its range.

**Break 2.** Closes at 30.50 on 4.6 million shares: relative volume 2.3. The bar closes near its high.

A trader with a volume filter of 1.5 skips break 1 and takes break 2.

- Entry at next open: 30.60. Stop below the last swing low in the pattern: 28.40. Risk: 2.20.
- Measured target, from a pattern height of 4: 34.00. Reward: 3.40. **1.5R.**

The filter does not change the R of the trade taken. What it changes is which trades are taken. If break 1 had failed and break 2 worked, the filter saved a 1R loss. If break 1 had been the start of the move, it cost a winning trade. Only a record of many trades can say which happens more on your market.

## Using volume sensibly

1. **Use relative volume,** not raw numbers.
2. **Look at the close** of the breakout bar as well as its volume.
3. **Be more cautious with tick volume** and single-exchange crypto volume.
4. **Write the threshold down** before trading, and keep it.
5. **Remember the other signs** of a weak break: a long wick back into the pattern, a break straight into a higher-timeframe level, a thin session. The [false breakout](/answers/what-is-a-false-breakout/) answer lists them.

## Verdict

Volume tells you whether a breakout drew in more traders than usual. A close beyond the line on clearly above-average volume is a better-supported break than one on a quiet day, in the textbook account and in common sense. It is most meaningful in stocks and futures, rougher in forex and crypto, and it shifts the odds rather than settling them. Use it as a filter with a written threshold, as part of a [breakout plan](/breakout-trading/). See the [chart patterns guide](/guide/chart-patterns/) for the full breakout section.
