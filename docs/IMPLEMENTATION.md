# GardenOS — Implementation Plan
Version 1.0 proposed · 2026-11-01

## Delivery approach
Implement vertical slices with running builds and tests. GitLab is authoritative source; GitHub receives main mirror and hosts Pages. Do not implement a backend.

### Phase 0 — Foundation
Tasks: replace GitLab boilerplate README; scaffold Vite/React/TypeScript/Tailwind; configure strict TS, lint, Vitest, Playwright; installable manifest and service worker; responsive shell with Today/Garden/Plan/Crops/More; Dexie schema v1; local settings and backup recency.
Gate: builds and runs offline after first visit, opens at iPhone and iPad widths, local state persists after reload.

### Phase 1 — Garden model
Tasks: garden/bed CRUD; 50 cm integer coordinates; 90-degree rotations; snap-to-grid; overlap validation; sunlight bed rating and cell overrides; bed inspector; mobile edit mode; tablet drag controls.
Gate: create six 2m x 1m beds, move/edit/reopen them, preserve geometry and IDs, use keyboard/touch alternatives.

### Phase 2 — Knowledge and planning
Tasks: curated UK catalog with provenance; crop/variety UI; plan/year model; multi-cell allocations; propagation vs outdoor occupancy; month timeline; basic temporal/space/sunlight validation; succession groups.
Gate: model carrots followed by autumn greens in same cells; indoor tomato propagation coexists with preceding outdoor crop; warnings are explainable.

### Phase 3 — Tracking and calendar
Tasks: growing event log, harvest quantities, task derivation and completion, week view, rescheduling, ICS export.
Gate: record planned vs actual sowing separately; future task dates adapt; exported ICS contains stable IDs and valid dates.

### Phase 4 — XML interchange and recommendations
Basic full XML export should land in Phase 0/1 to protect early data. Complete full backup/restore, proposal XML XSD and import preview, schema migration fixtures, non-destructive proposed-plan import; candidate ranking and staggered sowing suggestions.
Gate: exact semantic round-trip for complete household snapshot, safe rollback on malformed import, explainable crop recommendations.

### Phase 5 — Production readiness
Accessibility, iOS/iPadOS Safari device testing, offline update resilience, performance with 320+ cells and multiple seasons, security review of XML parser, backup/recovery walkthrough, release notes.
Gate: all P0 journeys in PRD pass, successful GitLab pipeline and GitHub Pages deploy.

## Initial GitLab issue backlog
1. Bootstrap Vite/React/TS/Tailwind and PWA manifest.
2. Define domain model, IDs, dates, Dexie schema and migration strategy.
3. Build responsive phone/tablet navigation and Today shell.
4. Build garden canvas with bed placement and 50 cm snap.
5. Build bed editor and sunlight configuration.
6. Establish XML backup contract and round-trip fixtures.
7. Curate initial UK crop catalog and provenance.
8. Build allocation editor and yearly occupancy timeline.
9. Implement spatial/temporal conflict engine.
10. Implement actual events and harvest logging.
11. Implement task derivation and weekly view.
12. Implement ICS export.
13. Implement proposal XML import preview.
14. Implement balanced recommendation ranking.
15. Configure GitLab CI and protected GitHub mirror.
16. Configure GitHub Actions / Pages deployment.
17. Run iPhone/iPad Safari QA and accessibility checks.

## Milestones
M0: installable PWA + offline persistence.
M1: editable spatial garden.
M2: complete 2027 planting plan.
M3: operational tracking and calendar.
M4: portable XML and explainable suggestions.
M5: reliable production release.

## Branching and release
Feature branches → GitLab merge requests → protected main → one-way mirror to GitHub → GitHub Actions Pages. Documentation changes use the same review process. Tag releases `v0.x.y`; retain schema version separately from app version.

## Definition of done for each feature
Typed models and validation; unit tests for domain behaviour; responsive phone/tablet design; offline functionality where applicable; accessibility labels; error and empty states; no data loss; docs updated. For imports, include invalid fixtures and atomic rollback tests.

## External setup required
GitHub repository creation, GitLab mirror credential, GitHub Pages configuration, and device testing require explicit setup and verification. None is assumed complete.
