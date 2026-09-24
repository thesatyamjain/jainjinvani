## 2024-09-24 - Screen Reader Support for Media Controls
**Learning:** Icon-only media controls (like those in AudioPlayer) often use `title` attributes for tooltips, but these are inconsistently announced by screen readers depending on the user's verbosity settings, making the interface inaccessible for vision-impaired users.
**Action:** Always complement `title` attributes with explicit `aria-label`s on icon-only interactive elements (both `<button>` and `<motion.button>`) across the application to ensure robust accessibility.
