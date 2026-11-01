# GardenOS — UX / Interaction Design
Version 1.0 proposed · 2026-11-01

## Design thesis
The phone is a **garden companion**; the iPad is a **planning workstation**. Both expose the same underlying functions, but navigation and density differ. Never merely scale a phone screen to tablet width.

## Information architecture
Five primary destinations: **Today**, **Garden**, **Plan**, **Crops**, **More**. Tracking is accessible from Today, a bed inspector and a crop allocation. More includes XML import/export, ICS export, settings and backup status.

## Phone (iPhone)
- Portrait-first bottom navigation with clear labels and large touch targets.
- Today opens to next-seven-days jobs, grouped by day, with one-tap completion and prominent Log Harvest / Log Sowing actions.
- Garden displays zoomable/pannable canvas with bed labels and sunlight indicator. Tap bed to open a full-screen or bottom-sheet inspector. Do not depend on drag handles smaller than a finger.
- Plan shows one selected bed at a time, month selector and vertically stacked allocations; switching to yearly timeline is available with horizontal scrolling.
- Crops uses search and filters (vegetable/fruit/herb, sunlight, season).
- Data actions use native file picker/share sheet where supported; provide download fallback.
- Provide an explicit mode switch between canvas navigation and bed repositioning to prevent accidental edits.

## iPad
- Landscape planning workspace with left navigation rail, central canvas/timeline, right contextual inspector.
- Portrait uses collapsible inspector; split view degrades to single-column layout based on viewport width, not device name.
- Support touch drag/drop for beds and crop allocations, pinch zoom, keyboard navigation, and pointer hover as enhancement only.
- Garden and timeline may be visible simultaneously on wide layouts; changing selection updates inspector without losing scroll/zoom.
- Allow multi-cell selection via touch-first selection mode; offer accessible numeric coordinate entry alternative.

## Screens
### Today
Current week, overdue jobs, sow/transplant/harvest actions, completion feedback, next harvest window. Offline indicator not needed for core local operations; show backup recency instead.
### Garden
Canvas with optional 50 cm visual grid; bed cards positioned using integer coordinates. Legend for sunlight. Bed editor: name, type, dimensions, x/y, rotation, sunlight, notes. Cell override editing under Advanced.
### Bed inspector
Tabs: Now / Year / History. Now shows current allocations; Year shows month occupancy; History shows actual events and yields. CTA: Add crop.
### Plan
Year selector, crop search, available-bed suggestions, drag/click allocation, sow/transplant/harvest dates, conflict panel. Time and space are linked: selecting a month highlights occupancy on canvas.
### Crops
Crop cards with lifecycle, spacing, sun, UK season windows, source confidence. Variety override where available.
### Tracking
Quick actions for sow, transplant, harvest and remove. Preselect bed and allocation when launched from garden.
### Data & calendar
Last export date, Export backup XML, Import backup XML, Import proposed plan XML, Export work calendar ICS. Before replacement, show counts and summary of affected data.

## Visual language
Warm, practical gardening palette (deep green, sage, soil neutrals) with strong contrast. Crop type distinguished by text/icons as well as colour. Use restrained decoration, no tiny text in actual product. Clear empty states and accessible labels. Dates shown in UK format, stored as ISO dates. Support reduced motion and system text scaling.

## Interaction and layout breakpoints
Use responsive containers rather than device sniffing. Suggested widths: compact <600 CSS px; medium 600–1023; wide >=1024. Test 320px, 375px, 390px, 768px, 820px, 1024px, 1194px, and iPad split-view widths. Safe-area insets on all edges. Avoid fixed heights that hide controls when keyboard opens.

## State feedback
- Autosave local edits and show Saved / Saving / Failed.
- Conflict severity: blocker, warning, information; explain cause and resolution.
- Destructive actions: preview + confirm; XML import must offer pre-import export.
- Empty garden: guided Create first bed; empty plan: Add crop / Import plan.
- On app update, never discard unsaved edits; prompt to reload only when safe.

## Design acceptance
No essential operation requires hover. On iPhone, log a harvest in <=4 user actions after selecting a bed. On iPad, select a bed and inspect its full-year occupancy without navigating away. Garden canvas remains usable with 20+ beds. Keyboard and screen-reader alternatives exist for drag actions.
