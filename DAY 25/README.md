# 🎂 Day 25 - Age Calculator

> **Tags:** `JavaScript` `DOM-Manipulation` `Date-API` `Mathematics` `UI/UX` `Responsive-Design`

An interactive, accurate Age and Milestone Calculator built with vanilla JavaScript, modern CSS3 gradients, and HTML5. Calculates precise chronological age in years, months, and days alongside cumulative life metrics such as total months, weeks, days, hours, minutes, and seconds.

---

## 📸 Preview & Features

- **Exact Calendar Age Calculation:**
  - Accurately adjusts for variable month lengths and leap years to derive exact calendar years, months, and days.
  - Generates cumulative life milestone metrics (months, weeks, days, hours, minutes, seconds).
- **Intelligent Validation:**
  - Restricts future dates automatically using the HTML5 date picker `max` boundary.
  - Provides inline error notifications for empty or invalid inputs.
- **Vibrant & Modern UI/UX:**
  - Ambient colorful gradient background with glowing radial accents.
  - Glassmorphic card design with frosted blur effects.
  - Responsive metric card grid optimized for mobile and desktop screens.

---

## 🚀 How it Works

1. **Chronological Calendar Adjustment:**
   ```javascript
   let years = now.getFullYear() - birthDate.getFullYear();
   let months = now.getMonth() - birthDate.getMonth();
   let days = now.getDate() - birthDate.getDate();

   if (days < 0) {
       months--;
       const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
       days += previousMonth.getDate();
   }
   if (months < 0) {
       years--;
       months += 12;
   }
   ```
2. **Cumulative Metrics Breakdown:**
   - Computes elapsed milliseconds from epoch timestamps to convert into exact totals of days, weeks, hours, minutes, and seconds formatted with localized number grouping.

---

## 💻 Code Structure

- `index.html` - Form structure, date inputs, submit button, and result display containers.
- `style.css` - Vibrant ambient gradient theme, glassmorphic layout, metrics grid, and smooth fade-in animations.
- `script.js` - Date parsing, calendar delta calculations, cumulative metric formatting, and DOM rendering.
