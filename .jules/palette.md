## 2024-05-19 - Redundant ARIA Labels on Text Buttons
**Learning:** Adding an `aria-label` to a button that already has identical visible text content (e.g., 'इतिहास साफ़ करें') is redundant and unnecessary for screen readers, as they will read the text content by default.
**Action/Prevention:** Only add `aria-label`s to icon-only buttons or buttons where the visible text is insufficient or unclear. Avoid duplicating visible text content in `aria-label`s.
