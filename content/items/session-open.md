---
slug: session-open
name: Daily Open / Session Open
aka: [Daily open, Session open, Opening price, Midnight open]
type: levels
states: [range]
weak_states: [trend]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "First traded price of the session or day"
pairs_with: [previous-day-high-low, vwap, pivot-points, support-and-resistance]
related: [opening-range-breakout, initial-balance, previous-day-high-low, pivot-points, vwap, round-numbers]
compare: []
glossary: [session, gap, bias]
wave: 3
reviewed: 14 November 2026
---

The session open is the first traded price of a trading session, and the daily open is the first price of the trading day. Many traders draw it as a horizontal line and treat it as a reference: price above the open shows buyers have had control since the start, and price below it shows sellers have had control.

## At a glance

| | |
|---|---|
| Type | Price level |
| Best market states | Ranges and intraday trading days |
| Weak in | Strong trends, where price leaves the open far behind |
| Best uses | Filter (bias), reference level |
| Default settings | First traded price of the session or day |
| Created by | Not attributed to one person |
| Leading or lagging | Neither; it is a fixed price for the day |

## What is the session open?

Every session begins at one price. As the session goes on, that price becomes a simple dividing line between the bars that closed above it and those that closed below it. If price is above the open, the average trade since the start of the session was profitable for buyers. If it is below, it was profitable for sellers.

The idea is simple, and no single person is credited with it. Floor traders, day traders and many modern charting packages use the open as a basic reference.

What counts as the open depends on the market:

- **Stocks and futures with defined hours.** The open is usually the first print of the regular session (for example, a stock exchange's opening auction price).
- **Markets that trade nearly around the clock, such as spot forex and crypto.** There is no natural open, so traders choose a time. Common choices include the start of a local exchange session (London, New York) or midnight in a chosen time zone. Some traders call the midnight version the "midnight open" or "true day open".
- **Other levels linked to it.** Weekly and monthly opens are drawn in the same way and used as higher time frame references.

Because the choice of time varies, two traders can have two different "daily opens" on the same chart. It is worth stating which one you use.

## How it is identified

1. Choose your session and time zone.
2. Find the first traded price after that time. In most platforms, this is the open of the first bar of the session.
3. Draw a horizontal line from that price across the session.

Many platforms have a built-in "session open" or "daily open" line that does this.

**Worked example.** The daily open is 100.
- Price trades at 102, so it is 2 above the open. Bias for the session is bullish.
- Price falls back to 100.5 and holds. The open acts as support, with price still above it.
- If price closes a bar at 99 instead, it has crossed to the other side. The open now acts as resistance, and bias flips to bearish.

## How to read it

**Above or below.** The simplest use: look for longs only while price is above the open, and shorts only below. It is a rough filter, and not a signal on its own.

**Support and resistance.** Price often returns to the open during the session and reacts. Whether it reacts depends on the day, and it is far from a rule.

**Retests.** After price moves away and comes back to the open, traders watch for a hold (the trend continues) or a close through it (the bias changes).

**Gap and open.** In markets with a gap between yesterday's close and today's open, the open marks the gap start. Price filling the gap means returning toward the previous close.

**Higher time frame opens.** The weekly and monthly opens work the same way, and are used for wider bias.

**Day-of-week and session effects.** Some traders believe certain times of day move away from or back to the open in a typical way. These are anecdotal habits, and they lack a firm evidence base. Test any such claim on your own data.

## Best market states

**Ranges (best).** When price moves sideways, the open sits inside the range and often serves as a midpoint that price crosses repeatedly.

**Trending days (weak).** On a strong trend day, price moves away from the open and may never return. The open is then only a history marker.

**Breakouts.** A decisive move away from the open with volume can mark the start of a trend day. The open is not itself the breakout level.

**Reversals.** A failed move away from the open that returns through it can mark a change in intraday bias.

**Volatility.** In very volatile sessions, price cuts through the open repeatedly, which makes it a poor filter.

## Confirmation rules

| Check | What to look for |
|---|---|
| Which open | Decide the session and time zone in advance, and stay consistent |
| Close, not touch | Use a closed bar beyond the open, not a wick, to judge a bias flip |
| Context | Combine with other levels such as the previous day's high and low |
| Volume or momentum | A move through the open on strong participation is more meaningful |
| Time of day | Early in the session the open is a fresh reference, and late in the day it carries less weight |

## Common mistakes

- Not saying which open is meant, especially in 24-hour markets.
- Treating the open as certain support or resistance.
- Changing the open time to suit a past trade.
- Using it as the only filter. It says very little by itself.
- Ignoring higher time frame trend. A bullish bias versus the daily open does not help in a strong downtrend.

## Pairs well with

- **[Previous day high/low](/previous-day-high-low/)**: gives a range of reference prices next to the open for the same day.
- **[VWAP](/vwap/)**: the volume-weighted average price since the open shows where the average trade took place.
- **[Pivot points](/pivot-points/)**: calculated from the previous day, pivots provide levels for the day ahead, with the open showing where price began.
- **[Support and resistance](/support-and-resistance/)**: an open near a strong level carries more weight.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General reference for opening prices in bar and candlestick analysis.)

## FAQ

**What is the daily open in trading?**
It is the first traded price of the trading day. It is drawn as a horizontal line, and traders use it as a reference for who has had control since the start: buyers above it, or sellers below.

**What is the "midnight open"?**
Some traders of 24-hour markets, such as forex, take the price at midnight in a chosen time zone as the day's open. It is a convention, and not an official price. Different time zones give different lines, so state which you use.

**Is price above the daily open bullish?**
It means buyers have been ahead since the open, so some traders treat it as a bullish bias for the session. It is not a trading signal by itself, and it can flip many times in a day.

**Does price return to the daily open?**
Often, but not always. On quiet or sideways days price crosses the open many times. On strong trend days it may stay away. Check how your own market behaves rather than assuming.

**What is the difference between the session open and the daily open?**
A session open is the start of one trading session, such as London or New York. The daily open is the start of the whole trading day. In markets with one session per day they are the same.
