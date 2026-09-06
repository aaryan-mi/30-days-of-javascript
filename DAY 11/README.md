# 🌟 Day 11 - Image Slider

> **Tags:** `JavaScript` `DOM-Manipulation` `Carousels` `UI/UX` `Keyboard-Events` `CSS-Transitions`

A smooth, modern image carousel component featuring responsive slide transitions, dynamic indicator pagination, live index badges, keyboard arrow navigation, and hover-pausing autoplay.

---

## 📸 Preview & Features

- **Smooth Visual Transitions:** CSS opacity and subtle scale easing between slide transitions.
- **Dynamic Dot Pagination:** Expanding active pill indicator that tracks slide position and supports direct click-to-slide navigation.
- **Live Slide Counter:** Real-time badge counter ($01 / 04$) displaying current slide index.
- **Keyboard Navigation:** Native support for `ArrowLeft` ($\leftarrow$) and `ArrowRight` ($\rightarrow$) keyboard controls.
- **Smart Autoplay:** Automatically rotates slides every $4.5\text{s}$ with intelligent pause-on-hover mechanics.
- **Responsive 16:9 Viewport:** Maintains consistent aspect ratio and clean image crops across all screen sizes.

---

## 🚀 How it Works

1. **State Tracking:** Tracks the current active slide index using modulo arithmetic:
   $$\text{Next Index} = (\text{currentSlide} + 1) \pmod{\text{totalSlides}}$$
   $$\text{Prev Index} = (\text{currentSlide} - 1 + \text{totalSlides}) \pmod{\text{totalSlides}}$$
2. **DOM Synchronization:** Toggles `.active` classes across both slide viewports and dot selectors synchronously.
3. **Event Loop Management:** Manages auto-rotation timer via `setInterval` and pauses execution on `mouseenter` / resumes on `mouseleave`.

---

## 💻 Code Structure

- `index.html` - Carousel stage layout, image elements, navigation buttons, and indicator dots.
- `style.css` - Dark modern container design, 16:9 responsive viewport, frosted glass buttons, and animated pagination pills.
- `script.js` - Slide cycling logic, event listeners, keyboard accessibility, and autoplay controller.
