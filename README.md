# GardenOS

Local-first household food-growing planner for the 2027 season. Designed as an installable iPhone and iPad PWA.

**Status:** specification and architecture phase. No application code has been implemented.

## Product principles
- Plan roughly 80 m² of growing area as individually positioned beds, using 50 cm planning cells.
- Optimise for year-round availability, variety, household preferences and sustainable workload—not total caloric self-sufficiency.
- Separate crop knowledge, intended planting plans, and actual growing events.
- Keep all user data on-device in IndexedDB; use versioned XML to move full snapshots between devices.
- Export calendar work as ICS for manual import into a shared calendar.
- GitLab is the development source; GitHub is the eventual deployment mirror and GitHub Pages host.

## Authoritative documents
1. [Product requirements](docs/PRD.md)
2. [UX and interaction design](docs/DESIGN.md)
3. [Technical architecture and data contracts](docs/TECHNICAL-PLAN.md)
4. [Delivery plan](docs/IMPLEMENTATION.md)
5. [Decision log and development context](docs/CONTEXT.md)

## Key caveat
Devices **do not synchronise automatically**. Importing a full XML backup replaces local state after preview and confirmation. Always export a backup before replacement.

## Getting started
Review the documentation merge request, agree on open questions, then scaffold the Vite/React/TypeScript application. The implementation plan defines build and test gates.
