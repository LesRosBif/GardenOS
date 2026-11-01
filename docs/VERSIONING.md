# GardenOS build version indicator

The top-right application header shows `v<package.json version> · <7-character commit SHA>`. Vite injects both constants at build time. GitHub Actions provides `GITHUB_SHA` automatically; local builds display `local`. Increase the semantic version in `package.json` for each release. The commit SHA changes on every new deployed source commit, making it easier to distinguish stale PWA/browser caches from fresh deployments.

Source/MRs: https://gitlab.com/mikehoward87/gardenos/-/merge_requests

Build/deployment: https://github.com/LesRosBif/GardenOS/actions/workflows/deploy.yml

Live: https://lesrosbif.github.io/GardenOS/
