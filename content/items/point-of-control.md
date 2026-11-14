---
slug: point-of-control
name: Point of Control (POC)
aka: [POC, Control Price]
type: volume
states: [range]
weak_states: [trend]
purposes: [entry, exit]
inventor: J. Peter Steidlmayer (via Market Profile)
year: 1980s
default_settings: "Price with the highest volume (or time) in the chosen period"
pairs_with: [value-area, volume-profile, market-profile, support-and-resistance]
related: [volume-profile, value-area, market-profile, vwap, anchored-vwap, key-levels]
compare: [volume-profile-vs-market-profile]
glossary: [value-area, consolidation, auction]
wave: 2
reviewed: 14 November 2026
---

The Point of Control (POC) is the price level where the most trading took place during a chosen period. On a volume profile it is the price with the highest traded volume; on a Market Profile it is the price with the most time spent. Traders treat it as the market's most accepted price and as a reference for range trades.

## At a glance

| | |
|---|---|
| Type | Level from volume or time at price |
| Best market states | Range |
| Weak in | Strong trends, where the POC keeps moving |
| Best uses | Entry, exit target |
| Default settings | Highest-volume price in the session or selected range |
| Created by | J. Peter Steidlmayer via Market Profile, 1980s |
| Leading or lagging | Lagging as a calculation; the level is projected forward |

## What is the Point of Control?

Most of a day's trading clusters around a price the market finds fair, and thins out toward the extremes. The POC marks the centre of that cluster: the single price where the most trade happened.

The term comes from Market Profile, developed by J. Peter Steidlmayer in the 1980s, where it is the row with the most time-price letters. Later [volume profile](/volume-profile/) tools use the same name for the price with the most volume. The two versions often agree but not always. See [Market Profile](/market-profile/) and [Volume Profile vs Market Profile](/compare/volume-profile-vs-market-profile/).

The POC sits inside the [Value Area](/value-area/), the band holding about 70% of activity. Traders use it as a reference for fair value. Auction market theory suggests price tends to gravitate toward areas of high acceptance. This is a trader-education framework with limited formal academic support.

## How it is identified

1. Choose the period: a session, a week, a swing or any range you want to analyse.
2. Split the price range into equal rows.
3. Add up the volume (or time) traded within each row.
4. The row with the largest total is the POC.

**Worked example.** Volume traded in five price rows during a session:

| Price | Volume |
|---|---|
| 102 | 800 |
| 101 | 2,000 |
| 100 | 3,500 |
| 99 | 1,500 |
| 98 | 600 |

The POC is **100**, with 3,500. Row size matters: with larger rows, two neighbouring prices may merge and the POC may shift.

Platforms differ in row size, in whether they use volume or time, and in how they treat ties. Some also show a "developing POC," which updates through the session, and a "naked POC," a prior session's POC that price has not revisited.

## How to read it

**Magnet.** In a balanced market, price often returns to the POC. Traders may fade moves away from it toward the POC in a range.

**Support and resistance.** Price may pause or bounce at the previous session's POC. These reactions are not reliable on their own.

**Developing POC.** If the POC keeps rising through the day, value is migrating higher, which fits a trend day.

**Naked POC.** An untested prior POC is watched as a possible target. Evidence for this is anecdotal.

**Multiple POCs.** A profile with two peaks has two high-volume areas. Price often moves from one to the other.

**Position of the POC.** A POC near the top of the day's range often follows buying that pushed price up and held. Near the bottom, the reverse.

## Best market states

**Ranges (best).** Balanced markets rotate around the POC, which gives entry and target levels.

**Breakouts (mixed).** A close and hold away from the POC and value area suggests value is shifting. It is not a POC-based entry.

**Trends (weak).** The POC moves with price and gives little forward information.

**Reversals (mixed).** A rejection at a prior POC can mark a turn, but needs confirmation.

**Volatility.** Very volatile days spread volume widely, so the POC may be a weak reference.

## Confirmation rules

| Check | What to look for |
|---|---|
| Market state | Balanced or ranging, not a one-way trend |
| Level quality | A clear single peak, not a flat spread of similar rows |
| Reaction | Price slows, rejects or reverses at the level |
| Location | POC lines up with other levels, such as support or resistance |
| Settings | Row size and session stay consistent |
| Stop | Beyond the structure that would prove the idea wrong |

## Common mistakes

- Assuming price must return to the POC. It often does not.
- Changing row size until a nicer level appears.
- Treating a flat profile with several near-equal peaks as having one clear POC.
- Mixing time-based and volume-based POCs.
- Using it in a trending market where value is moving.
- Ignoring which session or range the POC was built from.

## Pairs well with

- **[Value area](/value-area/)**: the surrounding band, giving range edges.
- **[Volume profile](/volume-profile/)**: the full distribution that the POC comes from.
- **[Market Profile](/market-profile/)**: the time-based origin of the term.
- **[Support and resistance](/support-and-resistance/)**: POCs that match older levels carry more weight.

## Sources

- Dalton, James F., Jones, Eric T. and Dalton, Robert B. (2013). *Mind Over Markets*, updated edition. Wiley.
- Steidlmayer, J. Peter and Koy, Kevin (1986). *Markets and Market Logic*. Porcupine Press.

## FAQ

**What is the Point of Control?**
It is the price where the most trading happened in a chosen period. On a volume profile it has the highest volume; on a Market Profile it has the most time spent. Traders use it as a gauge of fair value.

**Is the POC support or resistance?**
It can act as either, depending on whether price is above or below it. Price often reacts near it, but reactions are not certain. Treat it as a reference level and look for confirmation.

**What is a naked POC?**
It is a prior session's POC that price has not traded back through since. Some traders watch these as possible targets. The idea is popular, but the evidence is mostly anecdotal.

**How is POC different from VWAP?**
VWAP is the volume-weighted average price, a calculated mean. The POC is the single most-traded price, a mode. They can be quite different, especially when the profile has two humps.

**Does POC work on forex?**
It can be calculated, but spot forex volume is usually tick volume from one provider, so it is a rough guide. Time-based (Market Profile) POCs avoid volume and may be more consistent.
