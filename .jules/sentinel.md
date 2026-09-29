## 2025-05-18 - [Hardcoded 2FA Fallback Secret]
**Vulnerability:** A hardcoded 2FA fallback secret ('JINVANISACRED26A') was used when a user's locally stored secret was missing but legacy 2FA was enabled.
**Learning:** Hardcoded 2FA secrets allow anyone inspecting the client-side bundle to generate valid TOTP codes, entirely compromising the second factor of authentication for impacted admin accounts.
**Prevention:** Never use hardcoded fallbacks for cryptographic secrets. When migrating from insecure legacy configurations, gracefully disable the security feature (e.g., removing the '2fa_enabled' flag) forcing the user to securely re-enroll, rather than compromising the entire authentication scheme.
