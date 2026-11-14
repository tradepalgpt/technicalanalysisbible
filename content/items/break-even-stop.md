---
slug: break-even-stop
name: Break-Even Stop
aka: [Breakeven stop, Move stop to break-even, BE stop]
type: stop-exit
states: [trend]
weak_states: [range]
purposes: [stop]
inventor: Not attributed to one person
year: Unknown
default_settings: "Move the stop to entry once price has gained 1R"
pairs_with: [trailing-stop, structure-stop, profit-target, scaling-out]
related: [stop-loss, trailing-stop, structure-stop, time-stop, atr-stop, risk-reward-ratio]
compare: []
glossary: [stop-loss, r-multiple, slippage, spread]
wave: 2
reviewed: 14 November 2026
---

A break-even stop moves a trade's stop-loss to the entry price after the trade has moved far enough in profit. If price then reverses, the trade closes at about zero rather than a loss. It protects capital, but a stop that is too close to entry can be hit by normal pullbacks before the trade works.

## At a glance

| | |
|---|---|
| Type | Stop adjustment method |
| Best market states | Trends, where trades run well beyond the entry |
| Weak in | Ranges and choppy markets, where price often returns to entry |
| Best uses | Stop |
| Typical trigger | Price gains 1R (a profit equal to the initial risk), or reaches a structure point |
| Cost allowance | Often placed slightly beyond entry to cover spread and commission |
| Origin | Not attributed to one person |

## What is a break-even stop?

When you enter a trade, you set an initial stop-loss at a level where the idea is proven wrong. The distance from entry to that stop is your risk, often called 1R. A break-even stop is a rule for moving that stop to the entry price once the trade has gone your way, so that the worst outcome falls from a full loss to roughly nothing.

The idea is simple and popular. It is also a trade-off. Moving the stop to entry removes the possibility of a loss, but it also raises the chance that you are stopped out on an ordinary pullback, before the trade has had time to reach its target. Whether the trade-off helps depends on the market and the strategy, and should be tested rather than assumed.

## How it works

1. **Set the initial stop** at a level that makes sense for the setup (for example beyond a [structure stop](/structure-stop/) or an [ATR stop](/atr-stop/)).
2. **Choose a trigger.** Common triggers are a gain of 1R, a gain of a set number of points, a break past a prior swing high or low, or the close of a candle beyond a key level.
3. **Move the stop to entry** when the trigger is met. Many traders add a small buffer so that costs are covered.
4. **Leave it there** or continue with a [trailing stop](/trailing-stop/).

**Worked example.** A trader buys at 100 with a stop at 98, so 1R is 2 points. Price rises to 102, a gain of 1R. The trader moves the stop to 100, plus 0.1 to cover spread and commission, so 100.1. If price falls back, the trade closes at roughly zero. If price instead goes on to 106, the stop has cost nothing.

**Costs.** A stop set at the exact entry price is not truly break-even, because spread, commission and slippage still apply. A stop at entry can also fill at a worse price in a fast market.

## How to read it

**It changes the outcome distribution.** Trades that would have been small losers become scratches. But trades that would have pulled back and then continued are also cut. The net result varies by strategy.

**Trigger matters more than the idea.** A trigger that is very close to entry (for example 0.5R) is hit often by noise. A trigger that is far away (2R or more) gives little protection. A structure-based trigger, such as price breaking the last swing high, ties the move to the chart rather than to an arbitrary number.

**Pair it with a plan.** Some traders use it together with [scaling out](/scaling-out/): take part of the position off at 1R and move the stop to break-even on the rest.

**Compare with trailing.** A [trailing stop](/trailing-stop/) follows price continuously. A break-even stop makes one jump and then waits.

## Best market states

**Trends (best).** In a trend, price tends to move away from entry and pullbacks are shallow enough that a stop at entry survives.

**Breakouts (fair).** After a breakout, price often retests the breakout level, which may be near entry. A stop at entry can be hit by a normal retest.

**Ranges (weak).** Price moves back and forth through entry, so break-even stops often trigger and then price reverses back.

**Volatility.** In high volatility, normal pullbacks are large. A break-even stop placed too early gets hit by noise.

## Settings

| Setting | Common choice | Effect |
|---|---|---|
| Trigger | 1R gain, or a break of structure | Earlier triggers protect more but get hit more often |
| Buffer | A small amount beyond entry to cover costs | Avoids a small loss from spread and commission |
| Follow-up | Trailing stop, or hold at break-even | Determines how much of a big move is kept |
| Partial exit | Optionally close part of the position at the trigger | Locks in some profit alongside the stop move |

There is no standard set of values. Test the choice on your own market and time frame.

## Common mistakes

- Moving the stop to entry too early, so normal pullbacks stop the trade out.
- Forgetting spread, commission and slippage, so a "break-even" trade is a small loss.
- Treating a break-even exit as a win. It is a flat result that still cost time and attention.
- Using the rule in a range where price keeps returning to entry.
- Moving a stop to break-even by habit without testing whether it improves results.
- Moving the stop in the wrong direction. Stops should only move toward lower risk, never wider.

## Pairs well with

- **[Trailing stop](/trailing-stop/)**: continues protecting the trade after the break-even step.
- **[Structure stop](/structure-stop/)**: ties the trigger and the later stop to swing points.
- **[Profit target](/profit-target/)**: defines where the trade is meant to end if price keeps going.
- **[Scaling out](/scaling-out/)**: takes partial profit at the same point the stop moves.

## Sources

- Elder, Alexander (1993). *Trading for a Living*. Wiley.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**What is a break-even stop?**
It is a stop-loss moved to the entry price once a trade is in profit. If price then reverses, the trade closes at about zero rather than a loss. It is a risk-reduction step, and it does not guarantee a profit.

**When should I move my stop to break-even?**
There is no single answer. Common triggers are a gain of 1R or a break of a nearby swing high or low. Earlier moves protect more but get stopped out more often. Test options on your own data.

**Does moving to break-even improve results?**
Not always. It reduces losses on trades that turn around, but it can also cut trades that would have recovered and run. The effect depends on the strategy and market, so check it in testing rather than assuming a benefit.

**Is a break-even stop really break-even?**
Not exactly. Spread, commission and slippage mean a stop at the entry price usually closes at a small loss. Many traders place it slightly beyond entry to allow for these costs.

**Can I use a break-even stop with a trailing stop?**
Yes. A common setup is to move the stop to break-even at a first trigger, then trail it behind price using swing points or ATR. The break-even step protects the trade early and the trail captures more of a long move.
