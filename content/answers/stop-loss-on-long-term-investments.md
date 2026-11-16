---
slug: stop-loss-on-long-term-investments
title: "Should you use a stop loss on long-term investments?"
description: Long-term investors are split on stops. The trade-offs of wide stops, position limits and no stop, worked in R, with gaps counted.
query: should you use a stop loss on long term investments
pillar: stop-losses-and-risk-guide
publish: 2027-09-08
reviewed: 16 November 2026
guides: [stop-loss, position-sizing, trailing-stop]
siblings: [stop-loss-when-market-gaps, how-much-to-risk-per-trade]
value: [table, example, verdict]
---

It depends on what controls your risk. Short-term traders rely on a stop loss; many long-term investors instead control risk with small position sizes and diversification. Either way, something must cap the loss on each holding, and a wide stop or a strict size limit are the two common ways.

## Why investors disagree

A [stop loss](/stop-loss/) exits when price reaches a level that says the idea is wrong. For a trade held days or weeks, that is clear. For a holding meant to last years, normal swings can be large. A share can fall 20% or 30% in a bad year and still recover, and a stop set tight enough to avoid that will sell many sound holdings at the low.

On the other side, some holdings never recover. A stop or a size limit is what stops one of those from doing serious damage.

## The main approaches

| Approach | How risk is capped | Strength | Weakness |
|---|---|---|---|
| Tight stop (a few percent) | Exit on any modest fall | Small loss each time | Sold out often by normal swings; many round-trip costs |
| Wide structure stop | Exit below a major swing low or long-term level | Holds through normal swings | Each loss is a large price move; size must be small |
| [Trailing stop](/trailing-stop/) on a long timeframe | Exit if a weekly close falls a set distance from the high | Protects gains in long trends | Gives back a lot before exiting |
| No stop, strict size limit | Each holding is a small share of the portfolio | Never sold at a low by noise | Loss on a failed holding can be most of its value |
| No stop, no size limit | Nothing | None | One collapse can sink the portfolio |

The last row is the one to avoid. The others are all ways of controlling the same risk.

## Worked example: wide stop vs size limit

A portfolio of 50,000. The investor buys a share at 100.00.

**Option A: wide stop, sized in R.**
The stop goes at 80.00, below a major multi-year low. Risk 1% = 500. The fill was 100.00 (the price actually paid), so the loss per share at the stop is 20.00.
- Size = 500 / 20.00 = 25 shares (2,500 invested). 1R = 25 x 20.00 = 500, fixed at the fill.
- Commission of 0.20 per share round trip is shown on top of the result, never added to 1R.
- Clean stop-out: 25 x 20.00 = 500, exactly -1R. With commission: 505, -1.01R.
- If results cause a gap and the share opens at 70.00: loss on price = 25 x 30.00 = 750 = -1.50R. With commission: 755, -1.51R.

**Option B: no stop, size limit.**
The investor caps each holding at 5% of the portfolio: 2,500, or 25 shares.
- If the share falls to 50.00 and the investor still holds, the paper loss is 25 x 50.00 = 1,250, or 2.5% of the portfolio.
- If the company fails, the loss is close to 2,500, or 5% of the portfolio.

Both options keep any one holding from doing serious damage. Option A caps the loss at about 1% unless a gap jumps the stop. Option B accepts a bigger worst case per holding, but never sells on a dip that later recovers.

## Things that matter more for long holdings

- **Gaps.** Results and news gaps are common for single shares. A wide stop can still be jumped, as the 70.00 example shows. [Position sizing](/position-sizing/) is what keeps a gap from mattering.
- **Diversification.** A stop on one holding does little if all holdings fall together. Spread across sectors and markets.
- **Costs.** Tight stops on long-term holdings mean many exits and re-entries, each paying spread, commission and sometimes tax.
- **Funds versus single shares.** A broad index fund cannot fall to zero the way a single company can. Many investors use stops or size limits on single shares and neither on broad funds. That is a choice about risk, not a rule.

## Rules either way

- Decide the exit or the size limit before buying.
- Never widen a stop after buying. If 80.00 was the level that proves the idea wrong, moving it to 70.00 on the way down doubles the loss you accepted. Stops only tighten.
- A long-term trailing stop should only rise.
- Record results in R or as a percent of the portfolio, so a loss on one holding can be compared with others.

## Common mistakes

- Using a short-term stop distance on a long-term holding.
- Using no stop and no size limit, then adding to a falling holding without a plan.
- Treating a wide stop as a reason to buy more shares. The wider the stop, the fewer shares.
- Assuming a stop is a promised exit price. Gaps fill at the open.

## Verdict

Long-term investors do not have to use a stop, but they do need something that caps the loss on each holding. A wide stop sized in R, a long-timeframe trailing stop and a strict position limit all work; no stop and no limit does not. Choose before buying, never widen, and plan for gaps.
