# v0.1 PWA Foundation

This milestone adds a responsive React/TypeScript/Vite application shell and five navigation workspaces. Today contains an introductory dashboard with zero-state cards. Other workspaces are placeholders, not functional garden planning features.

## Deployment

GitLab is canonical; GitLab CI/CD is disabled. Protected main is push-mirrored to GitHub. GitHub Actions runs tests, builds and deploys dist/ to GitHub Pages. Configure GitHub Settings > Pages > Build and deployment > GitHub Actions. Repository name and Vite base path are case-sensitive `GardenOS`; adjust `base`, PWA scope and start_url if the GitHub repository differs.

## Local development

Requires Node 24. Run `npm install`, `npm test`, `npm run build`, `npm run dev`. The first workflow uses `npm install` until a generated package-lock.json is committed; then switch to reproducible `npm ci` with npm cache.

## Next milestone

Implement IndexedDB/Dexie persistence, export/import and the bed editor. No persistence, crop catalogue, calendar sync or multi-device sync is implemented in v0.1.
