---
slug: what-is-a-displaced-moving-average
title: What is a displaced moving average?
description: A displaced moving average is shifted forward or back in time. How forward shifts work in the Alligator, and why backward shifts use future data.
query: displaced moving average
pillar: moving-averages
publish: 2027-05-24
reviewed: 16 November 2026
guides: [williams-alligator, simple-moving-average, smoothed-moving-average]
siblings: [why-does-my-ema-differ-from-tradingview, which-moving-average-has-the-least-lag]
value: [table, example, verdict]
---

A displaced moving average is an ordinary moving average shifted a set number of bars forward or backward on the chart. A forward shift is safe and is used in tools such as the Williams Alligator. A backward shift, or a centred average, uses future bars and cannot be traded.

## How displacement works

Take a 10-day [simple moving average](/simple-moving-average/). Normally, today's value is plotted on today's bar. A displaced average plots that same value somewhere else:

- **Forward displacement (positive shift):** today's value is drawn 5 bars to the right, so the line extends into the empty space beyond the last bar.
- **Backward displacement (negative shift):** today's value is drawn 5 bars to the left, over a bar from last week.

The numbers are the same. Only their position on the chart changes. But that change of position has very different effects depending on direction.

## Forward displacement: safe, and sometimes useful

Shifting forward means each bar is compared with an average that was calculated some bars earlier. On bar t, a 10-period SMA shifted forward 5 bars shows the average as it stood on bar t − 5. Nothing from the future is used.

Why do it? The usual reason is to slow the line's reaction to the latest bars without changing its shape. Price must move further to cross a forward-shifted line in a trend, so some traders find it filters noise. It also leaves the average plotted ahead of price, which some people use as a rough guide to where the line will be in the next few bars.

The best-known example is the [Williams Alligator](/williams-alligator/), by Bill Williams. It uses three [smoothed moving averages](/smoothed-moving-average/) of the median price (high plus low, divided by 2), each shifted forward:

| Line | Period | Forward shift |
|---|---|---|
| Jaw (blue) | 13 | 8 bars |
| Teeth (red) | 8 | 5 bars |
| Lips (green) | 5 | 3 bars |

When the three lines are tangled, Williams described the Alligator as "sleeping"; when they spread apart in order, it is "eating" (trending). The shifts spread the lines apart and make the tangled phases easier to see.

## Backward displacement: looks perfect, cannot be traded

A backward shift moves each average value onto an earlier bar. A 10-period SMA shifted back 5 bars sits over the middle of its own window. That is called a centred moving average. It looks wonderful: it runs straight through the middle of price swings with almost no visible lag.

The problem is that the value on each bar uses closes from the five bars after it. On the latest bar, that data does not exist yet. So either the line stops 5 bars short of the right edge, or the platform fills the gap some other way. Either way, any signal you see on past bars, such as "price bounced off the centred average", was not visible at the time.

### A worked example

Ten closes: 10, 11, 12, 13, 14, 15, 14, 13, 12, 11.

A 5-period SMA on bar 5 (closes 10 to 14) = 12.0. Normally plotted on bar 5.

Shifted back 2 bars (centred), the 12.0 is plotted on bar 3, where the close was 12. It matches price exactly. On bar 6, the centred value (plotted from bar 8's SMA, which averages closes 4 to 8: 13, 14, 15, 14, 13) is 13.8. At the peak (bar 6, close 15), the centred line sits at 13.8 and already curves down, because it "knows" that bars 7 and 8 fell.

That foresight is the whole problem. On bar 6, in real time, no one knew bars 7 and 8 would fall.

## Where backward shifts sneak in

- **Chart settings.** Many platforms allow a negative offset on a moving average. It is easy to set by accident.
- **Cycle and detrending tools.** Some indicators, such as the [detrended price oscillator](/detrended-price-oscillator/) in some versions, use a centred average by design. They can be used to study past cycles, but not as trading signals without care.
- **Ichimoku.** The lagging span (Chikou) plots the current close 26 bars back. Reading it on past bars uses information from later bars. Our own look-ahead checks flagged this.

## Backtesting with displaced averages

- **Forward shifts:** fine, as long as the code uses the value from N bars ago, not N bars ahead.
- **Backward shifts or centred averages:** never use them in a trading rule. A backtest that does will look excellent and mean nothing.
- **Check the code, not the picture.** A line that looks forward-shifted on a chart can be calculated with a backward reference in code by mistake. Our [methods page](/methods/) explains how we scan for look-ahead.

## Verdict

Forward displacement is a harmless way to slow an average down and spread lines apart, as the Alligator does. Backward displacement and centred averages look like perfect trend lines because they use future bars; they are fine for studying the past and useless as live signals. If an average fits price suspiciously well, check its offset first. More in [the moving averages guide](/guide/moving-averages/).
