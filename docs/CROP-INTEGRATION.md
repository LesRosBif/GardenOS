# v0.3 Crop integration

Offline canonical crops and enriched planning profiles are read from the knowledge directory. Manual bed allocations persist in IndexedDB v2. Space-time overlap validation prevents concurrent plantings of the same cells. 50 cm cells are area units, not plant counts.

**Outstanding before full acceptance:** XML backups must include allocations; runtime JSON Schema validation and a spatial planting visualisation are still required. Do not consider cross-device restoration of plans implemented. Source-backed claims and provisional estimates must remain distinct.
