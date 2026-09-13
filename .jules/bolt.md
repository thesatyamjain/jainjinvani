## 2024-09-13 - Debouncing Expensive Client-Side Filtering
**Learning:** In a client-heavy React application with a large dataset (like the Jain Jinvani content inventory), performing complex bilingual/phonetic search filtering on every keystroke (`matchSearchQuery`) can severely block the main thread and cause typing lag.
**Action:** Implemented a standard `useDebounce` hook (300ms) to decouple the immediate input state from the expensive filtering operation, preserving UI responsiveness without adding third-party dependencies.
