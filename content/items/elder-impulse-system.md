---
slug: elder-impulse-system
name: Elder Impulse System
aka: [Impulse System, Elder Impulse]
type: trend
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Alexander Elder
year: 2000s
default_settings: "13-period EMA and MACD histogram (12, 26, 9); bars coloured green, red or blue"
pairs_with: [exponential-moving-average, macd, support-and-resistance, adx]
related: [macd-histogram, force-index, awesome-oscillator, heikin-ashi]
compare: []
glossary: [trend, momentum, smoothing]
wave: 3
reviewed: 14 November 2026
---

The Elder Impulse System colours each price bar by combining two things: the direction of a 13-period EMA and the direction of the MACD histogram. Green means both are rising, red means both are falling, and blue means they disagree. Traders use it as a filter that blocks trades against the current impulse.

## At a glance

| | |
|---|---|
| Type | Trend indicator (bar colouring system) |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Trade filter |
| Default settings | 13 EMA; MACD histogram 12, 26, 9 |
| Created by | Alexander Elder, 2000s |
| Leading or lagging | Mostly lagging, though the histogram can turn before price |

## What is the Elder Impulse System?

Alexander Elder is a trader and author known for *Trading for a Living*. He describes the Impulse System in his later work *Come Into My Trading Room* (2002). The idea is to merge two views of the market: trend (the EMA) and momentum (the MACD histogram). When both agree, there is an impulse in one direction.

The system does not generate entries by itself. It works as a traffic light. Green says buying is allowed and shorting is discouraged. Red says the opposite. Blue means no strong impulse, so either side may be acted on, subject to other analysis.

Elder uses it mainly to avoid trades that fight both trend and momentum at once.

## Formula

For each bar, compare today's values with yesterday's:

1. EMA(13) of the close: rising if today's value is above yesterday's, falling if below.
2. MACD histogram (MACD line minus signal line, using 12, 26 and 9): rising if today's value is above yesterday's, falling if below.

Colouring:

- **Green**: EMA rising and histogram rising.
- **Red**: EMA falling and histogram falling.
- **Blue**: any other combination (one rising, one falling, or one unchanged).

**Worked example.** Yesterday the 13 EMA was 50.0 and today it is 50.4, so it is rising. Yesterday the histogram was 0.20 and today it is 0.35, so it is rising. Both rise: the bar is **green**.

Next day: the EMA is 50.7 (rising), but the histogram falls to 0.30. They disagree: the bar is **blue**.

Note: the histogram can be positive or negative. What matters is the direction of change, not whether it is above zero.

## How to read it

**Green bars.** Both trend and momentum point up. Elder's rule of thumb is that you may buy or hold longs but should not short.

**Red bars.** Both point down. Shorting is allowed; buying is discouraged.

**Blue bars.** Mixed picture. No ban on either side. Elder treats blue as a neutral state, allowing action in either direction when other analysis supports it.

**Colour changes.** A move from red to blue often shows selling pressure easing before the trend has turned. A move from blue to green shows momentum and trend aligning. These are descriptions of the state, not entry signals.

**Streaks.** Long runs of the same colour mark a steady trend. Frequent changes between colours suggest a choppy market.

## Best market states

**Trends (best).** In a clean trend most bars are green or red with a few blue pauses, so the system keeps you on the right side.

**Ranges (weak).** In a sideways market the EMA flips direction often and the histogram does too. Colours switch constantly and carry little information.

**Reversals.** The system lags at turns. It does not mark tops and bottoms. It can show that selling momentum has stopped (red to blue) but gives no prediction of where price goes next.

**Breakouts.** A breakout often triggers a run of green or red bars, which confirms the direction. It does not say whether the breakout will hold.

**Volatility.** It ignores the size of moves. Tiny changes in EMA direction count the same as large ones.

## Settings

| Setting | Values | What it does |
|---|---|---|
| EMA length | 13 | Elder's usual choice; shorter reacts faster, longer is slower |
| MACD | 12, 26, 9 | Standard settings; the histogram is the line-minus-signal difference |
| Time frame | Daily and weekly | Elder often checks the weekly chart first, then trades the daily |

Elder's wider approach, the Triple Screen, uses a longer time frame to set direction and a shorter one for timing. The Impulse System fits into that: the weekly colour gives the bias, the daily gives the timing. Most charting platforms offer this as a built-in or a free add-on. Colour rules can vary slightly on how they treat equal values, so check your platform's version.

## Common mistakes

- Treating a green bar as a buy signal. It only says shorting is discouraged.
- Using it in a flat market where colours flip all the time.
- Looking at the histogram's level (above or below zero) rather than its direction.
- Ignoring the rule that blue means no impulse, not "sell".
- Changing the EMA or MACD settings until the past looks perfect.
- Taking trades with a wide stop just because the colour is favourable; position sizing still comes first.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: a slow EMA gives the larger trend, so you only use green signals in an uptrend.
- **[MACD](/macd/)**: the histogram inside the Impulse System comes from MACD, so seeing the full indicator explains each colour.
- **[Support and resistance](/support-and-resistance/)**: colour is a filter, but levels give the actual trade location.
- **[ADX](/adx/)**: a low ADX tells you the colours will probably flip often and are better ignored.

## Sources

- Elder, Alexander (1993). *Trading for a Living*. John Wiley & Sons. (Background on the Triple Screen approach.)
- Elder, Alexander (2002). *Come Into My Trading Room*. John Wiley & Sons.
- Appel, Gerald (2005). *Technical Analysis: Power Tools for Active Investors*. FT Press. (MACD and its histogram.)

## FAQ

**What do the Elder Impulse System colours mean?**
Green: the 13 EMA and the MACD histogram are both rising. Red: both are falling. Blue: they disagree. Green discourages shorts, red discourages longs, and blue allows either side.

**Is the Elder Impulse System a buy or sell signal?**
No. Elder describes it as a filter that tells you what to avoid. A trade still needs a setup, an entry level and a stop.

**What settings does the Impulse System use?**
A 13-period EMA and the MACD histogram with 12, 26 and 9. These are Elder's usual choices. Some traders change them, but doing so moves you away from the published version.

**Does it work on all time frames?**
It can be drawn on any chart, because it only needs price. Elder suggests checking a longer time frame first for direction, then using the shorter one for timing. Frequent colour flips on short charts are common.

**Why is the bar blue?**
Blue means the EMA and the histogram point in different directions, or one is flat. It marks a mixed or transitional state, not a sell signal.
