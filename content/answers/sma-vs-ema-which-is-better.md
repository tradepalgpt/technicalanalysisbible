---
slug: sma-vs-ema-which-is-better
title: "SMA vs EMA: which is better?"
description: SMA vs EMA compared side by side, with the same prices run through both, the real difference in lag, and when each one tends to suit the job.
query: sma vs ema
pillar: moving-averages
publish: 2027-04-21
reviewed: 16 November 2026
guides: [simple-moving-average, exponential-moving-average, moving-average-crossover]
siblings: [how-to-calculate-ema-by-hand, which-moving-average-has-the-least-lag]
value: [table, example, verdict]
---

Neither is better in general. The EMA reacts faster to new prices and fades old ones out smoothly; the SMA is smoother, simpler and the same on every platform. For long, widely watched lines the SMA is the norm. For short trend lines and fast signals the EMA is more common.

## The one real difference

Both lines are averages of past closes. The difference is how much say each close gets.

The [simple moving average](/simple-moving-average/) gives every bar in its window the same weight. A 20-day SMA counts the close from 19 days ago exactly as much as yesterday's. On day 21, the oldest close drops out completely.

The [exponential moving average](/exponential-moving-average/) gives the newest close the most weight and each older close a little less, shrinking by the same factor each bar. It never drops a bar out completely; old prices just fade. For a 20-period EMA the newest close gets 2 / 21, about 9.5% of the weight.

Everything else follows from that.

## The same prices through both

Here is a made-up run of ten closes. Price drifts around 100, then jumps to 110 and stays there. Both averages use a period of 5. The EMA is seeded with the SMA of the first five closes, so both start at the same value.

| Bar | Close | 5 SMA | 5 EMA (k = 0.333) |
|---|---|---|---|
| 5 | 100 | 100.0 | 100.0 |
| 6 | 110 | 102.0 | 103.3 |
| 7 | 110 | 104.0 | 105.6 |
| 8 | 110 | 106.0 | 107.0 |
| 9 | 110 | 108.0 | 108.0 |
| 10 | 110 | 110.0 | 108.7 |

Assume the first five closes were all 100. Two things stand out.

1. **The EMA moves first.** On the first bar after the jump, the EMA closes a third of the 10-point gap (3.3 points). The SMA moves 2 points, because one 100 has been swapped for one 110, and 10 / 5 = 2.
2. **The SMA arrives first.** By bar 10 every close in the SMA's window is 110, so the SMA reads exactly 110. The EMA is still at 108.7 and will keep creeping closer without quite getting there.

That is the trade in one table. The EMA is quicker to react to a change. The SMA is quicker to fully reflect a new level once it has lasted a whole window. In real markets price rarely jumps and sits still, so what you mostly see is the first effect: the EMA hugs price a little more closely.

## Where the SMA does better

- **Shared reference.** The 50-day and 200-day lines quoted in the news are nearly always simple averages. If you want the same line everyone else is looking at, use the SMA.
- **Same on every platform.** Once the window is full, an SMA is a plain sum. No seed, no history dependence. Two charts with the same daily closes show the same number.
- **Smoothness.** For the same period, the SMA is less twitchy. On long periods this is what most people want.
- **Easy to check by hand.** Add up N closes and divide by N.

Its known flaw is the drop-off effect. When a big move leaves the back of the window, the SMA jumps on a day when nothing much happened. On a 20-day SMA, a large gap from 20 days ago will shift the line when it falls out.

## Where the EMA does better

- **Faster reaction.** At the same period, it turns sooner. This is why short trend lines (8, 9, 20, 21) are usually EMAs.
- **No hard edge.** Old prices fade instead of falling off, so there is no drop-off jump.
- **Building block.** [MACD](/macd/) is built from EMAs. Many other indicators assume EMA smoothing.

Its flaws: it depends on its starting value, so two platforms can show different early values; and it is a little noisier, so a [moving-average crossover](/moving-average-crossover/) built from EMAs fires more often than one built from SMAs, including more false signals.

## A fairer comparison: match the lag

Most "SMA vs EMA" comparisons use the same period for both, which tilts the result. A 20 EMA naturally sits closer to price than a 20 SMA. If you want to compare like with like, compare them at similar lag.

The average age of the data in an N-period SMA is (N − 1) / 2 bars. For an EMA with k = 2 / (N + 1), the average age works out to the same (N − 1) / 2. That is why the EMA formula uses 2 / (N + 1): it was chosen so that an N-period EMA has the same average lag as an N-period SMA. The difference is in the shape of the weights. The EMA puts more on the newest bars and also keeps a long, thin tail of very old bars, which is why it feels faster at turns but still never fully forgets.

The practical upshot: at the same number, the two lines are closer than they look in arguments about them. Switching from one to the other changes your signals a little. Switching from a 20 to a 50 changes them a lot.

## Comparison table

| | SMA | EMA |
|---|---|---|
| Weighting | Equal across N bars | Highest on newest, fading |
| Reaction to a turn | Slower | Faster |
| Smoothness | Smoother | Slightly noisier |
| Drop-off jumps | Yes | No |
| Same on every platform | Yes, once N bars exist | Only after a long warm-up |
| Common periods | 50, 100, 200 | 8, 9, 12, 20, 21, 26 |
| Typical use | Long-term context, news references | Short trend lines, MACD, pullbacks |

## A worked decision

A swing trader holds positions for one to three weeks and wants a line that tracks the trend for pullback entries. A 20 EMA tends to sit a little closer to pullback lows than a 20 SMA, so it is the more common choice for this job. The same trader also wants to know the big picture. A 200 SMA is the standard line for that, so it is the sensible context line. Using an EMA for one job and an SMA for the other is not inconsistent; it is matching each tool to its use.

What would be a mistake: flipping between the two after each losing trade, looking for the one that "would have worked". That is tuning to noise. See [the moving averages guide](/guide/moving-averages/) on optimisation.

## Verdict

The EMA is the better fit for short, responsive lines. The SMA is the better fit for long reference lines that other traders also watch. The choice between them matters far less than the period you pick and what you do with the signal. Choose one per job, write it down, and keep it.
