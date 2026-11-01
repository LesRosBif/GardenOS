# RHS crop-by-crop field validation — 2026-11-01

All 26 canonical crop topics have an RHS source link and a reviewed cultivation summary in `rhs-field-validation.json`. **This does not mean every existing numerical field is verified.** The 49 source-backed field assertions are the verified subset; legacy numeric yield and sunlight-hour thresholds are still provisional.

## Material findings

- Potatoes: RHS distinguishes 30 × 60cm early planting from 37 × 75cm maincrop planting. Generic density is misleading.
- Carrots: 5–7.5cm after thinning, 15–30cm between rows; direct sowing protects the taproot.
- Parsnips: 15cm plants, 30cm rows, 14–30 days germination and ~12°C soil guidance.
- Courgettes: allow ~1m² for a bush plant, rather than treating every cultivar as 90 × 90cm.
- Beans: French, broad and runner beans cannot share one spacing/support profile. Climbing structures alter usable bed capacity.
- Lettuce: hearting at ~30cm vs loose-leaf at ~15cm; different harvesting cadence.
- Broccoli: RHS sprouting broccoli may occupy the bed for 4–10 months; calabrese must be separately researched.
- Sweetcorn: 34–45cm plants in blocks for pollination, with a RHS crop-level estimate of 6–9 cobs/m² (not kg/plant).
- Raspberries: 40–60cm within row but 1.5–2m between rows; previous 50cm generic row spacing was incorrect.
- Blueberries: pH 4.5–5.5, spacing 1–2m. Generic garden-soil pH should never override the acidic requirement.
- Figs: a fan can span ~3.5m; existing 2m square proxy must not be treated as reliable canopy geometry.
- Citrus: species and cultivar minimum temperatures vary; some lemons may tolerate 5°C, calamondin oranges need ~13°C. Never generalise either figure to all citrus.

## Remaining unknowns

RHS commonly specifies 'sunny' or 'partial shade', not a validated number of direct-sun hours. Thus existing 3/5/6/7-hour preferences are **app conventions, not RHS facts**. Existing per-plant kg yield estimates for all crops remain unverified. Detailed variety calendars, temperature response, root depth, canopy by stage, and crop-specific tasks also need separate evidence. These should remain advisory/unknown in optimiser logic.

## Interpretation

The verified overlay is deliberately **non-destructive**. It can be used as the trusted source for an eventual data migration, without falsely elevating the confidence of the legacy catalogue. Crop-level source URL is a pointer, not proof of every individual field.
