## 2024-05-26 - Audio Player Accessibility
**Learning:** Found that `<motion.button>` elements mapped strictly to UI icons (like Play/Pause or Skips) in the persistent `AudioPlayer` lacked explicit programmatic `aria-label`s, rendering them ambiguous to screen reader software since it only relied on tooltip `title` props.
**Action:** Consistently pair localized `<button title="X">` attributes with equivalent localized `aria-label="X"` strings across complex interactive media controls for seamless screen-reader access.
