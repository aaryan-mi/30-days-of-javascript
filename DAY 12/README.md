# 🌟 Day 12 - Day of the Week

> **Tags:** `JavaScript` `Date-API` `DOM-Manipulation` `Live-Clock` `UI/UX`

An interactive Day of the Week application that detects the current weekday in real-time, displays personalized quotes and mood vibes, features a live digital clock, and lets users explore inspiration for every day of the week.

---

## 📸 Preview & Features

- **Automatic Day Detection:** Uses JavaScript's `Date.prototype.getDay()` to identify the current day ($0 = \text{Sunday} \dots 6 = \text{Saturday}$).
- **Real-Time Digital Clock & Date:** Synchronized live clock showing hours, minutes, seconds, and formatted date string.
- **Dynamic Daily Quotes & Mood Tags:** Tailored affirmations, vibes, and icons for each day from Monday to Sunday.
- **Interactive Day Selector Pills:** Browse and preview quotes and themes for any day across the entire week.
- **Polished Modern UI:** Glowing gradient typography, subtle bounce icons, and frosted dark glass container.

---

## 🚀 How it Works

1. **Date API Integration:**
   $$\text{Day Index} = \text{new Date().getDay()}$$
2. **Live Clock Synchronizer:** A 1-second `setInterval` updates the digital clock using `toLocaleTimeString()`.
3. **Dynamic View Switching:** Clicking weekday pills switches the display card state between the active day and target preview.

---

## 💻 Code Structure

- `index.html` - Date/clock header, main day stage, quote display, and weekday selector pills.
- `style.css` - Dark theme design, glowing gradient typography, interactive pill buttons, and animations.
- `script.js` - Day data structures, real-time clock loop, and tab switching event handlers.
