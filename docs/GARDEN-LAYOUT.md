# v0.2 Garden Layout

GardenOS now persists beds in IndexedDB using Dexie. The 10 × 10 m canvas uses 50 cm grid increments. Each bed has a name, position, dimensions and sunlight category. Beds cannot overlap or extend beyond the canvas. XML exports are complete local layout backups; imports require explicit confirmation and replace existing beds transactionally. Data is local to the browser/device, not synchronised. The canvas and maximum area are initial defaults, not a complete model of the user's whole garden.

## Limitations

Beds are selected and edited through the inspector, not drag-resized. The garden is currently fixed to 10 × 10 m. There is no undo history, no automated backup, and no crop planting yet. Export before clearing browser storage or changing devices. Import is restricted to version 1 GardenOSBackup XML with at most 500 beds. The XML schema will evolve.
