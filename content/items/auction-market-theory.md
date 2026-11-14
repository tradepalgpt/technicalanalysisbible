---
slug: auction-market-theory
name: Auction Market Theory
aka: [AMT, auction theory]
type: theory
states: [range, breakout]
weak_states: [trend]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "No fixed settings; read value, balance and imbalance"
pairs_with: [market-profile, volume-profile, value-area, point-of-control]
related: [market-profile, volume-profile, value-area, point-of-control, initial-balance, footprint-chart]
compare: []
glossary: [auction, value-area, balance, imbalance]
wave: 3
reviewed: 14 November 2026
---

Auction Market Theory (AMT) describes a market as a continuous two-way auction. Price moves to find the level where buyers and sellers will trade the most volume, called fair value. When price sits near that level the market is in balance. When it leaves, the market is in imbalance until a new fair value is found.

## At a glance

| | |
|---|---|
| Type | Theory / framework |
| Best market states | Range (balance), breakout (imbalance) |
| Weak in | Strong one-way trends, where there is little rotation to study |
| Best uses | Filter: decide whether to fade moves or follow them |
| Default settings | None; uses value area, point of control and session structure |
| Created by | Not attributed to one person |
| Leading or lagging | Context tool; the profile tools it uses are built from past trades |

## What is Auction Market Theory?

AMT treats every market as a place where price has one job: to attract trade. If price is too high, buyers stop buying and sellers appear. If it is too low, sellers dry up and buyers step in. Price therefore moves up and down, searching for the area where trade is easiest. That area is "value".

The framework is closely tied to Market Profile, which was developed at the Chicago Board of Trade and later popularised in books by James Dalton, Eric Jones and Robert Dalton. The wider idea of a market as an auction pre-dates those books and is not owned by any single person, so this guide does not assign an inventor or a year.

AMT is not an indicator. It is a way of thinking, and trader education that uses it has no strong academic evidence base showing that its rules improve results. It is widely used by futures and day traders as a map of where trade has been accepted and where it has been rejected.

## How it is identified

There is no single drawn shape. Practitioners identify the same few ideas:

1. **Value area.** The price range where a set share of the session's volume traded, commonly about 70% (see [Value Area](/value-area/)).
2. **Point of control.** The single price with the most trade (see [Point of Control](/point-of-control/)).
3. **Balance.** Price rotates inside a defined range, repeatedly returning to value.
4. **Imbalance.** Price moves away from value in one direction, usually in a hurry, and does not come back quickly.
5. **Acceptance and rejection.** Price that spends time and volume outside the old range is "accepted" at the new level. Price that pokes out and quickly returns is "rejected".

**Worked example.** Over two days, most volume trades between 100 and 104, with the busiest price at 102. That is the balance area, with a point of control at 102. On day three price opens at 106 and trades there for several hours. If volume builds at 105 to 107, the market has accepted higher prices, and fair value has probably shifted up. If price instead runs to 106 and drops back to 103 within an hour, the move was rejected, and 100 to 104 still looks like fair value.

## How to read it

**Balance days.** When price stays inside yesterday's value area, the market is saying it agrees with the old price range. Traders using AMT may look to fade the edges and aim for the middle.

**Imbalance days.** When price opens outside value and holds there, the market is searching for new value. Traders may follow the move rather than fade it.

**Open types.** Where price opens relative to yesterday's range and value is read as a clue to the day. An open inside value suggests balance is likely to continue; an open well outside suggests imbalance is possible.

**Excess.** A sharp spike to a high or low followed by a quick return is read as a rejected extreme. The spike's end is treated as a possible boundary.

**Initial balance.** The range of the first hour of the session is a common early guide to the day's size. See [Initial Balance](/initial-balance/).

**Higher time frames.** Balance areas on weekly or monthly charts act as the larger map. Day-time-frame value sitting at the edge of that map matters more than value in the middle of nowhere.

## Best market states

**Ranges (best).** Balance is where AMT's tools are clearest. The edges of value act as a framework for fading moves back to the middle.

**Breakouts (good).** AMT gives a way to judge a breakout: did price accept the new area, with volume building outside the old range, or was it rejected and sent back? That question is the framework's main contribution.

**Strong trends (weak).** In a persistent one-way market there are no balance areas to study and value keeps moving. The tools are available, but the useful signals are few.

**Reversals.** A reversal in AMT terms is a failed breakout: price leaves balance, finds no acceptance and returns. It can only be identified after the fact, or with confirming evidence.

**Volatility.** Quiet, tight balance often comes before a move out of the range, while volatile rejection spikes mark edges. Neither is a forecast.

## Settings

AMT has no inputs of its own. The practical choices come from the tools you build it with.

| Choice | Typical options | Effect |
|---|---|---|
| Value area width | About 70% of volume is the usual convention | A narrower share gives tighter value, a wider share gives broader value |
| Session definition | Regular hours, or the full 24-hour day | Changes where value and point of control sit, particularly in futures and forex |
| Profile period | Daily, weekly, monthly | Longer periods give larger, more important balance areas |
| Data source | Time-price (TPO) or volume | Different shapes; volume profile is built from traded volume, TPO from time spent at each price |

Platforms differ in how they compute value area and in how sessions are split, so values will not always match between charting packages.

## Common mistakes

- Treating AMT as a set of mechanical signals. It is a framework that needs judgement.
- Fading every move to the edge of value without checking whether the market is accepting the new area.
- Mixing sessions: using a value area from regular hours on a chart that includes overnight trade, or the reverse.
- Reading value from too little data, such as a single quiet hour.
- Ignoring the higher time frame, so a daily balance area is traded as if it were the whole picture.
- Assuming the theory has proven edge. It organises what the market is doing; it does not guarantee what comes next.

## Pairs well with

- **[Market Profile](/market-profile/)**: the chart type most closely tied to the theory, showing time spent at each price.
- **[Volume Profile](/volume-profile/)**: shows traded volume at each price, a close relative that works on any platform with volume data.
- **[Value Area](/value-area/)**: the range where most trade happened, the core of the balance idea.
- **[Point of Control](/point-of-control/)**: the busiest price, often treated as the magnet inside balance.

## Sources

- Dalton, James F., Jones, Eric T. and Dalton, Robert B. (2013). *Mind Over Markets: Power Trading with Market Generated Information*, updated edition. Wiley.
- Dalton, James F., Dalton, Robert B. and Jones, Eric T. (2007). *Markets in Profile: Profiting from the Auction Process*. Wiley.

## FAQ

**What is Auction Market Theory in simple terms?**
It is the idea that a market is an auction. Price moves up and down to find the level where buyers and sellers are happiest to trade. Time spent near that level is balance; a fast move away from it is imbalance.

**Is Auction Market Theory the same as Market Profile?**
No. Market Profile is a chart that displays time spent at each price. Auction Market Theory is the thinking behind how to interpret it. You can apply the theory with other tools such as volume profile.

**Does Auction Market Theory have evidence behind it?**
It is based on how markets operate, but the trading rules built on it lack a strong academic evidence base. Treat it as a way to organise what you see, and test any rule you derive from it on your own data.

**What is value in Auction Market Theory?**
Value is the price range where most trade occurred, usually about 70% of volume. It represents prices both buyers and sellers accepted. Price returning to value is read as the market agreeing with the old range.

**Can I use it on forex or crypto?**
Yes, with care. The theory was developed around exchange-traded futures, where volume is centralised. Forex and crypto volume is split across venues, so volume-based profiles may reflect only part of the market. Many traders use tick volume or a single exchange's data instead.
