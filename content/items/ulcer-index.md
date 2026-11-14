---
slug: ulcer-index
name: Ulcer Index
aka: [UI, Martin's Ulcer Index]
type: volatility
states: [volatility]
weak_states: []
purposes: [filter]
inventor: Peter Martin and Byron McCann
year: 1980s
default_settings: "14 periods"
pairs_with: [atr, standard-deviation, historical-volatility, support-and-resistance]
related: [atr, standard-deviation, historical-volatility, normalized-atr, chaikin-volatility, relative-volatility-index]
compare: []
glossary: [drawdown, volatility, downside-risk]
wave: 3
reviewed: 14 November 2026
---

The Ulcer Index measures downside volatility: how deep and how long price has fallen below its recent highs. Unlike standard deviation, it ignores upward moves, because rising prices do not hurt a holder. A higher reading means deeper or longer drawdowns, which is where the name comes from: it measures the "stress" of holding.

## At a glance

| | |
|---|---|
| Type | Volatility (downside risk) indicator |
| Best market states | Volatility; comparing risk across assets |
| Weak in | None specific; it gives no direction or timing |
| Best uses | Filter, risk comparison |
| Default settings | 14 periods |
| Created by | Peter Martin and Byron McCann, 1980s |
| Leading or lagging | Lagging; built from past drawdowns |

## What is the Ulcer Index?

Most volatility measures treat a big rise and a big fall the same. For an investor who is holding a position, that is not how it feels. A sharp rise is welcome, and a long, deep slide causes the worry. The Ulcer Index was designed around this idea. It looks only at how far price sits below its recent peak, and how long it stays there.

Peter Martin and Byron McCann developed the index in the 1980s as a way to measure the risk of investment funds, and described it in their book on Fidelity funds. Martin later used it widely on his own site. It is also used as a denominator in the Martin Ratio, sometimes called the Ulcer Performance Index, which divides return by the Ulcer Index. That ratio is similar in spirit to the Sharpe ratio, but with downside risk in place of standard deviation.

For traders, the Ulcer Index can also be plotted on a chart as an indicator. A rising line shows that the market has been falling further from its highs. A low, flat line shows steady or rising conditions without deep pullbacks.

## Formula

1. For each bar, find the highest close over the last 14 bars (including today).
2. Work out the percentage drawdown from that high:
   R = 100 x (close - highest close) / highest close
   (R is zero when the close is at the high, and negative otherwise.)
3. Square each R value, take the average over 14 bars, then take the square root.

Ulcer Index = square root of ( sum of R-squared over 14 bars / 14 )

**Worked example (with 4 bars to keep it small).** The drawdowns from the running high are 0%, -2%, -4% and -2%.
Squares: 0, 4, 16, 4. Sum = 24. Average = 24 / 4 = 6.
Square root of 6 = about **2.45**

If price had held at its highs, every R would be 0 and the index would be 0. A single deep dip raises it quickly, because squaring gives larger drawdowns extra weight.

Platforms differ slightly. The original method for funds uses the highest close up to each date over the whole period, while indicator versions use a rolling window of 14 bars. Some indicators also use the high of the bar rather than the close. Compare readings only when the method is the same.

## How to read it

**Low and flat.** Price has stayed near its recent highs with only shallow pullbacks. The holder's "stress" has been low.

**Rising.** Price has been pulling back from highs or staying in a drawdown. The deeper and longer the fall, the higher the line.

**Falling after a peak.** Price is recovering, or the earlier low has dropped out of the window.

**Comparing assets.** A common use is to compare the Ulcer Index of two assets over the same period. The one with the lower value had shallower, shorter drawdowns.

**As a filter.** Some traders avoid entering markets with a high Ulcer Index relative to their own past, or use a low reading as a sign of orderly conditions. These are habits rather than proven rules.

The index has no standard overbought or oversold levels. Because it uses percentages, readings are in percent points: an index of 5 roughly means typical drawdowns were of the order of a few percent.

## Best market states

**Volatility assessment (best).** It is designed to show the downside side of volatility in one number.

**Trends.** In a steady uptrend, the index stays low. In a downtrend, it rises and stays high. It does not say which direction the market will go next.

**Ranges.** In a range, price repeatedly drops from range highs, so the index sits at moderate readings. It can be hard to interpret.

**Breakouts and reversals.** Not suited to timing either. It lags, because drawdown has to occur before it registers.

**Risk comparison.** Portfolio and fund comparisons are its original home, and it still works best there.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Period | 14 (default) | Look-back window. Shorter reacts faster, longer is smoother |
| Price used | Close | Some versions use high or low prices |
| Window type | Rolling | Some fund analysis uses the whole period instead |

On weekly or monthly bars, the same period of 14 spans far more time, so the reading will be less noisy and slower. Changing the window changes which drawdowns count, so always state the period when quoting the figure.

## Common mistakes

- Treating it like standard deviation. It ignores upward moves by design.
- Using it for entry or exit timing. It describes past drawdowns, not what happens next.
- Comparing readings with different periods or price types.
- Forgetting it is in percent, so it works well across assets with different price levels, but a 14-bar window on a 5-minute chart means something different from a 14-bar window on a daily chart.
- Assuming a low reading means safety. Calm markets can change quickly.

## Pairs well with

- **[ATR](/atr/)**: ATR shows the size of ranges in price units, and the Ulcer Index shows depth of drawdown in percent.
- **[Standard deviation](/standard-deviation/)**: the conventional measure of spread, which treats up and down moves alike. Comparing the two shows how much of the volatility was on the downside.
- **[Historical volatility](/historical-volatility/)**: an annualised view of volatility to read alongside.
- **[Support and resistance](/support-and-resistance/)**: drawdowns often end at known support levels.

## Sources

- Martin, Peter G. and McCann, Byron B. (1989). *The Investor's Guide to Fidelity Funds*. Wiley.

## FAQ

**What does the Ulcer Index measure?**
It measures downside risk: how far and for how long price has stayed below its recent highs. Only falls from a peak count. Rises are ignored, so it reflects the discomfort of holding rather than total price movement.

**Why is it called the Ulcer Index?**
The name reflects the stress that a long, deep drawdown causes an investor. The authors wanted a measure that captured that worry, rather than treating rises and falls the same way as standard deviation does.

**What is the default Ulcer Index setting?**
Most chart indicators use 14 periods with closing prices. The original fund-analysis method used a longer period. Always check which period your platform uses before comparing numbers.

**How is the Ulcer Index different from standard deviation?**
Standard deviation measures spread around an average, up or down. The Ulcer Index measures only the depth and length of declines from a recent peak. An asset that rises steadily with big jumps could have a high standard deviation but a low Ulcer Index.

**Is a low Ulcer Index good?**
A low value means shallow, short drawdowns over the window, which holders usually prefer. But it only describes the past, and it says nothing about future risk or whether returns were good.
