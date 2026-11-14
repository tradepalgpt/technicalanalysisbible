---
slug: position-sizing
name: Position Sizing
aka: [Trade size, Lot size calculation, Fixed fractional sizing]
type: stop-exit
states: [volatility]
weak_states: []
purposes: [stop]
inventor: Not attributed to one person
year: Unknown
default_settings: "Risk a fixed small percentage of the account per trade"
pairs_with: [stop-loss, atr-stop, risk-reward-ratio, structure-stop]
related: [atr, trailing-stop, profit-target, volatility-stop, chandelier-exit]
compare: []
glossary: [position-size, stop-loss, r-multiple, volatility]
wave: 1
reviewed: 14 November 2026
---

Position sizing decides how big a trade should be. The usual method works backwards from the stop: pick the money you are willing to lose, divide by the distance to the stop, and the answer is the size. This keeps every trade's loss the same, whatever the market or stop distance.

## At a glance

| | |
|---|---|
| Type | Stop and exit method (risk control) |
| Best market states | Volatility changes, where stop distances vary widely |
| Weak in | Markets with gaps, where the real loss can exceed the planned risk |
| Best uses | Setting the size of each trade |
| Typical setting | A small fixed percent of the account per trade; the figure is a personal choice |
| Attributed to | Not attributed to one person; covered in depth by Van Tharp |
| Output | A number of units, lots or shares |

## What is position sizing?

Two traders can take the same trade and have very different outcomes because they used different sizes. The stop decides the risk per unit, and the size decides how many units. Together they decide the money at risk.

Van Tharp argued in *Trade Your Way to Financial Freedom* (1998) that sizing matters as much as entries and exits. A system with a small edge can fail if each trade risks too much, and any system can survive a run of losses if each loss is small.

The most common method is **fixed fractional** sizing. A set percentage of the account is risked on each trade. As the account grows, the amount grows. As it shrinks, the amount falls. The fraction is a personal choice, not a standard.

## Formula

Position size = account risk in money / (distance to stop in price x value per point)

Where:
- **Account risk in money** = account size x risk percentage.
- **Distance to stop** = entry price minus stop price, in price units, including the expected spread.
- **Value per point** = the money gained or lost per unit per 1 price point. For one share it is 1. For a contract or a forex lot it is a set figure from the instrument.

**Worked example.** Account 10,000. Risk per trade 1 percent = 100. A long trade at 50 with a stop at 48. Distance = 2. Value per point = 1 per share.
Size = 100 / (2 x 1) = **50 shares**.
If the stop is hit, the loss is 50 x 2 = 100, which is 1R.

**Wider stop.** With a stop at 45, the distance is 5. Size = 100 / 5 = 20 shares. A wider stop gives a smaller position and the same money risk.

**Round down.** Position sizes must fit the market's minimum step, so always round down, never up.

## How to read it

**Risk is in money, size is the result.** Start from what you can afford to lose on the trade, then let the stop distance set the size.

**Same R, different size.** In R terms every trade risks 1R. A trade with a close stop gets a large position and a trade with a far stop gets a small one.

**Volatility link.** When ATR rises, stops widen and sizes fall. See [ATR stop](/atr-stop/). This keeps the money risk steady as volatility changes.

**Drawdown.** Larger risk per trade means larger swings in the account. A run of ten losses at 1 percent is about a 9.6 percent drawdown, while at 5 percent it is about 40 percent. These are simple compounding figures, not forecasts.

**Gaps and slippage.** A stop does not promise a fill price. A gap can cause a loss bigger than 1R, so the stated risk is an estimate.

## Best market states

**Changing volatility (best).** Sizing from the stop distance adjusts automatically as ranges expand or shrink.

**Trends.** A trailing stop moves, but sizing is done once from the initial stop.

**Ranges.** Stops just outside the range are often close, so sizes can be large. Check the account limit.

**Breakouts and reversals.** Stops are often wide, so sizes are small.

**All markets.** The method works on any instrument, so long as the value per point is known.

## Settings

| Setting | Choice | Effect |
|---|---|---|
| Risk per trade | A fixed small percent of the account | Lower means smaller swings and slower growth |
| Stop distance | From structure or ATR | Wider means smaller size |
| Rounding | Always down | Keeps risk at or below the plan |
| Cap | A maximum size or total open risk | Guards against many trades moving together |

The risk percentage is personal and depends on goals, markets and tolerance. This guide does not suggest a figure.

## Common mistakes

- Choosing the size first and the stop second, so the stop is squeezed to fit.
- Forgetting the spread, which makes real risk more than planned.
- Using a different risk amount for trades the trader feels sure about.
- Ignoring correlated trades. Several trades on linked markets are one large bet.
- Rounding up to a larger size.
- Not recalculating after the stop or the account balance changes.

## Pairs well with

- **[Stop loss](/stop-loss/)**: the stop distance is the main input.
- **[ATR stop](/atr-stop/)**: a volatility-based distance that adjusts sizes as markets change.
- **[Risk-reward ratio](/risk-reward-ratio/)**: checks the reward is worth the risk that sizing fixes.
- **[Swing high/low stop](/structure-stop/)**: chart-based stops give varying distances, so sizes vary too.

## Sources

- Tharp, Van K. (1998). *Trade Your Way to Financial Freedom*. McGraw-Hill.
- Elder, Alexander (1993). *Trading for a Living*. Wiley.
- Kaufman, Perry J. *Trading Systems and Methods*. Wiley.

## FAQ

**How do you calculate position size?**
Divide the money you are willing to risk by the distance to the stop times the value per point. With 100 at risk, a stop 2 away and 1 per point, the size is 50 units.

**What percentage of my account should I risk per trade?**
That is a personal choice and this guide gives no figure. A smaller risk means smaller swings in the account. Whatever you choose, apply it consistently so that no single trade does serious damage.

**Why does a wider stop mean a smaller position?**
Because the money at risk is fixed. If each unit can lose more, you can hold fewer units. The loss at the stop stays the same, at 1R.

**Does position sizing change with volatility?**
Yes, when stops are set from volatility. A higher ATR widens the stop and lowers the size, which keeps money risk steady. See [ATR](/atr/).

**Can a stop loss lose more than the planned risk?**
Yes. Gaps, fast markets and slippage can fill beyond the stop. Planned risk is an estimate, so some traders also cap total open risk.
