## 2024-05-23 - Debouncing Search Overlay Queries
**Learning:** In the `SearchOverlay` component, filtering content directly on every keystroke (`query`) blocks the main thread because the calculation of `categoryCounts` and `filteredItems` are synchronous and depend directly on the query state. This leads to input lag and UI stuttering on low-end devices.
**Action:** Debounced the search `query` value and replaced instances of `query` in heavy operations (like `categoryCounts`, `filteredItems` and complex UI logic) with `debouncedQuery`. This allows the input state to update instantly while deferring expensive operations to slightly later, making the UI feel smoother.

## 2024-05-24 - Pre-calculating Search Matches in SearchOverlay
**Learning:** In the `SearchOverlay` component, using `matchSearchQuery` separately inside `categoryCounts` loop and `searchAndRankItems` inside `filteredItems` causes the search relevance algorithm to run multiple times per keystroke for the exact same query, especially un-necessarily re-ranking items when switching tabs.
**Action:** Abstracted the initial heavy match (`searchAndRankItems(allItems)`) into a single memoized `allMatchingItems` array. The subsequent `categoryCounts` and `filteredItems` states simply read from or filter this pre-calculated array, completely eliminating redundant executions of the relevance algorithm.
