## 2024-05-20 - [Hardcoded Recovery Codes Exposed in UI Component]
**Vulnerability:** Plaintext administrator recovery codes were hardcoded directly in the client-side `AdminLogin.tsx` bundle, exposing them to any user inspecting the application source.
**Learning:** Even placeholder or static fallback UI elements must never contain realistic-looking or actual cryptographic secrets/recovery codes. Client-side code is fully transparent to end-users.
**Prevention:** Always use masked dummy values (e.g., `JIN-****-****`) for static UI examples of secrets, and fetch real recovery options securely via an authenticated backend channel if needed, never bundling them into the client.
