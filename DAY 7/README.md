# 🌟 Day 7 - Tip Calculator

> **Tags:** `JavaScript` `Calculators` `DOM-Manipulation` `Responsive-Design` `UI/UX`

An interactive and modern Tip & Split Bill Calculator that computes tips, total amounts, and per-person split shares in real-time with responsive controls.

---

## 📸 Preview & Features

- **Live Bill Input:** Enter bill amounts with automatic two-decimal currency formatting.
- **Dynamic Tip Percentage Slider:** Adjust tip rates from $0\%$ to $100\%$ with instantaneous feedback.
- **Bill Splitting Controls:** Split expenses among $1$ to $25$ people smoothly.
- **Detailed Summary Card:** Displays:
  - Total tip amount
  - Combined overall total (bill + tip)
  - Tip per person
  - Total payable per person
- **Modern Responsive UI:** Polished gradient aesthetics, custom glowing sliders, and smooth entrance transitions.

---

## 🚀 How it Works

1. **Reactive Input Listeners:** Updating the bill amount, tip slider, or split slider triggers `calculateTip()` in real-time.
2. **Formula Calculations:**
   $$\text{Total Tip} = \text{Bill} \times \left(\frac{\text{Tip \%}}{100}\right)$$
   $$\text{Total Amount} = \text{Bill} + \text{Total Tip}$$
   $$\text{Tip Per Person} = \frac{\text{Total Tip}}{\text{No. of People}}$$
   $$\text{Total Per Person} = \frac{\text{Total Amount}}{\text{No. of People}}$$
3. **DOM Updates:** Formats all calculated monetary values to 2 decimal places with currency symbols.

---

## 💻 Code Structure

- `index.html` - Semantic layout, input wrappers, range sliders, and summary card.
- `style.css` - Modern styling, custom slider thumbs, gradients, and subtle shadows.
- `script.js` - Real-time calculation logic, event listeners, and DOM updates.
