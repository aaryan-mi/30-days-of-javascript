# 🌟 Day 5 - Modern CSS Gradient Generator

> **Tags:** `JavaScript` `CSS3-Gradients` `DOM-Manipulation` `UI/UX-Design` `Color-Tools` `Clipboard-API`

A sleek, interactive CSS Gradient Generator that enables web designers and developers to create, customize, visualize, and export linear, radial, and conic gradients in real-time.

---

## 📸 Preview & Features

- **Multi-Type Support:** Seamlessly switch between **Linear**, **Radial**, and **Conic** gradient modes.
- **Direction Matrix & Angle Dial:** 8 directional quick-click presets paired with an angle slider ($0^\circ - 360^\circ$) for precise angle adjustments.
- **Radial Geometry:** Switch between `circle` and `ellipse` radial falloffs.
- **Live HEX Sync & Swap:** Real-time hex code displays with an instant 1-click color swapper.
- **Curated Trending Presets:** One-click presets featuring modern color combinations (*Sunset Coral*, *Ocean Breeze*, *Neon Berry*, *Mint Lush*, *Cosmic Sky*, *Solar Flare*).
- **Randomizer Engine:** Generate random aesthetic color pairings and orientations with a single click.
- **Full Body Preview:** Preview the gradient across the entire browser viewport with the "Apply to Body" toggle.
- **Instant Copy with Toast Feedback:** Single-click CSS code copy powered by the modern Clipboard API with non-blocking toast notifications.

---

## 🚀 How it Works

1. **State Management:** A reactive JavaScript state object tracks the active gradient mode, color stops, angle, and radial geometry.
2. **Dynamic CSS Generation:** The `buildGradientCSS()` function formats standard CSS3 syntax:
   - *Linear:* `linear-gradient(${angle}deg, ${color1}, ${color2})`
   - *Radial:* `radial-gradient(${shape}, ${color1}, ${color2})`
   - *Conic:* `conic-gradient(from ${angle}deg at 50% 50%, ${color1}, ${color2})`
3. **Synchronized Controls:** Updating the angle slider updates the direction button states and live preview badge in real-time.
4. **Copy & Toast:** Writes the generated CSS rule to the clipboard and triggers a smooth CSS animation toast.

---

## 💻 Code Structure

- `index.html` - Generator layout, color stop inputs, direction grid, presets, preview card, and toast container.
- `style.css` - Modern glassmorphism UI, custom slider styling, responsive grids, and CSS keyframe animations.
- `script.js` - Reactive event handlers, math & degree transformations, gradient string builder, and clipboard integration.
