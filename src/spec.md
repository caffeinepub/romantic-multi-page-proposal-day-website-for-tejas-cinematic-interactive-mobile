# Specification

## Summary
**Goal:** Swap the final romantic image shown at the bottom of the /forever page with a new romantic image while keeping the existing styling.

**Planned changes:**
- Add the new romantic image file under `frontend/public/assets/generated`.
- Update the /forever page to reference the new static asset for the final image section.
- Keep the final image container styling unchanged (rounded frame, border, shadow, and top overlay gradient).

**User-visible outcome:** The /forever page shows the new final romantic image in the last image section, with the same frame/gradient styling and no broken image links in production.
