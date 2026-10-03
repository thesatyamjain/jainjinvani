## 2026-10-03 - [Remove hardcoded 2FA secret]
**Vulnerability:** A hardcoded 2FA secret (`JINVANISACRED26A`) was found in the codebase.
**Learning:** Legacy systems often embed plaintext secrets into client-side code during initial setups. Removing this securely requires ensuring backward compatibility by safely disabling legacy flows instead of blocking existing active sessions.
**Prevention:** 2FA secrets should be generated securely per-instance via cryptographically safe functions (e.g. `crypto.getRandomValues`) on the client and stored strictly locally (via `localStorage` or `sessionStorage`), or fetched safely via environment variables for non-client environments.
