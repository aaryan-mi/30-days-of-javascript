# 💵 Day 30 - Cash Calculator Application

> **Tags:** `JavaScript` `DOM-Manipulation` `Indian-Currency` `Number-To-Words` `Forms` `Responsive-Design`

An interactive, responsive Cash Calculator Application built with vanilla JavaScript, modern CSS3 gradients, and HTML5. Accurately calculates active Indian banknote denominations (₹500, ₹200, ₹100, ₹50, ₹20, ₹10), displays real-time subtotals and grand totals in INR formatting, and converts currency totals into words using the Indian numbering system (Crores, Lakhs, Thousands, Hundreds).

---

## 📸 Preview & Features

- **Active Denominations Only:**
  - Dedicated input rows for active legal tender Mahatma Gandhi New Series banknotes (₹500, ₹200, ₹100, ₹50, ₹20, ₹10).
  - Demonetized (₹2000) and obsolete paper notes are excluded.
- **Real-Time Subtotal & Grand Total:**
  - Automatically calculates each denomination row's subtotal on numeric input.
  - Dynamically updates the grand total cash formatted with the Indian Rupee symbol (`₹`).
- **Indian Number to Words Engine:**
  - Converts numbers into formal financial words adhering to Indian numbering conventions (Crores, Lakhs, Thousands, Hundreds).
- **Modern Emerald Glassmorphic Design:**
  - Dark emerald aesthetic with gold accents and frosted glass containers.
  - Responsive layout optimized across mobile, tablet, and desktop screens.
- **One-Click Reset:**
  - Quick reset button clears all denomination counts and restores initial states.

---

## 🚀 How it Works

1. **Denomination Subtotals & Grand Total Calculation:**
   ```javascript
   function calculateGrandTotal() {
       let total = 0;
       inputs.forEach((input, index) => {
           const count = parseInt(input.value, 10) || 0;
           total += count * denominations[index];
       });
       txtFinalCash.textContent = '₹' + total.toLocaleString('en-IN');
       txtFinalCashInWords.textContent = total === 0 ? 'Zero Rupees Only' : `${numberToWords(total)} Rupees Only`;
   }
   ```
2. **Indian Number to Words Conversion:**
   - Recursively breaks down amounts into Crores (10,000,000), Lakhs (100,000), Thousands (1,000), and Hundreds (100).

---

## 💻 Code Structure

- `index.html` - Semantic markup featuring the active banknote denomination rows, reset button, and result display cards.
- `styles.css` - Modern emerald glassmorphic styling, responsive flex/grid layouts, and styled inputs.
- `script.js` - Real-time calculation engine, input sanitization, and Indian numbering system number-to-words converter.
- `images/` - High-quality active Indian currency note assets.
