---
slug: smoothing
term: Smoothing
related: [simple-moving-average, exponential-moving-average, smoothed-moving-average, hull-moving-average, kama, stochastic-oscillator]
reviewed: 14 November 2026
---

Smoothing is the process of averaging recent data so that small, random price moves are reduced and the underlying direction is easier to see.

## Explained

Raw price jumps around from bar to bar. Smoothing blends several bars together, so each point on the line is less affected by any single jump. Moving averages are the most common example, such as the [Simple Moving Average](/simple-moving-average/) and the [Exponential Moving Average](/exponential-moving-average/).

The trade-off is lag. The more bars you average, the cleaner the line looks, but the later it reacts to a real turn. Faster methods such as the [Hull Moving Average](/hull-moving-average/) try to cut that delay, usually by accepting a little more noise. Many oscillators also smooth their own output, which is why the Stochastic comes in "fast" and "slow" versions.

## Example

Closing prices over five days are 10, 14, 10, 14 and 12. A five-day simple average gives (10 + 14 + 10 + 14 + 12) / 5 = 12. The raw prices swing between 10 and 14, but the smoothed value sits steady at 12. If price then jumps to 20, the average only rises to 14, showing the lag.
