---
slug: what-is-a-false-breakout
title: What is a false breakout and how do you spot one?
description: A false breakout pushes through a level, then closes back inside. Why they happen, the warning signs, and how traders handle them in R terms.
query: what is a false breakout
pillar: chart-patterns
publish: 2027-01-27
reviewed: 16 November 2026
guides: [false-breakout, liquidity-sweep, breakout-trading]
siblings: [what-does-volume-tell-you-about-a-breakout, should-you-wait-for-a-retest-after-a-breakout]
value: [table, example, verdict]
---

A false breakout is a move through a support, resistance or pattern line that quickly fails and closes back inside. You cannot know it is false when it happens, but some signs raise the odds: a weak close, no extra volume, and a break straight into a bigger level.

## What it looks like

Price has been held below a line, say the top of a range at 100. It pushes through to 101.20. Breakout traders buy. Then, within a bar or a few bars, it falls back below 100 and keeps going. The buyers above 100 are now losing, and their stops add to the fall.

That is a [false breakout](/false-breakout/), sometimes called a fakeout, a failed breakout or a bull trap (a bear trap for a downside version). Any chart pattern can produce one, because every pattern ends with a break of a line.

## Why they happen

The main reason is that obvious lines attract orders. Just above a well-watched high sit:

- buy-stop orders from traders who are short and want out if the high breaks;
- buy-stop orders from breakout traders who want in if it breaks.

When price reaches the line, those orders fill all at once and push price through. If no new buyers arrive after that burst, there is nothing left to hold price up, and it falls back. Traders who use [smart money concepts](/smart-money-concepts/) call this a [liquidity sweep](/liquidity-sweep/): price taking out the stops above a high before turning.

Other common causes: thin trading in quiet sessions, a news spike that fades, and a break that runs straight into a larger level on a higher timeframe.

## Warning signs

None of these is reliable alone. Together they shift the picture.

| Sign | Healthier breakout | Possible false breakout |
|---|---|---|
| Close of the break bar | Near its high (upside break) | Back near or inside the line, long wick beyond |
| Next bar | Trades beyond the break bar | Trades back inside the pattern |
| Volume (stocks, futures) | Clearly above average | Normal or below |
| Higher timeframe | Room to the next level | Breaks straight into a weekly or monthly level |
| Session | Active hours | Holiday, lunch hour, late in a thin session |
| How it got there | Pattern tightened first, then broke | Spiked from far below in one or two bars |
| Size of the poke | Beyond the line by a meaningful amount | A few ticks |

The [volume](/answers/what-does-volume-tell-you-about-a-breakout/) and [retest](/answers/should-you-wait-for-a-retest-after-a-breakout/) answers go deeper on two of these.

## Ways traders reduce the damage

1. **Wait for a close.** An intraday poke is not a break. A close beyond the line filters many of the quickest failures.
2. **Add a buffer.** Require the close to be a set distance beyond the line, such as a fraction of the average daily range.
3. **Wait for follow-through.** Enter only when the next bar trades beyond the breakout bar's extreme.
4. **Use a retest.** Wait for price to come back to the line and hold.
5. **Size for failure.** Assume some breaks will fail and keep each loss at 1R.

Every filter has a cost. Each one removes some false breaks and also some real ones, and each moves the entry further from the line. There is no filter that removes failures for free.

## Trading the failure instead

Some traders do the opposite: they wait for a break to fail and trade back the other way. The logic is that the trapped breakout traders' exits will fuel the move. The [fakey pattern](/fakey-pattern/) is a bar-level version of this idea.

### Worked example in R

This is an illustration with round numbers, not a real trade.

A share has a range between 90 and 100. It rallies to 101.40 intraday, but closes at 99.20, back inside the range. The next bar opens at 99.10.

- **The failed-breakout short:** sell at 99.10, stop above the high of the break at 101.60. Risk: 2.50.
- **Target 1:** the middle of the range, 95. Reward 4.10: **1.6R.**
- **Target 2:** the bottom of the range, 90. Reward 9.10: **3.6R.**

Compare this with the trader who bought the break at 100.20 with a stop under 99.00. Their risk was 1.20 and they have been stopped out for slightly more than 1R once the spread is counted.

The failed-breakout trade has its own risk: the "failure" can itself fail, and price can break out properly on the next try. Ranges often get tested several times before a real break.

## The breakout trade, done honestly

If you trade breakouts, false breakouts are not a sign the method is broken. They are part of its cost. What matters is the average outcome across all breaks, including the failures, measured in R. We have not yet tested breakout rules ourselves, so we cannot tell you what that average is for any market. The [breakout trading](/breakout-trading/) guide covers the method in general.

## Verdict

A false breakout is a break that does not hold. They are common because obvious lines attract clusters of orders that can push price through without lasting follow-through. You cannot spot one for certain in real time, but a weak close, normal volume and a nearby larger level are reasons for caution. Decide in advance whether you trade the break, the retest or the failure, and keep each loss to 1R. See the [chart patterns guide](/guide/chart-patterns/) for the full breakout section.
