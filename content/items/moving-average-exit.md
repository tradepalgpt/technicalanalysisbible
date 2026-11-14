---
slug: moving-average-exit
name: Moving Average Exit
aka: [MA exit, Moving average trailing exit, Close below the moving average]
type: stop-exit
states: [trend]
weak_states: [range]
purposes: [exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "Exit when price closes beyond a 20-period EMA or 50-period SMA against the trade"
pairs_with: [exponential-moving-average, simple-moving-average, trailing-stop, profit-target]
related: [moving-average-crossover, chandelier-exit, trailing-stop, atr-stop, scaling-out, trend-following]
compare: []
glossary: [whipsaw, lagging-indicator, trailing-stop]
wave: 2
reviewed: 14 November 2026
---

A moving average exit closes a trade when price closes on the wrong side of a chosen moving average, such as the 20-period exponential average. It lets a winning trend trade run while the trend holds, and it ends the trade when the trend loses its path. It lags, and it gives back profit before it exits.

## At a glance

| | |
|---|---|
| Type | Exit method (trailing, trend-based) |
| Best market states | Trends |
| Weak in | Ranges, where price crosses the average repeatedly |
| Best uses | Exit |
| Common rule | Close beyond the average against the trade, for example below a rising 20 EMA for a long |
| Typical averages | 10, 20, 21 or 50 periods; EMA or SMA |
| Origin | Not attributed to one person |

## What is a moving average exit?

A moving average smooths price by averaging recent closes. In an uptrend, price tends to stay above a rising average, and in a downtrend it tends to stay below a falling one. A moving average exit uses that behaviour: while price stays on the right side of the average, hold the trade. When price closes on the wrong side, exit.

The average acts like a trailing stop that follows price. Unlike a fixed-distance stop, it moves with the trend's pace, and it follows a smooth line rather than recent swing points. The exit is rule-based, which removes some guesswork from the decision to hold or sell.

It is a method of leaving a trade, not of entering one. It is often used with [trend following](/trend-following/) systems and with entries from breakouts or pullbacks. See [exponential moving average](/exponential-moving-average/) and [simple moving average](/simple-moving-average/) for the averages themselves.

## How it works

1. **Choose the average:** type (EMA reacts faster, SMA is smoother) and length.
2. **Choose the signal:** a close beyond the average, or a close beyond it by a margin, or a close beyond it for two bars in a row.
3. **Exit** when the signal appears, either on that close or at the next open.

For a long trade the signal is a close below the average. For a short trade it is a close above it.

**Worked example.** A trader buys at 100 and uses the 20-period EMA as the exit. Price rises to 115 while the EMA climbs from 99 to 108. Price then falls and closes at 107.5, with the EMA at 108. This is a close below the EMA, so the trader exits at the next open, say 107. The profit is 7 points. Price had peaked at 115, so the exit gave back 8 points from the high, which is the cost of waiting for the average to confirm the turn.

Platforms and traders differ on whether the exit is on the close or on any touch, and on whether the exit order is placed at the close or the next bar's open.

## How to read it

**Shorter average, tighter exit.** A 10-period average follows price closely and exits early. A 50-period average gives the trade much more room and gives back more profit when it exits.

**Slope.** Many traders treat a flat average as a sign that the trend has stalled, regardless of where price is.

**Buffers.** Requiring a close beyond the average by a set amount, such as a fraction of [ATR](/atr/), reduces false exits from brief dips.

**Gap and slippage.** Exit orders fire after the close, so the actual fill can be worse than the average level, particularly overnight.

**Compared with crossovers.** An exit on price crossing the average is faster than one on a [moving average crossover](/moving-average-crossover/) of two averages, but it creates more false signals.

## Best market states

**Trends (best).** In a sustained trend, price holds above or below the average for long stretches and the exit keeps the trade in.

**Ranges (weak).** In a sideways market price crosses the average often, causing repeated whipsaw exits.

**Fast reversals.** The exit lags, so a sharp reversal can erase a lot of profit before the signal appears.

**Volatility.** In a volatile trend, deeper pullbacks can cross a short average without ending the trend. A longer average or a buffer helps.

## Settings

| Setting | Common choice | Effect |
|---|---|---|
| Length | 20 (short-term trades), 50 (intermediate), 200 (long-term) | Shorter exits earlier and more often |
| Type | EMA or SMA | EMA reacts faster; SMA is smoother |
| Signal | Close beyond the average | Intrabar touches create more false exits |
| Buffer | None, or a fraction of ATR | Reduces whipsaw exits |
| Confirmation | One or two closes | Two closes is slower but cuts false exits |

There is no universal best setting. The right length depends on the market and the intended holding period, and should be tested.

## Common mistakes

- Using the exit in a range, where price keeps crossing the average.
- Choosing a length by looking at one chart after the fact.
- Exiting on an intrabar touch instead of a close, then seeing price recover.
- Expecting a tight exit, then being surprised at how much profit a 50-period exit gives back.
- Using it as the only protection. A trade still needs an initial stop-loss.
- Mixing time frames, for example entering on a 15-minute chart and exiting on a daily average without a plan.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: the usual faster choice for the exit line.
- **[Simple moving average](/simple-moving-average/)**: a smoother alternative that exits less often.
- **[Trailing stop](/trailing-stop/)**: can be combined with an average to set a minimum protection level.
- **[Profit target](/profit-target/)**: gives a fixed objective in case the trend ends before price reaches the average.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**What is a moving average exit?**
It is an exit rule that closes a trade when price closes on the wrong side of a chosen moving average. For a long trade, that means a close below the average. It lets a trend trade run until the trend shows signs of ending.

**Which moving average is best for exits?**
There is no single best one. Shorter averages, such as the 10 or 20, exit sooner and more often. Longer ones, such as the 50, give the trade room but give back more profit. Choose by holding period and test the choice.

**Should I exit on a close or on a touch?**
Most traders use a close, because wicks and brief spikes often pass through the average and then recover. A close-based exit has fewer false signals, but the fill may be worse in a fast market.

**Does a moving average exit work in sideways markets?**
Usually not well. Price crosses the average repeatedly in a range, which triggers frequent exits and re-entries with small losses. The method is built for trends. Some traders use a trend filter to skip it in ranges.

**Can I use it with a stop-loss?**
Yes, and you should. The average exit manages the trade once it is running, while the initial stop-loss limits the loss if the trade fails early or price gaps through the average.
