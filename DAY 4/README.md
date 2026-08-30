# 🌟 Day 4 - FD Calculator

> **Tags:** `JavaScript` `Financial-Calculator` `Math-Formulas` `DOM-Manipulation` `UI-Component`

A Fixed Deposit (FD) compound interest calculator that enables users to project investment maturity amounts, total returns, and earned interest dynamically.

---

## 📸 Preview & Features
- **Interactive Sliders:** Adjust Investment Amount, Interest Rate (p.a.), and Investment Tenure in real-time.
- **Formatted Currency:** Real-time Indian Rupee (`₹`) number formatting (`toLocaleString('en-IN')`).
- **Quarterly Compounding Formula:** Accurately computes compounding interest calculated on a quarterly basis ($n = 4$).
- **Visual Breakdown:** Instantly breaks down invested capital, estimated returns, and final maturity value.

---

## 🚀 How it Works
1. Sliders update their displayed label value in real-time on `input` events.
2. Clicking **INVEST NOW** executes `calculateFD()`.
3. The maturity value is computed using the compound interest formula:
   $$A = P \times \left(1 + \frac{r}{n}\right)^{n \times t}$$
   - $P$ = Principal amount
   - $r$ = Annual interest rate
   - $n$ = Compounding frequency (4 quarters per year)
   - $t$ = Time period in years
4. The earned interest ($A - P$) and total maturity amount are rendered in the summary view.

---

## 💻 Code Structure
- `index.html` - Calculator structure, input sliders, and result summary cards.
- `style.css` - Modern styling, gradient theme, responsive slider thumbs, and animations.
- `script.js` - Dynamic slider event handlers, number formatting, and quarterly compounding calculations.
