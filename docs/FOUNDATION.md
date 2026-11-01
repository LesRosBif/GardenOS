# v0.1 PWA Foundation

This milestone adds the responsive React/TypeScript/Vite application shell and the five navigation workspaces. Today contains an introductory dashboard with zero-state cards. Other workspaces are deliberately placeholders, not functional garden planning features.

## Deployment

GitLab is the canonical source; GitLab CI/CD is disabled. Protected main is push-mirrored to GitHub. GitHub Actions runs tests, builds the app and deploys dist/ to GitHub Pages. Configure GitHub Settings > Pages > Build and deployment > GitHub Actions. Repository name and Vite base path are currently case-sensitive `GardenOS`; change `base`, PWA scope and start_url if the GitHub repository differs.

## Local development

Requires Node 24. Run `npm install`, `npm test`, `npm run build`, `npm run dev`. Commit the generated package-lock.json before merging: the workflow uses `npm ci` and deliberately requires a lockfile.

## Next milestone

Implement IndexedDB/Dexie persistence, export/import and the bed editor. No persistence, crop catalogue, calendar sync, or multi-device sync is implemented in v0.1.
