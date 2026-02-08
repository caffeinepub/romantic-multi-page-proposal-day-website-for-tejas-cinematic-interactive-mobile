# Specification

## Summary
**Goal:** Ensure background music reliably plays throughout the entire experience and add a prominent romantic closing image on the final (/forever) page.

**Planned changes:**
- Add/verify the static audio file at `/assets/music/background-music.mp3` so it loads successfully in production and continues across route navigation.
- Fix `MusicProvider`/music toggle behavior to comply with browser autoplay rules (start on the next user gesture when blocked), keep toggle UI in sync with real playback events, and preserve behavior across refresh using `localStorage('music-playing')`.
- Add a new romantic image asset under `frontend/public/assets/generated` and display it near the bottom of the `/forever` page as the final closing visual with responsive styling and meaningful English alt text.

**User-visible outcome:** When music is turned ON it plays (or starts on the next click/keydown if autoplay is blocked) and continues across pages with a reliable toggle state, and the last page ends with a cinematic romantic image that loads correctly on all devices.
