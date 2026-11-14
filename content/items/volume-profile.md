---
slug: volume-profile
name: Volume Profile
aka: [Volume at Price, VAP, Price-by-Volume]
type: volume
states: [range, breakout]
weak_states: [trend]
purposes: [entry, stop, exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "Fixed range or session profile; value area 70% of volume"
pairs_with: [support-and-resistance, vwap, anchored-vwap, key-levels]
related: [point-of-control, value-area, market-profile, vwap, auction-market-theory]
compare: [volume-profile-vs-market-profile]
glossary: [liquidity, auction, value-area, consolidation, breakout]
wave: 1
reviewed: 14 November 2026
---

Volume Profile is a horizontal histogram that shows how much volume traded at each price level over a chosen period. Where the bars are long, a lot of trading took place; where they are short, price moved through quickly. Traders use it to find levels of acceptance, support, resistance and likely breakout zones.

## At a glance

| | |
|---|---|
| Type | Volume-at-price histogram |
| Best market states | Ranges, breakouts |
| Weak in | Strong trends away from old high-volume areas |
| Best uses | Entry, stop placement, profit targets |
| Default settings | Session or fixed range; value area covering 70% of volume |
| Created by | Not attributed to one person; closely related to Market Profile, developed by J. Peter Steidlmayer |
| Leading or lagging | Neither; it describes where trading has already happened |

## What is Volume Profile?

An ordinary volume bar shows how much traded in a period of time. Volume Profile turns that sideways: it shows how much traded at each price. It is drawn along the price axis, usually on the left or right side of the chart.

The idea comes from auction theory: markets spend time and volume at prices that both buyers and sellers accept, and move quickly through prices they reject. High-volume areas are seen as "fair value" and low-volume areas as places price tends to cross fast.

It is related to [Market Profile](/market-profile/), the time-based method developed by J. Peter Steidlmayer at the Chicago Board of Trade. Market Profile counts time spent at each price (in letter blocks); Volume Profile counts volume. See [Volume Profile vs Market Profile](/compare/volume-profile-vs-market-profile/).

Key terms:
- **Point of Control (POC)**: the price with the most volume. See [Point of Control](/point-of-control/).
- **Value Area**: the price range holding a set share of the volume, by convention 70%. Its edges are the Value Area High (VAH) and Value Area Low (VAL). See [Value Area](/value-area/).
- **High Volume Node (HVN)**: a peak in the profile.
- **Low Volume Node (LVN)**: a trough in the profile.

**Forex note.** Spot forex has only tick volume, so profiles built on forex are approximations. Futures, stocks and crypto exchange data give real volume.

## Formula

1. Pick a period: a session, a week, or a fixed range between two bars.
2. Split the price range into rows of equal height (the row size or tick size).
3. For each bar, add its volume to the row or rows its price traded through. Platforms differ here: some assign all of a bar's volume to its close, others spread it across the bar's range.
4. The length of each row's bar is the total volume at that price.
5. The POC is the longest row. The value area is built outwards from the POC until 70% of total volume is included.

**Worked example.** A session traded 10,000 shares. Volume by price: 100 = 1,000; 101 = 2,000; 102 = 4,000; 103 = 2,000; 104 = 1,000.
The POC is 102 (4,000). Starting from it, add the larger neighbour: 102 + 101 = 6,000 (60%). Add 103: 8,000 (80%).
The value area is 101 to 103, as 70% of 10,000 is 7,000 and the step crosses it. Rules for a tie or a partial row differ between platforms.

## How to read it

**Point of Control.** The price where most trading happened. Price often returns to it, and it can act as support or resistance.

**Value area edges.** Price moving back inside the value area after leaving it is often expected to travel across it to the other side. Price accepted outside it suggests a new value area is forming.

**High volume nodes.** Areas of agreement. Price tends to stall or chop around them.

**Low volume nodes.** Areas of rejection. Price often moves quickly through them, so some traders use them as breakout targets or as places to expect fast moves.

**Profile shapes.** A single peak suggests balance; two peaks suggest two value areas and a lull between; a long thin profile suggests a trending move.

**Naked POCs.** A POC from an earlier session that price has not revisited is watched by some traders as a magnet. This is an observation and not a guarantee.

## Best market states

**Ranges (best).** In a balanced market the profile shows clear edges and the centre, so entries at the edges and targets at the POC are natural.

**Breakouts (good).** A break from a value area with follow-through can point toward the next high-volume node. Low-volume gaps ahead show where price may move fast.

**Strong trends (weak).** In a trend price leaves old high-volume areas behind and a profile built on old data gives few reference points. Use a fresh anchor.

**Reversals.** Rejection at a prior value area edge or POC is common, but confirmation from price action is needed.

**Volatility.** In volatile markets the profile is spread out and has no clear peak. Smaller rows may be needed.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Profile period | Session, week, month or fixed range | Decides which volume is counted. Session profiles suit day trading; fixed ranges suit swing trading |
| Row size | Set in ticks or as a number of rows | Finer rows show more detail but noisier peaks; coarser rows smooth the shape |
| Value area | 70% (convention) | The share of volume inside the value area |
| Volume type | Real or tick | Real volume on exchange markets; tick volume on spot forex |

The 70% value area is a convention borrowed from Market Profile, based on roughly one standard deviation of a normal distribution. Markets are not exactly normal, so treat it as a guide.

## Common mistakes

- Using a profile period that does not match the trade, such as a weekly profile for a five-minute scalp.
- Treating the POC as exact support or resistance rather than an area.
- Using tick volume on spot forex as if it were exchange volume.
- Reading old profiles as if nothing has changed since.
- Overloading the chart with profiles from several periods.
- Ignoring that platforms assign volume to price rows in different ways, so profiles do not match exactly.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: high volume nodes often line up with horizontal levels.
- **[VWAP](/vwap/)**: session VWAP against the POC shows if average price and the most-traded price agree.
- **[Anchored VWAP](/anchored-vwap/)**: gives a moving average cost from a key swing, to compare with the profile.
- **[Key levels](/key-levels/)**: POC and value area edges are often included in the list of levels.

## Sources

- Dalton, James F., Jones, Eric T. and Dalton, Robert B. (2013). *Mind Over Markets: Power Trading with Market Generated Information*, updated edition. Wiley. (The standard text on Market Profile, the time-based relative of Volume Profile.)
- Steidlmayer, J. Peter, and Hawkins, Steven B. (2003). *Steidlmayer on Markets: Trading with Market Profile*, 2nd edition. Wiley.

## FAQ

**What is Volume Profile?**
It is a histogram drawn along the price axis showing how much volume traded at each price in a chosen period. Long bars mark prices that were heavily traded and short bars mark prices price passed through quickly.

**What is the Point of Control?**
It is the price level with the most traded volume in the profile. Price is often drawn back to it, and it can act as support or resistance. It is a zone of interest, not a sure turning point.

**What is the difference between Volume Profile and Market Profile?**
Market Profile counts time spent at each price, drawn in letter blocks. Volume Profile counts the volume traded at each price. They often look similar. See [Volume Profile vs Market Profile](/compare/volume-profile-vs-market-profile/).

**Does Volume Profile work in forex?**
Spot forex has no central volume, so profiles use tick volume and are approximations that vary by broker. Futures, stocks and crypto exchanges give real volume. Currency futures are a common source.

**What is the value area?**
It is the price range that holds a set share of the period's volume, by convention 70%. Price accepted back inside it is often expected to move across it. Price accepted outside suggests a new value is forming.
