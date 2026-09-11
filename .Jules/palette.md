## 2024-05-18 - Missing ARIA Labels on Icon-only Buttons
**Learning:** Many interactive icon-only buttons in the application rely solely on `title` attributes, lacking `aria-label`s. This can hinder accessibility for users employing screen readers, as `title` is not consistently announced across all devices and assistive technologies.
**Action:** Always ensure that icon-only interactive elements (like buttons) include an explicit, descriptive `aria-label` to provide clear, accessible names.
