---
slug: vertical-horizontal-filter
name: Vertical Horizontal Filter (VHF)
aka: [VHF]
type: trend
states: [trend, range]
weak_states: [breakout]
purposes: [filter]
inventor: Adam White
year: 1990s
default_settings: "28 periods"
pairs_with: [adx, choppiness-index, aroon, atr]
related: [adx, choppiness-index, aroon, kama, linear-regression-channel]
compare: []
glossary: [trend, range, lookback-period, filter]
wave: 3
reviewed: 14 November 2026
---

The Vertical Horizontal Filter (VHF) is a trend-strength indicator that compares how far price has travelled over a period with the total distance it moved along the way. A high reading means price moved in one direction (trending). A low reading means it wandered back and forth (ranging). It does not show direction, only whether a trend is present.

## At a glance

| | |
|---|---|
| Type | Trend-strength filter |
| Best market states | Trend, range (it tells you which one you are in) |
| Weak in | Breakouts, where it reacts late |
| Best uses | Filter: choose between trend-following and range tools |
| Default settings | 28 periods on most platforms |
| Created by | Adam White, 1990s |
| Leading or lagging | Lagging (built from past closes) |

## What is the Vertical Horizontal Filter?

Many indicators work well in one kind of market and badly in another. A moving average crossover does well in a trend and chops itself to pieces in a range. An oscillator does the opposite. The VHF is a switch: it tries to tell you which kind of market you are in so you can pick the right tool.

The idea is simple. Over a set number of bars, measure the "vertical" move, which is the gap between the highest and lowest close. Then measure the "horizontal" travel, which is the sum of every bar-to-bar change in close, ignoring direction. If price went straight up, the two are almost equal. If price zig-zagged, the total travel is much bigger than the net move.

The indicator is credited to Adam White. The exact year of publication is not given here because sources differ; it dates from the 1990s. It is a niche tool and is not available on every platform, although the formula is easy to build.

## Formula

For a lookback of n bars (default 28):

1. Numerator: highest close of the last n bars minus lowest close of the last n bars.
2. Denominator: the sum of the absolute close-to-close changes over the same n bars.
3. VHF = numerator / denominator.

**Worked example.** Take a lookback of 5 changes. Closes are 10, 11, 10, 12, 11, 13.
Highest close = 13, lowest close = 10, so numerator = 3.
Changes are +1, -1, +2, -1, +2. Absolute values are 1, 1, 2, 1, 2, which sum to 7.
VHF = 3 / 7 = **0.43**.

If price had risen in a straight line from 10 to 13 in five steps, the denominator would also be 3 and VHF would be 1.0, its maximum. If price ended where it started, the numerator could still be large, but the reading falls toward 0 as the zig-zags grow. VHF is always between 0 and 1 when calculated on closes.

Note: some platforms use the highest and lowest high-low prices instead of closes, which changes the values slightly. Check how your platform defines it before comparing numbers.

## How to read it

**Rising VHF.** A rising line means price is moving more directly and a trend is developing. It does not say whether the trend is up or down.

**Falling VHF.** A falling line means price is becoming choppy and moves are cancelling each other out. This is the sign of a range or a trend losing force.

**Thresholds.** There are no official levels. Many users treat readings clearly above the recent average as trending and readings near the lows of the past few months as ranging. The exact numbers depend on the market and the lookback, so compare against the indicator's own history rather than a fixed value.

**Switching tools.** A common use is rule-based. When VHF is rising or high, use trend tools such as moving averages or [Supertrend](/supertrend/). When it is falling or low, use range tools such as oscillators or [range trading](/range-trading/) at support and resistance.

**Direction still needed.** Because the line has no sign, pair it with a price-based trend read, for example [market structure](/market-structure/) or a moving average slope.

## Best market states

**Trend (good).** VHF shows when a move is efficient. A sustained high reading supports trend-following methods.

**Range (good).** A persistently low reading flags sideways, noisy price. This is where trend systems tend to give false signals.

**Breakouts (weak).** The lookback is long, so a fresh breakout barely moves the line at first. By the time VHF rises, a good part of the move may be over.

**Reversals.** VHF can fall as a trend stalls, but it cannot call a turn. It simply reports that efficiency has dropped.

**Volatility.** Large volatile swings that end up going nowhere produce a low VHF, which is the correct read. Large swings in one direction produce a high one.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Shorter | 10 to 20 | Reacts faster, gives more switches between trend and range, noisier |
| Default | 28 | The commonly published setting on most platforms |
| Longer | 40 to 60 | Smoother and steadier, slower to reflect a new trend |

The period should roughly match the length of the swings you trade. A day trader on 5-minute bars and a position trader on weekly bars will need different values. As with any setting, testing on the market and time frame you trade matters more than copying a number.

## Common mistakes

- Treating VHF as a direction signal. It has none.
- Using a fixed trend threshold copied from a blog post instead of looking at the indicator's own history on that market.
- Switching strategy on every small wiggle of the line. Use a rule such as "rising for several bars" to avoid constant flipping.
- Forgetting the lag. A long lookback means the reading describes the recent past.
- Comparing values across platforms that use different price inputs (close versus high-low).
- Relying on it in thin, gappy markets, where single large moves distort the denominator.

## Pairs well with

- **[ADX](/adx/)**: another trend-strength filter. Agreement between ADX and VHF gives a stronger read; disagreement is a reason to wait.
- **[Choppiness Index](/choppiness-index/)**: measures the same trending-versus-choppy question in a different way, so it works as a cross-check.
- **[Aroon](/aroon/)**: adds timing, showing how recently highs and lows were made.
- **[ATR](/atr/)**: sizes stops once VHF says a trend is worth trading.

## Sources

- Achelis, Steven B. (2000). *Technical Analysis from A to Z*, 2nd edition. McGraw-Hill. (Includes an entry for the Vertical Horizontal Filter.)

## FAQ

**What does the Vertical Horizontal Filter measure?**
It measures how efficient price movement has been over a period: the net distance between the highest and lowest close divided by the total distance travelled bar by bar. High values mean price moved directly, low values mean it moved back and forth.

**What is the default VHF setting?**
Most platforms that include it use 28 periods. Some tools let you choose another length. Shorter settings react faster but flip between trend and range more often, so test any change before relying on it.

**Does VHF show whether the trend is up or down?**
No. It only shows whether a trend exists. To get direction, read price structure, a moving average slope or an indicator such as [ADX](/adx/) with its directional lines.

**Is VHF the same as ADX?**
No. Both aim to measure trend strength, but they use different calculations. ADX is built from smoothed directional movement of highs and lows; VHF uses closing prices only and compares net move with total travel. They often agree but not always.

**Can I use VHF on any market?**
Yes. It needs only a series of prices, so it works on stocks, forex, crypto and futures. What changes is how often each market trends, so the readings you treat as high or low should be judged against that market's own history.
