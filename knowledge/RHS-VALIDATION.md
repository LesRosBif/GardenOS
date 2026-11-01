# RHS validation audit — pass 1 (1 November 2026)

This is a **partial audit**, not certification of the 26-crop catalogue. RHS sources were inspected for crop timing, herb lifecycle and container suitability. The source registry and field-level evidence are in `rhs-validation-audit.json`.

## Confirmed and corrected
- RHS distinguishes fast first-early potatoes from slower maincrop potatoes, and spring-sown from autumn-sown peas. Generic duration values for potatoes and peas were cleared rather than retained as pseudo-verified.
- Broccoli includes materially different harvest systems (calabrese versus purple-sprouting); its generic maturity range was cleared pending variant-specific evidence.
- Rosemary and thyme are evergreen and can be picked throughout the year; their harvest windows were changed to January–December.
- RHS explicitly documents basil seed propagation; planning propagation changed from generic indoor to seed.

## Not yet validated
**Spacing, sunlight-hour thresholds, per-plant yields, precise planting windows and most variant-specific guidance remain provisional for all crops.** The presence of an RHS URL in the audit does not mean every field of a crop is verified. No horticultural confidence upgrades have been made to unrelated fields.

## Remaining research programme
For each of the 26 crops, inspect an RHS crop-specific growing guide, extract planting/spacing/care/harvest advice with a citation and observation date, distinguish RHS-stated numbers from inferred geometry, and record method/cultivar exceptions. Cross-check high-impact quantitative fields against another UK source where possible. Only then update each source-linked field and introduce optimiser hard constraints.
