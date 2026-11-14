---
slug: implied-volatility
name: Implied Volatility
aka: [IV, Implied vol]
type: volatility
states: [volatility]
weak_states: [trend]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "No lookback setting. Taken from option prices, usually at-the-money options about 30 days from expiry"
pairs_with: [historical-volatility, vix, atr, standard-deviation]
related: [vix, historical-volatility, standard-deviation, normalized-atr, chaikin-volatility, bollinger-band-width]
compare: [atr-vs-standard-deviation]
glossary: [volatility, standard-deviation, mean, timeframe, spread]
wave: 2
reviewed: 14 November 2026
---

Implied volatility (IV) is the amount of future price movement that option prices suggest the market expects, shown as an annual percentage. It is worked backwards from what traders pay for options. Higher implied volatility means options cost more and the market is pricing bigger swings. It is a forward-looking measure, unlike most indicators, which look at past prices.

## At a glance

| | |
|---|---|
| Type | Volatility measure (from options) |
| Best market states | Volatility |
| Weak in | Trends, where it says nothing about direction |
| Best uses | Filter, risk and event awareness |
| Default settings | None; usually quoted for at-the-money options about 30 days out |
| Created by | Not attributed to one person (follows from the Black-Scholes model, 1973) |
| Leading or lagging | Forward-looking, but it reflects option supply and demand, not a forecast |

## What is implied volatility?

An option gives the right to buy or sell an asset at a set price before a date. The more the asset is expected to move, the more that right is worth. So the price of an option contains a view on how much movement to expect.

Option pricing models take several inputs: the price of the asset, the strike, the time to expiry, interest rates and volatility. All of them can be seen except volatility. Implied volatility is the volatility figure that, put into the model, gives the actual market price of the option. It is "implied" by the market price.

The Black-Scholes model, published by Fischer Black and Myron Scholes in 1973 ("The Pricing of Options and Corporate Liabilities", *Journal of Political Economy*), made this calculation standard. The idea of backing out volatility from option prices is a consequence of that and similar models and is not credited to a single person.

IV is a view on size, not direction. High IV means the market expects large moves, up or down. IV also rises ahead of known events such as company earnings, and commonly falls sharply after the news, a fall known as volatility crush.

## Formula

There is no simple formula. IV is found by solving the pricing model backwards.

1. Take the option's market price.
2. Use a pricing model such as Black-Scholes, with the known inputs.
3. Adjust the volatility input until the model price equals the market price. This is done by software, usually with an iterative method.

**Worked example (simplified).** Suppose a model gives an at-the-money option price of 2.0 when volatility is 20 per cent, and 3.0 when volatility is 30 per cent. If the market price is 2.5, the implied volatility is roughly 25 per cent. Real calculations are not exactly linear, but the principle is the same: the market price tells you the volatility number.

A useful rule of thumb: an annual IV of 20 per cent implies a one-standard-deviation move of about 20 per cent over a year. To scale to a shorter time, divide by the square root of the number of periods. For 252 trading days, the daily figure is about 20 / 15.9 = 1.26 per cent. This is an approximation and assumes that price changes follow a bell-curve-like pattern, which real markets do not follow exactly.

Note: different platforms use different models, interest-rate and dividend assumptions, and different options to pick the headline number, so quoted IV can differ between sources.

## How to read it

**High versus low.** A high IV means options are expensive and the market expects larger moves. A low IV means options are cheap and the market expects calm. What counts as high depends on the market, so compare it with its own past range. Many traders use IV rank or IV percentile, which show where today's IV sits within the last year's range.

**Against historical volatility.** If IV is much higher than [historical volatility](/historical-volatility/), options are pricing in more movement than has recently happened. If it is lower, the opposite. The gap is studied by options traders, but it is not a standalone signal.

**Events.** IV usually climbs before scheduled news and drops after. A trader who knows this can avoid buying options at inflated prices ahead of an event.

**Skew and term structure.** IV differs by strike and by expiry date. Out-of-the-money puts on stock indexes commonly carry higher IV than calls, known as skew. Reading these details is a topic for options specialists.

**Market-wide fear.** The [VIX](/vix/) is an index of implied volatility on US stock-index options. A rising VIX usually coincides with falling stock markets, since traders buy protection. It is a measure of expected volatility and a sentiment gauge, not a forecast.

## Best market states

**Volatility analysis (best).** IV describes what the options market expects, so it suits judging volatility and event risk.

**Ranges.** Falling IV is typical of calm sideways markets. It can warn of complacency, but it does not time a breakout.

**Breakouts.** IV often rises into and after a breakout. It can confirm that the market is pricing movement.

**Reversals.** Spikes in IV often appear around sharp market sell-offs and turning points. This pattern is common but not dependable enough to trade alone.

**Trends (weak).** IV does not show direction, and a steady trend can come with low IV.

## Settings

| Setting | Choice | What it does |
|---|---|---|
| Short-dated | 7 to 30 days to expiry | Reacts quickly to events, noisier |
| Standard | About 30 days, at the money | Common headline figure |
| Longer-dated | 60 to 90 days or more | Smoother, shows the longer view |

IV has no period like a moving average does. The choices are which expiry and which strike to read. Many tools show a 30-day constant-maturity IV that blends several expiries to keep the time horizon steady.

## Common mistakes

- Reading high IV as a sign that price will fall. It signals size of expected moves, not direction.
- Buying options just before earnings without allowing for the drop in IV after the news.
- Comparing IV across stocks without allowing for each stock's own normal range.
- Treating implied volatility as a forecast. It is the market's price for protection, and it can be wrong in either direction.
- Mixing up IV and historical volatility.
- Ignoring skew and expiry date and quoting a single figure.

## Pairs well with

- **[Historical volatility](/historical-volatility/)**: a direct comparison between what happened and what options expect.
- **[VIX](/vix/)**: the best-known index of implied volatility, for market-wide context.
- **[ATR](/atr/)**: a price-based gauge to cross-check how far the underlying actually moves.
- **[Standard deviation](/standard-deviation/)**: the statistic that IV is expressed in.

## Sources

- Black, Fischer and Scholes, Myron (1973). "The Pricing of Options and Corporate Liabilities". *Journal of Political Economy*, 81(3).
- Hull, John C. *Options, Futures, and Other Derivatives*. Pearson. (Standard textbook; use the latest edition.)

## FAQ

**What is implied volatility in simple terms?**
It is how much movement the options market expects, worked out from option prices and shown as an annual percentage. High IV means traders are paying more for options because they expect larger swings. It says nothing about the direction of those swings.

**Is high implied volatility good or bad?**
It is neither. For option buyers it means higher prices. For option sellers it means higher premiums, with more risk. It shows the market expects bigger moves, which can mean opportunity or danger depending on your position.

**What is the difference between implied and historical volatility?**
Historical volatility measures actual past price moves. Implied volatility is taken from option prices and reflects expected future moves. They usually differ, and the gap between them is a topic of study for options traders.

**What is IV crush?**
It is the sharp fall in implied volatility after a known event such as earnings. Before the news, uncertainty keeps option prices high. After it, uncertainty drops, and option prices can fall even if the stock moves in the expected direction.

**Can implied volatility predict price moves?**
Not reliably. It reflects what the market expects and what people are willing to pay for protection. It can show whether big moves are being priced in, but actual outcomes can be larger or smaller.
