---
slug: aroon-oscillator
name: Aroon Oscillator
aka: [Aroon Up minus Aroon Down]
type: trend
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Tushar Chande
year: 1995
default_settings: "25 periods; scale -100 to +100; zero line"
pairs_with: [aroon, adx, support-and-resistance, exponential-moving-average]
related: [vortex-indicator, dmi, choppiness-index, vertical-horizontal-filter, trend-intensity-index]
compare: []
glossary: [trend, range, lookback-period, oscillator]
wave: 3
reviewed: 14 November 2026
---

The Aroon Oscillator is the Aroon Up line minus the Aroon Down line, giving one line between -100 and +100. Positive values mean the high is more recent than the low, which fits an uptrend. Negative values suggest a downtrend. Traders use it as a simple trend direction and strength filter.

## At a glance

| | |
|---|---|
| Type | Trend indicator |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Trend filter |
| Default settings | 25 periods, scale -100 to +100 |
| Created by | Tushar Chande, 1995 |
| Leading or lagging | Lagging; it reports where recent extremes sit |

## What is the Aroon Oscillator?

The [Aroon indicator](/aroon/) measures time, not price. Aroon Up shows how recently the highest high of the last 25 bars occurred. Aroon Down does the same for the lowest low. Each runs from 0 to 100, and 100 means the extreme happened on the latest bar.

The Aroon Oscillator condenses these two lines into one by subtracting Down from Up. Tushar Chande, who created Aroon, described the family in the mid-1990s; the oscillator form is a common extension in charting software. Chande also wrote about Aroon in *The New Technical Trader*, co-authored with Stanley Kroll.

The idea is simple. In an uptrend, new highs keep arriving, so the highest high is recent. In a downtrend, the lowest low is recent. In a range, both extremes are old, so the oscillator hovers near zero.

## Formula

1. Choose a period n (default 25).
2. Find the number of bars since the highest high in the last n bars (call it bars since high) and since the lowest low (bars since low). The latest bar counts as 0.
3. Aroon Up = 100 x (n - bars since high) / n
4. Aroon Down = 100 x (n - bars since low) / n
5. Aroon Oscillator = Aroon Up - Aroon Down

**Worked example.** Using a 25-period window: the highest high was 5 bars ago and the lowest low was 20 bars ago.

Aroon Up = 100 x (25 - 5) / 25 = 80
Aroon Down = 100 x (25 - 20) / 25 = 20
Oscillator = 80 - 20 = **+60**

If the high is on the current bar (0 bars ago) and the low was 25 bars ago, Up is 100 and Down is 0, so the oscillator is +100.

Note: some platforms count n + 1 bars in the window (for example 26 bars for a setting of 25), so values can differ slightly.

## How to read it

**Zero line.** Above zero, the highest high is more recent than the lowest low: bullish bias. Below zero, bearish bias. Crossing zero means the balance has shifted.

**Strength.** Readings above +50 or below -50 are often taken as a strong trend, because the extreme is very recent. Many traders treat +/-50 as a rough threshold, though this is a convention, not a fixed rule.

**Flat near zero.** Staying between about -25 and +25 for a while suggests there is no clear trend. Fresh highs and fresh lows are alternating or neither is arriving.

**Extremes.** Readings at +100 or -100 mean a new extreme has just been made. They are signs of strength and do not mean the market is overbought or oversold.

## Best market states

**Trends (best).** In an established move, the oscillator stays on one side of zero and gives a clear yes or no on direction.

**Ranges (weak).** In a range the oscillator swings through zero often as each side of the range is touched. Zero-line crossovers in this state have little value.

**Reversals (lagging).** The oscillator crosses zero only after a new extreme has formed on the other side, so it confirms a change late.

**Breakouts.** A breakout to a new high pushes Aroon Up toward 100 straight away, so it can confirm that price is making fresh extremes, but it carries no information on whether the breakout will hold.

**Volatility.** It ignores the size of moves. One huge bar and one tiny bar that both make a new high count the same.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 10 to 14 | Quick to switch sign, more noise |
| Default | 25 | Chande's original; roughly five trading weeks on a daily chart |
| Long | 50 | Slower, ignores shorter swings, useful for major trend direction |

Because the oscillator looks at the highest high and lowest low only, a single extreme bar controls the reading for the entire window. When it drops out of the window, the value can jump. This is normal behaviour, not a fault.

## Common mistakes

- Using zero-line crossovers in a sideways market and treating each as a trend change.
- Reading +100 as "overbought". It only means a new high was just made.
- Forgetting that the oscillator ignores price distance, so small drifts can read as strongly as big trends.
- Expecting early signals. It reports after extremes form.
- Changing the period until past crossovers look good.
- Using it without price structure; it cannot tell you where to place a stop.

## Pairs well with

- **[Aroon](/aroon/)**: the two component lines show which side is driving the oscillator.
- **[ADX](/adx/)**: a second trend-strength check; agreement strengthens the filter.
- **[Support and resistance](/support-and-resistance/)**: shows whether a new extreme sits in open space or at a known level.
- **[Exponential moving average](/exponential-moving-average/)**: a slow EMA gives a price-based view of the same trend.

## Sources

- Chande, Tushar S., and Kroll, Stanley (1994). *The New Technical Trader*. John Wiley & Sons.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on trend indicators.)

## FAQ

**What does the Aroon Oscillator tell you?**
It tells you whether the most recent high or the most recent low is closer to the present, within the chosen window. Positive means the high is fresher, negative means the low is. It is a simple trend direction gauge.

**What is the difference between Aroon and the Aroon Oscillator?**
Aroon shows two lines, Up and Down, each from 0 to 100. The oscillator subtracts one from the other to give a single line between -100 and +100. It saves space but hides which side is doing the work.

**What is a good Aroon Oscillator level?**
Zero separates bullish from bearish. Many traders read above +50 or below -50 as a strong trend. These are conventions, not proven thresholds, so test them on your own market.

**Is the Aroon Oscillator leading or lagging?**
Lagging. A change of sign needs a fresh extreme on the opposite side, which happens after price has already moved. It is useful for confirming trend direction, not predicting turns.

**Does it work in a range?**
Poorly. It crosses zero often when price swings between two levels. Pair it with a trend-strength measure such as ADX so you can ignore signals when the market is flat.
