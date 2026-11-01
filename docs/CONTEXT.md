# GardenOS — Context and Decision Log
Last updated: 2026-11-01

## What this project is
A local-first food-growing planning and tracking PWA for a household of four, approximately 80 m² growing area, UK/Thames Valley conditions, planning for 2027. It supports garden geometry, crops, seasonal plans, actual growing events, weekly work, and eventual balanced optimisation.

## Confirmed decisions (authoritative)
- Project/repository name: **GardenOS** (earlier conversation called it GrowOS).
- Garden layout: individually named and positioned beds on a canvas.
- Resolution: 50 cm cells; planning granularity, not necessarily one plant per cell.
- Sunlight: low/moderate/high per bed, optional cell overrides.
- Optimisation: balanced across availability, demand, diversity, utilisation, suitability and workload.
- Architecture: local-first PWA, IndexedDB; **no authentication, cloud database or automatic cross-device sync**.
- Interchange: **XML** for full backups and ChatGPT-generated plan proposals; **ICS** for manual calendar import.
- Devices: full iPhone and iPad experiences; iPad uses space for side-by-side canvas, timeline and inspector.
- Deployment: GitLab source → GitHub mirror → GitHub Pages, following prior household PWA workflow.
- Three conceptual datasets: Knowledge, Plan, Actual; tasks are an operational projection.

## Explicit non-goals now
No Supabase, no Google Calendar OAuth, no server API, no real-time sync, no promise of complete food caloric self-sufficiency. Do not reintroduce these without a new product decision.

## Critical design caveats
- Each device has independent local state. A full XML import is a replacement, not a merge.
- Plan and Actual must remain separate; actual dates do not erase planned intent.
- Indoor propagation and bed occupancy differ.
- Crop companion claims are often weak; evidence quality must be recorded.
- 80 m² implies 320 cells only if all 80 m² is actual plantable bed area.
- UK growing windows are indicative and weather-dependent.
- App name is GardenOS even if older notes refer to GrowOS.

## Where to look first
PRD.md for product scope and acceptance, DESIGN.md for UX, TECHNICAL-PLAN.md for domain and XML/PWA contracts, IMPLEMENTATION.md for backlog and gates. Update this log whenever decisions change, and update the authoritative document too.

## Current repository state at documentation creation
New GitLab project with default README only; no application code, GitHub mirror or production deployment verified. The documentation merge request establishes the initial specification, not a working application.

## Next recommended action
Review and merge documentation; then start Phase 0 with a functioning PWA shell and local persistence, using the implementation plan as source of truth.
