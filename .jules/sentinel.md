## 2024-05-14 - Vite Environment Variable Leak
**Vulnerability:** The VITE_ADMIN_PASSWORD was being read as a plaintext environment variable. In Vite, any environment variable prefixed with VITE_ is statically replaced with its value during the build process, thereby exposing the plaintext password to the public bundle.
**Learning:** Client-side bundles should never include plaintext passwords or secrets as environment variables, even if they are only used to verify an input on the client-side. The public bundler will expose them.
**Prevention:** Always hash the password and provide the hash as the environment variable (e.g., VITE_ADMIN_PASSWORD_HASH), then check if the hash of the user input matches the provided hash.

## 2024-05-24 - HTML Sanitization Bypass via content-masking elements
**Vulnerability:** The custom HTML sanitizer `src/utils/sanitizeHtml.ts` was vulnerable to Mutated XSS (mXSS). Elements such as `<template>`, `<noscript>`, and `<math>` could hide embedded dangerous tags (like `<script>`). Because standard DOM traversal via `querySelectorAll('*')` skips elements inside a `<template>`'s separate document fragment or within specific namespaces, these malicious payloads would bypass validation and later execute when serialized back into the DOM.
**Learning:** `DOMParser` behavior masks the contents of certain tags from regular tree queries. Traversing a parsed document fragment using just `querySelectorAll('*')` is insufficient for comprehensive sanitization.
**Prevention:** Always perform a pre-sanitization pass to query and completely remove known content-masking elements (`template`, `noscript`, `math`, `svg`, etc.) *before* running standard allowed-list iterations over the DOM tree.
