---
slug: can-price-action-be-backtested
title: "Can price action be backtested?"
description: Yes, once every rule is written exactly. Turning swings and bars into code, the traps of hindsight and repainting fractals, and what a fair test needs.
query: can price action be backtested
pillar: price-action-guide
publish: 2027-12-13
reviewed: 17 November 2026
guides: [price-action, williams-fractals, swing-highs-lows, pin-bar]
siblings: [price-action-vs-indicators, what-is-price-action-trading]
value: [table, example, verdict]
---

Yes, but only after every rule is written so exactly that a computer, or a stranger, would mark the same swings, bars and levels you do. Most price action as taught is not yet in that form, so the first job of a backtest is translation, not testing.

## Turning judgement into rules

[Price action](/price-action/) relies on words like "strong", "clear" and "key". Each needs a number.

| Loose idea | One exact version |
|---|---|
| Swing high | A high above the highs of the 2 bars on each side ([fractal](/williams-fractals/)) |
| Uptrend | Last two confirmed swing highs and lows both higher |
| Break of structure | A close above the last confirmed swing high |
| Pin bar | Lower wick at least 2/3 of range, body in top third ([pin bar](/pin-bar/)) |
| At support | Bar low within 0.25 ATR(14) of a prior confirmed swing low |
| Strong move | Bar range at least 1.5 x ATR(14) |

These are example definitions, not recommended settings. The point is that once written, two people get the same signals.

## The repainting trap: worked example

A fractal swing high needs two lower highs after it. So on the bar where the high prints, it is not yet a swing.

| Bar | High | Is bar 3 a swing high yet? |
|---|---|---|
| 1 | 101.0 | |
| 2 | 102.5 | |
| 3 | 104.0 | Not known |
| 4 | 103.2 | Not known (one lower high) |
| 5 | 102.8 | Yes, confirmed at the close of bar 5 |

A test that treats bar 3 as a known swing high on bar 3 is using the future. Charting tools that draw the fractal on bar 3 make this easy to miss: the mark looks as though it was there all along. In a backtest, a swing is only usable from the close of its confirmation bar, here bar 5. Our [swing highs and lows](/swing-highs-lows/) guide covers confirmation in more detail.

The same applies to anything built on swings: trend labels, breaks of structure, order blocks and ranges.

## Trades in R, with costs

Each test trade needs the same bookkeeping as a real one. Say a rule gives a long that fills at the ask at 25.40, with a first stop at 24.90 and 1,000 shares.

- 1R = (25.40 - 24.90) x 1,000 = 500.
- A clean stop-out is exactly -1R, -500.
- Commission is added on top of the result. Slippage on the stop, or a gap open below it, makes the loss larger and is recorded as filled.
- Stops can be tightened by rule (for example under each new higher low), never widened.

Daily-bar tests have extra traps: when the stop and target are both inside one bar, the test cannot know which was hit first. A fair test assumes the worse case or uses finer data.

## What a fair test needs

Our [methods page](/methods/) sets the full rules we use. In short:

1. **Fixed rules before looking at results.** Changing a definition after seeing the equity curve is fitting the past.
2. **Enough trades.** We do not publish a figure under 30 trades, or a headline under 100 trades and 24 months.
3. **A random-entry baseline.** Same markets, same stop and target rules, random entry times. The edge is the difference.
4. **A holdout period** read once, after tuning is finished.
5. **Results net of costs, in R**, with gross beside them.

We have not yet published a price action backtest, so this post gives no result. When we do, it will follow those rules, and a result showing no edge will be published too.

## Common mistakes

- Testing on hand-picked charts where the setup "obviously" worked.
- Letting confirmed swings appear before their confirmation bar.
- Ignoring signals that would have been skipped by judgement, then skipping them in live trading inconsistently.
- Trying many variants and reporting the best without saying how many were tried.

## Verdict

Price action can be backtested once its swings, bars and levels are turned into exact rules. The main traps are hindsight labelling and swings that only confirm later. Test in R after costs, against random entries, with a holdout read once. Without that, a price action "edge" is just a set of well-chosen charts.
