# GardenOS knowledge catalogue v1

This package contains **26 canonical crop records** representing the requested list (the previous conversation incorrectly counted 31). All values are provisional southern-England planning defaults, **not source-verified cultivar recommendations**. Never silently treat the low-confidence yield values as guaranteed.

## Integration contract
- Load `knowledge/crops.json` as static offline app data; validate against `knowledge/crop.schema.json`.
- Resolve a crop ID on allocations. Preserve crop IDs across releases and XML snapshots.
- Convert spacing to approximate planting capacity only after accounting for bed geometry, rows, support and growth habit. A 50 cm cell is not one plant.
- The two month integers denote an inclusive seasonal window; wrap flags indicate a window crossing New Year.
- Permanent crops must not be automatically removed at harvest. Indoor sowing does not occupy outdoor beds.
- Missing fields mean **unknown**; show advisory warnings. Do not manufacture cultivar-specific maturity, frost or companion rules.
- Yield ranges are illustrative per-plant estimates, not calibrated forecasts. Citrus, fig, rhubarb and other perennials require establishment-age and container-size modelling before meaningful estimates.

## Required v1.1 enrichment
Cultivar-specific variants for bean (broad/French/runner), broccoli (calabrese/purple sprouting), cabbage (season), cucumber (greenhouse/outdoor), potato (earlies/maincrop), tomato (cordon/bush), raspberry (summer/autumn), lettuce (cut-and-come-again/head). Add germination temperature/days, sow depth, transplant/hardening triggers, growth-stage footprint, mature height, root depth, frost tolerance, harvest and storage durations, pests, rotation and evidence-ranked companions, feeding/watering/pruning tasks, yield by growing method, and source URLs per field.

## Quality gates
- Unique stable IDs, valid month windows, positive spacing and explicit units.
- Every crop has category, family, light, soil, footprint proxy, season and provenance.
- No high-confidence claims until independently checked against UK horticultural sources (RHS and cultivar-specific suppliers).
- Future schemas must migrate without discarding local plans or user overrides.
