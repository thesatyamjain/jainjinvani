## 2023-10-27 - Running check command produces build artifacts
**Learning:** Running `pnpm run check` generates build artifacts in `build/` and `public/` directories that aren't gitignored.
**Action:** Be sure to unstage build artifacts after running checks and before submitting code to avoid noise in the commit.
