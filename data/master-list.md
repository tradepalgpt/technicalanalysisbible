# Master list: indicators and TA methods (with tags)

Written 14 November 2026. About 340 items. This is the source the site builds from; writers may not change name, type, inventor or year.

**Tag key**
- States: **T** trend, **R** range, **B** breakout, **Rv** reversal, **V** volatility
- Purposes: **En** entry, **Ex** exit, **St** stop, **Fi** filter, **Co** confirmation
- Wave: 1 = launch, 2 = second, 3 = long tail
- Slug = the page URL (`/slug/`)

---

## 1. Moving averages (type: moving-average)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Simple Moving Average (SMA) | simple-moving-average | T | Fi, En, Co | 1 |
| Exponential Moving Average (EMA) | exponential-moving-average | T | Fi, En, Co | 1 |
| Weighted Moving Average (WMA) | weighted-moving-average | T | Fi, Co | 2 |
| Hull Moving Average | hull-moving-average | T | En, Fi | 2 |
| Double EMA (DEMA) | dema | T | En, Fi | 2 |
| Triple EMA (TEMA) | tema | T | En, Fi | 2 |
| Smoothed Moving Average (SMMA / RMA) | smoothed-moving-average | T | Fi | 3 |
| Volume-Weighted Moving Average (VWMA) | vwma | T | Fi, Co | 2 |
| Kaufman Adaptive Moving Average (KAMA) | kama | T, R | Fi | 2 |
| Arnaud Legoux Moving Average (ALMA) | alma | T | En, Fi | 3 |
| Zero-Lag EMA (ZLEMA) | zlema | T | En | 3 |
| MESA Adaptive Moving Average (MAMA) | mama | T | En, Fi | 3 |
| Fractal Adaptive Moving Average (FRAMA) | frama | T, R | Fi | 3 |
| McGinley Dynamic | mcginley-dynamic | T | Fi, St | 3 |
| Least Squares Moving Average (LSMA) | lsma | T | Fi | 3 |
| T3 Moving Average (Tillson) | t3-moving-average | T | Fi | 3 |
| Moving Average Crossover | moving-average-crossover | T, Rv | En, Ex | 1 |
| Golden Cross | golden-cross | T, Rv | En, Co | 1 |
| Death Cross | death-cross | T, Rv | Ex, Co | 1 |
| Moving Average Ribbon | moving-average-ribbon | T | Fi, Co | 2 |
| Moving Average Envelope | moving-average-envelope | R, T | En, Ex | 2 |
| Guppy Multiple Moving Average (GMMA) | guppy-multiple-moving-average | T | Fi, Co | 3 |

## 2. Trend indicators (type: trend)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| MACD | macd | T, Rv | En, Co | 1 |
| MACD Histogram | macd-histogram | T, Rv | En, Co | 2 |
| Average Directional Index (ADX) | adx | T, R | Fi | 1 |
| Directional Movement Index (DMI, +DI/-DI) | dmi | T | En, Fi | 2 |
| Parabolic SAR | parabolic-sar | T | St, Ex | 1 |
| Ichimoku Cloud | ichimoku-cloud | T | En, Fi, St, Co | 1 |
| Supertrend | supertrend | T | St, Ex, Fi | 1 |
| Aroon Indicator | aroon | T, R | Fi | 2 |
| Aroon Oscillator | aroon-oscillator | T | Fi | 3 |
| Vortex Indicator | vortex-indicator | T, Rv | En, Fi | 2 |
| TRIX | trix | T | Fi, Co | 3 |
| Know Sure Thing (KST) | know-sure-thing | T | Co | 3 |
| Linear Regression Line | linear-regression | T | Fi | 2 |
| Linear Regression Channel | linear-regression-channel | T, R | En, Ex | 2 |
| Linear Regression Slope | linear-regression-slope | T | Fi | 3 |
| Mass Index | mass-index | Rv | Co | 3 |
| Schaff Trend Cycle | schaff-trend-cycle | T | En | 3 |
| Choppiness Index | choppiness-index | T, R | Fi | 2 |
| Vertical Horizontal Filter (VHF) | vertical-horizontal-filter | T, R | Fi | 3 |
| Trend Intensity Index | trend-intensity-index | T | Fi | 3 |
| Alligator (Williams) | williams-alligator | T, R | Fi, En | 2 |
| Gator Oscillator | gator-oscillator | T | Fi | 3 |
| Fractals (Williams) | williams-fractals | T, B | St, En | 2 |
| Elder Impulse System | elder-impulse-system | T | Fi | 3 |
| Heikin-Ashi trend reading | heikin-ashi | T | Fi, Ex | 1 |
| Trendline | trendline | T, Rv, B | En, St, Co | 1 |
| Trend Channel | trend-channel | T | En, Ex | 1 |

## 3. Momentum oscillators (type: momentum-oscillator)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Relative Strength Index (RSI) | rsi | R, Rv | En, Co, Fi | 1 |
| Stochastic Oscillator | stochastic-oscillator | R, Rv | En, Co | 1 |
| Stochastic RSI | stochastic-rsi | R, Rv | En | 1 |
| Williams %R | williams-r | R, Rv | En, Co | 2 |
| Commodity Channel Index (CCI) | cci | R, Rv, T | En, Co | 1 |
| Rate of Change (ROC) | rate-of-change | T, Rv | Co, Fi | 2 |
| Momentum Indicator | momentum-indicator | T, Rv | Co | 2 |
| Awesome Oscillator | awesome-oscillator | T, Rv | En, Co | 2 |
| Accelerator Oscillator | accelerator-oscillator | T | Co | 3 |
| Ultimate Oscillator | ultimate-oscillator | Rv | En | 2 |
| Connors RSI | connors-rsi | R, Rv | En | 3 |
| Detrended Price Oscillator (DPO) | detrended-price-oscillator | R | En | 3 |
| Percentage Price Oscillator (PPO) | ppo | T | Co | 3 |
| Absolute Price Oscillator (APO) | apo | T | Co | 3 |
| True Strength Index (TSI) | true-strength-index | T, Rv | En, Co | 2 |
| Chande Momentum Oscillator (CMO) | chande-momentum-oscillator | R, Rv | En | 3 |
| Relative Vigor Index (RVI) | relative-vigor-index | T, Rv | Co | 3 |
| Coppock Curve | coppock-curve | Rv | En | 3 |
| Fisher Transform | fisher-transform | Rv | En | 2 |
| Inverse Fisher Transform | inverse-fisher-transform | Rv | En | 3 |
| Stochastic Momentum Index (SMI) | stochastic-momentum-index | R, Rv | En | 3 |
| Balance of Power | balance-of-power | T | Co | 3 |
| Elder-Ray Index (Bull/Bear Power) | elder-ray-index | T | En, Co | 3 |
| Laguerre RSI | laguerre-rsi | R, Rv | En | 3 |
| WaveTrend Oscillator | wavetrend-oscillator | R, Rv | En | 3 |
| Squeeze Momentum (TTM Squeeze) | ttm-squeeze | V, B | En, Fi | 1 |
| Divergence (bullish/bearish, regular) | divergence | Rv | En, Co | 1 |
| Hidden Divergence | hidden-divergence | T | En, Co | 1 |
| Overbought and Oversold | overbought-oversold | R, Rv | En, Ex | 1 |
| RSI Failure Swing | rsi-failure-swing | Rv | En | 3 |
| Disparity Index | disparity-index | Rv | Fi | 3 |
| Center of Gravity (Ehlers) | center-of-gravity | Rv | En | 3 |
| Cyber Cycle (Ehlers) | cyber-cycle | R | En | 3 |
| Random Walk Index | random-walk-index | T | Fi | 3 |
| Rainbow Oscillator | rainbow-oscillator | T | Fi | 3 |

## 4. Volatility (type: volatility)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Average True Range (ATR) | atr | V | St, Fi | 1 |
| Bollinger Bands | bollinger-bands | R, V, B | En, Ex, Fi | 1 |
| Bollinger Band Width | bollinger-band-width | V, B | Fi | 2 |
| %B (Bollinger) | percent-b | R, Rv | En | 2 |
| Bollinger Squeeze | bollinger-squeeze | V, B | En, Fi | 1 |
| Keltner Channels | keltner-channels | T, V, B | En, St, Fi | 1 |
| Donchian Channels | donchian-channels | B, T | En, St, Ex | 1 |
| Standard Deviation | standard-deviation | V | Fi | 2 |
| Historical Volatility | historical-volatility | V | Fi | 2 |
| Implied Volatility | implied-volatility | V | Fi | 2 |
| VIX (volatility index) | vix | V, Rv | Fi | 1 |
| Chaikin Volatility | chaikin-volatility | V | Fi | 3 |
| Normalized ATR (NATR) | normalized-atr | V | Fi | 3 |
| Starc Bands | starc-bands | R, V | En, Ex | 3 |
| Ulcer Index | ulcer-index | V | Fi | 3 |
| Relative Volatility Index | relative-volatility-index | V | Co | 3 |
| Average Daily Range (ADR) | average-daily-range | V | St, Ex | 2 |
| Inside Range / NR4 and NR7 | nr7 | V, B | En | 2 |
| Volatility Contraction Pattern (VCP) | volatility-contraction-pattern | B, V | En | 2 |
| Opening Range Breakout | opening-range-breakout | B, V | En, St | 1 |

## 5. Volume and order flow (type: volume)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Volume (reading volume) | volume | T, B, Rv | Co | 1 |
| On-Balance Volume (OBV) | on-balance-volume | T, Rv | Co | 1 |
| VWAP | vwap | T, R | En, Fi, St | 1 |
| Anchored VWAP | anchored-vwap | T, R | En, St | 1 |
| VWAP Bands | vwap-bands | R, V | En, Ex | 2 |
| Accumulation/Distribution Line | accumulation-distribution | T, Rv | Co | 2 |
| Chaikin Money Flow (CMF) | chaikin-money-flow | T, Rv | Co | 2 |
| Chaikin Oscillator | chaikin-oscillator | Rv | Co | 3 |
| Money Flow Index (MFI) | money-flow-index | R, Rv | En, Co | 1 |
| Volume Profile | volume-profile | R, B | En, St, Ex | 1 |
| Point of Control (POC) | point-of-control | R | En, Ex | 2 |
| Value Area (VAH/VAL) | value-area | R, B | En, Ex | 2 |
| Market Profile (TPO) | market-profile | R, B | En, Fi | 2 |
| Volume Oscillator | volume-oscillator | B | Co | 3 |
| Klinger Oscillator | klinger-oscillator | T, Rv | Co | 3 |
| Ease of Movement | ease-of-movement | T | Co | 3 |
| Force Index | force-index | T, Rv | Co | 2 |
| Elder's Force Index | elders-force-index | T | En | 3 |
| Negative Volume Index | negative-volume-index | T | Fi | 3 |
| Positive Volume Index | positive-volume-index | T | Fi | 3 |
| Price Volume Trend | price-volume-trend | T | Co | 3 |
| Relative Volume (RVOL) | relative-volume | B | Fi, Co | 2 |
| Volume Spread Analysis (VSA) | volume-spread-analysis | Rv, B | Co | 2 |
| Cumulative Volume Delta (CVD) | cumulative-volume-delta | Rv, T | Co | 2 |
| Delta (order flow) | volume-delta | Rv | Co | 2 |
| Footprint Chart | footprint-chart | Rv, B | En, Co | 2 |
| Order Book / Depth of Market | depth-of-market | R | En | 3 |
| Open Interest | open-interest | T, Rv | Co | 2 |
| Commitments of Traders (COT) | commitments-of-traders | T, Rv | Fi | 2 |
| Volume Climax | volume-climax | Rv | Ex, Co | 2 |
| Twiggs Money Flow | twiggs-money-flow | T | Co | 3 |
| Williams Accumulation/Distribution | williams-accumulation-distribution | Rv | Co | 3 |
| Volume-Weighted MACD | volume-weighted-macd | T | Co | 3 |
| Tick Volume (forex) | tick-volume | T, B | Co | 2 |
| Absorption (order flow) | absorption | Rv | En, Co | 3 |

## 6. Breadth and sentiment (type: breadth-sentiment)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Advance-Decline Line | advance-decline-line | T, Rv | Co | 2 |
| McClellan Oscillator | mcclellan-oscillator | Rv | Co | 3 |
| McClellan Summation Index | mcclellan-summation-index | T | Fi | 3 |
| Arms Index (TRIN) | trin | Rv | Co | 3 |
| NYSE TICK | nyse-tick | R, Rv | En | 3 |
| New Highs - New Lows | new-highs-new-lows | T, Rv | Co | 3 |
| Percent Above Moving Average | percent-above-moving-average | T, Rv | Fi | 3 |
| Bullish Percent Index | bullish-percent-index | Rv | Fi | 3 |
| Put/Call Ratio | put-call-ratio | Rv | Co | 2 |
| Fear and Greed Index | fear-and-greed-index | Rv | Fi | 2 |
| Relative Strength (comparative) | relative-strength-comparative | T | Fi | 2 |
| Relative Rotation Graph (RRG) | relative-rotation-graph | T | Fi | 3 |
| Correlation Coefficient | correlation-coefficient | T | Fi | 2 |
| Beta | beta | V | Fi | 3 |
| Seasonality | seasonality | T | Fi | 2 |
| Intermarket Analysis | intermarket-analysis | T | Fi | 3 |
| Currency Strength Meter | currency-strength-meter | T | Fi | 2 |
| Retail Sentiment (positioning) | retail-sentiment | Rv | Fi | 3 |
| Hindenburg Omen | hindenburg-omen | Rv | Fi | 3 |
| Zweig Breadth Thrust | zweig-breadth-thrust | B | Co | 3 |

## 7. Support, resistance and levels (type: levels)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Support and Resistance | support-and-resistance | R, B, Rv | En, St, Ex | 1 |
| Supply and Demand Zones | supply-and-demand-zones | R, Rv | En, St | 1 |
| Pivot Points (standard) | pivot-points | R | En, Ex, St | 1 |
| Fibonacci Pivot Points | fibonacci-pivot-points | R | En, Ex | 2 |
| Camarilla Pivot Points | camarilla-pivots | R, B | En, Ex | 2 |
| Woodie Pivot Points | woodie-pivots | R | En | 3 |
| DeMark Pivot Points | demark-pivots | R | En | 3 |
| Round Numbers (psychological levels) | round-numbers | R, Rv | En, St | 2 |
| Previous Day High/Low | previous-day-high-low | R, B | En, St | 1 |
| Weekly and Monthly Open | weekly-monthly-open | R, T | Fi | 3 |
| Role Reversal (support becomes resistance) | role-reversal | B, T | En, Co | 1 |
| Horizontal Ray / Key Level | key-levels | R, B | En, St | 2 |
| Gann Levels / Square of Nine | gann-square-of-nine | Rv | En | 3 |
| Murrey Math Lines | murrey-math-lines | R | En | 3 |
| Andrews' Pitchfork | andrews-pitchfork | T | En, Ex | 2 |
| Schiff Pitchfork | schiff-pitchfork | T | En | 3 |
| Speed Resistance Lines | speed-resistance-lines | T | En | 3 |
| Gap (as a level) | price-gaps | B, Rv | En, Co | 1 |
| Initial Balance | initial-balance | R, B | En, Fi | 3 |
| Daily Open / Session Open | session-open | R | Fi | 3 |

## 8. Fibonacci and ratio tools (type: fibonacci)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Fibonacci Retracement | fibonacci-retracement | T | En, St | 1 |
| Fibonacci Extension | fibonacci-extension | T | Ex | 1 |
| Fibonacci Projection (expansion) | fibonacci-projection | T | Ex | 2 |
| Fibonacci Fan | fibonacci-fan | T | En | 3 |
| Fibonacci Arcs | fibonacci-arcs | T | En | 3 |
| Fibonacci Time Zones | fibonacci-time-zones | Rv | Fi | 3 |
| Fibonacci Channel | fibonacci-channel | T | En, Ex | 3 |
| Golden Ratio (0.618 / 1.618) | golden-ratio | T | Co | 2 |
| Fibonacci Confluence | fibonacci-confluence | T, Rv | En, Co | 2 |
| Optimal Trade Entry (OTE) | optimal-trade-entry | T | En | 3 |
| Measured Move | measured-move | B, T | Ex | 1 |
| AB=CD Pattern | abcd-pattern | Rv, T | En, Ex | 2 |

## 9. Chart patterns (type: chart-pattern)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Head and Shoulders | head-and-shoulders | Rv | En, St, Ex | 1 |
| Inverse Head and Shoulders | inverse-head-and-shoulders | Rv | En, St, Ex | 1 |
| Double Top | double-top | Rv | En, St | 1 |
| Double Bottom | double-bottom | Rv | En, St | 1 |
| Triple Top | triple-top | Rv | En | 2 |
| Triple Bottom | triple-bottom | Rv | En | 2 |
| Rounding Bottom (Saucer) | rounding-bottom | Rv | En | 2 |
| Rounding Top | rounding-top | Rv | En | 3 |
| Cup and Handle | cup-and-handle | B, T | En, St | 1 |
| Inverse Cup and Handle | inverse-cup-and-handle | B | En | 3 |
| Ascending Triangle | ascending-triangle | B, T | En, St, Ex | 1 |
| Descending Triangle | descending-triangle | B, T | En, St, Ex | 1 |
| Symmetrical Triangle | symmetrical-triangle | B, V | En, St | 1 |
| Expanding Triangle (Broadening) | broadening-formation | V, Rv | Fi | 3 |
| Bull Flag | bull-flag | T, B | En, St, Ex | 1 |
| Bear Flag | bear-flag | T, B | En, St, Ex | 1 |
| Pennant | pennant | T, B | En | 1 |
| Rising Wedge | rising-wedge | Rv, T | En, St | 1 |
| Falling Wedge | falling-wedge | Rv, T | En, St | 1 |
| Rectangle (trading range) | rectangle-pattern | R, B | En, Ex | 2 |
| Diamond Top / Bottom | diamond-pattern | Rv | En | 3 |
| Island Reversal | island-reversal | Rv | En | 2 |
| V-Top / V-Bottom (spike) | v-reversal | Rv | Co | 3 |
| Bump and Run Reversal | bump-and-run | Rv | En | 3 |
| Breakaway Gap | breakaway-gap | B | En, Co | 2 |
| Runaway (Measuring) Gap | runaway-gap | T | Co, Ex | 2 |
| Exhaustion Gap | exhaustion-gap | Rv | Ex | 2 |
| Common Gap | common-gap | R | Fi | 3 |
| Gap Fill | gap-fill | R, Rv | En, Ex | 2 |
| Harmonic Patterns (overview) | harmonic-patterns | Rv | En, St, Ex | 2 |
| Gartley Pattern | gartley-pattern | Rv | En, St | 2 |
| Butterfly Pattern | butterfly-pattern | Rv | En | 3 |
| Bat Pattern | bat-pattern | Rv | En | 3 |
| Crab Pattern | crab-pattern | Rv | En | 3 |
| Shark Pattern | shark-pattern | Rv | En | 3 |
| Cypher Pattern | cypher-pattern | Rv | En | 3 |
| Three Drives Pattern | three-drives | Rv | En | 3 |
| Wolfe Waves | wolfe-waves | Rv | En, Ex | 3 |
| Quasimodo (Over-and-Under) | quasimodo-pattern | Rv | En, St | 2 |
| Adam and Eve (double bottom variant) | adam-and-eve | Rv | En | 3 |

## 10. Candlestick patterns (type: candlestick)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Candlestick charts (how to read) | candlestick-chart | T, R | Co | 1 |
| Doji | doji | Rv, R | Co | 1 |
| Dragonfly Doji | dragonfly-doji | Rv | Co | 2 |
| Gravestone Doji | gravestone-doji | Rv | Co | 2 |
| Long-Legged Doji | long-legged-doji | V, Rv | Co | 3 |
| Hammer | hammer | Rv | En, Co | 1 |
| Hanging Man | hanging-man | Rv | Co | 1 |
| Inverted Hammer | inverted-hammer | Rv | Co | 2 |
| Shooting Star | shooting-star | Rv | En, Co | 1 |
| Spinning Top | spinning-top | R | Co | 2 |
| Marubozu | marubozu | T, B | Co | 2 |
| Bullish Engulfing | bullish-engulfing | Rv | En, Co | 1 |
| Bearish Engulfing | bearish-engulfing | Rv | En, Co | 1 |
| Bullish Harami | bullish-harami | Rv | Co | 2 |
| Bearish Harami | bearish-harami | Rv | Co | 2 |
| Harami Cross | harami-cross | Rv | Co | 3 |
| Piercing Line | piercing-line | Rv | Co | 2 |
| Dark Cloud Cover | dark-cloud-cover | Rv | Co | 2 |
| Morning Star | morning-star | Rv | En, Co | 1 |
| Evening Star | evening-star | Rv | En, Co | 1 |
| Morning Doji Star | morning-doji-star | Rv | Co | 3 |
| Evening Doji Star | evening-doji-star | Rv | Co | 3 |
| Three White Soldiers | three-white-soldiers | Rv, T | Co | 1 |
| Three Black Crows | three-black-crows | Rv, T | Co | 1 |
| Tweezer Tops | tweezer-tops | Rv | Co | 2 |
| Tweezer Bottoms | tweezer-bottoms | Rv | Co | 2 |
| Three Inside Up / Down | three-inside-up-down | Rv | Co | 3 |
| Three Outside Up / Down | three-outside-up-down | Rv | Co | 3 |
| Abandoned Baby | abandoned-baby | Rv | Co | 3 |
| Kicker Pattern | kicker-pattern | Rv, B | En | 3 |
| Belt Hold | belt-hold | Rv | Co | 3 |
| Rising Three Methods | rising-three-methods | T | Co | 2 |
| Falling Three Methods | falling-three-methods | T | Co | 2 |
| Tasuki Gap | tasuki-gap | T | Co | 3 |
| Mat Hold | mat-hold | T | Co | 3 |
| Separating Lines | separating-lines | T | Co | 3 |
| On-Neck / In-Neck | on-neck-in-neck | T | Co | 3 |
| Counterattack Lines | counterattack-lines | Rv | Co | 3 |
| Homing Pigeon | homing-pigeon | Rv | Co | 3 |
| Ladder Bottom | ladder-bottom | Rv | Co | 3 |
| Stick Sandwich | stick-sandwich | Rv | Co | 3 |
| Upside / Downside Gap Three Methods | gap-three-methods | T | Co | 3 |
| Three Line Strike | three-line-strike | Rv | En | 3 |
| Deliberation (Stalled) Pattern | deliberation-pattern | Rv | Co | 3 |
| Advance Block | advance-block | Rv | Co | 3 |

## 11. Price action and market structure (type: price-action)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Price Action Trading (overview) | price-action | T, R, B, Rv | En, St, Ex | 1 |
| Market Structure (higher highs, higher lows) | market-structure | T, Rv | Fi | 1 |
| Swing Highs and Swing Lows | swing-highs-lows | T | St, Fi | 1 |
| Break of Structure (BOS) | break-of-structure | T, B | Co | 1 |
| Change of Character (CHoCH) | change-of-character | Rv | Co | 2 |
| Market Structure Shift (MSS) | market-structure-shift | Rv | En, Co | 2 |
| Pin Bar | pin-bar | Rv | En, St | 1 |
| Inside Bar | inside-bar | V, B | En, St | 1 |
| Outside Bar | outside-bar | Rv, V | En | 2 |
| Fakey (false inside-bar break) | fakey-pattern | Rv | En | 3 |
| False Breakout (fakeout) | false-breakout | Rv, R | En, St | 1 |
| Breakout and Retest | breakout-retest | B | En, St | 1 |
| Pullback (retracement entry) | pullback-trading | T | En | 1 |
| Liquidity Sweep (stop hunt) | liquidity-sweep | Rv | En | 1 |
| Equal Highs / Equal Lows (liquidity pools) | equal-highs-lows | R, Rv | Ex | 2 |
| Order Block | order-block | Rv, T | En, St | 1 |
| Breaker Block | breaker-block | Rv | En | 2 |
| Mitigation Block | mitigation-block | Rv | En | 3 |
| Fair Value Gap (FVG / imbalance) | fair-value-gap | T | En, Ex | 1 |
| Premium and Discount Zones | premium-discount | T, R | Fi | 2 |
| Displacement | displacement | B, T | Co | 3 |
| Kill Zones (session timing) | kill-zones | V | Fi | 3 |
| Power of Three (AMD) | power-of-three | Rv | Fi | 3 |
| Two-Legged Pullback (ABC) | two-legged-pullback | T | En | 2 |
| Wedge Pullback / Three Pushes | three-pushes | Rv | En | 3 |
| Trend Exhaustion | trend-exhaustion | Rv | Ex | 2 |
| Range Trading | range-trading | R | En, Ex | 1 |
| Breakout Trading | breakout-trading | B | En | 1 |
| Trend Following | trend-following | T | En, Fi | 1 |
| Mean Reversion | mean-reversion | R, Rv | En | 1 |
| Multiple Time Frame Analysis | multiple-time-frame-analysis | T, R | Fi, Co | 1 |
| Confluence | confluence | T, R, Rv | Co | 1 |

## 12. Theories and schools (type: theory)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Dow Theory | dow-theory | T, Rv | Fi | 1 |
| Elliott Wave Theory | elliott-wave | T, Rv | En, Ex, Fi | 1 |
| Impulse Wave | impulse-wave | T | En | 2 |
| Corrective Waves (zigzag, flat, triangle) | corrective-waves | R, T | En | 2 |
| Wyckoff Method | wyckoff-method | R, Rv, B | En, Fi | 1 |
| Wyckoff Accumulation | wyckoff-accumulation | R, Rv | En | 1 |
| Wyckoff Distribution | wyckoff-distribution | R, Rv | En | 1 |
| Spring and Upthrust (Wyckoff) | wyckoff-spring-upthrust | Rv | En, St | 2 |
| Gann Theory (overview) | gann-theory | T, Rv | Fi | 2 |
| Gann Angles / Fan | gann-fan | T | Fi | 3 |
| Smart Money Concepts (ICT / SMC overview) | smart-money-concepts | T, Rv | En, Fi | 1 |
| Tom DeMark Sequential (TD Sequential) | td-sequential | Rv | En, Ex | 2 |
| Market Cycles | market-cycles | Rv, T | Fi | 2 |
| Auction Market Theory | auction-market-theory | R, B | Fi | 3 |
| Turtle Trading Rules | turtle-trading | B, T | En, St, Ex | 2 |

## 13. Stop and exit methods (type: stop-exit)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Stop Loss (placement basics) | stop-loss | T, R, B, Rv | St | 1 |
| ATR Stop | atr-stop | V, T | St | 1 |
| Chandelier Exit | chandelier-exit | T | St, Ex | 1 |
| Trailing Stop | trailing-stop | T | St, Ex | 1 |
| Swing High/Low Stop (structure stop) | structure-stop | T, R | St | 1 |
| Break-Even Stop | break-even-stop | T | St | 2 |
| Time Stop | time-stop | R | Ex | 2 |
| Volatility Stop | volatility-stop | V | St | 2 |
| Kase DevStop | kase-devstop | V | St | 3 |
| Moving Average Exit | moving-average-exit | T | Ex | 2 |
| Profit Target (R-multiple targets) | profit-target | T, R | Ex | 1 |
| Scaling Out (partial exits) | scaling-out | T | Ex | 2 |
| Risk-Reward Ratio | risk-reward-ratio | T, R, B, Rv | Fi | 1 |
| Position Sizing | position-sizing | V | St | 1 |
| Signal-Bar Stop (stop beyond the signal candle) | bar-stop | Rv, B | St | 3 |

## 14. Chart types (type: chart-type)

| Name | Slug | States | Purposes | Wave |
|---|---|---|---|---|
| Line Chart | line-chart | T | Fi | 3 |
| Bar Chart (OHLC) | ohlc-bar-chart | T, R | Co | 3 |
| Heikin-Ashi chart (see heikin-ashi) | heikin-ashi | T | Fi | 1 |
| Renko Chart | renko-chart | T | Fi | 2 |
| Kagi Chart | kagi-chart | T | Fi | 3 |
| Point and Figure Chart | point-and-figure | T, B | En, Fi | 2 |
| Three Line Break | three-line-break | T | Fi | 3 |
| Range Bars | range-bars | V | Fi | 3 |
| Tick Charts | tick-charts | V | Fi | 3 |
| Volume Bars / Equivolume | equivolume | B | Co | 3 |
| Logarithmic vs Linear Scale | log-scale | T | Fi | 3 |
| Time Frames (choosing one) | time-frames | T, R | Fi | 2 |

(Heikin-Ashi appears in two types but has one page.)

---

## 15. Comparison pages (`/compare/a-vs-b/`)

Launch 15 (Wave 1), bold. The rest go in Waves 2 and 3.

**Wave 1:** rsi-vs-stochastic, rsi-vs-macd, ema-vs-sma, macd-vs-stochastic, bollinger-bands-vs-keltner-channels, atr-vs-standard-deviation, vwap-vs-moving-average, fibonacci-retracement-vs-extension, support-and-resistance-vs-supply-and-demand, head-and-shoulders-vs-double-top, flag-vs-pennant, hammer-vs-hanging-man, doji-vs-spinning-top, order-block-vs-supply-and-demand, trailing-stop-vs-stop-loss

**Wave 2:** adx-vs-aroon, cci-vs-rsi, stochastic-vs-williams-r, ichimoku-vs-moving-averages, parabolic-sar-vs-supertrend, supertrend-vs-atr-stop, obv-vs-accumulation-distribution, mfi-vs-rsi, volume-profile-vs-market-profile, pivot-points-vs-fibonacci, elliott-wave-vs-wyckoff, wyckoff-vs-smart-money-concepts, renko-vs-heikin-ashi, rising-wedge-vs-ascending-triangle, falling-wedge-vs-descending-triangle, bullish-engulfing-vs-piercing-line, morning-star-vs-abandoned-baby, fair-value-gap-vs-price-gap, bos-vs-choch, hull-ma-vs-ema, donchian-vs-bollinger, macd-vs-ppo, stochastic-rsi-vs-rsi, chandelier-exit-vs-parabolic-sar, vwap-vs-anchored-vwap

**Wave 3:** grow from Search Console queries (real searches we start showing up for), about 100 more.

**Comparison template:** one-line verdict; side-by-side table (measures, leading/lagging, best state, best use, default settings); when to use A; when to use B; using both together; common mix-ups; FAQ (3 to 5); risk note.

---

## 16. Glossary (Wave 1 set, 40 terms)

Overbought, oversold, divergence, convergence, lagging indicator, leading indicator, oscillator, momentum, volatility, liquidity, spread, slippage, gap, breakout, false breakout, retest, pullback, retracement, trend, range, consolidation, swing high, swing low, higher high, lower low, candlestick body, wick (shadow), timeframe, confluence, risk-reward, R-multiple, stop loss, take profit, trailing stop, position size, whipsaw, smoothing, lookback period, signal line, crossover.

Wave 2/3 adds ~80 more (bid, ask, pip, tick, OHLC, mean, standard deviation, regression, order flow, delta, imbalance, auction, value area, accumulation, distribution, markup, markdown, impulse, correction, extension, projection and so on).

---

## 17. Hubs generated from these tags

- 14 type hubs (sections 1 to 14 above)
- 5 state hubs: `/market/trend/`, `/market/range/`, `/market/breakout/`, `/market/reversal/`, `/market/volatility/`
- 5 purpose hubs: `/use/entry/`, `/use/exit/`, `/use/stop/`, `/use/filter/`, `/use/confirmation/`
- 25 cross hubs (state x purpose), published only if 3+ items qualify
- A to Z: 26 letter pages + `/a-z/` (numbers such as "%B" file under the first letter of the slug)
