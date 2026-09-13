## 2024-03-24 - Screen Reader Support for Audio Player
**Learning:** Icon-only buttons in complex media components (like AudioPlayer) need dynamic, context-aware `aria-label` attributes to ensure they are properly narrated by screen readers (e.g., dynamically switching between "Play" and "Pause" based on state).
**Action:** Always verify that interactive icon components in media elements have state-driven ARIA attributes applied.
