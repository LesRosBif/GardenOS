# v0.3 follow-up: complete portable planting backups

The XML backup format now uses `GardenOSBackup version="2"`, with `Beds` and `Allocations` sections. Allocations contain stable crop IDs, bed references, cell rectangles, and ISO date windows. The exporter validates the complete snapshot. The importer validates all references and space-time collisions before changing data, and shows bed and planting counts for confirmation.

Legacy version 1 beds-only XML is accepted, with an explicit warning that restoring it clears existing plantings. Restoration replaces both IndexedDB tables in one transaction, so a failed restore rolls back.

Tests cover XML escaping, v2 round trips, v1 compatibility, invalid crop IDs, concurrent overlap and succession. This MR does not add interactive planting overlays or a complete JSON Schema runtime validator; those remain follow-up items. The knowledge integrity suite continues to validate the bundled canonical and enriched crop datasets.
