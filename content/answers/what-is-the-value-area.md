---
slug: what-is-the-value-area
title: "What is the value area in volume profile?"
description: The value area is the price range around the point of control that holds about 70% of volume. How it is built step by step, and why two platforms can disagree.
query: value area volume profile
pillar: volume-and-order-flow-guide
publish: 2027-10-04
reviewed: 16 November 2026
guides: [value-area, point-of-control, volume-profile, market-profile]
siblings: [what-is-the-point-of-control, volume-profile-vs-market-profile]
value: [table, example, verdict]
---

The value area is the range of prices, built outward from the point of control, that contains about 70% of the volume traded in the period. Its top is the value area high (VAH) and its bottom is the value area low (VAL), and together they mark the prices the market accepted most.

## Where the 70% comes from

The idea comes from [market profile](/market-profile/), developed by J. Peter Steidlmayer at the Chicago Board of Trade in the 1980s. Roughly 70% is close to one standard deviation either side of the mean in a normal distribution, so the [value area](/value-area/) is meant to capture the "normal" trading range of the session. The percentage is a convention. Most platforms default to 70% and let you change it.

## How the value area is built

1. Start at the [point of control](/point-of-control/), the row with the most volume.
2. Look at the row just above and the row just below.
3. Add whichever has more volume to the value area.
4. Repeat, always comparing the next untaken row above with the next untaken row below.
5. Stop once the total reaches 70% of the period's volume.

## Worked example

A one-session [volume profile](/volume-profile/) with 5,500 units traded. 70% of 5,500 = 3,850.

| Price row | Volume |
|---|---|
| 105 | 200 |
| 104 | 500 |
| 103 | 900 |
| 102 | 1,500 (POC) |
| 101 | 1,100 |
| 100 | 700 |
| 99 | 400 |
| 98 | 200 |

Building it one row at a time:

| Step | Compare above vs below | Row added | Running total | Share of 5,500 |
|---|---|---|---|---|
| Start | - | 102 | 1,500 | 27.3% |
| 1 | 103 (900) vs 101 (1,100) | 101 | 2,600 | 47.3% |
| 2 | 103 (900) vs 100 (700) | 103 | 3,500 | 63.6% |
| 3 | 104 (500) vs 100 (700) | 100 | 4,200 | 76.4% |

The total passes 3,850 at step 3. The value area runs from 100 (VAL) to 103 (VAH).

## Why platforms disagree

The original market profile method compares two rows at a time: the next two rows above against the next two below. Run that on the same data:

| Step | Compare | Rows added | Running total | Share |
|---|---|---|---|---|
| Start | - | 102 | 1,500 | 27.3% |
| 1 | 103 + 104 (1,400) vs 101 + 100 (1,800) | 101, 100 | 3,300 | 60.0% |
| 2 | 103 + 104 (1,400) vs 99 + 98 (600) | 103, 104 | 4,700 | 85.5% |

Now the value area is 100 to 104. Same profile, one row different at the top. Row size, session times and the volume source change it further. That is why two charts can show different value area lines without either being wrong.

## How traders read the value area

| Situation | Common reading |
|---|---|
| Open inside yesterday's value area | Balance: price often rotates within it |
| Open outside, then back inside | Rejection of the new prices; some traders look for a move across the value area |
| Open outside and holds outside | Acceptance of new prices; value may be moving |
| Value area narrow | Tight agreement on price; often precedes a larger move |

These are the standard market profile readings. They are descriptions of behaviour that traders watch for, not tested edges. One popular version, sometimes called the 80% rule, says that if price opens outside the prior value area and then spends two periods back inside it, it often crosses to the other side. We have not tested it and do not quote a hit rate.

## Limits

- The 70% figure is a convention, and the build method varies by platform.
- Bar-based profiles spread volume evenly across each bar's range, which blurs the edges.
- On forex tick volume, the area reflects activity rather than traded size.

## Verdict

The value area is the 70% band of volume around the point of control, built outward one or two rows at a time. It gives a clear picture of where the market accepted price. Because method, row size and data change the edges, fix your settings, treat VAH and VAL as zones rather than exact prices, and test any rule that uses them.
