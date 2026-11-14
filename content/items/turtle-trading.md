---
slug: turtle-trading
name: Turtle Trading Rules
aka: [Turtle system, Turtle Traders, Dennis Turtle rules]
type: theory
states: [breakout, trend]
weak_states: [range]
purposes: [entry, stop, exit]
inventor: Richard Dennis and William Eckhardt
year: 1983
default_settings: "System 1: 20-day breakout entry, 10-day exit; System 2: 55-day entry, 20-day exit; 2 N stop"
pairs_with: [donchian-channels, atr, position-sizing, trend-following]
related: [breakout-trading, atr-stop, trailing-stop, opening-range-breakout, volatility-stop]
compare: []
glossary: [breakout, stop-loss, position-size, whipsaw]
wave: 2
reviewed: 14 November 2026
---

Turtle trading is a complete trend-following system taught in 1983 by the traders Richard Dennis and William Eckhardt to a group of recruits, nicknamed the Turtles. It buys breakouts of recent highs, sizes each position from volatility, uses a stop at a multiple of ATR and exits on a break of a shorter channel. It makes many small losses and a few large gains.

## At a glance

| | |
|---|---|
| Type | Theory (rule-based trading system) |
| Best market states | Breakout, trend |
| Weak in | Ranges, where breakouts fail often |
| Best uses | Entry, stop, exit |
| Entry | System 1: 20-day high or low; System 2: 55-day |
| Exit | System 1: 10-day opposite extreme; System 2: 20-day |
| Created by | Richard Dennis and William Eckhardt, 1983 |

## What are the Turtle trading rules?

In the early 1980s, Richard Dennis, a successful commodities trader, bet that people could be taught to trade rather than being born to it. With his partner William Eckhardt he trained a group of novices, and gave them money to trade. The rules stayed private for many years. They were later described publicly by participants including Curtis Faith.

The system is a trend-following method on futures markets. It is not a set of secret signals. It is a disciplined combination of an entry rule, a volatility measure, a position-size formula, a stop and an exit. Most versions in circulation today are reconstructions, and exact details may differ.

## How it is identified

**Volatility unit (N).** N is the 20-day exponential average of true range, the same idea as [ATR](/atr/).

**Position size.** One "unit" is sized so that a move of 1 N equals 1% of the account. Larger positions are built by adding units.

**Entries.** System 1 enters on a break of the 20-day high (long) or low (short). System 2 uses the 55-day. Closely related is the [Donchian channel](/donchian-channels/). In the original System 1, a breakout is skipped if the last signal would have been a winner (the filter).

**Adding.** Add another unit each time price moves 1/2 N in favour, up to four units.

**Stop.** Place the stop 2 N from the entry. When units are added, stops on earlier units move up to stay 2 N from the latest entry.

**Exit.** System 1 exits on a break of the 10-day opposite extreme. System 2 exits on the 20-day opposite extreme.

**Worked example.** Account 100,000. N is 2. The risk per unit is 1% of 100,000 = 1,000, so the unit size is 1,000 divided by N = 500 shares. Price breaks the 20-day high at 50, so enter 500 shares long. The stop sits 2 N away, at 46. The maximum loss on the stop is 4 per share times 500 = 2,000, or 2% of the account. If price rises to 51 (1/2 N), a second unit is added and the stop moves to 47.

## How to read it

**Trend capture.** Gains come from a few large trends. Most breakouts fail or give small profits.

**Win rate.** Trend systems tend to lose often and win rarely but big. That pattern is a feature of the method and tough to sit through.

**Risk first.** The sizing rule limits losses per trade and across correlated markets. The original rules also capped total units across markets.

**Modern results.** The rules are public, and breakout systems may work differently now than in the 1980s. Test any version on current data.

## Best market states

**Trends (best).** The system is designed to ride large trends.

**Breakouts (good).** Entries trigger on breakouts of recent ranges.

**Ranges (weak).** Sideways markets produce false breakouts and repeated small losses, known as whipsaws.

**Volatility.** The position size shrinks as volatility rises, which keeps risk steady.

## Confirmation rules

| Check | What to look for |
|---|---|
| Entry | Close or intraday break of the 20- or 55-day extreme |
| Size | 1% of equity per 1 N move |
| Stop | 2 N from entry |
| Add | Every 1/2 N, to a maximum of four units |
| Exit | 10-day (System 1) or 20-day (System 2) opposite extreme |
| Markets | Liquid, trending markets traded with fixed rules |

## Common mistakes

- Cherry-picking the entry and ignoring sizing and exits.
- Skipping trades after a few losses, which breaks the system.
- Trading a single market, so one whipsaw period ruins the year.
- Using rules from memory instead of a written version.
- Ignoring costs and slippage, which matter more for frequent breakouts.
- Expecting the 1980s results to repeat unchanged.

## Pairs well with

- **[Donchian channels](/donchian-channels/)**: the channel is a direct picture of the Turtle entry and exit rules.
- **[ATR](/atr/)**: the basis of N, used for stops and sizing.
- **[Position sizing](/position-sizing/)**: the Turtle approach is built around volatility-based size.
- **[Trend following](/trend-following/)**: the wider family of methods the Turtles belong to.

## Sources

- Covel, Michael W. (2007). *The Complete TurtleTrader*. HarperBusiness.
- Faith, Curtis (2007). *Way of the Turtle*. McGraw-Hill.

## FAQ

**Who were the Turtle Traders?**
They were a group of novices trained in 1983 by Richard Dennis and William Eckhardt, who gave them money to trade a rules-based trend-following system. Several became well known traders. Details of the programme were published years later.

**What are the Turtle trading entry rules?**
The two original systems enter on breakouts of the highest high or lowest low of the past 20 days (System 1) or 55 days (System 2). Position size, stop and exit rules are part of the same system.

**What stop did the Turtles use?**
A stop at 2 N from the entry, where N is a 20-day average true range. Added units had their stops adjusted so that all units shared the same stop level. This kept the risk per trade at a small, fixed proportion of the account.

**Does Turtle trading still work?**
Trend-following has had long periods of success and long periods of poor results. The rules are public and markets have changed, so past results may not repeat. Test any version on recent data, including costs.

**Is a high win rate expected?**
No. Trend systems like this tend to lose on many trades and rely on a few large winners. That means long losing streaks are normal and require strict discipline. Results are never certain.
