---
slug: td-sequential
name: Tom DeMark Sequential (TD Sequential)
aka: [TD Sequential, DeMark Sequential, Sequential 9-13]
type: theory
states: [reversal]
weak_states: [trend]
purposes: [entry, exit]
inventor: Tom DeMark
year: "Developed 1970s; published 1994"
default_settings: "Setup of 9 bars; countdown of 13 bars; comparison with 4 bars back"
pairs_with: [support-and-resistance, rsi, volume, trendline]
related: [trend-exhaustion, demark-pivots, divergence, overbought-oversold, three-pushes]
compare: []
glossary: [signal-line, lookback-period, oscillator]
wave: 2
reviewed: 14 November 2026
---

TD Sequential is a counting method from Tom DeMark that looks for exhaustion at the end of a trend. It counts bars in two phases, a setup of nine and a countdown of thirteen. When the count completes, it flags that the move may be running out of steam. It is a signal of exhaustion, not a certain turn.

## At a glance

| | |
|---|---|
| Type | Theory (counting system) |
| Best market states | Reversal |
| Weak in | Strong trends, where counts complete and the trend carries on |
| Best uses | Entry, exit |
| Default settings | Setup 9 bars (compare with close 4 bars back); countdown 13 bars |
| Created by | Tom DeMark; described in his 1994 book |
| Evidence base | Trader-education method; limited independent testing |

## What is TD Sequential?

Most indicators use averages or oscillators. TD Sequential simply counts closes in a row that beat a close from a few bars earlier. The logic is that a long unbroken sequence shows a move becoming stretched.

Tom DeMark published the method in *The New Science of Technical Analysis* (Wiley, 1994). Jason Perl later described DeMark's indicators in *DeMark Indicators* (Bloomberg Press, 2008). Platforms may implement small variations, including how the countdown is cancelled or recycled, so check your charting package.

## How it is drawn

**Buy setup (looks for a low).** Count consecutive closes that are each lower than the close four bars earlier. The ninth such bar completes the setup. Any bar that breaks the run resets the count.

**Sell setup (looks for a high).** Count consecutive closes that are each higher than the close four bars earlier. The ninth completes it.

**Perfected setup.** A common extra test: the low of bar 8 or bar 9 is below the lows of bars 6 and 7 (for a buy setup), which shows the final push carried further. The reverse applies to a sell setup.

**Countdown.** After a completed setup, count bars where the close is lower than or equal to the low two bars earlier (for a buy countdown). These bars do not need to be consecutive. The thirteenth qualifying bar completes the countdown. It is cancelled if the market produces an opposite setup or breaks certain levels, and rules for this differ by platform.

**Worked example.** Closes on bars 1 to 9 of a decline are 50, 49.5, 49, 48.5, 48 and so on, each below the close four bars before (comparison close: 52, 51.5, 51, 50.5, 50). Nine bars in a row meet the test, so a buy setup completes on bar 9. A trader following the method would look for support or a reversal signal near that bar, not buy blindly.

## How to read it

**Setup 9.** A completed nine often marks a pause or short-term turn. In strong trends, a nine can complete and price keeps going, even to a second setup in the same direction.

**Countdown 13.** A thirteen is seen as a stronger, rarer exhaustion signal.

**Risk levels.** DeMark describes a "TDST" support or resistance level taken from the setup bars. Details vary by source; check the one you follow.

**Context.** The count is best used when a reversal signal, level or pattern agrees.

## Best market states

**Reversals (best).** The system is designed to flag the end of a stretched move.

**Strong trends (weak).** A trend can produce a completed 9 or 13 and carry on. Selling every completed sell setup in a bull market is a common mistake.

**Ranges.** Counts run less often and are less meaningful in sideways action.

**Volatility.** Large gaps can distort the four-bar comparison.

## Confirmation rules

| Check | What to look for |
|---|---|
| Setup | Nine consecutive closes versus four bars back |
| Perfection | Bar 8 or 9 extends past bars 6 and 7 |
| Countdown | Thirteen qualifying bars, not necessarily consecutive |
| Price signal | A reversal bar or break of a short trend line |
| Level | A nearby support or resistance level |
| Stop | Beyond the extreme of the setup or countdown |

## Common mistakes

- Treating a completed 9 or 13 as an automatic buy or sell.
- Fading strong trends because a count has finished.
- Mixing platform versions of the rules without checking.
- Counting with gaps and ignoring that the comparison bars have changed.
- Using the count with no stop.
- Assuming it works on every timeframe equally.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: a count that finishes at a known level has more weight.
- **[RSI](/rsi/)**: an overbought or oversold reading alongside a completed count adds confluence.
- **[Volume](/volume/)**: fading volume at the end of a count supports exhaustion.
- **[Trendline](/trendline/)**: a trend line break after a count gives a price trigger.

## Sources

- DeMark, Thomas R. (1994). *The New Science of Technical Analysis*. Wiley.
- Perl, Jason (2008). *DeMark Indicators*. Bloomberg Press.

## FAQ

**What is a TD Sequential 9?**
It is the completion of nine consecutive closes, each lower (or higher) than the close four bars earlier. Traders read it as a sign that the move may be stretched. It is a warning to look for a reversal, not a sure turn.

**What is the TD Sequential 13?**
After a setup, the countdown counts thirteen bars, not necessarily in a row, where the close is beyond the low (or high) two bars earlier. A complete 13 is a rarer and stronger exhaustion signal than the 9.

**Does TD Sequential work?**
Some traders find it useful for spotting exhaustion, but strong trends can run through completed counts. Independent testing is limited, so test it on the market and timeframe you trade. Use it with a price signal and a stop.

**What settings does TD Sequential use?**
The standard is a setup of 9 bars compared with the close 4 bars back, and a countdown of 13 bars compared with the high or low 2 bars back. Platforms may differ on cancellation rules.

**Is TD Sequential a leading indicator?**
It counts past bars, so it does not forecast on its own. It tries to flag when a move is exhausted, which is a form of early warning. Treat it as context rather than as a prediction.
