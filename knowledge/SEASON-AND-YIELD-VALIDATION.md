# RHS season and yield evidence — November 2026

This is a research-only update. **No application code was changed.**

## Outcomes

- Added 44 source-linked cultivation/calendar profiles, separating early and maincrop potatoes, early and maincrop peas, French/runner/broad beans, calabrese and sprouting broccoli, four cabbage seasons, heated/unheated/outdoor cucumbers, summer/autumn raspberries, strawberry types, lettuce, spinach, kale, sweetcorn, basil, tomatoes, figs and parsnips.
- Replaced unverified generic kilogram-per-plant estimates with **null** for the 20 crops lacking RHS-backed quantitative yields. This is intentional: unknown is better than unsupported precision.
- Added RHS indicative mature-plant yield ranges for six fruit categories: strawberry 0.5–1kg/plant, raspberry 1–1.5kg/plant, blueberry 2.25–5kg/bush (RHS crop-specific, about seven years old), fig 4.5–9kg/tree, and citrus 2–7kg/tree (generic citrus, not species-specific).
- Added RHS sweetcorn yield of 6–9 **cobs per m²**, not kilograms, to the sweetcorn variant. This must not be written to the canonical kg yield field.

## Caveats

- The RHS fruit production chart is a rough guide for **mature, healthy plants**, with weather and training affecting output. It is not a calibrated forecast for newly planted fruit or small greenhouse citrus.
- Some seasonal profiles combine explicit RHS months with conservative month-level interpretation; the source and qualifier are recorded. They should be treated as planning guidance, not guaranteed calendar dates.
- The 'bean' crop is an umbrella for several botanical species and needs species IDs in a later taxonomy migration; this dataset keeps existing canonical IDs stable.
- Overwintering crops have harvest windows whose end month is numerically less than their start month. Importers must handle crossing the year boundary.
- RHS data does not justify per-plant kg yields for courgettes, cucumbers, tomatoes, most vegetables or herbs. Supplier-specific trials would be needed; do not manufacture values.

## Primary RHS references

- [RHS fruit production chart](https://www.rhs.org.uk/Advice/PDFs/Beginners-Guide/FruitProductionChart.pdf)
- [RHS blueberry guide](https://www.rhs.org.uk/fruit/blueberries/grow-your-own)
- [RHS potato variety timing](https://www.rhs.org.uk/advice/grow-your-own/allotments/liz-mooney/perfect-potatoes-from-the-plot)
- [RHS peas](https://www.rhs.org.uk/vegetables/peas/grow-your-own)
- [RHS French beans](https://www.rhs.org.uk/vegetables/french-beans/grow-your-own)
- [RHS sprouting broccoli](https://www.rhs.org.uk/vegetables/broccoli/grow-your-own)
- [RHS calabrese explanation](https://www.rhs.org.uk/advice/grow-your-own/features/fascinating-facts-broccoli)
- [RHS raspberries](https://www.rhs.org.uk/fruit/raspberries/grow-your-own)
- [RHS strawberries](https://www.rhs.org.uk/fruit/strawberries/grow-your-own)
- [RHS cucumbers](https://www.rhs.org.uk/vegetables/cucumbers/grow-your-own)
- [RHS sweetcorn](https://www.rhs.org.uk/vegetables/sweetcorn/grow-your-own)

## Outstanding research

Find quantitative yield evidence with explicit **unit, cultivar, method, maturity and growing conditions** for vegetable crops, especially tomato, cucumber, courgette and beans. Prefer controlled UK trial data and supplier trials over unsourced gardening blog estimates. Until then, optimiser yield scores must be unavailable rather than fabricated.
