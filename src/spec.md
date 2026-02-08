# Specification

## Summary
**Goal:** Add a working background music track and make it play continuously across all pages with a reliable global toggle.

**Planned changes:**
- Add a single audio file to the frontend static assets and reference it via a valid public URL path.
- Update/fix the MusicProvider so playback starts reliably after a user gesture (handles autoplay blocking) and loops at a non-intrusive volume.
- Ensure the music toggle is part of the global layout, appears on every page, persists state via localStorage, and reflects true playback (playing vs paused) without console errors during navigation.

**User-visible outcome:** Users can turn background music on/off from any page; when enabled, it loops continuously while navigating and resumes correctly after reloads (starting after the next user interaction if autoplay is blocked).
