---
slug: vix
name: VIX (volatility index)
aka: [VIX, Cboe Volatility Index, fear index, fear gauge]
type: volatility
states: [volatility, reversal]
weak_states: [range]
purposes: [filter]
inventor: Cboe (Chicago Board Options Exchange); original idea by Robert Whaley
year: 1993
default_settings: "Not a user setting; 30-day implied volatility of S&P 500 options, shown as an annualised percentage"
pairs_with: [atr, bollinger-bands, put-call-ratio, historical-volatility]
related: [implied-volatility, historical-volatility, put-call-ratio, atr, standard-deviation, bollinger-band-width]
compare: []
glossary: [implied-volatility, volatility, annualised]
wave: 1
reviewed: 14 November 2026
---

The VIX is the Cboe Volatility Index. It shows how much movement the options market expects in the S&P 500 over the next 30 days, quoted as an annualised percentage. A higher VIX means options traders expect bigger swings. It is often called the fear gauge, because it tends to rise when stocks fall sharply.

## At a glance

| | |
|---|---|
| Type | Volatility index |
| Best market states | Volatility, reversal |
| Weak in | Sideways markets, where it says little about direction |
| Best uses | Market filter, risk sizing, sentiment context |
| Default settings | None; it is a published index, not a setting |
| Created by | Cboe, 1993; the concept is linked to Robert Whaley's work |
| Leading or lagging | Reflects current option prices, so it shows expectations now, not a forecast of direction |

## What is the VIX?

The VIX measures expected volatility, not direction. It is calculated by the Cboe from the prices of S&P 500 index options. When traders pay more for options, they expect larger moves, and the VIX rises. When option prices are low, the VIX falls.

The Cboe launched the index in 1993. That first version used options on the S&P 100. In 2003 the method changed to use S&P 500 options and a broader set of strikes, and that is the VIX quoted today. Robert Whaley, then an academic, proposed a volatility index for traded options, and the Cboe credits that work.

Because stocks tend to fall faster than they rise, and because investors buy options for protection in a sell-off, the VIX tends to move opposite to the S&P 500. It is a measure of the cost of insurance as much as a measure of fear.

## Formula

The VIX is not a simple formula that a trader works out on paper. Cboe describes the method in plain terms like this:

1. Take the prices of a wide range of S&P 500 options, both calls and puts, with a little under and over 30 days left to expiry.
2. Convert those prices into an estimate of the variance the market expects for each of the two expiries.
3. Blend the two so that the result represents exactly 30 days ahead.
4. Take the square root and multiply by 100 to give an annualised percentage.

The details are set out in the Cboe VIX white paper. Free data is available from Cboe and most charting platforms.

**Worked example.** A VIX of 20 means the market expects the S&P 500 to move at an annualised rate of about 20 percent. To get a rough daily figure, divide by the square root of 252 trading days, which is about 15.9. So 20 / 15.9 is about 1.26 percent a day. For a rough 30-day figure, divide by the square root of 12, about 3.46, giving about 5.8 percent.

These are one-standard-deviation estimates, so moves bigger than that happen regularly. The VIX also does not say whether the move will be up or down.

## How to read it

**Level.** Lower readings, such as below about 20, are usually described as calm. Readings above about 30 are usually described as stressed. These are rules of thumb, not fixed lines, and the typical level changes over the years.

**Spikes.** The VIX tends to jump quickly in a sell-off and fade more slowly. A sharp spike has often come near short-term lows in stocks, but not always, and some spikes mark the start of a longer decline.

**Falling with prices rising.** A steady, low VIX with rising stocks is often read as a calm, confident market. It can also mean complacency, which is hard to judge until after the fact.

**Divergence.** If stocks make a new low but the VIX does not make a new high, some traders read that as fading fear. This is a loose idea, not a rule.

**Term structure.** The Cboe also publishes volatility indices for other horizons. Comparing them shows whether the market expects calm or stress to continue. This is a more advanced use.

## Best market states

**Volatility regimes (best).** The VIX shows at a glance whether the market is in a calm or stressed state. That helps with position sizing and with choosing between tight and wide stops.

**Reversals (mixed).** Extreme readings have been linked to turning points, but they are not timing tools. The market can stay stressed for weeks.

**Trends (indirect).** It does not measure trends. Rising prices with a low VIX are generally smoother than rising prices with a high VIX.

**Ranges (weak).** In a quiet sideways market the VIX tells you little beyond "quiet".

## Settings

The VIX has no settings, but traders use it in a few ways.

| Use | How |
|---|---|
| Regime filter | Trade a method only when the VIX is above or below a chosen level |
| Position size | Use smaller sizes when the VIX is high |
| Sentiment context | Compare with the [put-call ratio](/put-call-ratio/) |
| Volatility comparison | Compare with [historical volatility](/historical-volatility/) of the index |

The VIX covers the S&P 500 only. Other indices have their own volatility measures, and individual shares have their own implied volatility. See [implied volatility](/implied-volatility/).

## Common mistakes

- Treating the VIX as a prediction of direction. It measures expected size of moves.
- Buying stocks only because the VIX is "high" or selling because it is "low".
- Using the VIX to judge a single stock or another market. It covers the S&P 500.
- Reading the percent figure as a monthly move. It is annualised.
- Confusing the VIX index with products that track it. Those can behave very differently.
- Fixing hard rules on levels like 20 or 30 without testing them over different years.

## Pairs well with

- **[ATR](/atr/)**: shows how much the instrument you trade is actually moving.
- **[Bollinger Bands](/bollinger-bands/)**: band width shows the instrument's own volatility, which can differ from the VIX.
- **[Put-call ratio](/put-call-ratio/)**: another options-based sentiment gauge.
- **[Historical volatility](/historical-volatility/)**: compares expected volatility (VIX) with volatility that has actually occurred.

## Sources

- Cboe Global Markets. *Cboe VIX White Paper* (the official description of the calculation).
- Whaley, Robert E. (1993). "Derivatives on Market Volatility: Hedging Tools Long Overdue". *Journal of Derivatives*, 1(1).
- Whaley, Robert E. (2000). "The Investor Fear Gauge". *Journal of Portfolio Management*, 26(3).

## FAQ

**What does the VIX measure?**
It measures the volatility that S&P 500 options prices imply over the next 30 days, quoted as an annualised percentage. It reflects expected size of moves, not direction, and it is calculated from option prices by the Cboe.

**Why is the VIX called the fear index?**
It usually rises when stocks fall quickly, as investors pay more for protective options. The name is a convenient label. The index is really a measure of the price of options, which reflects fear but also supply and demand for insurance.

**What is a high or low VIX?**
There is no official line. Readings below about 20 are often called calm and above about 30 stressed, but the typical level shifts over time. Compare the current reading with recent history rather than relying on a fixed number.

**Does a high VIX mean stocks will fall?**
Not by itself. A high VIX says the market expects large moves in either direction. It often goes with falling prices, but spikes have also appeared near market lows. Treat it as context, not a signal.

**Can I trade the VIX directly?**
The index itself cannot be bought. There are futures, options and exchange-traded products linked to it, but they track expected future volatility and can behave very differently from the spot index. They carry their own costs and risks, so read their documents first.
