---
slug: volume-profile-vs-market-profile
title: "Volume profile vs market profile: what is the difference?"
description: Market profile counts time spent at each price; volume profile counts volume traded at each price. How they differ, a worked comparison, and when each suits.
query: volume profile vs market profile
pillar: volume-and-order-flow-guide
publish: 2027-10-06
reviewed: 16 November 2026
guides: [market-profile, volume-profile, point-of-control, value-area]
siblings: [what-is-the-point-of-control, what-is-the-value-area]
value: [table, example, verdict]
---

Market profile measures how much time price spent at each level; volume profile measures how much volume traded at each level. Both build a sideways histogram with a point of control and a value area, but they can point to different prices when time and volume do not line up.

## Market profile: time at price

[Market profile](/market-profile/) was developed by J. Peter Steidlmayer at the Chicago Board of Trade in the 1980s. It splits the session into fixed time periods, traditionally 30 minutes, and gives each period a letter. Every price the market touched in a period gets that letter. These marks are called TPOs (time price opportunities). Stacking them gives a profile of how long the market spent at each price.

The price with the most TPOs is the market profile point of control. The value area is the band around it holding about 70% of the TPOs.

## Volume profile: volume at price

[Volume profile](/volume-profile/) uses the same shape but counts volume instead of time. Each price row shows how many shares or contracts traded there. The [point of control](/point-of-control/) is the row with the most volume, and the [value area](/value-area/) holds about 70% of the volume.

## Worked comparison

One session, eight 30-minute periods, four price rows:

| Price | TPOs (periods that touched it) | Volume traded there |
|---|---|---|
| 103 | 3 | 900 |
| 102 | 5 | 1,500 |
| 101 | 7 | 1,100 |
| 100 | 4 | 700 |

Market profile point of control: 101, with 7 TPOs. Price spent the most time there.

Volume profile point of control: 102, with 1,500 units. Most business was done there.

How can they differ? Price drifted around 101 through a quiet lunch period, collecting time but little volume. At 102 there was a burst of heavy trading in a short time. Time and volume tell two different stories, and both are true.

## Side-by-side summary

| | Market profile | Volume profile |
|---|---|---|
| Counts | Time (TPOs) | Volume |
| Needs real volume? | No | Yes, for meaningful results |
| Original setting | 30-minute periods per session | Any period, any row size |
| Shows | Where price lingered | Where most trading happened |
| Extra features | Initial balance, letter shapes, single prints | High and low volume nodes |
| Good for | Session structure, day-type reading | Levels weighted by participation |
| Weakness | Quiet drifting counts as much as heavy trade | Depends on volume data quality |

## Which suits which market

- **Futures and stocks.** Both work. Real exchange volume makes volume profile meaningful, and many futures traders use both together.
- **Spot forex.** Market profile has an advantage, because it does not need volume. Volume profile on forex uses tick counts, which measure activity rather than size.
- **Crypto.** Volume profile works per exchange, but volume differs across venues and some reported volume may be unreliable. Market profile avoids that question.

## Using them together

Where the two agree, for example both points of control at the same price, that price was both visited often and heavily traded. Where they disagree, the gap itself is information: a level with lots of time but little volume is one the market drifted through quietly. Some traders treat agreement as a stronger reference level. That is a reasonable idea, but not one we have tested.

For how a profile level compares with a classic horizontal level, see [volume profile vs support and resistance](/answers/volume-profile-vs-support-and-resistance/).

## Common mistakes

- Calling a volume profile "market profile" and expecting the TPO readings to carry over.
- Comparing a TPO value area with a volume value area and assuming one is wrong.
- Using volume profile on forex tick data as if it showed traded size.

## Verdict

They answer different questions: market profile shows where price spent time, volume profile shows where volume traded. Volume profile is the better fit where real volume exists; market profile is the safer choice where it does not. Used together, they show both how long the market stayed at a price and how much business it did there.
