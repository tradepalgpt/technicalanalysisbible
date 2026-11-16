---
slug: chart-patterns
title: "Chart patterns: the complete guide"
description: How to read chart patterns, from head and shoulders to flags, triangles, gaps and harmonics, with breakout rules, targets and stops in R.
query: chart patterns
publish: 2027-01-11
reviewed: 16 November 2026
cluster: [head-and-shoulders, inverse-head-and-shoulders, double-top, double-bottom, triple-top, triple-bottom, rounding-bottom, rounding-top, v-reversal, island-reversal, diamond-pattern, bull-flag, bear-flag, pennant, rectangle-pattern, cup-and-handle, ascending-triangle, descending-triangle, symmetrical-triangle, rising-wedge, falling-wedge, broadening-formation, price-gaps, harmonic-patterns, measured-move, false-breakout, breakout-retest]
value: [table, example, verdict]
chart: head-and-shoulders
---

Chart patterns are shapes that price makes over many bars: peaks, troughs and the lines that join them. Traders read them as a record of a contest between buyers and sellers, and as a rough map of where that contest might be decided. This guide covers the main reversal, continuation and bilateral patterns, gaps and harmonic patterns, then the practical part: breakouts, measured targets and stops expressed in R.

The short version, before the detail: chart patterns are a useful way to organise a chart and plan a trade. They give you a level to watch, a place for a stop and a rough idea of how far a move might go. They are much weaker as predictions. Two traders often draw the same pattern differently, the famous examples in books were picked after the fact, and many patterns fail. We have not yet tested chart patterns ourselves, so this guide contains no figures of our own. When we have a chart-pattern study that meets our [testing rules](/methods/), we will add it here.

## What a chart pattern is

A chart pattern is a shape formed by a sequence of swings. A swing high is a peak with lower prices on both sides. A swing low is a trough with higher prices on both sides. Join a few swings together, add a line or two, and you get a named shape: a head and shoulders, a double bottom, a triangle, a flag.

That is different from a candlestick pattern. A candlestick pattern is one to three bars. A chart pattern is usually dozens of bars, sometimes hundreds. A [hammer](/hammer/) tells you what happened in one period. A [head and shoulders](/head-and-shoulders/) tells you what happened over weeks or months.

Most chart patterns describe one of three stories.

- **Reversal.** A trend runs out of steam and turns. The pattern marks the area where the turn happens. Examples: head and shoulders, double top, triple bottom, rounding bottom.
- **Continuation.** A trend pauses, rests, then carries on. The pattern is the pause. Examples: flags, pennants, rectangles, the cup and handle.
- **Bilateral.** The pattern could break either way, and the break itself is the signal. Example: the symmetrical triangle, and in practice many rectangles.

These labels describe what the pattern usually means in the textbooks. They are not promises. A "continuation" flag can break the wrong way. A "reversal" double top can turn into a rectangle and then continue up. One of the most useful habits in chart reading is to hold the label loosely and wait for price to choose.

### Where chart patterns come from

The pattern names most traders use today were set out in the first half of the 20th century. Richard Schabacker described many of them in *Technical Analysis and Stock Market Profits* (1932). Robert Edwards and John Magee built on his work in *Technical Analysis of Stock Trends*, first published in 1948 and still in print. Most of the definitions you meet online trace back to that book.

Later, Thomas Bulkowski's *Encyclopedia of Chart Patterns* (first edition 2000) tried to count how often each pattern was followed by the move its name suggests, across a large set of US stocks. It is the best-known attempt to put chart patterns on a measured footing. Its figures depend on Bulkowski's own drawing rules and sample, so they do not transfer neatly to other markets or other people's drawings. We do not quote its numbers here.

On the academic side, Andrew Lo, Harry Mamaysky and Jiang Wang published "Foundations of Technical Analysis" in the *Journal of Finance* in 2000. They used a smoothing method to find patterns by computer, so that the drawing was not a matter of opinion, and looked at whether returns after the patterns differed from ordinary returns in US stocks. They reported that several patterns did seem to carry some information. That is not the same as saying the patterns could be traded at a gain after costs, and the paper does not claim that.

### Why the shapes might matter

There are two common explanations for why chart patterns could mean anything at all.

The first is about **memory**. Traders remember prices. A level where price turned before is a level where people who missed the turn may act next time, and where people who bought at the top may sell to get out at break-even. Patterns are mostly built from these remembered levels.

The second is about **attention**. Chart patterns are widely taught. When many traders watch the same neckline, the break of that neckline can set off a burst of orders: new entries, stops being hit, and short sellers covering. That burst is real, even if the shape itself has no special power.

Both explanations suggest the same thing. What matters is the level, not the drawing. A pattern is a way of finding levels that other people are also watching.

## How to read swings and necklines

Before you can name a pattern, you need to agree with yourself on what counts as a swing. That sounds trivial. It is the single biggest reason two traders see different patterns on the same chart.

### Swing highs and swing lows

The simplest definition is a bar whose high is higher than the highs of the bars on each side. That catches every small wiggle. On a daily chart it will mark several swings a week. Most of them do not matter.

A more useful definition asks for more bars on each side. A swing high with two lower highs on each side is a common rule, and it is the idea behind [Williams fractals](/williams-fractals/). A swing high with five lower highs on each side is a bigger, rarer swing. The [swing highs and lows](/swing-highs-lows/) guide covers the options.

Another way is to ask for a minimum move. A swing only counts if price moved, say, one [average true range](/atr/) or a fixed percentage away from it before the next swing formed. This is how a "zigzag" line works on most charting platforms.

There is no right answer. What matters is that you pick one definition and use it every time. If you change the definition to make a pattern appear, the pattern is your invention, not the market's.

One trap: a swing high can only be confirmed after the bars to its right have printed. A five-bar swing high is not a swing high until five bars later. Any pattern built on swings is therefore confirmed late. That is fine for trading, but it matters a lot for testing, as we explain below.

### The trend before the pattern

Every reversal pattern needs something to reverse. A head and shoulders after a long rise is a possible top. The same three-peak shape after a short bounce in a falling market is just noise in a downtrend. A bull flag needs a sharp rise before it, the "flagpole". Without the pole, the flag is just a small downward drift.

So the first question is always: what was price doing before this shape? A rough test is to look back two or three times the length of the pattern. If a double top took six weeks to form, look at the 12 to 18 weeks before it. Was there a clear rise? Lower lows and lower highs? A sideways range?

### Necklines and trigger lines

Most patterns have one line that matters more than the rest. It is the line whose break completes the pattern.

- In a head and shoulders, it is the **neckline**: the line joining the two troughs either side of the head.
- In a double top, it is the trough between the two peaks, sometimes also called the neckline.
- In a triangle or wedge, it is the trendline on the side of the expected break.
- In a flag, rectangle or pennant, it is the edge of the pause.

Until that line breaks, the pattern is only a possibility. Many traders treat an unbroken pattern as nothing at all. Edwards and Magee stressed this: a head and shoulders is not complete until the neckline is broken. A large share of shapes that look like tops never break their necklines and turn into something else.

### Close or touch?

Does a break mean price touched beyond the line, or closed beyond it? Most published rules use a close, because intraday pokes through a line are common and often reverse. Some traders add a filter: a close a set distance beyond the line, such as a fraction of the average range, or two closes in a row. Filters cut down false breaks but give a worse entry. We come back to this trade-off under breakouts.

### Drawing the line honestly

Necklines and trendlines can be drawn through the wicks, through the closes or through the bodies. Each gives a slightly different line. Pick one and stick to it. A line you nudge after the fact to fit a breakout is not a line the market was watching.

## Reversal patterns

Reversal patterns mark the end of a trend. They tend to take longer to form than continuation patterns, because turning a trend around takes time. Each pattern below has its own guide with full drawing rules; here we focus on what they share and how they differ.

### Head and shoulders, and its inverse

The [head and shoulders](/head-and-shoulders/) is the best-known reversal pattern. After a rise, price makes a peak (the left shoulder), pulls back, rallies to a higher peak (the head), pulls back again, then rallies to a lower peak (the right shoulder). The neckline joins the two pullback lows. A close below the neckline completes the pattern.

The story is a trend losing strength. The head is the last new high. The right shoulder is a rally that could not get back there. The break of the neckline means the last pullback low has gone, so the pattern of higher highs and higher lows is broken.

The [inverse head and shoulders](/inverse-head-and-shoulders/) is the mirror image at the bottom of a fall: three troughs with the middle one lowest, and a neckline across the two peaks between them. A close above the neckline completes it.

Things to look for:

- **A sloping neckline.** Necklines are often not flat. A neckline that slopes down in a top (each pullback low lower than the last) is usually read as weaker buying, and the break comes sooner. One that slopes up delays the break.
- **Volume.** In the classic description, volume is highest on the left shoulder or head and lighter on the right shoulder, then expands on the break. That is the textbook picture. Real charts often do not follow it.
- **Symmetry.** Shoulders of similar height and width make a cleaner pattern. A lopsided one is not wrong, but the more you have to squint, the less useful the shape is.

The [quasimodo pattern](/quasimodo-pattern/) is a close cousin: it is a head and shoulders in which the right shoulder forms after price has already broken the previous low. Traders who use it treat the left shoulder level as the key area.

### Double tops and double bottoms

A [double top](/double-top/) is two peaks at about the same level with a trough between them. The pattern completes when price closes below that trough. A [double bottom](/double-bottom/) is the mirror: two troughs, a peak between them, and a close above the peak.

The story is a level being defended twice. Buyers pushed to a price, failed, tried again, and failed again. When the trough between the peaks breaks, the buyers who bought that dip are now losing, and the trend structure has turned.

What separates a useful double top from a random pair of peaks:

- **Time between the peaks.** Two peaks a few days apart are usually part of one choppy top. Many writers prefer several weeks between the peaks on a daily chart, so that the second test is a genuine return to the level.
- **Depth of the trough.** A trough that is very shallow makes a tiny pattern with a tiny target. A deeper trough makes the second rally a real test.
- **Second peak close to the first.** Not exactly equal. Within a small fraction of the first peak's height is enough. If the second peak runs well above the first, it is a new high, not a double top.

The "Adam and Eve" variants describe the shape of each peak or trough: one sharp (Adam), one rounded (Eve). See [Adam and Eve](/adam-and-eve/) if you meet the terms.

### Triple tops and triple bottoms

A [triple top](/triple-top/) has three peaks at about the same level. A [triple bottom](/triple-bottom/) has three troughs. The neckline is usually drawn across the lower of the two troughs (or higher of the two peaks) between them.

A triple top is rarer than a double top, partly because a third test of the same level often breaks through. When it holds a third time and then the neckline breaks, the level has been rejected three times. Some traders read that as stronger evidence; others point out that it is also a pattern that took longer to confirm, so more of the move may already be over. It also looks a lot like a rectangle, and many writers say the difference is only how it ends.

### Rounding tops and bottoms

A [rounding bottom](/rounding-bottom/) is a slow, bowl-shaped turn: a gradual fall, a flat base, and a gradual rise. A [rounding top](/rounding-top/) is the inverted bowl. They often take months on a daily chart and are sometimes called saucers.

These are hard to trade because there is no sharp trigger. Some traders use the start of the bowl, the high before the fall, as the level that confirms the pattern. Others treat the rounding shape as background for a [cup and handle](/cup-and-handle/), which is a rounding bottom with a small pullback added.

### V reversals

A [V reversal](/v-reversal/) is a sharp turn with no base: price falls hard and then rises just as hard, or the other way round. There is no neckline to wait for, and by the time the shape is clear, much of the move has happened.

V reversals are mostly useful as a warning: not every turn will give you a tidy pattern. They tend to follow news or a capitulation, where one side gives up all at once.

### Island reversals

An [island reversal](/island-reversal/) is a group of bars cut off from the rest of the chart by a gap on each side. Price gaps up, trades for a few bars, then gaps down, leaving the bars in between isolated like an island. It is a reversal because the gap down traps everyone who bought during the island.

Islands need gaps, so they are common on daily stock charts and rare on markets that trade around the clock, such as major currency pairs and crypto, where gaps mostly appear only over weekends.

### Diamonds

A [diamond](/diamond-pattern/) widens out and then narrows: price swings get bigger, then smaller, forming a shape like a diamond on its side. It is usually listed as a reversal pattern at tops. It is rare and very open to interpretation, because almost any choppy top can be drawn as a diamond if you choose the right swings.

### Broadening formations

A [broadening formation](/broadening-formation/), also called a megaphone, has swings that get bigger in both directions: higher highs and lower lows. It describes a market that is becoming more volatile and less certain. Some books list it as a reversal pattern at tops. In practice it is hard to trade, because each swing runs beyond the last one, so stops at the previous swing are often hit.

### Reversal patterns at a glance

| Pattern | Shape | Trigger | Usual target rule | How easy to spot by rule |
|---|---|---|---|---|
| Head and shoulders | Three peaks, middle highest | Close through neckline | Head-to-neckline height from break | Medium: shoulders need judgement |
| Inverse head and shoulders | Three troughs, middle lowest | Close above neckline | Same, upwards | Medium |
| Double top / bottom | Two peaks or troughs at a similar level | Close through the middle swing | Pattern height from break | Fairly easy |
| Triple top / bottom | Three peaks or troughs at a similar level | Close through the neckline | Pattern height from break | Fairly easy, overlaps with rectangles |
| Rounding top / bottom | Slow bowl | Close beyond the rim | Depth of the bowl (rough) | Hard |
| V reversal | Sharp turn, no base | None clean | None standard | Easy to see, hard to trade |
| Island reversal | Bars cut off by two gaps | Second gap | None standard | Easy where gaps exist |
| Diamond | Widening then narrowing | Break of lower edge | Widest part of the diamond | Hard |
| Broadening formation | Swings growing both ways | Break of a swing | None reliable | Medium |

## Continuation patterns

Continuation patterns are pauses inside a trend. They tend to be shorter than reversal patterns. The underlying idea is that a trend needs to rest: early buyers take some profit, price drifts, and then the trend resumes.

### Flags

A [bull flag](/bull-flag/) is a sharp rise (the flagpole), followed by a short, orderly drift down or sideways inside two roughly parallel lines (the flag). The break is a close above the upper line of the flag. A [bear flag](/bear-flag/) is the mirror: a sharp fall, a short drift up, and a break below the lower line.

The pole matters most. A flag is a rest after a fast move. Without a fast move before it, you have a channel, not a flag. Traders usually want:

- a pole that is steep and fast compared with the recent trend;
- a flag that is short compared with the pole, often a handful of bars to a few weeks on a daily chart;
- a flag that does not give back too much of the pole. If it retraces more than about half the pole, many traders stop calling it a flag.

### Pennants

A [pennant](/pennant/) is a flag with converging lines: after the pole, price makes a small symmetrical triangle rather than a parallel channel. Everything else is the same: a pole first, a short pause, a break in the direction of the pole.

The difference between a flag and a pennant is small and mostly cosmetic. Both describe the same story. Our answer on [bull flag vs pennant](/answers/bull-flag-vs-pennant/) has a side-by-side table.

### Rectangles

A [rectangle](/rectangle-pattern/) is a sideways range between a flat top and a flat bottom, with price bouncing between them several times. It is usually listed as a continuation pattern, but it can break either way. Many traders treat it as bilateral: they wait for a close outside the box and trade in that direction.

Rectangles are where chart patterns overlap with [range trading](/range-trading/). Inside the range, some traders sell near the top and buy near the bottom. Outside it, they switch to trading the break.

### Cup and handle

The [cup and handle](/cup-and-handle/) was popularised by William O'Neil, the founder of *Investor's Business Daily*, in *How to Make Money in Stocks*. After a rise, price makes a rounded, U-shaped pullback (the cup), climbs back near the prior high, then makes a short, shallow pullback (the handle). The break is a close above the handle's high or the cup's rim.

The cup is a rounded rest; the handle shakes out the last nervous holders before the trend resumes. Shape details traders look for include a rounded rather than V-shaped cup, a handle in the upper half of the cup, and a handle that drifts slightly down on lighter volume. The [inverse cup and handle](/inverse-cup-and-handle/) is the bearish mirror.

Cups take longer than flags. On a daily chart, a cup lasting several weeks to several months is typical of the published descriptions. Our answer on [how long a cup and handle takes to form](/answers/how-long-does-a-cup-and-handle-take-to-form/) goes through the timing.

### Continuation patterns at a glance

| Pattern | Before it | Shape of the pause | Trigger | Usual target rule |
|---|---|---|---|---|
| Bull / bear flag | Fast pole | Small parallel channel against the pole | Close through the flag edge | Pole length from the break |
| Pennant | Fast pole | Small converging triangle | Close through the pennant edge | Pole length from the break |
| Rectangle | A trend (or not) | Flat top and bottom | Close outside the box | Box height from the break |
| Cup and handle | A rise | Rounded cup, shallow handle | Close above the handle high | Cup depth from the break |

## Triangles and wedges

Triangles and wedges are patterns where price is squeezed between two trendlines. In a triangle, at least one line is flat or the two lines slope in opposite directions. In a wedge, both lines slope the same way.

### Ascending triangles

An [ascending triangle](/ascending-triangle/) has a flat top and a rising bottom. Sellers keep defending the same price. Buyers keep stepping in at higher prices. The textbook reading is bullish: the rising lows show buyers getting more eager, and the flat top is the level they are trying to clear. The trigger is a close above the flat top.

It does not always break up. A close below the rising lower line is a break the other way, and some traders treat that as a sign the buyers have given up.

### Descending triangles

A [descending triangle](/descending-triangle/) is the mirror: a flat bottom and falling highs. The textbook reading is bearish. The trigger is a close below the flat bottom.

### Symmetrical triangles

A [symmetrical triangle](/symmetrical-triangle/) has falling highs and rising lows: both sides are giving ground. It is the classic bilateral pattern. Textbooks often say it tends to continue the prior trend, but in practice the break can go either way, and many traders simply wait for it. See [Symmetrical triangle: which way will it break?](/answers/symmetrical-triangle-which-way-will-it-break/) for the practical rules.

A common observation in the books is that breaks are often cleaner when they happen well before the apex (the point where the two lines meet). A break right at the apex comes after price has gone so quiet that it may mean little.

### Rising and falling wedges

A [rising wedge](/rising-wedge/) has two rising lines that converge: higher highs and higher lows, but the highs rise more slowly than the lows. Each push up gains less. The textbook reading is bearish, whether the wedge forms after a rise (a reversal) or as a bounce in a downtrend (a continuation). The trigger is a close below the lower line.

A [falling wedge](/falling-wedge/) is the mirror: two falling, converging lines, read as bullish, triggered by a close above the upper line.

The key difference from a triangle is the slope. In an ascending triangle, the top is flat: buyers keep testing the same level. In a rising wedge, the top is rising: buyers are still making new highs, but with less and less to show for it. Our answer on [rising wedge vs ascending triangle](/answers/rising-wedge-vs-ascending-triangle/) has a full comparison.

### Triangles and wedges at a glance

| Pattern | Upper line | Lower line | Textbook bias | Trigger |
|---|---|---|---|---|
| Ascending triangle | Flat | Rising | Bullish | Close above the flat top |
| Descending triangle | Falling | Flat | Bearish | Close below the flat bottom |
| Symmetrical triangle | Falling | Rising | Either way (often with the trend) | Close through either line |
| Rising wedge | Rising (slower) | Rising (faster) | Bearish | Close below the lower line |
| Falling wedge | Falling (faster) | Falling (slower) | Bullish | Close above the upper line |
| Broadening formation | Rising | Falling | Unclear | Hard to define |

### How many touches?

A line needs two points to be drawn and a third to be tested. Most writers ask for at least two touches on each side of a triangle or wedge, and so at least four or five swings in all. Fewer than that and you are drawing lines through random points. More touches make the lines more convincing but also mean the pattern took longer, so the break may come late in the move.

## Gaps

A gap is a space on the chart where no trading took place: today's low is above yesterday's high, or today's high is below yesterday's low. Gaps are common in stocks, which close overnight, and rarer in markets that trade nearly around the clock. The [price gaps](/price-gaps/) guide covers the basics. Edwards and Magee and most later books sort gaps into four kinds.

### Common gaps

A [common gap](/common-gap/) appears inside a range or in a quiet market, with no special volume or news. It usually fills quickly, meaning price comes back to trade in the gap. It says little about direction.

### Breakaway gaps

A [breakaway gap](/breakaway-gap/) appears as price leaves a pattern or range: a stock gaps above the top of a rectangle, for example. It is often on heavy volume and is read as a strong break. Breakaway gaps are the kind least likely to fill soon in the textbook account, because they mark a change in the balance of buyers and sellers.

### Runaway gaps

A [runaway gap](/runaway-gap/), also called a measuring gap or continuation gap, appears in the middle of a strong trend. Traders sometimes treat it as the halfway point of the move, and project the distance from the start of the trend to the gap onwards from the gap. That is a rule of thumb, not a law.

### Exhaustion gaps

An [exhaustion gap](/exhaustion-gap/) appears late in a long trend, often after a sharp run, and then fills quickly as the trend ends. It looks like a runaway gap when it happens. You only know it was exhaustion when price turns back through it. That makes the label partly hindsight.

### Gap fills

A [gap fill](/gap-fill/) is when price returns to trade through the whole gap. "Gaps always fill" is a saying, not a rule. Many gaps do fill eventually, given enough time, simply because price wanders. But "eventually" can mean years, and some gaps never fill. Our answer on [whether gaps always fill](/answers/do-gaps-always-fill/) goes into what the saying gets right and wrong.

### Gaps at a glance

| Gap type | Where it appears | Volume (textbook) | Usual reading | Filled soon? (textbook) |
|---|---|---|---|---|
| Common | Inside a range | Normal | Little meaning | Often |
| Breakaway | Leaving a pattern | Heavy | Start of a move | Less often |
| Runaway | Mid-trend | Above normal | Trend continuing | Less often |
| Exhaustion | End of a long trend | Very heavy | Trend ending | Often, and fast |

The difficulty is obvious from the table. Three of the four types can only be told apart after the fact. When a gap prints, you know where it is, but not yet which kind it will turn out to be.

## Harmonic and advanced patterns, honestly

Harmonic patterns are a family of shapes defined by Fibonacci ratios between swings. They are popular in forex and crypto. They deserve a separate, frank section, because they are the most precise-looking chart patterns and among the hardest to judge.

### The idea

A harmonic pattern is a sequence of four or five swings, usually labelled X, A, B, C and D. Each swing must be a set fraction of an earlier one, within a tolerance. The final point, D, is the "potential reversal zone" where the trader expects a turn. The [harmonic patterns](/harmonic-patterns/) guide covers the family.

The best-known members:

- **[Gartley](/gartley-pattern/).** Named after H.M. Gartley, who described a pattern in *Profits in the Stock Market* (1935). The Fibonacci ratios that define it today were added much later by other writers, notably Larry Pesavento and Scott Carney.
- **[Bat](/bat-pattern/), [butterfly](/butterfly-pattern/), [crab](/crab-pattern/), [shark](/shark-pattern/) and [cypher](/cypher-pattern/).** Variants with different ratio rules. Carney's *Harmonic Trading* books set out the bat, crab and several others.
- **[Three drives](/three-drives/).** Three pushes in the same direction, each related to the last by a Fibonacci ratio. The plainer version without ratios is often called [three pushes](/three-pushes/).
- **[Wolfe waves](/wolfe-waves/).** A five-wave pattern credited to Bill Wolfe, with a target line drawn from point 1 through point 4.
- **[ABCD](/abcd-pattern/).** The simplest: two equal legs with a pullback between them.

The [quasimodo](/quasimodo-pattern/) is often grouped with these, though it is really a variant of the head and shoulders and uses no ratios.

### Ratio rules

Each pattern defines its points by retracements and extensions. For example, in the commonly published version of the Gartley, the B point retraces about 0.618 of the XA leg, and D completes near the 0.786 retracement of XA. The bat and crab use different B and D ratios. Different authors give slightly different numbers and tolerances, and charting tools follow different authors.

That is the first problem. The ratios look precise, but the tolerances around them are wide, and the choice of which swing is X is up to the trader.

### Why they are hard to test

Harmonic patterns are hard to test fairly for three reasons.

1. **Many patterns, many ratios.** With a dozen named patterns, each with several ratio rules and a tolerance band, almost any swing sequence fits something. If you look at enough shapes, some will have turned at D by chance.
2. **Swing choice.** The ratios depend on which swings you call X, A, B and C. A small change in the swing definition can turn a Gartley into a bat, or into nothing.
3. **Hindsight in examples.** The examples in books and videos are chosen because they worked. The ones that hit D and kept going are not shown.

None of that means harmonic patterns are worthless. Their real use is as a way to find a price zone where several Fibonacci levels cluster, which overlaps with ordinary [confluence](/confluence/) analysis. But precision in the drawing is not the same as reliability in the outcome. Our answer on [whether harmonic patterns are reliable](/answers/are-harmonic-patterns-reliable/) covers this in more depth.

## Breakouts: confirmation, false breakouts, retests and volume

Almost every chart pattern ends the same way: price breaks a line. How you handle that break decides most of the outcome. The [breakout trading](/breakout-trading/) guide covers the general method.

### Confirmation

A breakout is "confirmed" when it meets whatever rule you set in advance. Common rules, from fastest to slowest:

1. **Touch.** Price trades beyond the line at any point. Fastest entry, most false signals.
2. **Close.** A bar closes beyond the line. The most common rule.
3. **Close plus distance.** A close beyond the line by a set amount: a percentage, or a fraction of the average range. Filters small pokes.
4. **Two closes.** Two consecutive closes beyond the line. Slower, fewer false breaks, worse price.
5. **Close plus follow-through.** A close beyond the line and the next bar trading beyond the breakout bar's extreme.

There is no free lunch here. Every extra filter removes some false breakouts and also some real ones, and it moves your entry further from the line, which makes the stop wider in R terms. The right rule depends on the market and timeframe, and the only way to know is to write one down and test it.

### False breakouts

A [false breakout](/false-breakout/) is a break that quickly reverses back inside the pattern. They are common. They happen because stop orders and breakout orders cluster just beyond obvious lines. When price pokes through, those orders fill, and if no new buyers or sellers follow, price falls back.

Signs a breakout might be false, none of them reliable on their own:

- The break bar closes back near the line, leaving a long wick beyond it.
- Volume on the break is no higher than normal.
- The break happens right at a bigger level on a higher timeframe.
- The break comes in a quiet session, such as a holiday or the hour before a market closes.

Some traders trade false breakouts deliberately. When price breaks a range, fails, and closes back inside, they take the opposite side, with a stop beyond the failed break's extreme. The idea of a [liquidity sweep](/liquidity-sweep/) and the [fakey pattern](/fakey-pattern/) both describe this. See [What is a false breakout and how do you spot one?](/answers/what-is-a-false-breakout/) for more.

### Retests

A [breakout retest](/breakout-retest/) is when price breaks a line, moves away, then comes back to test the line from the other side. A broken resistance level acting as support is called [role reversal](/role-reversal/).

Retests give a second chance to enter, usually with a tighter stop. The cost is that many strong breakouts never retest. If you only trade retests, you miss them. Our answer on [whether to wait for a retest](/answers/should-you-wait-for-a-retest-after-a-breakout/) lays out the trade-off.

### Volume

The classic books say a valid breakout should come with rising [volume](/volume/). The logic is sound: a break that draws in many new participants is more likely to hold than one that happens on a quiet day. In practice:

- Volume is meaningful in stocks and futures, where it is a real count of shares or contracts traded on an exchange.
- In spot forex there is no central exchange, and the volume shown on most platforms is [tick volume](/tick-volume/), a count of price changes. It often tracks real activity loosely, but it is not the same thing.
- In crypto, volume is split across many exchanges and some reported volume is unreliable, so a single exchange's figure is a partial view.

A practical way to judge breakout volume is [relative volume](/relative-volume/): today's volume compared with its average over the last 20 or 50 bars. Our answer on [what volume tells you about a breakout](/answers/what-does-volume-tell-you-about-a-breakout/) goes further.

### Breakout entry styles at a glance

| Entry style | Entry price | Stop distance | Misses | Gets caught by |
|---|---|---|---|---|
| Stop order at the line | Best | Tightest | Nothing | Every false poke |
| Next open after a close beyond | Middle | Medium | Very fast moves that gap away | Some false breaks |
| Retest of the line | Often best | Tightest | Breakouts that never retest | Retests that keep going back in |
| Close plus filter | Worst | Widest | Some real breaks | Fewer false breaks |

## Measured targets and stops in R

Most chart patterns come with a traditional price target, called the measured move. The idea is simple: measure the height of the pattern and project it from the breakout point. The [measured move](/measured-move/) guide covers the general method.

### The measured-move rules

| Pattern | What to measure | Project from |
|---|---|---|
| Head and shoulders | Top of the head down to the neckline (measured vertically below the head) | The neckline break |
| Double / triple top or bottom | Peak (or trough) to the middle swing | The break of the middle swing |
| Rectangle | Top of the box to the bottom | The break of the box |
| Triangle | Widest part of the triangle (at its start) | The break point |
| Wedge | Widest part, or back to the start of the wedge | The break point |
| Flag / pennant | The flagpole, from its start to the top of the flag | The break of the flag |
| Cup and handle | Depth of the cup | The break of the rim |

These targets are rules of thumb. Published descriptions treat them as a rough guide to how far a move might go, not where it will stop. Price often falls short, and sometimes runs far past. They are most useful for the question a trader needs to answer before entering: is the possible reward large enough compared with the risk?

### What R means

R is the amount you risk on a trade: the distance from your entry to your stop. If you buy at 50 with a stop at 48, 1R is 2 points. A target 6 points above entry is a 3R target. Thinking in R lets you compare trades of different sizes and markets. The [risk-reward ratio](/risk-reward-ratio/) and [position sizing](/position-sizing/) guides cover this in detail.

For a chart pattern, R depends heavily on where you put the stop, and the stop depends on the pattern's structure. That is the point of the worked examples below.

### Worked example 1: a head and shoulders top

This is an illustration with round numbers, not a real trade.

A stock rises from 70 to a left shoulder at 110, pulls back to 100, rallies to a head at 120, pulls back to 100 again, and rallies to a right shoulder at 111. The neckline is flat at 100. Pattern height is 120 minus 100 = 20.

Price closes at 99.50, below the neckline. A trader who sells at the next open, 99.40, has three common stop choices:

| Stop placement | Stop | Risk (1R) | Measured target (100 − 20 = 80) | Reward | Target in R |
|---|---|---|---|---|---|
| Above the head | 120.50 | 21.10 | 80 | 19.40 | 0.9R |
| Above the right shoulder | 111.50 | 12.10 | 80 | 19.40 | 1.6R |
| Above the neckline plus a buffer | 102.00 | 2.60 | 80 | 19.40 | 7.5R |

The pattern is the same. The trade is completely different. A stop above the head gives a measured target worth less than 1R. A stop just above the neckline gives a target worth 7.5R, but it will be hit by any ordinary retest of the neckline. Neckline retests are common, so that stop is likely to be hit even when the pattern eventually works.

The middle choice, above the right shoulder, is the most common in the textbooks. Its logic is structural: if price climbs back above the right shoulder, the "weakening rally" story is wrong.

### Worked example 2: a bull flag

Again, an illustration.

A stock rallies from 40 to 50 in eight days: the pole is 10. It then drifts down in a tight channel for five days, to a low of 47.50, with the flag's upper line falling from 50 to 48.80. Price closes at 49.20, above the upper line.

- Entry: next open, 49.30.
- Stop: below the flag's low, 47.40. Risk: 1.90.
- Measured target: pole length (10) added to the breakout point (about 48.80) = 58.80. Reward: 9.50.
- Target in R: 9.50 / 1.90 = 5.0R.

That looks attractive on paper. The catch is that flags are short and steep, and a measured move of 10 points means price has to repeat the whole pole. Some traders take part of the position off at 2R (53.10) and trail the rest. The [scaling out](/scaling-out/) guide covers that approach.

### Worked example 3: a double bottom

A currency pair falls to 1.2000, bounces to 1.2150, falls back to 1.2005, then rises and closes at 1.2160, above the middle peak.

- Pattern height: 1.2150 − 1.2000 = 150 pips (a pip here is 0.0001).
- Measured target: 1.2150 + 0.0150 = 1.2300.
- Entry at the next open: 1.2162.
- Stop below the second low: 1.1995. Risk: 167 pips.
- Reward: 138 pips. Target in R: 0.8R.

Here the measured move is worth less than 1R, because the entry is above the neckline and the stop is below the pattern. A trader who wants at least 1.5R would either pass, wait for a retest of 1.2150 to tighten the stop, or use a stop below a higher, nearer swing. That is a common finding with double bottoms and tops: the full-pattern stop often makes the trade look poor in R terms.

### What these examples show

1. The measured target is fixed by the pattern. The stop is your choice. R depends mostly on the stop.
2. A tight stop makes the R multiple look large but is more likely to be hit by noise.
3. Many textbook patterns, traded with a stop beyond the whole pattern, offer targets of around 1R to 2R. That is not a reason to avoid them; it is a reason to know before you enter.
4. Always include costs. The spread and any slippage on the way in and out are part of the loss, not an afterthought. On a tight stop they can be a large fraction of R.

## Why chart patterns are hard to test

Most claims about chart patterns rest on examples: a chart where the pattern worked. That is the weakest kind of evidence. Testing chart patterns properly is hard, and the reasons are worth understanding even if you never write a line of code.

### Subjective drawing

Ask five traders to mark the head and shoulders on the same chart and you may get five answers, plus one person who says there is none. Which swings count? How equal must the shoulders be? How far can a neckline slope? Every one of those choices changes which patterns exist.

To test a pattern, you must turn it into exact rules: a swing is a bar with N lower highs on each side; the shoulders must be within X% of each other; the neckline slope must be under Y. Once you do that, the pattern you are testing is no longer "the head and shoulders". It is your head and shoulders. A different set of rules is a different test.

### Hindsight

The most dangerous bias in chart patterns is that we see them after they work. A double top is easy to spot once price has fallen. Before the fall, the same shape was just a pullback in an uptrend. Books are full of perfect examples because authors chose the charts where the pattern played out.

The honest question is never "does this pattern look like it worked?" It is "if I had applied my rule on the day the pattern completed, using only what I could see then, what would have happened, across every case, including the ugly ones?"

### Repainting and future bars

A swing high is only known after the bars on its right side have formed. If a computer program marks swings using bars on both sides, and then uses those swings to decide when a pattern "completed", it can accidentally use information from the future. The pattern looks as if it was known earlier than it really was. On a chart, indicators that redraw their past signals as new bars arrive are said to "repaint".

A fair detector only uses bars up to and including the bar where the pattern completes. The swing must be confirmed by then. The entry must come after that bar. Our [methods page](/methods/) explains how our detectors avoid using future bars. When we build a chart-pattern study, it will follow the same rule.

### Too many choices

Each pattern has many settings: swing size, tolerance, confirmation rule, stop rule, target rule, time limit. Try enough combinations and one will look good on past data purely by chance. The defence is to fix the rules before looking, test across many markets, compare with random entries, and keep a period of data aside that you only look at once.

### Small samples

Big patterns are rare. A clean head and shoulders on a daily chart might appear a few times a year in a given stock, if that. To get a meaningful number of trades, a test needs many markets and many years, and then the markets often move together, so the trades are less independent than they look.

### What this means for you

None of this proves chart patterns do not work. It means most of what is said about them has not been tested in a way that would convince a sceptic. Treat confident claims, especially specific percentages from unnamed sources, with care. If you want to rely on a pattern, write down your rules and test them yourself, or at least keep an honest journal of every pattern you see, not only the ones you trade. See [Do chart patterns work?](/answers/do-chart-patterns-work/) for a fuller answer.

## Patterns across markets and timeframes

Chart patterns are drawn the same way on every market and every timeframe. That does not mean they behave the same way.

### Stocks and stock indices

Most of the classic literature was written about US stocks on daily and weekly charts. Stocks have an overnight close, so gaps and island reversals are common. They have real exchange volume, so the volume rules in the books can be applied. Earnings reports and other scheduled news can break any pattern instantly. Many traders check the calendar before relying on a pattern that will still be forming on a results day.

### Forex

Major currency pairs trade around the clock on weekdays, so daily gaps are rare except at the weekend open. Volume on most platforms is tick volume. Patterns form cleanly and are widely watched, which may make the obvious levels more crowded with stop orders. Harmonic patterns are especially popular in forex.

Daily candles in forex also depend on the platform's chosen close time. A chart closing at 5pm New York time can show slightly different patterns from one closing at midnight in another time zone.

### Crypto

Crypto trades every day of the week, so gaps barely exist except on exchanges that pause or on futures markets that close. Volatility is high, so patterns are larger in percentage terms and false breaks are frequent. Volume is spread across many venues. Our answer on [whether chart patterns work on crypto](/answers/do-chart-patterns-work-on-crypto/) goes through the differences.

### Futures and commodities

Futures have real volume and open interest, and also contract rolls. When one contract expires and the next becomes the main one, a continuous chart has to stitch them together, and that can create false gaps or distort patterns. Back-adjusted charts reduce the problem but change past prices.

### Timeframes

Patterns appear on one-minute charts and monthly charts alike. A few general points:

- **Higher timeframes** have fewer patterns, each made by more trading, and each with wider stops in price terms. Many traders find them clearer.
- **Lower timeframes** have more patterns, more noise, and costs that are a much larger share of each move. A spread that is trivial on a daily flag can be a large fraction of R on a five-minute flag.
- **Patterns on different timeframes interact.** A bull flag on an hourly chart forming right under a daily double-top neckline is in a very different spot from one forming in open space. [Multiple time frame analysis](/multiple-time-frame-analysis/) is the habit of checking the bigger picture first.

Our answer on [the best timeframe for chart patterns](/answers/best-timeframe-for-chart-patterns/) has a comparison table.

### Markets at a glance

| Market | Gaps | Volume quality | Typical issue for patterns |
|---|---|---|---|
| US stocks | Common (overnight) | Exchange volume | Earnings and news break patterns |
| Stock indices (cash/funds) | Common | Good for funds | Overnight futures moves create gaps |
| Major forex pairs | Rare (weekend only) | Tick volume | Crowded levels, close-time differences |
| Crypto | Very rare on spot | Fragmented | High volatility, frequent false breaks |
| Futures | At session breaks and rolls | Exchange volume | Contract rolls distort continuous charts |

## Common mistakes

### Seeing patterns that are not there

The human eye is very good at finding shapes. Give it a random price series and it will find heads, shoulders and flags. The defence is a written definition: if your rules do not say it is a pattern, it is not one.

### Trading before the break

An unbroken head and shoulders is just a chart with three peaks. Selling before the neckline breaks is betting on a pattern that does not exist yet. Some traders do this on purpose, with a tight stop, but they should know they are anticipating, not trading a completed pattern.

### Ignoring the trend before the pattern

A double bottom after a long fall is a possible reversal. Two equal lows in the middle of a range are just a range. A flag without a pole is just a drift.

### Moving the lines

Redrawing the neckline after the breakout fails, so that the "real" break is still to come, is one of the most common ways to talk yourself into a losing trade. Draw once, record it, and accept the outcome.

### Treating the measured target as a promise

The measured move is a rough guide. If you hold for the full target every time and never adjust, you will often watch winning trades turn back. If you take profit at the first sign of trouble every time, the occasional large move will be lost. Decide your exit rule in advance.

### Stops that ignore R

A stop placed purely on the pattern can make a trade worth 0.8R. A stop placed purely to make the R look good can sit inside normal noise. The stop has to make sense both structurally and in R terms. If it cannot, skip the trade.

### Forgetting costs

Spreads, commissions and slippage all come out of R. They matter most for small patterns on short timeframes and for tight stops.

### Relying on examples

A book or video full of perfect patterns is a set of chosen examples. It tells you what the pattern looks like, not how often it works.

### Fitting the timeframe to the pattern

Switching from the daily to the four-hour to the weekly until you find a pattern that agrees with what you already think is a form of hindsight. Choose your timeframe first.

## Comparison table of the main patterns

The table below summarises the main patterns. "Typical duration" describes how long the pattern tends to take on a daily chart in the classic descriptions; it is a rough guide, not a rule. "Difficulty to spot objectively" is our judgement of how hard it is to write a rule that a computer could follow and that most traders would agree with.

| Pattern | Type | Typical duration (daily chart) | Measured-move rule | Usual confirmation | Difficulty to spot objectively |
|---|---|---|---|---|---|
| [Head and shoulders](/head-and-shoulders/) | Reversal (top) | Weeks to months | Head-to-neckline height from the break | Close below neckline | Medium |
| [Inverse head and shoulders](/inverse-head-and-shoulders/) | Reversal (bottom) | Weeks to months | Same, upwards | Close above neckline | Medium |
| [Double top](/double-top/) | Reversal (top) | Weeks to months | Pattern height from the break | Close below the middle trough | Low to medium |
| [Double bottom](/double-bottom/) | Reversal (bottom) | Weeks to months | Pattern height from the break | Close above the middle peak | Low to medium |
| [Triple top](/triple-top/) / [bottom](/triple-bottom/) | Reversal | Months | Pattern height from the break | Close through the neckline | Medium |
| [Rounding bottom](/rounding-bottom/) / [top](/rounding-top/) | Reversal | Months | Bowl depth (rough) | Close beyond the rim | High |
| [V reversal](/v-reversal/) | Reversal | Days to weeks | None standard | None clean | Medium |
| [Island reversal](/island-reversal/) | Reversal | Days to weeks | None standard | Second gap | Low (where gaps exist) |
| [Diamond](/diamond-pattern/) | Reversal | Weeks to months | Widest part from the break | Close through the lower edge | High |
| [Bull flag](/bull-flag/) / [bear flag](/bear-flag/) | Continuation | Days to a few weeks | Pole length from the break | Close through the flag edge | Medium |
| [Pennant](/pennant/) | Continuation | Days to a few weeks | Pole length from the break | Close through the pennant edge | Medium |
| [Rectangle](/rectangle-pattern/) | Continuation or bilateral | Weeks to months | Box height from the break | Close outside the box | Low |
| [Cup and handle](/cup-and-handle/) | Continuation | Weeks to many months | Cup depth from the break | Close above the handle high | High |
| [Ascending triangle](/ascending-triangle/) | Continuation (bullish bias) | Weeks to months | Widest part from the break | Close above the flat top | Low to medium |
| [Descending triangle](/descending-triangle/) | Continuation (bearish bias) | Weeks to months | Widest part from the break | Close below the flat bottom | Low to medium |
| [Symmetrical triangle](/symmetrical-triangle/) | Bilateral | Weeks to months | Widest part from the break | Close through either line | Medium |
| [Rising wedge](/rising-wedge/) | Reversal or continuation (bearish) | Weeks to months | Back to the wedge start | Close below the lower line | Medium to high |
| [Falling wedge](/falling-wedge/) | Reversal or continuation (bullish) | Weeks to months | Back to the wedge start | Close above the upper line | Medium to high |
| [Broadening formation](/broadening-formation/) | Mostly reversal | Weeks to months | None reliable | Hard to define | High |
| [Harmonic patterns](/harmonic-patterns/) | Reversal at D | Varies | Fibonacci-based targets | Turn at the D zone | High (many variants) |

## FAQ

**What is the most reliable chart pattern?**

There is no honest single answer. Published studies use different rules, markets and periods, so their rankings do not agree, and we have not yet run our own test. Patterns with clear, flat trigger lines, such as rectangles, double tops and bottoms and ascending or descending triangles, are at least easier to define and test.

**Are chart patterns better than indicators?**

They do different jobs. Patterns give you levels: where to enter, where you are wrong and how far a move might go. Indicators summarise price into a number, such as momentum or trend strength. Many traders use a pattern for the levels and an indicator, or volume, as a filter. Neither has a clear advantage on its own.

**How long does a chart pattern take to form?**

It depends on the pattern and timeframe. On a daily chart, flags and pennants often last days to a few weeks, while head and shoulders, triangles and double tops often take weeks to months. Cups and rounding bottoms can take many months. The same shapes appear much faster on intraday charts.

**Can a chart pattern fail and then work?**

Yes. A failed break can turn into a valid break the other way, and some traders trade that failure on purpose. A pattern can also break, fail, and later break again in the original direction. That is why a written rule for what counts as failure, and where the stop goes, matters more than the name of the pattern.

**Do I need volume to trade chart patterns?**

No, but it helps where it is meaningful. In stocks and futures, volume rising on a breakout is a useful extra check. In spot forex, volume is tick volume, a rough proxy. In crypto, it is split across venues. Without good volume, traders lean more on the close beyond the line and on the bigger-picture levels.

**Are chart patterns the same on every timeframe?**

The shapes are the same. The behaviour may not be. Shorter timeframes carry more noise and higher costs relative to the move. Higher timeframes give fewer, larger patterns. A pattern also matters more when it lines up with a level on a higher timeframe.

**Where do I start?**

Learn three or four patterns well rather than twenty badly: a reversal pattern such as the [double top](/double-top/), a continuation pattern such as the [bull flag](/bull-flag/), and a triangle. Write a definition, mark every example you see on past charts, including the failures, and record what happened. Then read the [candlestick patterns guide](/guide/candlestick-patterns/) for the bar-by-bar view of what happens at the break.
