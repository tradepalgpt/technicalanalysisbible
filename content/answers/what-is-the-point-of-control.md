---
slug: what-is-the-point-of-control
title: "What is the point of control in volume profile?"
description: The point of control is the price with the most volume in a volume profile. How it is found, a worked example, how traders read it, and where it misleads.
query: point of control volume profile
pillar: volume-and-order-flow-guide
publish: 2027-10-01
reviewed: 16 November 2026
guides: [point-of-control, volume-profile, value-area]
siblings: [what-is-the-value-area, volume-profile-vs-market-profile]
value: [table, example, verdict]
---

The point of control (POC) is the single price level where the most volume traded over the period a volume profile covers. It marks the price the market accepted most, and many traders watch it as a reference level that price often returns to.

## How the point of control is found

A [volume profile](/volume-profile/) turns the usual volume bars on their side. Instead of showing how much traded in each time bar, it shows how much traded at each price over a chosen period: one session, a week, or a custom range.

The [point of control](/point-of-control/) is simply the row with the largest total. There is no formula beyond "find the maximum".

## Worked example

A one-session profile, with prices grouped into 1.00 rows:

| Price row | Volume | Note |
|---|---|---|
| 105 | 200 | |
| 104 | 500 | |
| 103 | 900 | |
| 102 | 1,500 | Largest: point of control |
| 101 | 1,100 | |
| 100 | 700 | |
| 99 | 400 | |
| 98 | 200 | |
| Total | 5,500 | |

The point of control is 102, with 1,500 of the 5,500 traded, about 27% of the session's volume.

## Choices that move the POC

| Choice | Effect |
|---|---|
| Row size | Wider rows smooth the profile and can shift the POC to a neighbouring price |
| Period covered | A session POC, a weekly POC and a composite POC over months are different levels |
| Data source | Bar-based profiles spread each bar's volume across its range; tick-based profiles use actual trade prices |
| Volume type | Tick volume on forex counts activity, not size |

Bar-based profiles are an approximation. If a one-hour bar traded 10,000 units between 100 and 104, many platforms split those units evenly across the rows, even though the real trades may have bunched at one price. Smaller bars or tick data give a more accurate POC.

## How traders read the point of control

- **Fair value.** The POC is where the most business was done, so it is often called the session's fair price.
- **Magnet.** In ranging conditions, price often rotates back towards the POC. In trends, it can leave it behind for good.
- **Reference level.** A prior session's POC is watched the next day, much like support or resistance. We compare the two ideas in [volume profile vs support and resistance](/answers/volume-profile-vs-support-and-resistance/).
- **Naked POC.** A POC that later price has not traded back through is sometimes called "naked" or "virgin". Some traders watch these as targets. That idea is a convention; we have not tested it.

## Point of control and value area

The POC is the starting point for the [value area](/value-area/), the band of prices around it that holds about 70% of the volume. The two are usually read together: the POC is the centre, the value area is the accepted range. See [what the value area is](/answers/what-is-the-value-area/) for how it is built.

## Where the POC misleads

- **Two-humped sessions.** If a session traded heavily at two separate prices, the POC sits at one of them, and the choice can flip on a few hundred units.
- **Short periods.** A POC from one quiet hour carries little weight.
- **Late-session shifts.** A session can trade most of its volume at one price in the morning and trend away all afternoon. The POC then describes the morning, not the close.
- **Thin markets.** Where volume is low, one large trade can create the POC.

## Common mistakes

- Comparing POCs from platforms with different row sizes or session times.
- Treating every old POC as a level price must react to.
- Using a POC from forex tick volume as if it reflected traded size.

## Verdict

The point of control is the price with the most volume in the period you chose. It is a sensible, objective reference for where the market did most of its business, and it anchors the value area. Its location depends on row size, period and data, so set those once and keep them fixed before reading anything into it.
