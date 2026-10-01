## 2024-10-01 - Sentinel Initialization

## 2024-10-01 - Remove Hardcoded 2FA Secret
**Vulnerability:** A master 2FA secret key ('JINVANISACRED26A') was hardcoded directly into `src/pages/AdminLogin.tsx`. This meant any user with access to the source code could potentially bypass the 2FA protection for the admin dashboard.
**Learning:** Hardcoded secrets in client-side bundles are trivially extractable and compromise the security of the application. The architecture of this app relies on client-side state for admin configurations.
**Prevention:** Replaced the hardcoded string with dynamic secure generation using `window.crypto.getRandomValues()` and persisted the generated secret in `localStorage`. Also added support for overriding the secret via the environment variable `VITE_2FA_SECRET` if needed.
