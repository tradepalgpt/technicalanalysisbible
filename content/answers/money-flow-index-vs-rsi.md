---
slug: money-flow-index-vs-rsi
title: "Money flow index vs RSI: what is the difference?"
description: MFI is a volume-weighted cousin of RSI. How the two formulas differ, a worked calculation on the same bars, and when the extra volume input helps or hurts.
query: money flow index vs rsi
pillar: volume-and-order-flow-guide
publish: 2027-10-20
reviewed: 16 November 2026
guides: [money-flow-index, rsi, volume]
siblings: [accumulation-distribution-vs-obv, what-is-volume-divergence]
value: [chart, table, example, verdict]
chart: money-flow-index
---

The money flow index (MFI) is built like RSI but weights each bar by volume. RSI compares the size of up closes with down closes; MFI compares the money flow, typical price times volume, on up bars with down bars, so a heavy-volume bar moves it more.

## The two formulas

[RSI](/rsi/), from J. Welles Wilder (1978):

1. Change = close - previous close
2. Average gain and average loss over N bars (Wilder smoothing, default 14)
3. RS = average gain / average loss
4. RSI = 100 - 100 / (1 + RS)

[Money flow index](/money-flow-index/), by Gene Quong and Avrum Soudack:

1. Typical price = (high + low + close) / 3
2. Raw money flow = typical price x volume
3. If typical price is above the previous typical price, the bar's money flow is positive; if below, negative
4. Money ratio = sum of positive flow over N / sum of negative flow over N (default 14)
5. MFI = 100 - 100 / (1 + money ratio)

The shape is the same. The differences are the input (typical price and [volume](/volume/) rather than close) and that MFI sums whole money flows rather than averaging price changes.

## Worked example on the same bars

Five bars, using a 4-bar lookback to keep the sums small. RSI is shown with simple sums, not Wilder smoothing, so the two are comparable.

| Bar | High | Low | Close | Volume | Typical price | Money flow | MFI direction | Close change |
|---|---|---|---|---|---|---|---|---|
| 1 | 10.0 | 9.0 | 9.5 | 1,000 | 9.5000 | 9,500.00 | - | - |
| 2 | 10.4 | 9.4 | 10.2 | 1,500 | 10.0000 | 15,000.00 | Positive | +0.70 |
| 3 | 10.3 | 9.6 | 9.8 | 3,000 | 9.9000 | 29,700.00 | Negative | -0.40 |
| 4 | 10.8 | 10.0 | 10.6 | 800 | 10.4667 | 8,373.33 | Positive | +0.80 |
| 5 | 10.9 | 10.3 | 10.4 | 2,500 | 10.5333 | 26,333.33 | Positive | -0.20 |

MFI over bars 2 to 5:

- Positive flow = 15,000.00 + 8,373.33 + 26,333.33 = 49,706.67
- Negative flow = 29,700.00
- Money ratio = 49,706.67 / 29,700.00 = 1.6736
- MFI = 100 - 100 / 2.6736 = 62.60

RSI over the same four changes:

- Gains = 0.70 + 0.80 = 1.50; losses = 0.40 + 0.20 = 0.60
- RS = 1.50 / 0.60 = 2.5
- RSI = 100 - 100 / 3.5 = 71.43

Two things drive the gap. Bar 3, the one down bar for MFI, carried the most volume, 3,000, so it weighs heavily. And bar 5 closed lower, which counts as a loss for RSI, but its typical price rose, so MFI counts it as positive flow. Same bars, different stories.

## Side-by-side summary

| | RSI | Money flow index |
|---|---|---|
| Inputs | Close | High, low, close, volume |
| Default period | 14 | 14 |
| Common overbought / oversold | 70 / 30 | 80 / 20 (some use 70 / 30) |
| Smoothing | Wilder averaging | Plain sums over N |
| Needs real volume? | No | Yes, to mean what it claims |
| Reacts to one heavy bar | No | Yes |
| Works on spot forex? | Yes | Only with tick volume as a proxy |

## When the volume input helps or hurts

It helps when volume carries information: on stocks and futures, a down day on heavy volume says more than a down day on light volume, and MFI reflects that.

It hurts when volume is noisy or not real. One heavy day from an index rebalance can swing MFI with no change in sentiment. On forex tick volume, MFI weights by quote activity, which mostly tracks volatility. MFI also tends to be jumpier than RSI because it uses plain sums rather than smoothing.

## Common mistakes

- Assuming MFI is better because it has more inputs.
- Using RSI's 70 / 30 levels on MFI without checking which levels your platform or source uses.
- Treating MFI on forex as if it showed money flowing in or out.

## Verdict

MFI is RSI with volume weighting and a typical-price input. On markets with real volume it adds a view of how heavy the up and down bars were; on forex or thin markets it mostly adds noise. Neither is better in general. Choose by market, and test either before relying on its levels.
