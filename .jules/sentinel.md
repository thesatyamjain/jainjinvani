## 2024-05-15 - Hardcoded 2FA Secret Key
**Vulnerability:** Found a hardcoded 2FA Secret Key (`MASTER_2FA_SECRET = 'JINVANISACRED26A'`) directly inside the frontend codebase (`src/pages/AdminLogin.tsx`).
**Learning:** Hardcoded secrets in client-side code are fully exposed to users. Security mechanisms like 2FA rely on the secret remaining confidential between the server/authenticator and the user. Embedding it breaks the entire purpose of 2FA.
**Prevention:** 2FA secrets should be generated dynamically using secure random numbers (`window.crypto.getRandomValues`) during setup, and persisted locally (e.g., in `localStorage`) rather than being hardcoded in the repository. Avoid placing any sensitive keys or passwords inside the source code.
