## 2024-05-23 - Debouncing Search Overlay Queries
**Learning:** In the `SearchOverlay` component, filtering content directly on every keystroke (`query`) blocks the main thread because the calculation of `categoryCounts` and `filteredItems` are synchronous and depend directly on the query state. This leads to input lag and UI stuttering on low-end devices.
**Action:** Debounced the search `query` value and replaced instances of `query` in heavy operations (like `categoryCounts`, `filteredItems` and complex UI logic) with `debouncedQuery`. This allows the input state to update instantly while deferring expensive operations to slightly later, making the UI feel smoother.

## 2024-10-10 - Preventing Redundant Relevance Recalculations
**Learning:** In `SearchOverlay.tsx`, filtering and category counting individually call expensive relevance utilities (`calculateRelevanceScore` or `matchSearchQuery`) over the entire inventory. This creates an O(N) recalculation overhead on every query or tab change.
**Action/Prevention:** Compute the ranked results once per query using a `useMemo` block around `searchAndRankItems`, then derive sub-states like `categoryCounts` and `filteredItems` directly from that memoized list to eliminate redundant iterations and improve performance.
