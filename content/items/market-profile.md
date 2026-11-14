---
slug: market-profile
name: Market Profile (TPO)
aka: [Market Profile, TPO chart, Time Price Opportunity]
type: volume
states: [range, breakout]
weak_states: [trend]
purposes: [entry, filter]
inventor: J. Peter Steidlmayer
year: 1980s
default_settings: "30-minute TPO periods; value area of 70% of TPOs"
pairs_with: [value-area, point-of-control, volume-profile, support-and-resistance]
related: [value-area, point-of-control, volume-profile, vwap, anchored-vwap, key-levels]
compare: [volume-profile-vs-market-profile]
glossary: [value-area, auction, consolidation]
wave: 2
reviewed: 14 November 2026
---

Market Profile is a way of showing price action as a distribution of time spent at each price, using letters that stack sideways into a bell-like shape. It highlights the prices where the market spent most time (value) and where it moved quickly. Traders use it to find fair value, range edges and signs of breakouts.

## At a glance

| | |
|---|---|
| Type | Time-at-price distribution (auction market theory) |
| Best market states | Range, breakout |
| Weak in | Strong trends, where value keeps moving |
| Best uses | Entry, filter |
| Default settings | 30-minute periods; value area of 70% |
| Created by | J. Peter Steidlmayer (Chicago Board of Trade), 1980s |
| Leading or lagging | Mostly lagging; prior-day levels are projected forward |

## What is Market Profile?

Market Profile organises each day's trading by price, not by time. The day is split into equal periods, typically 30 minutes, and each period is given a letter (A for the first, B for the second and so on). For every price traded in a period, that letter is printed in a column at that price. Letters pile up where price lingered and thin out where it moved quickly.

The shape that results is called the profile. Each letter is a Time Price Opportunity, or TPO. The price with the most TPOs is the Point of Control (see [Point of Control](/point-of-control/)). The band around it holding about 70% of the TPOs is the [Value Area](/value-area/).

The method is credited to J. Peter Steidlmayer, who developed it while working at the Chicago Board of Trade, with the approach popularised in the 1980s. It is built on auction market theory: markets exist to find prices where trade is fair, and moves away from value are tests of whether others agree. This is a trader-education framework and has little formal academic evidence behind it.

Market Profile uses time at price. [Volume profile](/volume-profile/) uses traded volume at price instead. The two often show similar levels, but not always. See [Volume Profile vs Market Profile](/compare/volume-profile-vs-market-profile/).

## How it is drawn

1. Choose a session (for example a day) and a period length (for example 30 minutes).
2. Split the day into periods and label them A, B, C and so on.
3. Pick a price step (the tick size or a multiple).
4. For each period, place its letter at every price step that traded in that period.
5. Count letters at each price and mark the Point of Control: the row with most letters.
6. Build the value area: start at the POC, then add the next price rows above and below until they hold about 70% of all TPOs.

**Worked example.** A day has 100 TPOs in total. The POC row has 12. The value area must hold 70% of 100 = **70 TPOs**. Starting with 12, add rows above and below, taking the pair with the larger count each time, until the total reaches 70. The highest and lowest rows included are the Value Area High (VAH) and Value Area Low (VAL).

Platforms differ in the exact rules for adding rows when counts tie, so numbers can differ slightly.

## How to read it

**Value area.** Prices inside it are considered fair for that session. Price accepted outside it may signal a shift in value.

**Opening versus prior value.** Opening inside yesterday's value area suggests balance. Opening outside and holding there suggests a possible move. Many traders watch for price re-entering the prior value area as a sign of rotation toward the opposite edge.

**Profile shape.** A balanced, bell-like shape suggests a rotational day. A long thin profile suggests a one-sided trend day. A shape with two humps suggests two areas of value.

**Single prints.** Rows with just one letter show quick movement through a price. Traders watch these as possible levels where price may return.

**Initial balance.** The first hour's range, usually the first two periods, is sometimes used as a reference for the rest of the day.

**Poor highs and lows.** An extreme that has a stack of letters rather than a thin tail is called poor, and is read as unfinished business. This is a common idea in Market Profile, but evidence for it is anecdotal.

## Best market states

**Ranges (good).** The value area and POC give clear reference levels, and rotation between them is common.

**Breakouts (good).** Acceptance outside value, with time spent and stacking letters, is used to separate real breakouts from probes.

**Trends (weak).** In a trending market, value keeps moving and the previous profile soon loses relevance.

**Reversals (mixed).** Rejection at the edge of value is a common setup, but needs confirmation.

**Volatility.** Quiet markets produce compact profiles; wild days produce wide, sparse ones.

## Settings

| Setting | Typical | Effect |
|---|---|---|
| Period | 30 minutes | Shorter gives more letters and fine detail; longer is simpler |
| Value area | 70% | Based on a loose link to one standard deviation; some platforms allow other values |
| Price step | Tick size or multiple | Larger steps smooth the shape |
| Session | Regular hours or full 24 hours | Changes the profile a lot in futures and forex |

Futures traders often use regular trading hours for the main profile and treat overnight trade as a separate piece.

## Common mistakes

- Using it on thin or around-the-clock markets without choosing a session.
- Treating the value area as a hard support and resistance band.
- Ignoring that value can move day to day in a trend.
- Mixing time-based (TPO) and volume-based profiles as if they were identical.
- Treating single prints and poor highs as rules. They are traditions, not tested facts.
- Not knowing how your platform builds the 70% area.

## Pairs well with

- **[Value area](/value-area/)**: the main range read from the profile.
- **[Point of Control](/point-of-control/)**: the price with the most time spent, often used as a magnet or pivot.
- **[Volume profile](/volume-profile/)**: gives the volume-based view of the same price range.
- **[Support and resistance](/support-and-resistance/)**: profile levels carry more weight when they match older levels.

## Sources

- Dalton, James F., Jones, Eric T. and Dalton, Robert B. (2013). *Mind Over Markets*, updated edition. Wiley.
- Steidlmayer, J. Peter and Koy, Kevin (1986). *Markets and Market Logic*. Porcupine Press.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Brief mention only.)

## FAQ

**What is a TPO in Market Profile?**
TPO stands for Time Price Opportunity. It is one letter printed at a price when the market traded there during a given time period, such as 30 minutes. Counting TPOs at each price shows where time was spent.

**What is the difference between Market Profile and Volume Profile?**
Market Profile counts time at price. Volume Profile counts traded volume at price. They often agree on key levels but not always, especially when volume is concentrated in a few minutes.

**What is the 70% value area?**
It is the price range holding about 70% of the session's TPOs, built outward from the Point of Control. The idea loosely mirrors one standard deviation in a normal distribution. It is a convention rather than a law.

**Does Market Profile work in forex?**
It can be drawn on any price series because it only needs time and price. Session choice matters because forex trades around the clock. Because it is time-based, it does not rely on volume, which helps in spot forex.

**Is Market Profile good for day trading?**
Many day traders use prior-day value area and POC as reference levels. The method has a following, but little formal research behind it. As with any tool, test it on your market and time frame.
