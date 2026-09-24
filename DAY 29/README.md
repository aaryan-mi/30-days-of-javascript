# 📊 Day 29 - Poll System Application

> **Tags:** `JavaScript` `DOM-Manipulation` `Data-Visualization` `Forms` `UI/UX` `Responsive-Design`

An interactive, responsive Poll System Application built with vanilla JavaScript, modern CSS3 gradients, and HTML5. Provides dynamic polling mechanisms with real-time percentage breakdowns, animated progress bars, brand-accented tech indicators, and contextual input validation.

---

## 📸 Preview & Features

- **Interactive Voting System:**
  - Multi-choice radio options with custom card selection and active glow highlights.
  - Live vote tallying with instant percentage recalculations.
- **Dynamic Data Visualization:**
  - Distinct gradient-filled progress bars mapped to each programming language (JavaScript, Python, Java, C++).
  - Smooth CSS cubic-bezier width transitions upon vote submission.
- **Contextual Form Validation:**
  - Validates option selection prior to submission with inline error feedback.
  - Automatically resets selection after registering vote.
- **Vibrant & Modern UI/UX:**
  - Dark obsidian background with vibrant ambient indigo, rose, and cyan radial glows.
  - Glassmorphic card container with frosted blur effects and responsive layout.

---

## 🚀 How it Works

1. **Vote Aggregation & Percentage Computation:**
   ```javascript
   const displayResult = () => {
       const totalVotes = getTotalVotes();
       options.forEach((option) => {
           const percentage = totalVotes > 0 
               ? ((option.votes / totalVotes) * 100).toFixed(1) 
               : "0.0";
           // Render progress bars and badges dynamically
       });
   };
   ```
2. **Dynamic Progress Bar Transitions:**
   - Evaluates percentage shares against total votes and adjusts CSS bar widths dynamically.

---

## 💻 Code Structure

- `index.html` - Semantic layout containing the badge, question, radio option list, vote button, and results container.
- `style.css` - Vibrant ambient gradient theme, option card selection states, progress bars, and responsive media queries.
- `script.js` - Polling dataset, vote aggregation engine, percentage calculator, and dynamic DOM rendering.
