---
slug: is-connors-rsi-better-than-rsi
title: Is Connors RSI better than standard RSI?
description: Connors RSI is not a better RSI, but a different tool built for very short-term pullbacks. What its three parts add, a worked example, and what it costs.
query: connors rsi vs rsi
pillar: rsi-and-momentum-oscillators
publish: 2027-04-16
reviewed: 16 November 2026
guides: [connors-rsi, rsi, laguerre-rsi]
siblings: [best-rsi-period-for-swing-trading, stochastic-rsi-vs-rsi-difference]
value: [chart, table, example, verdict]
chart: connors-rsi
---

Connors RSI is not a better version of RSI; it is a different tool for a narrower job. It averages a 3-period RSI, a measure of the current up or down streak, and the size of today's move against the last 100 days. It is built for timing very short-term pullbacks, and it is noisy for anything else.

## What Connors RSI is

[Connors RSI](/connors-rsi/) comes from Larry Connors' research firm. It combines three parts, each scaled 0 to 100, and averages them:

Connors RSI = (RSI(3) of price + RSI(2) of streak + percent rank of 1-day change over 100 days) / 3

1. **RSI(3) of price.** A standard [RSI](/rsi/), but with a 3-bar period. Very fast.
2. **Streak RSI(2).** Count consecutive up closes (+1, +2, +3...) or down closes (-1, -2, -3...), with 0 for an unchanged close. Take a 2-period RSI of that streak number.
3. **Percent rank.** Today's one-day percentage change, ranked against the last 100 days' changes. 5 means today's move was smaller (more negative) than 95 per cent of them.

The usual levels are 90 and 10, or more extreme ones such as 95 and 5.

## What each part adds

| Part | What it measures | What standard RSI(14) misses |
|---|---|---|
| RSI(3) | Very short-term gain-loss balance | Short dips; RSI(14) barely moves |
| Streak RSI(2) | How long the current run has lasted | Duration of a run |
| Percent rank | How unusual today's move is | Single-day size against recent history |

Standard RSI(14) answers "how one-sided were the last three weeks?". Connors RSI answers "how stretched is the last few days' pullback, given how long it has run and how big today's drop was?". Those are different questions.

## A worked example

A share in a long uptrend has four down days in a row:

| Day | Close | Change |
|---|---|---|
| 0 | 100.00 | |
| 1 | 99.20 | -0.8% |
| 2 | 98.60 | -0.6% |
| 3 | 97.80 | -0.8% |
| 4 | 96.50 | -1.3% |

On day 4:

- **RSI(14)** has dropped from about 60 to about 45. An ordinary pullback; not oversold.
- **RSI(3)** is near 5 to 10: three of the last three changes were losses.
- **Streak** = -4. The 2-period RSI of a streak that has gone -1, -2, -3, -4 is close to 0, because the streak number has fallen every day.
- **Percent rank:** suppose a -1.3% day is lower than 92 of the last 100 days' changes. Rank = 8.

Connors RSI ≈ (8 + 2 + 8) / 3 = **6**. Below 10: very oversold on its scale.

So on the same day, RSI(14) says "normal pullback" and Connors RSI says "extreme". Both are right about what they measure. Connors RSI is specifically sensitive to a run of down days of growing size, which is what a short-term pullback trader wants to find.

## What it costs

- **Noise on longer holds.** Connors RSI reacts to the last few days. For a trade held three weeks, it measures the wrong span.
- **Three settings.** RSI period, streak period and rank period. Each is another way to fit the past by accident.
- **It needs a trend filter.** Used alone, "very oversold" also describes the early stages of a real fall. Published uses pair it with a long-term trend filter, such as price above its 200-day average, and short holding periods.
- **The research is mostly its authors'.** Most published material on Connors RSI comes from Connors Research itself. We have not tested it, so we report no results. Treat any claimed edge as something to check independently, on your own markets and on data the rules were not designed on.
- **Platform versions vary.** The percent-rank step can count ties differently, and some versions rank the change in points rather than per cent. Check the exact formula before comparing values.

## How it compares with other "better RSIs"

Connors RSI is one of several indicators that try to fix something about standard RSI. Each changes one thing:

- **[Laguerre RSI](/laguerre-rsi/)** replaces the lookback window with a four-stage filter, to react faster for the same smoothness. It often pins at 0 or 1.
- **Stochastic RSI** ranks RSI in its own range; much faster, much noisier. [Stochastic RSI vs RSI](/answers/stochastic-rsi-vs-rsi-difference/) covers it.
- **Connors RSI** adds streak length and single-day size; built for very short pullbacks.

None removes the basic trade between speed and noise. Each picks a different point on it.

## When to choose which

| You want | Better choice |
|---|---|
| A general momentum gauge on daily charts | RSI(14) |
| Trend-band reading (pullbacks to 40 to 50) | RSI(14) |
| Timing 1 to 5 day pullbacks in an established uptrend | Connors RSI or a short RSI such as RSI(2) |
| Fewest settings to tune | RSI |
| Divergence | RSI(14); Connors RSI is too fast for clean peaks |

If you like the idea behind Connors RSI but want fewer moving parts, a plain RSI(2) with extreme levels covers much of the same ground. [What is the best RSI period for swing trading?](/answers/best-rsi-period-for-swing-trading/) discusses that approach.

## Verdict

Connors RSI is not better than RSI; it is a specialised short-term pullback tool. It adds streak length and single-day size, which makes it very sensitive to runs of down days, and that is exactly what short-term mean-reversion traders look for. It comes with three settings, a strong dependence on a trend filter, and research mostly from its own authors. For general momentum reading, standard RSI(14) remains the better default.
