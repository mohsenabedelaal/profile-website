# Reimagined portfolio — Day / Night

This revision replaces the original single-column editorial composition. It is not the previous site plus a personality card.

## Design and UX

- New two-column hero: professional identity and a prominent day/night personality panel.
- Exact approved wording: "Deadlifter by night. PR pusher by day."
- A day/night appearance switch with a saved local preference. Both themes expose the same content.
- A responsive three/two/one-column project grid with All work, AI & data and Platforms filters.
- Preserves all six projects, both Medium articles, both workshop links, credentials, career history, original portrait, resume, email, social links and Calendly destination.
- All substantive content, including Writing & Speaking, is in the delivered HTML. No JavaScript-generated sections or reveal-dependent visibility.
- Replaces the previous tiny cartoon with a real 1280x720 deadlift video loop. No claim that the person in the clip is Mohsen.
- Explicit play/pause; no autoplay for reduced-motion or data-saving preferences; pauses when offscreen or the document is hidden.
- Calendly is loaded only after an explicit booking click; external booking and email remain functional without JavaScript.
- Keeps headings restrained, paragraphs at least 16px, primary controls at least 44px high, visible keyboard focus and text wrapping.
- The old CSS layers and portfolio.js are no longer loaded by index.html. Kept baseline assets for compatibility; removed the superseded beyond-code.css from this branch.

## Media provenance

Deadlift - exercise demonstration video, FitnessScape, via Wikimedia Commons:
https://commons.wikimedia.org/wiki/File:Deadlift_-_exercise_demonstration_video.webm

License: CC BY 3.0, https://creativecommons.org/licenses/by/3.0/
The original video is embedded, muted and looped, with CSS framing/contrast and visible source/license links. It is illustrative, not personal training footage. Source metadata: 1280x720, 7.4 seconds, approximately 436 KB. The old animation was 111x100.

Project descriptions and claims preserve the owner's existing content; no new performance metrics, weights, exact award titles or employer responsibilities are invented. The Sahha visual is a typographic feature illustration, not a fabricated screenshot.

## Verification performed

Local Chromium rendering and DOM interaction checks at widths 320, 375, 390, 430, 768, 820, 834, 1024, 1280 and 1440 pixels. Checked horizontal overflow, six-project preservation, four AI/two platform filter results, menu/escape behavior, theme switching, booking-dialog opening/escape/focus restoration, reduced-motion paused state and original portrait filter removal. All passed. No-JavaScript content/navigation/contact checks passed. A 200% root-font-size reflow check at 390px passed after correcting content minimum widths.

Local rendering used system font fallbacks and blocked remote network requests. External media playback, Google Fonts loading, the live Calendly service and physical iPad/Safari behavior were not end-to-end tested in that sandbox. A successful Netlify deploy is not a substitute for those checks. Inspect the deploy preview before merging.

## Review

Branch: feature/deadlifter-pr-theme. PR #2. Do not merge without the owner's review.
