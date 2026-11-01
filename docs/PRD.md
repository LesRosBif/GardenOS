# GardenOS — Product Requirements Document
Version 1.0 (proposed) · 2026-11-01 · Status: review

## Vision
Enable a family of four to grow a meaningful, reliable share of their vegetables, herbs and some fruit from approximately 80 m² of plantable garden area, with food available through as much of the year as practical. This is not a claim of full caloric self-sufficiency.

## Users and constraints
Two adults use separate iPhones and potentially an iPad. No login or backend. Each installation owns its own local state; XML export/import is the deliberate manual handoff. The garden is in the Thames Valley, UK; UK-specific seasons and frost uncertainty matter. Start planning the 2027 season.

## Goals and measures
- Create and maintain a faithful spatial model of the growing garden.
- Plan successive and concurrent crops, avoiding conflicts.
- Translate plans into weekly, actionable gardening work.
- Record actual growing activity and harvested quantities.
- Improve year-round availability, variety, household demand coverage and workload balance.
- Preserve data through validated, portable XML backups.
Success measures: a 2027 plan covering the defined beds; all planned plantings have traceable allocations; weekly tasks can be completed; full XML export/import preserves records exactly; ICS opens in calendar software.

## Core domain concepts
**Knowledge**: crop, variety, growing requirements, season windows, expected yield, crop family and evidence-qualified compatibility.
**Plan**: beds, grid cells, annual crop allocations, planned sow/transplant/harvest windows, succession groups and task projections.
**Actual**: sowing, germination, transplant, harvest, crop failure, removal, notes and completed work. Planned dates must not be overwritten by actual dates.
**Operational**: tasks generated from plans and actuals, manual tasks, completion status and export history.

## Functional requirements
### FR-01 Garden layout
Create multiple named rectangular beds; dimensions in 50 cm increments in initial release; place/rotate them on a snap-to-grid garden canvas. Persist bed dimensions, coordinates, rotation, type and notes. Garden canvas positions are independent of internal cell coordinates. Validate nonzero dimensions and overlapping beds; show warning rather than silently moving them. Beds may be archived, preserving history.

### FR-02 Sunlight
Each bed has low/moderate/high sunlight. Individual cells may override this setting. Clearly display effective sunlight and distinguish manually entered ratings from any future measured data.

### FR-03 Crop knowledge
Browse/search vegetables, fruit and herbs. Distinguish crop species from varieties. Record sowing indoors/outdoors, transplant windows, days to germination, bed occupancy, harvest windows, spacing/plant footprint, sun needs, crop family, rotation and expected yield range. Record data source, region, review date and confidence; unknown fields remain unknown. Seed an initial curated UK crop catalog, prioritising ~60 commonly grown crops. Do not invent precise variety guidance.

### FR-04 Annual planning
Plan by bed, cell and month. Each allocation has crop/variety, occupied cells, intended sowing method, planned sow/transplant/removal and harvest windows, plant count, succession group, status and notes. Multiple allocations can occupy the same cell at different times; simultaneous occupancy requires explicit intercropping compatibility and capacity checks. Indoor propagation does not occupy outdoor bed cells. A plan can be duplicated for another year without copying actual events.

### FR-05 Conflict detection
Flag impossible temporal overlap, insufficient footprint, inappropriate sunlight, unsuitable sowing windows, rotation risks and high workload peaks. Distinguish hard blockers from advisory warnings. Every warning must explain why and link to affected allocations. Unknown crop data should cause a warning, not fabricated certainty.

### FR-06 Succession and recommendations
Suggest candidate crops for empty space and upcoming windows, including staggered sowings to smooth harvest. Balanced objective: year-round supply 25%, household demand 20%, crop diversity 15%, space utilisation 15%, growing suitability 15%, workload balance 10%. Hard constraints are evaluated first; scores and trade-offs are explainable. Weights are defaults to tune, not scientific constants. Recommendations require user acceptance.

### FR-07 Tracking
Log dated sowing, germination, transplant, pruning, feeding, watering, crop failure, harvest and removal events. Capture quantity/unit for harvest, optionally notes. Update projected future work from actual dates without rewriting the original plan. Allow corrections with clear history.

### FR-08 Weekly work
Generate work from planned and actual crop milestones. View by week and bed; complete, postpone, skip or add tasks. Tasks need stable identifiers and provenance (generated/manual). Rescheduling one task must not unexpectedly duplicate calendar exports.

### FR-09 XML data portability
Export complete versioned snapshots of garden configuration, local knowledge overrides, plans, actuals and tasks. Import through parse → schema validation → referential validation → conflict preview → backup-before-replace → confirm. Reject unsupported future schema versions safely. Support XML plan proposals separately; proposal import is non-destructive and never overwrites actual history without explicit operation. File transfer between devices is manual; no merge or background sync in initial release.

### FR-10 Calendar
Export selected date range of work tasks as an RFC 5545 ICS file with stable UIDs, summary, description, date, and bed reference. User manually imports it to a shared Google Calendar. No claim of two-way sync; repeat imports can behave differently by calendar provider, so include export guidance and stable IDs.

### FR-11 Household demand and yield
Configure preferred crops and illustrative weekly consumption targets; calculate coverage estimates using uncertainty ranges where evidence permits. Distinguish harvest availability from stored produce availability. Never represent estimated yield as guaranteed.

### FR-12 PWA
Installable standalone PWA, offline usable with cached assets and local data, safe upgrade handling, responsive on iPhone portrait/landscape and iPad portrait/landscape/split view. Touch-friendly controls, visible backup status and recovery instructions.

## Priority
**P0 / MVP**: garden editor, bed sunlight, curated knowledge, allocations and month timeline, basic conflict checks, actual events, weekly tasks, XML backup, ICS export, responsive PWA.
**P1**: proposal XML import, succession suggestions, household demand, yield estimates, cell-level sun overrides and improved evidence model.
**P2**: weather, photo timelines, advanced optimiser, storage/preservation inventory, irrigation intelligence, multi-device sync if later desired.

## User journeys and acceptance
1. **Set up garden**: create six 2 m × 1 m beds, arrange them, set sunlight; reopen offline with unchanged geometry.
2. **Plan spring**: allocate carrots to cells March–June, followed by a compatible autumn crop; timeline reflects two cycles and no false overlap.
3. **Plan propagation**: start tomatoes indoors while outdoor cells remain occupied; outdoor occupancy begins at transplant.
4. **Log actuals**: record a delayed sowing; forecast tasks update while original planned date remains available.
5. **Weekly execution**: see tasks for the coming seven days, filter by bed, mark completed and persist after restart.
6. **Move device**: export XML on iPad, import on iPhone, preview replacement, verify same garden, plans and history.
7. **Calendar**: export ICS for a selected month; manually import and see dated work items.

## Nonfunctional requirements
- No backend, accounts, analytics or external API dependency for core functions.
- Data integrity and deterministic rule execution are higher priority than visual animation.
- Handle 320+ cells, several years of plans and thousands of events smoothly on recent iPhones/iPads.
- WCAG 2.2 AA-inspired contrast, focus, labels and touch target sizing; no hover-only actions.
- Accessible export, recovery, and explicit warnings about browser storage loss.
- Test on Safari/iOS and iPadOS, not only desktop emulation.

## Out of scope / risks
Automatic device sync, live Google Calendar integration, guaranteed crop yields, fully autonomous agricultural advice, irregular bed geometry and complex companion-planting folklore are excluded initially. Crop timing depends on microclimate, variety, weather and management; expose uncertainty.

## Open questions
Confirm initial bed inventory and actual 80 m² allocation; whether paths are included; desired crop shortlist; whether indoor propagation area/greenhouse exists; whether all XML imports should replace full state or offer selective import later.
