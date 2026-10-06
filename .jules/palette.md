## 2026-10-06 - Committing artifacts
**Learning:** Running `pnpm run check` or `pnpm run build` will generate output artifacts in the `build/` and `public/` directories that are not fully gitignored.
**Action/Prevention:** Be extremely careful to omit these generated files when committing manual code changes. Use `git rm --cached` or `git restore --staged` if they accidentally get staged.
