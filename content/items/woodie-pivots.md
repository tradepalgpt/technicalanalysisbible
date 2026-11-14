---
slug: woodie-pivots
name: Woodie Pivot Points
aka: [Woodie's pivots, Woodie pivot]
type: levels
states: [range]
weak_states: [trend]
purposes: [entry]
inventor: "Ken Wood, known as 'Woodie' in the CCI trading community"
year: Unknown
default_settings: "PP = (High + Low + 2 x Close) / 4 on the prior period; support and resistance from PP"
pairs_with: [pivot-points, support-and-resistance, cci, session-open]
related: [camarilla-pivots, demark-pivots, fibonacci-pivot-points, previous-day-high-low, key-levels]
compare: []
glossary: [range, support, resistance, breakout]
wave: 3
reviewed: 14 November 2026
---

Woodie pivot points are a variation of standard floor-trader pivots that give more weight to the prior close. They produce a central pivot and several support and resistance levels for the next period. They are credited to a trader known as Woodie, associated with a CCI-based trading community.

## At a glance

| | |
|---|---|
| Type | Pivot levels |
| Best market states | Range |
| Weak in | Strong trends, where price runs through levels |
| Best uses | Entry timing near levels |
| Default settings | PP = (High + Low + 2 x Close) / 4 using the prior day's values |
| Created by | A trader known as Woodie; year unknown |
| Leading or lagging | Levels are fixed in advance from the prior period |

## What are Woodie pivot points?

Pivot points turn the previous period's high, low and close into levels for the current one. The standard formula takes an equal-weighted average. Woodie's version weights the close twice, on the idea that the close is the most important price of the period.

The method is credited to a trader known by the name Woodie, who was linked with a community built around the Commodity Channel Index ([CCI](/cci/)). This guide cannot give a firm year or full name. Like other [pivot points](/pivot-points/), the levels have no academic evidence base and are used as a convention by day traders.

## Formula

Using the previous period's high (H), low (L) and close (C):

- Pivot point: PP = (H + L + 2 x C) / 4
- Resistance 1: R1 = 2 x PP - L
- Support 1: S1 = 2 x PP - H
- Resistance 2: R2 = PP + H - L
- Support 2: S2 = PP - H + L

Some versions also give R3, S3, R4 and S4. Those extra levels vary between platforms.

**Worked example.** Yesterday's high was 110, low was 100 and close was 108.

- PP = (110 + 100 + 2 x 108) / 4 = 426 / 4 = **106.5**
- R1 = 2 x 106.5 - 100 = **113**
- S1 = 2 x 106.5 - 110 = **103**
- R2 = 106.5 + 110 - 100 = **116.5**
- S2 = 106.5 - 110 + 100 = **96.5**

Platforms differ. Some use the current period's open in place of the close, so that the pivot is calculated as (H + L + 2 x Open) / 4 once the new period begins. Others apply Woodie levels to weekly or monthly data. Check which version your charting package uses.

## How to read it

**The pivot (PP).** Price above PP leans bullish for the period; below PP leans bearish. PP also acts as a magnet and a level to watch in a range.

**S1 and R1.** First areas where price may pause. In a range, a rejection candle at R1 or S1 can mark an entry.

**S2 and R2.** Outer levels, where price is more stretched. In a range these are possible turning points; in a trend, price often runs through them.

**Breaks.** A close beyond R2 or S2 can show that the range day has become a trend day. Woodie's version does not give a fixed rule for what happens next.

Reactions at pivots are common, since many traders watch the same levels, but no pivot is certain to hold.

## Best market states

**Ranges (best).** The levels are designed for markets that move around a central value.

**Trends (weak).** In a strong trend, price can pass through every level in a day.

**Breakouts.** A break beyond the outer levels is useful as a sign that the range has ended.

**Volatility.** In very active sessions the levels are too close together to be useful, and in quiet ones price may never reach them.

## Settings

| Setting | Typical value | Effect |
|---|---|---|
| Period | Daily | Gives intraday levels |
| Price input | Prior close (or current open on some platforms) | Changes PP and all levels |
| Extra levels | R3, S3, R4, S4 (if shown) | Platform specific |
| Session boundary | Platform default | For 24-hour markets the day boundary affects the high, low and close used |

For 24-hour markets such as forex and crypto, the time zone that closes the "day" changes the levels. Use one definition and keep it fixed.

## Common mistakes

- Mixing the Woodie formula with the standard one, which gives a different PP.
- Using a version based on the open when you think it is based on the close.
- Taking every touch of a level as a trade.
- Ignoring the day's trend and fading levels in a strong move.
- Forgetting that the levels are fixed once the period begins, even if the market has changed.

## Pairs well with

- **[Pivot points](/pivot-points/)**: compare the Woodie levels with the standard pivots to find overlap.
- **[Support and resistance](/support-and-resistance/)**: a pivot at an old swing level carries more weight.
- **[CCI](/cci/)**: the community behind the method used CCI, so some traders pair it with the pivots.
- **[Session open](/session-open/)**: shows whether the day opened above or below PP.

## Sources

- Person, John L. (2004). *A Complete Guide to Technical Trading Tactics*. Wiley. (Covers floor-trader pivot points; the Woodie variation is a less common version.)
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.
- Charting platform documentation for Woodie pivots, since formulas vary slightly between platforms.

## FAQ

**What is the Woodie pivot formula?**
PP = (High + Low + 2 x Close) / 4 using the prior period. R1 = 2 x PP - Low, S1 = 2 x PP - High, R2 = PP + High - Low and S2 = PP - High + Low. Some platforms use the current open in place of the close.

**How are Woodie pivots different from standard pivots?**
The standard pivot is (High + Low + Close) / 3, so each price counts equally. Woodie's formula counts the close twice, so the pivot sits closer to the close. This moves all the other levels as well.

**Who created Woodie pivots?**
The method is credited to a trader known as Woodie, associated with a CCI-based trading community. This guide does not state a year or full name because they are not clearly documented.

**Are Woodie pivots better than standard pivots?**
No study shown here supports that. Both are conventions that many traders watch. The difference is mostly in where the central pivot sits, so test which fits your market and time frame.

**Can Woodie pivots be used on weekly or monthly data?**
Yes, the same formula can be applied to weekly or monthly high, low and close. Higher-period levels are wider and are watched for broader support and resistance. Platform handling of the period boundary varies.
