## 2024-05-23 - Debouncing Search Overlay Queries
**Learning:** In the `SearchOverlay` component, filtering content directly on every keystroke (`query`) blocks the main thread because the calculation of `categoryCounts` and `filteredItems` are synchronous and depend directly on the query state. This leads to input lag and UI stuttering on low-end devices.
**Action:** Debounced the search `query` value and replaced instances of `query` in heavy operations (like `categoryCounts`, `filteredItems` and complex UI logic) with `debouncedQuery`. This allows the input state to update instantly while deferring expensive operations to slightly later, making the UI feel smoother.

## 2024-05-23 - Memoizing Search Result Rankings
**Learning:** In the `SearchOverlay` component, derived states like `categoryCounts` and `filteredItems` were separately recalculating search relevancy and ranking by calling `matchSearchQuery` and `searchAndRankItems` against the full dataset on every filter change. This resulted in O(N) redundant calculations which is slow.
**Action:** Lift the expensive `searchAndRankItems` calculation into a single `useMemo` block that generates `allRankedItems` whenever the query changes. Then compute `categoryCounts` and `filteredItems` directly from `allRankedItems` so category switching is a rapid filtering of a pre-scored array rather than a full recalculation.
