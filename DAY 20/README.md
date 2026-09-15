# 🌟 Day 20 - Star Rating & Feedback Component

> **Tags:** `JavaScript` `DOM-Manipulation` `LocalStorage` `UI/UX` `Accessibility` `CSS-Animations`

An interactive, accessible 5-Star Rating and Feedback Review Component built with modern HTML5, CSS3, and vanilla JavaScript. Features live interactive hover/click rating animations, dynamic mood emoji indicators, multi-select tag chips, character-limited comment fields, and persistent community ratings distribution tracking via `LocalStorage`.

---

## 📸 Preview & Features

- **Interactive 5-Star Rating Widget:**
  - **Dynamic Hover & Click Feedback:** Visual star fill with pop bounce animations and golden glowing filter effects.
  - **Dynamic Mood & Emoji Indicators:** Real-time satisfaction states:
    - 1 Star: 😡 *Terrible* ("We're sorry to hear that. Tell us what went wrong.")
    - 2 Stars: 🙁 *Poor* ("Below expectations. How can we do better?")
    - 3 Stars: 😐 *Average* ("Satisfactory, but there's room for improvement.")
    - 4 Stars: 😊 *Good* ("Great! Glad you had a positive experience.")
    - 5 Stars: 🤩 *Excellent!* ("Fantastic! Absolute perfection.")
- **Contextual Feedback Sub-System:**
  - **Quick Select Chips:** Multi-select positive attributes (`⚡ Fast Performance`, `🎨 Clean UI/UX`, `💡 Intuitive`, `🔒 Reliable`, `🚀 Feature Rich`).
  - **Live Note Textarea:** Real-time character count meter (up to 200 characters).
- **Persistent Community Rating Breakdown:**
  - Calculates average aggregate score and renders 5-star distribution progress bars using `localStorage`.
- **Seamless State Flow:**
  - Instant transition to success celebration screen with "Edit Review" and "Submit Another Rating" controls.

---

## 🚀 How it Works

1. **Star Hover & Selection Pipeline:**
   ```javascript
   function renderStars(activeCount, isHover = false) {
       starButtons.forEach(btn => {
           const rating = parseInt(btn.getAttribute('data-rating'), 10);
           btn.classList.remove('hover-active', 'active');
           if (rating <= activeCount) {
               btn.classList.add(isHover ? 'hover-active' : 'active');
           }
       });
   }
   ```
2. **Dynamic Aggregate Statistics Engine:**
   - Aggregates review history from `localStorage`, computes mean score, and normalizes star breakdown distributions into percentage bars.

---

## 💻 Code Structure

- `index.html` - Semantic rating card, star buttons, feedback tag chips, success view, and statistics drawer.
- `style.css` - Dark obsidian theme, golden glowing stars, animated feedback labels, and progress bar charts.
- `script.js` - Hover/click state managers, rating metadata maps, local storage review recorder, and stats visualizer.
