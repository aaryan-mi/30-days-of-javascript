# 🌟 Day 14 - Video Slider

> **Tags:** `JavaScript` `HTML5-Video` `DOM-Manipulation` `Media-Controls` `UI/UX` `Carousel`

An interactive, cinematic HTML5 Video Slider component featuring responsive multi-clip video playback, synchronized interactive thumbnail navigation, custom glassmorphism media controls, real-time progress scrubbing, and keyboard accessibility.

---

## 📸 Preview & Features

- **High-Definition Video Showcase:** Seamlessly cycles through 4 diverse nature, wildlife, coastal, and botanical clips.
- **Custom Glassmorphic Controls Bar:**
  - Play / Pause toggling
  - Interactive clickable progress scrubber
  - Audio Mute / Unmute switch
  - Fullscreen expansion mode
- **Dynamic Thumbnail Navigation Strip:** Clickable thumbnail cards with hover zoom and active glowing state tracking the current video.
- **Keyboard Shortcuts:**
  - `←` / `→` — Switch between previous and next video clips
  - `Space` — Toggle Play / Pause
  - `M` — Mute / Unmute audio
  - `F` — Toggle Fullscreen mode
- **Dynamic Metadata Overlay:** Floating slide badges, titles, and descriptions that crossfade smoothly on slide changes.

---

## 🚀 How it Works

1. **HTML5 Media API Integration:** Dynamically updates `video.src`, `video.poster`, and triggers `video.play()` / `video.pause()`.
2. **Scrubber Synchronization:** Listens to `timeupdate` events to advance the progress bar width percentage:
   $$\text{Progress \%} = \left(\frac{\text{video.currentTime}}{\text{video.duration}}\right) \times 100$$
3. **Seekable Scrubbing:** Calculates click coordinates relative to the progress bar container to adjust `video.currentTime`.

---

## 💻 Code Structure

- `index.html` - Stage container, custom media control bar, and thumbnail grid.
- `style.css` - Dark cinematic styling, 16:9 aspect-ratio video stage, glowing thumbnail borders, and animations.
- `script.js` - Media state manager, slide transition pipeline, scrub bar handler, and keyboard shortcuts.
- `assets/` - Royalty-free videos and thumbnail graphics.
