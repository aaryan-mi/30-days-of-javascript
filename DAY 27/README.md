# 🏏 Day 27 - Advanced Image Carousel (VK18 Edition)

> **Tags:** `JavaScript` `DOM-Manipulation` `UI/UX` `Carousel` `CSS-Transitions` `Responsive-Design`

An interactive, responsive image carousel and thumbnail gallery built with vanilla JavaScript, modern CSS3 gradients, and HTML5. Custom-themed for cricket maestro **Virat Kohli (VK18)**, featuring synchronized multi-slide transitions, interactive thumbnails, keyboard navigation, and royal neon accents.

---

## 📸 Preview & Features

- **VK18 Imagery Collection:**
  - Curated high-resolution action, celebration, and portrait photography of Virat Kohli.
- **Synchronized Thumbnail Previews:**
  - Interactive left-hand thumbnail rail with golden glowing focus borders and hover scaling.
  - Clicking any thumbnail directly moves the carousel to that slide.
- **Fluid Carousel Navigation:**
  - Forward and backward arrow navigation with glassmorphic buttons.
  - Keyboard arrow key navigation (`ArrowLeft` and `ArrowRight`).
  - Seamless CSS transform transitions with percentage-based responsive scaling.
- **Vibrant & Modern UI/UX:**
  - Dark stadium-inspired obsidian backdrop with royal blue, crimson, and golden amber ambient radial glows.
  - Glassmorphic card container with frosted blur effects.
  - Mobile-responsive layout adapting thumbnail orientation for smaller screens.

---

## 🚀 How it Works

1. **Cloning & Percentage Sliding:**
   ```javascript
   const updateSlides = () => {
       slidesContainer.style.transition = "transform 0.35s ease-in-out";
       slidesContainer.style.transform = `translateX(-${(index + 1) * 100}%)`;
   };
   ```
2. **Infinite Frame Prepending:**
   - Appends boundary clones to allow fluid continuous visual indexing.
   - Synchronizes active state on thumbnails alongside directional controls.

---

## 💻 Code Structure

- `index.html` - Semantic layout containing the badge, heading, thumbnail rail, and carousel viewport.
- `style.css` - VK18 royal gradient theme, glassmorphic layout, thumbnail states, and responsive styling.
- `script.js` - Carousel slide indices, percentage translate engine, keyboard bindings, and click listeners.
- `imgs/` - Curated square photography assets of Virat Kohli.
