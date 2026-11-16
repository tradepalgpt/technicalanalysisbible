---
slug: do-chart-patterns-work-on-crypto
title: Do chart patterns work on crypto?
description: Chart patterns can be drawn on crypto like any market, but 24/7 trading, high volatility and scattered volume change how they behave. What to adjust.
query: do chart patterns work on crypto
pillar: chart-patterns
publish: 2027-02-15
reviewed: 16 November 2026
guides: [false-breakout, volume, price-gaps]
siblings: [do-chart-patterns-work, best-timeframe-for-chart-patterns]
value: [table, example, verdict]
---

Chart patterns can be drawn on crypto exactly as on any other market, and many traders use them there. But crypto differs in ways that matter: it trades all week so gaps barely exist, it moves fast so false breakouts are frequent, and volume is split across many exchanges. Whether patterns predict anything there is untested by us.

## What is the same

A swing is a swing. A head and shoulders, a double bottom, a flag or a triangle can be drawn on a bitcoin chart with the same rules as on a share. The stories behind them, such as buyers failing at a level or a trend pausing, apply to any market where people trade.

Crypto is also heavily traded by people who use technical analysis, so popular levels and patterns are widely watched. That can make obvious lines more important, and also more crowded with stop orders.

## What is different

| Feature | Stocks | Crypto | What it means for patterns |
|---|---|---|---|
| Trading hours | Sessions with an overnight close | Every hour, every day | Gaps, islands and gap fills barely exist on spot charts |
| Volatility | Moderate for large shares | High | Patterns are larger in % terms; stops are wider |
| Volume | One main exchange, consolidated | Split across many venues | One exchange's volume is a partial view |
| Daily close | Fixed by the exchange | Chosen by the platform (often midnight UTC) | Daily candles and patterns differ by platform |
| News | Scheduled (earnings) | Constant and unscheduled | Any pattern can be broken by a single headline |
| Leverage | Limited for most traders | Often high on derivatives | Forced liquidations cause sharp spikes through levels |

### Gaps

On a spot crypto chart, one bar's close is almost always the next bar's open, so true gaps are rare. Futures that close at weekends can gap, and some traders watch those gaps. But "gaps always fill" logic from stocks does not transfer cleanly, and the [price gaps](/price-gaps/) guide's four-type scheme was built on stocks.

### False breakouts

High volatility and leveraged positions mean prices often spike through obvious levels and snap back as stop orders and liquidations fire. A [false breakout](/false-breakout/) is common anywhere; in crypto, wicks through levels can be especially long. Traders often respond by requiring a close beyond the line on a higher timeframe, or by waiting for a retest.

### Volume

The [volume](/volume/) rules in classic books assume one central count of shares traded. Crypto volume is spread across many exchanges, and some reported volume has been questioned over the years. A breakout on high volume at one exchange tells you something, but it is not the whole market.

## Worked example in R

This is an illustration with round numbers, not a real trade.

A cryptocurrency trades in a rectangle between 2,000 and 2,400 for six weeks. Daily average true range is 120.

It closes at 2,450. Entry is the next daily open, 2,455.

- Measured target: 2,400 + 400 = 2,800. Reward: 345.
- **Stop just inside the box at 2,340** (about one ATR below entry). Risk: 115. **3.0R.**
- **Stop at the middle of the box, 2,200.** Risk: 255. **1.4R.**

Now compare a share in a rectangle from 50 to 60 with a daily range of 1.00. The stop just inside the box might be 1.20 below entry, about 1.2 ATR. In crypto, one ATR is a much larger share of the pattern's height. A stop that sits a sensible distance inside the pattern for a share can be inside normal daily noise for a cryptocurrency.

The practical adjustment: measure stops in ATR, not in fixed percentages borrowed from other markets, and expect more of them to be hit by wicks.

## Adjustments traders commonly make

1. **Use a daily or higher chart for the main pattern.** Lower timeframes in crypto are noisy and the costs of frequent trading add up.
2. **Agree on a daily close.** Use the same platform and close time every time, or your patterns will change.
3. **Wait for a close, and often a retest.** Wicks through levels are common.
4. **Size smaller.** Wider stops in price terms mean smaller positions for the same R.
5. **Check funding and liquidation data if you use it.** Crowded leveraged positions can drive moves through levels in either direction.

## What we do not know

We have not tested chart patterns on crypto. Our current testing data includes bitcoin on daily bars, as described on our [methods page](/methods/), but no chart-pattern study has been run. Crypto has a much shorter history than stocks, so samples for slow patterns, such as a head and shoulders on a weekly chart, are small whoever tests them.

## Verdict

Chart patterns can be used on crypto as a way to plan trades: a trigger line, a stop and a target in R. Expect more false breakouts, wider stops, almost no gaps, and less reliable volume than in stocks. Adjust stops for volatility, use one consistent daily close, and treat untested claims about crypto pattern reliability with caution. For the general picture, see [Do chart patterns work?](/answers/do-chart-patterns-work/) and the [chart patterns guide](/guide/chart-patterns/).
