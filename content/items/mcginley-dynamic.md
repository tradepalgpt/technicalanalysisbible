---
slug: mcginley-dynamic
name: McGinley Dynamic
aka: [MD, McGinley Dynamic indicator]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [filter, stop]
inventor: John R. McGinley
year: 1990s
default_settings: "14 periods"
pairs_with: [exponential-moving-average, atr, rsi, support-and-resistance]
related: [exponential-moving-average, kama, frama, mama, alma, t3-moving-average, trailing-stop]
compare: []
glossary: [smoothing, lookback-period, lagging-indicator, trend, whipsaw, trailing-stop]
wave: 3
reviewed: 14 November 2026
---

The McGinley Dynamic is a moving average that adjusts its own speed to the market. It speeds up when price runs away from it and slows when price falls back toward it. John McGinley designed it in the 1990s to track price more smoothly than a fixed moving average. Traders use it as a trend filter and as a trailing line for stops.

## At a glance

| | |
|---|---|
| Type | Moving average (self-adjusting) |
| Best market states | Trend |
| Weak in | Ranges, where it still gets crossed |
| Best uses | Trend filter, trailing stop reference |
| Default settings | 14 periods |
| Created by | John R. McGinley, 1990s |
| Leading or lagging | Lagging, but designed to lag less than an EMA in fast moves |

## What is the McGinley Dynamic?

John McGinley was a market technician who noticed a weakness of fixed moving averages. A fast average whipsaws in quiet markets, and a slow one lags in fast markets. The same setting cannot be right in both.

His solution was a line that changes its own speed. When price moves up quickly and gets far above the line, the line speeds up and chases it. When price drops back toward the line, the line slows. The adjustment comes from the ratio of price to the line itself, raised to the fourth power.

The result is a smooth line that often hugs price more tightly than an EMA of the same length, and that rarely gets whipsawed by a brief poke. The McGinley Dynamic is a single line, not a pair, and its period works as a starting guide rather than a strict lookback.

## Formula

MD = MD[1] + (Price - MD[1]) / (N x (Price / MD[1])^4)

Here MD[1] is the previous value, Price is the current close and N is the period (default 14).

Some platforms add a constant k = 0.6 in the denominator, giving MD[1] + (Price - MD[1]) / (k x N x (Price / MD[1])^4). The factor 0.6 appears in some published descriptions, and it makes the line faster. Check which version your platform uses.

The first value is usually set to the price or to an EMA of price.

**Worked example.** Take N = 10, MD[1] = 100 and a new close of 102.
Price / MD[1] = 1.02, and 1.02^4 = 1.0824
Denominator = 10 x 1.0824 = 10.824
Change = (102 - 100) / 10.824 = 0.185
MD = **100.18**

Now compare a plain EMA(10) with alpha 2/11 = 0.182: the EMA would move 0.364 to 100.36. The McGinley line moves less here because the denominator grows when price rises above the line. When price falls below the line, the ratio is under 1, the denominator shrinks, and the line moves faster toward price.

## How to read it

**Price against the line.** Price above the line suggests an uptrend; below suggests a downtrend. Because the line follows price closely, it keeps price on one side for longer than a fast EMA does.

**Slope.** A rising line supports the uptrend; a falling line supports the downtrend. A flat line suggests no clear trend.

**Crossovers.** Price closing on the other side of the line is a trend-change signal. The self-adjusting design aims to cut false signals, but that is a design goal, not a proven result.

**As a trailing reference.** Some traders trail a stop just beyond the line (below it in an uptrend), perhaps with a buffer based on [ATR](/atr/). The idea is to stay in a trend while the line holds.

**Dynamic support and resistance.** In orderly trends, price pulls back toward the line and often turns near it. Treat this as a loose pattern rather than a rule.

## Best market states

**Trends (best).** The self-adjusting speed aims to keep the line close to price in a trend without constant crossing.

**Ranges (weak).** Price crosses the line often in a sideways market, because the line sits inside the range. It lags in a different way than a fixed average, but it still gives false crosses.

**Reversals.** After a strong move, the line sits close to price, so a reversal crosses it quickly. This can give an earlier exit than a slow average, with more false exits.

**Volatility.** In jumpy markets, the line can follow wide swings and stay close to price, which makes a stop based on it tighter and easier to hit.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 8 to 10 | Close to price, more crosses |
| Default | 14 | Common starting point |
| Medium | 20 to 50 | Smoother filter for swing trading |

McGinley suggested the period as roughly half the length of the moving average you would normally use for the job, because the line already adapts. This is a rule of thumb, not a tested result. Test your own periods and compare the line with an EMA on your market.

## Common mistakes

- Using N as if it were a fixed lookback like an SMA length.
- Believing the line has no lag. It lags, just differently.
- Using a platform formula with the 0.6 constant and comparing it to one without.
- Placing a stop exactly on the line, where normal noise can hit it.
- Trading every cross in a range.
- Assuming a self-adjusting line makes testing unnecessary.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: plotting both shows how much the McGinley line speeds up or slows.
- **[ATR](/atr/)**: ATR gives a distance for a stop buffer beyond the line.
- **[RSI](/rsi/)**: momentum helps judge whether a break of the line has strength.
- **[Support and resistance](/support-and-resistance/)**: levels add a price-based check to the line.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on moving averages; it does not describe the McGinley Dynamic.)

## FAQ

**What is the McGinley Dynamic formula?**
MD = MD[1] + (Price - MD[1]) / (N x (Price / MD[1])^4), where N is the period. The fourth power of the price ratio speeds the line up when price is below it and slows it when price is above. Some platforms add a 0.6 constant.

**Is the McGinley Dynamic better than an EMA?**
It is designed to follow price more closely in some conditions and avoid whipsaw in others. Whether it works better depends on the market and time frame. Plot both on your own charts and compare before choosing.

**What period should I use?**
Fourteen is a common default. McGinley suggested choosing a period of about half the usual average, because the line adapts. There is no proven best value, so try a few on the market you trade.

**Can the McGinley Dynamic be used as a stop?**
Some traders trail a stop beyond the line, often with a buffer based on ATR. This keeps them in a trend while price holds above (or below) it. The stop can still be hit by noise, so test the buffer.

**Who created the McGinley Dynamic?**
John R. McGinley, a market technician, in the 1990s. The exact year is usually given only as the 1990s.
