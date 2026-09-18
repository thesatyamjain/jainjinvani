

## 2026-09-18 - Debounce Main-Thread Blocking Search Operations
**Learning:** The search operation iteratively scanned thousands of items on every keystroke, which recalculates fuzzy string scores entirely synchronously, starving the main thread during typing on slow devices.
**Action:** Introduced a `useDebounce` hook directly within the search component. Debouncing the input query delays the expensive map-reduce loops (like scoring and highlighting algorithms) from firing off on every intermediate keypress, improving UI responsiveness by maintaining a steady framerate.
