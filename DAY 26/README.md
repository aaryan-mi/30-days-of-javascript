# ⏰ Day 26 - Date and Time Widget

> **Tags:** `JavaScript` `DOM-Manipulation` `Date-API` `Timers` `UI/UX` `Responsive-Design`

A synchronized digital clock and calendar widget built with vanilla JavaScript, modern CSS3 gradients, and HTML5. Continuously updates time down to the second with custom neon glowing numerals and a bold dynamic calendar card.

---

## 📸 Preview & Features

- **Synchronized Real-Time Clock:**
  - Real-time digital clock rendering hours, minutes, and seconds updated every 1000ms.
  - Zero-padded formatting (`00:00:00`) with zero initial startup lag.
- **Dynamic Calendar Presentation:**
  - Automatically updates the current day of the week, numerical date, and month.
- **Vibrant & Modern UI/UX:**
  - Multi-radial ambient gradient background with dark glassmorphic styling.
  - Distinct modern neon color accents for hours (cyan), minutes (violet), and seconds (rose).
  - Responsive split-grid design adapting fluidly from desktop to mobile screens.

---

## 🚀 How it Works

1. **Continuous Clock Update Cycle:**
   ```javascript
   const updateClock = () => {
       const today = new Date();
       const date = today.getDate();
       const day = weekdays[today.getDay()];
       const month = monthNames[today.getMonth()];

       const hours = formatTime(today.getHours());
       const minutes = formatTime(today.getMinutes());
       const seconds = formatTime(today.getSeconds());

       dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;

       hoursContainer.textContent = hours + ":";
       minutesContainer.textContent = minutes + ":";
       secondsContainer.textContent = seconds;
   };
   ```
2. **Immediate Initialization:**
   - Invokes `updateClock()` immediately on DOM readiness prior to the recurring `setInterval` cycle to eliminate uninitialized layout flickers.

---

## 💻 Code Structure

- `index.html` - Semantic layout containing the badge, heading, digital clock spans, and date card.
- `style.css` - Vibrant ambient gradient theme, glassmorphic layout, digital typography, and responsive media queries.
- `script.js` - Real-time date resolution, zero-padding time formatter, and recursive timer updates.
