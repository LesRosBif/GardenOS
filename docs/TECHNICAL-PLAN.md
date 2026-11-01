# GardenOS — Technical Architecture and Contracts
Version 1.0 proposed · 2026-11-01

## Architectural decisions
**Frontend:** Vite, React, strict TypeScript, Tailwind, Zustand for transient UI state.
**Persistence:** Dexie over IndexedDB, browser-local. No user-level database, no Supabase, no auth.
**Offline:** Vite PWA/service worker caches versioned app assets; IndexedDB stores user state. Test Safari storage behaviour.
**Validation:** Zod for internal typed models and additional XML parsing/semantic validation.
**Dates:** date-fns and local ISO calendar dates for sowing/harvest; do not let timezone conversion shift day boundaries.
**Testing:** Vitest for pure domain rules, Playwright for E2E and responsive flows, real iOS/iPadOS Safari smoke tests.
**Hosting:** static GitHub Pages from GitHub Actions; GitLab source repository and protected branch mirror.

## Modules
`src/domain/knowledge`: crop definitions, variety overrides, evidence metadata.
`src/domain/garden`: beds, grid geometry, cell sun overrides.
`src/domain/planning`: allocations, timelines, occupancy, succession.
`src/domain/rules`: hard constraints, advisory warnings, scoring.
`src/domain/tracking`: immutable-ish growing events, harvests, task completion.
`src/domain/calendar`: task derivation, RFC 5545 serialization.
`src/data`: Dexie schema, migrations, repositories, snapshots.
`src/import-export`: XML schemas, parsers, validators, serializers, migration registry.

## Entity model
Use UUID identifiers, stable across exports. Every user-editable record has createdAt, updatedAt, revision.
- Garden(id, name, region, timezone, cellSizeCm=50)
- Bed(id, gardenId, name, type, widthCm, lengthCm, originX, originY, rotationQuarterTurns, sunlight, archivedAt?)
- CellSunOverride(bedId, x, y, sunlight)
- Crop(id, canonicalName, category, family, requirements, provenance)
- Variety(id, cropId, name, overrides, provenance)
- CropRelationship(cropA, cropB, type, strength, evidence, notes)
- Plan(id, gardenId, year, title, status)
- Allocation(id, planId, bedId, cropId, varietyId?, cells[], plannedSow?, plannedTransplant?, plannedRemoval?, plannedHarvestStart?, plannedHarvestEnd?, sowingMethod, plantCount?, successionGroupId?, status)
- GrowingEvent(id, allocationId, kind, date, quantity?, unit?, notes?)
- Task(id, allocationId?, bedId?, kind, dueDate, status, completedDate?, source, notes?)
- DemandTarget(id, cropId, quantity, unit, frequency)
- ExportRecord(id, exportedAt, schemaVersion, snapshotHash?) [local only]

## Spatial invariants
Bed dimensions must be positive integer multiples of cellSizeCm in MVP. Cell coordinates are integers within bed bounds; garden coordinates are integer 50 cm units. Rotation is 0/90/180/270 degrees. Bed rotation does not mutate internal cell identifiers. Bed overlap triggers validation. Plant footprint and density are crop-level constraints, not automatically equivalent to one plant per cell.

## Temporal invariants
Indoor propagation does not consume outdoor bed cells. Outdoor occupancy starts at direct sow or transplant and ends at removal. Harvest window may be narrower or wider than occupancy. Stored produce has a separate availability period. Overlap is evaluated by interval intersection, with explicit exceptions for validated intercropping. Missing dates are unknown, not zero. Planned and actual dates are separate fields/events.

## Knowledge strategy
Seed curated, region-tagged UK crop knowledge with explicit source/provenance, confidence and lastReviewed. Separate generic crop lifecycle guidance from variety overrides. Avoid unsupported numerical precision. Rotation is primarily family-based, advisory by default. Companion claims have evidence confidence; no hard exclusions without robust justification. Store all crop catalog content offline.

## Rules API
`evaluateAllocation(candidate, context): {blockers, warnings, scoreBreakdown}`
`getOccupancy(bedId, dateRange): CellOccupancy[]`
`suggestCandidates(bedCells, dateWindow, demand): RankedSuggestion[]`
`deriveTasks(plan, actualEvents, dateRange): TaskProjection[]`
`estimateYield(allocation): {low?, expected?, high?, unit, confidence}`
Pure, deterministic functions; no hidden network calls. Candidate feasibility precedes weighted scoring. Initial weights: availability .25, demand .20, diversity .15, utilisation .15, suitability .15, workload .10. Score only on comparable, grounded inputs; expose missing-data caveats.

## XML interchange
Two distinct root elements: `<GrowOSBackup schemaVersion="1.0">` and `<GrowOSPlan schemaVersion="1.0">`. Namespaces optional in initial version but schema must be unambiguous. UTF-8, ISO dates, decimal numeric values with explicit units, stable IDs, no executable markup. Define XSD and example fixtures before implementing import. XML parser must disable external entities/DTDs, reject malformed or oversized files, validate schema version, IDs, references, date windows, cell bounds and duplicate IDs. Never parse imported content as HTML.

Example **illustrative proposal** (final XSD to govern):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<GrowOSPlan schemaVersion="1.0" proposalId="2027-spring-v1" year="2027">
  <Allocation id="alloc-carrot-01" bedId="bed-01" cropId="carrot" sowingMethod="direct">
    <Cells><Cell x="0" y="0"/><Cell x="1" y="0"/></Cells>
    <Schedule sow="2027-03-20" harvestStart="2027-06-15" harvestEnd="2027-07-15" removal="2027-07-15"/>
  </Allocation>
</GrowOSPlan>
```
This is a conceptual fixture, not a certified validated export. Stable crop IDs need an explicit catalog ID registry and version pinning. ChatGPT-generated plans must be previewed and validated by the app.

**Backup import:** parse → structural validation → semantic validation → compare counts/revisions → preview → offer local backup → confirm atomic replacement transaction. Unknown future versions fail safely. **Proposal import:** create draft allocations only; never replace actual events. Full import is replacement, not cross-device merge. Export date and snapshot checksum should be displayed. Keep migration tests for older supported schema versions.

## ICS
Use RFC 5545 with CRLF, escaping and folded lines, UID stable per task, DTSTART as DATE for all-day tasks, DTSTAMP, SUMMARY, DESCRIPTION, and optional location/bed reference. Avoid claiming Google Calendar will deduplicate every re-import; users should import to a dedicated calendar and review duplicates. ICS is manual export, not sync.

## PWA
Manifest includes name, short_name, icons (192/512 and maskable), display standalone, theme/background, start_url and scope matching GitHub Pages base path. Service worker precaches hashed assets and handles updates carefully. Test iOS home-screen install, offline cold start after first successful visit, storage persistence, device orientation and split-view. Do not cache secrets; there are none.

## Security and resilience
CSP where practical, strict XML parser, no remote scripts, safe file handling, import size limit, no analytics by default. No backend means no remote recovery; local storage can be cleared or evicted. Surface Last backup and backup reminders. Use transactional IndexedDB migrations and export round-trip tests. No false assertion of cloud sync.

## Testing matrix
Unit: bed geometry, rotations, overlap, temporal succession, indoor propagation, intercropping constraints, task generation, scoring, harvest estimates.
Property/fixtures: XML round-trip, malformed XML, unsupported versions, duplicate IDs, invalid cell refs, migration and atomic rollback.
E2E: garden CRUD, plan allocation, tracking, XML export/import, ICS download, offline reload, PWA update.
Devices: iPhone portrait/landscape, iPad portrait/landscape/split-view, desktop Safari/Chrome; physical Safari verification before release.

## Repository layout
```
src/app
src/components
src/features/{today,garden,planner,crops,tracking,calendar}
src/domain/{knowledge,garden,planning,rules,tracking,calendar}
src/data
src/import-export
src/styles
public/icons
docs
tests/{unit,e2e,fixtures}
.github/workflows/deploy.yml
.gitlab-ci.yml
```

## CI/CD design
GitLab MR pipeline: install (lockfile), lint, typecheck, unit, build, E2E smoke. Protected main is mirrored to GitHub using a scoped credential stored as masked/protected GitLab variable. GitHub Actions on main: Node 24, install, build, deploy Pages with GitHub OIDC permissions. Vite base path `/gardenos/` for project Pages unless custom domain. Verify branch protection and avoid recursive bidirectional mirrors. No repository or hosting integration has been configured yet.
