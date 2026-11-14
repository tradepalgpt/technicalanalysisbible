---
slug: choppiness-index
name: Choppiness Index
aka: [CHOP, Choppiness Index (CI), E.W. Dreiss Choppiness Index]
type: trend
states: [trend, range]
weak_states: [reversal]
purposes: [filter]
inventor: E.W. Dreiss
year: Unknown
default_settings: "14 periods; levels 61.8 and 38.2"
pairs_with: [atr, adx, vertical-horizontal-filter, support-and-resistance]
related: [aroon, dmi, vortex-indicator, trend-intensity-index, bollinger-band-width]
compare: []
glossary: [trend, range, lookback-period, consolidation]
wave: 2
reviewed: 14 November 2026
---

The Choppiness Index measures whether the market is trending or moving sideways, on a scale from 0 to 100. High readings mean choppy, sideways action. Low readings mean price is moving in a straight line. It gives no direction. Traders use it to decide whether a trend or a range strategy suits the market right now.

## At a glance

| | |
|---|---|
| Type | Trend/range filter (non-directional) |
| Best market states | Trend and range identification |
| Weak in | Predicting reversals; it says what the market is doing, not what comes next |
| Best uses | Filter |
| Default settings | 14 periods; levels 61.8 and 38.2 |
| Created by | Credited to Australian commodity trader E.W. Dreiss; the year is not firmly documented |
| Leading or lagging | Lagging |

## What is the Choppiness Index?

When price trends, it travels a long way in a straight line. When it chops, it moves up and down many times and ends up near where it started. The Choppiness Index compares the total movement of every bar with the net distance covered by the whole window.

If the market has moved in one direction, the total of small bar ranges is not much bigger than the overall range, so the index is low. If it has zigzagged, the total of small ranges is much bigger than the overall range, so the index is high.

It is usually credited to Australian commodity trader E.W. Dreiss, though sources differ on details, and it became widely known through charting platforms. Because it ignores direction, a falling market and a rising market can both give low readings.

## Formula

CHOP = 100 x log10( sum of True Range over n bars / (highest high - lowest low over n bars) ) / log10(n)

True Range is the largest of: high minus low, the absolute value of high minus previous close, and the absolute value of low minus previous close. See [ATR](/atr/).

**Worked example.** Take n = 10 for simple numbers. The sum of true ranges over 10 bars is 30. The highest high of the window is 120 and the lowest low is 100, so the window range is 20.
Ratio = 30 / 20 = 1.5
log10(1.5) = 0.176
log10(10) = 1
CHOP = 100 x 0.176 / 1 = **17.6**

That is a low reading: the bars together covered only 1.5 times the net range, so price moved efficiently. If the sum of true ranges had been 100 with the same window range of 20, the ratio would be 5, log10(5) = 0.699, and CHOP would be about **70**, a choppy market.

The reading is always between 0 and 100. Platforms use the same formula, though the default length is usually 14.

## How to read it

**Above 61.8.** The market is choppy and moving sideways. Trend-following entries often fail here.

**Below 38.2.** The market is trending strongly, in either direction.

**In between.** The market is in transition or unclear.

**Falling from high to low.** The market is leaving a range and a trend may be starting. Many traders watch for a drop through 61.8 and then through 38.2.

**Rising from low to high.** A trend is losing efficiency, which can be an early sign that it is slowing or ending.

**Direction.** The index does not say whether the trend is up or down. Use price, a [moving average](/exponential-moving-average/) or [DMI](/dmi/) for that.

The levels 61.8 and 38.2 come from Fibonacci ratios. They are conventions, not laws, and some traders use 60 and 40, or 50 as a single line.

## Best market states

**Trends (good as a confirmation).** Low readings tell you a move is orderly, which supports staying in a trend trade.

**Ranges (good as a warning).** High readings tell you to switch to a range approach or to stand aside from trend trades.

**Breakouts (limited).** After a long high reading, a sharp fall in the index can show a range ending. It tends to confirm the move after it has started.

**Reversals (weak).** It cannot call a turn. A trend can end while the index is still low.

**Volatility.** Because it uses true range, a burst of volatile spikes can raise the reading even if price is not really range-bound.

## Settings

| Setting | What it does |
|---|---|
| 14 (default) | Common platform default; balances speed and stability |
| 7 to 10 | Faster, swings more between extremes |
| 21 to 30 | Smoother, slower to detect change |

The upper and lower levels are usually 61.8 and 38.2, though some users prefer 60 and 40. A longer length gives a steadier reading, but it lags more.

## Common mistakes

- Treating a high reading as a sell signal. It says the market is sideways, not that it will fall.
- Treating a low reading as bullish. It only says the market is trending, and the trend can be down.
- Using it to time precise entries rather than as a filter.
- Forgetting that a change in the length changes the answer and the levels work best with the default.
- Expecting the same readings on different time frames.
- Ignoring price structure while relying on the number.

## Pairs well with

- **[ATR](/atr/)**: the Choppiness Index is built from true range, so ATR gives the same data in absolute terms.
- **[ADX](/adx/)**: another trend strength filter; if both agree, the reading is more reliable.
- **[Vertical Horizontal Filter](/vertical-horizontal-filter/)**: a similar trending-or-ranging measure that can serve as a cross-check.
- **[Support and resistance](/support-and-resistance/)**: in choppy phases, levels define the edges of the range.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (Defines True Range, which the index uses.)

The original publication by Dreiss is not widely available; the formula above is the one published by major charting platforms.

## FAQ

**What does the Choppiness Index measure?**
It measures how much a market is moving sideways compared with trending, on a scale of 0 to 100. High values mean choppy, directionless price. Low values mean price is moving efficiently in one direction.

**What is a good Choppiness Index level?**
The usual levels are 61.8 and 38.2. Above 61.8 is considered choppy, below 38.2 is considered trending. These are conventions from Fibonacci ratios rather than fixed rules, and some traders use 60 and 40.

**Does the Choppiness Index show trend direction?**
No. A low reading shows an orderly trend but could be up or down. Pair it with a direction tool such as a moving average, DMI or price structure.

**How is the Choppiness Index different from ADX?**
ADX measures trend strength from smoothed directional movement. The Choppiness Index compares the sum of bar ranges with the overall window range. Both help identify trends and ranges, but they use different maths and can disagree.

**What is the default Choppiness Index setting?**
Most platforms use 14 periods with levels at 61.8 and 38.2. Shorter lengths react faster but swing more, and longer lengths are smoother but slower to react.
