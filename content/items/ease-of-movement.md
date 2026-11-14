---
slug: ease-of-movement
name: Ease of Movement
aka: [EMV, EOM, Ease of Movement Value]
type: volume
states: [trend]
weak_states: [range]
purposes: [confirmation]
inventor: Richard W. Arms Jr.
year: Unknown
default_settings: "14-period simple moving average of the raw value; volume scaled by 100,000,000 on some platforms"
pairs_with: [volume, exponential-moving-average, on-balance-volume, support-and-resistance]
related: [force-index, accumulation-distribution, price-volume-trend, volume-spread-analysis, chaikin-money-flow, klinger-oscillator]
compare: []
glossary: [oscillator, smoothing, momentum, lookback-period]
wave: 3
reviewed: 14 November 2026
---

Ease of Movement (EMV) is a volume oscillator that relates how far price moved to how much volume it took. A high positive reading means price rose easily on light volume. A low negative reading means it fell easily. Traders use it to confirm that a trend is moving with little resistance.

## At a glance

| | |
|---|---|
| Type | Volume oscillator |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Confirmation |
| Default settings | 14-period SMA of the raw value |
| Created by | Richard W. Arms Jr. (year not given consistently by sources) |
| Leading or lagging | Lagging, because it is smoothed from past bars |

## What is Ease of Movement?

Most volume tools ask how much volume traded. Ease of Movement asks a different question: how much volume did it take to move price? If price moves a long way on small volume, there is little opposition, so the move is easy. If heavy volume barely moves price, the move is hard.

The indicator is credited to Richard W. Arms Jr., who also developed the Arms Index (TRIN) and Equivolume charting. Equivolume charts draw each bar with a width proportional to volume, and Ease of Movement uses the same idea numerically. Sources do not agree on a precise publication year, so none is given here.

The result is an oscillator that crosses a zero line. Above zero, price is rising with ease. Below zero, price is falling with ease. Values near zero mean price and volume are balanced, or that price is making little progress.

## Formula

Calculation per bar:

1. Distance moved = (High + Low) / 2 - (previous High + previous Low) / 2
2. Box ratio = (Volume / scale) / (High - Low)
3. Raw EMV = Distance moved / Box ratio
4. EMV(14) = 14-period simple moving average of raw EMV

The scale exists only to keep the numbers readable. Many platforms divide volume by 100,000,000 for stocks. Others use different scaling, or skip it.

**Worked example.** Take small round numbers and ignore the scale.
Today High 12, Low 10. Yesterday High 11, Low 9.
Distance moved = (12 + 10) / 2 - (11 + 9) / 2 = 11 - 10 = **1**
Volume = 500, so box ratio = 500 / (12 - 10) = 250
Raw EMV = 1 / 250 = **0.004**
The next day price moves the same distance, 1, but volume is 1,000 and the range is still 2. Box ratio is 500, raw EMV is 0.002. The same move took more volume, so it was harder, and the reading is lower.

Platform differences: scaling, smoothing type and period all vary. The shape of the line is more important than the numeric level.

## How to read it

**Zero line.** A rise above zero says price is moving up with little volume resistance. A fall below says it is moving down easily. Crosses of zero are the simplest signals, but they are noisy.

**Trend support.** In an uptrend, an EMV that stays mostly positive suggests the advance is meeting little resistance. A drift toward zero while price keeps rising may show that more effort is needed for each step.

**Divergence.** Price makes a new high while EMV makes a lower high. This hints at rising effort for each gain. See [Divergence](/divergence/). It is a warning, not a timing signal.

**Spikes.** A very large reading often comes from a wide bar on low volume, such as a gap or an opening bar with thin trade. Do not treat a single spike as a trend signal.

**Scale.** The values depend on instrument, volume scale and period, so there are no universal overbought or oversold levels.

## Best market states

**Trends (best fit).** The indicator is built to show whether a move is going ahead with or without resistance, so it suits trending conditions.

**Ranges (weak).** In a range the line oscillates around zero and crosses often, giving little useful information.

**Reversals (mixed).** Divergence at major levels can warn of a turn, but the evidence is soft.

**Breakouts (mixed).** A breakout on strong EMV suggests an easy move. A breakout on low EMV with heavy volume may mean the move met resistance.

**Volatility.** Very wide bars on thin volume inflate the value. Low-volume sessions can distort readings.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 9 | Faster, many zero crosses, noisy |
| Default | 14 | The common setting |
| Long | 20 to 30 | Smoother, fewer signals, slower |

Raising the period smooths the line but delays it. Because the raw value can spike, some traders smooth more heavily. Test settings on the market and time frame you trade, and use real volume where possible.

## Common mistakes

- Trading every zero-line cross as a signal.
- Using tick volume in spot forex and treating it as true volume.
- Comparing the numeric value between platforms with different scaling.
- Reading a single spike from a gap or opening bar as a trend signal.
- Using it in a sideways market where it carries almost no information.
- Ignoring price structure and using EMV alone.

## Pairs well with

- **[Volume](/volume/)**: the raw volume bars show the context behind each EMV reading.
- **[Exponential moving average](/exponential-moving-average/)**: gives the trend direction so you take EMV signals only with it.
- **[On-Balance Volume](/on-balance-volume/)**: a cumulative volume view that checks whether the same story appears.
- **[Support and resistance](/support-and-resistance/)**: shows where an easy move may meet resistance.

## Sources

- Achelis, Steven B. (2000). *Technical Analysis from A to Z*, 2nd edition. McGraw-Hill. (Reference entry on Ease of Movement.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on volume and price interaction.)

## FAQ

**What does Ease of Movement measure?**
It measures how much price moved relative to how much volume traded. A big move on small volume gives a high value, and a small move on heavy volume gives a low one. In short, it shows how easily price is moving.

**Who created Ease of Movement?**
It is credited to Richard W. Arms Jr., who also created the Arms Index and Equivolume charts. Sources differ on the exact year, so treat any single date with caution.

**What does a negative EMV mean?**
A negative reading means price is falling, and the lower it goes, the easier the fall was relative to volume. It does not by itself show a sell signal, since a downtrend can stay negative for a long time.

**What is the default EMV setting?**
A 14-period simple moving average of the raw value is the usual default. Volume is often scaled down (for example by 100,000,000) just to keep the numbers manageable. Settings differ by platform.

**Is Ease of Movement good for day trading?**
It can be used on any time frame, but short time frames have thin volume and many gaps in the bar range, which makes the raw value spiky. Heavier smoothing helps, and results should be tested before relying on them.
