## 2023-10-24 - [Avoid Security Theater in UI Component Masking]
**Vulnerability:** Masking recovery codes directly in the UI instead of properly isolating the secret breaks the UI functionality (copy button copied asterisks instead of the secret).
**Learning:** Security UI fixes should never break core user functionality. Replacing hardcoded offline secrets with asterisks without providing a dynamic generation or secure retrieval mechanism constitutes "security theater".
**Prevention:** If an offline secret needs to be removed from a client bundle, replace it with dynamic generation and `localStorage` persistence, avoiding static hardcoding of plaintext.

## 2023-10-24 - [Secure Dynamic 2FA Secret Generation]
**Vulnerability:** The `MASTER_2FA_SECRET` for the admin TOTP was hardcoded globally as `JINVANISACRED26A`.
**Learning:** Hardcoded TOTP secrets completely defeat the purpose of 2FA. In client-only static apps, unique secrets must be generated locally using `window.crypto.getRandomValues()` and persisted via `localStorage` instead of being globally statically embedded.
**Prevention:** Implement `let MASTER_2FA_SECRET = localStorage.getItem('...') || generateSecureBase32()` during application bootstrap for zero-trust client environments.
