const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const output = document.getElementById("output");

const initialHTML = `<div class="card">
  <h2>Welcome to CodeLab</h2>
  <p>Live frontend editor with real-time feedback.</p>
  <button id="demo-btn">Click Me!</button>
  <span id="click-status"></span>
</div>`;

const initialCSS = `body {
  margin: 0;
  padding: 24px;
  background: #0f172a;
  color: #ffffff;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

h2 {
  margin-top: 0;
  color: #38bdf8;
}

p {
  color: #94a3b8;
  font-size: 14px;
}

button {
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.05);
}

#click-status {
  display: block;
  margin-top: 12px;
  font-size: 13px;
  color: #34d399;
}`;

const initialJS = `let clicks = 0;
const btn = document.getElementById("demo-btn");
const status = document.getElementById("click-status");

if (btn && status) {
  btn.addEventListener("click", () => {
    clicks++;
    status.textContent = "Button clicked " + clicks + (clicks === 1 ? " time!" : " times!");
  });
}`;

const run = () => {
    const html = htmlCode.value;
    const css = cssCode.value;
    const js = jsCode.value;

    const source = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>
                try {
                    ${js}
                } catch (err) {
                    console.warn(err);
                }
            <\/script>
        </body>
        </html>
    `;

    output.srcdoc = source;
};

const handleTabKey = (e) => {
    if (e.key === "Tab") {
        e.preventDefault();
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        e.target.value = e.target.value.substring(0, start) + "  " + e.target.value.substring(end);
        e.target.selectionStart = e.target.selectionEnd = start + 2;
        run();
    }
};

htmlCode.value = initialHTML;
cssCode.value = initialCSS;
jsCode.value = initialJS;

[htmlCode, cssCode, jsCode].forEach((area) => {
    area.addEventListener("input", run);
    area.addEventListener("keydown", handleTabKey);
});

run();
