## 2025-03-09 - Hardcoded Plaintext Recovery Codes in Frontend

**Vulnerability:** The Admin panel's frontend UI (`src/pages/AdminLogin.tsx`) had plaintext emergency recovery backup codes hardcoded within the React component logic designed to display them in the Admin guide. Although intended for the Admin's reference, shipping these directly in the client-side JavaScript bundle completely breaks the security model of offline fallback secrets since any user inspecting the bundle could discover them and bypass the 2FA layer.

**Learning:** "Offline" secrets must never be embedded or rendered explicitly in a static client-side codebase. Cryptographic hashes stored in the source code securely verify user input, but raw values meant for the administrator's eyes only must be provided out-of-band, generated dynamically, or stored in a completely secure, isolated environment (like a server backend or `.env` variable that is NOT exposed via `VITE_` prefix).

**Prevention:** Ensure that references to secrets in the UI are strictly masked placeholders (like `JIN-****-****`). Rely solely on matching against securely hashed counterparts (e.g., via SHA-256) for any static-client authentication mechanism.
