/**
 * Day 5 - Modern CSS Gradient Generator
 * 30 Days JavaScript Challenge
 */

// DOM Elements
const colorAInput = document.getElementById('colorA');
const colorBInput = document.getElementById('colorB');
const hexAText = document.getElementById('hexA');
const hexBText = document.getElementById('hexB');
const swapColorsBtn = document.getElementById('swapColorsBtn');

const gradientPreview = document.getElementById('gradientPreview');
const previewBadge = document.getElementById('previewBadge');
const cssCodeOutput = document.getElementById('cssCodeOutput');
const copyCssBtn = document.getElementById('copyCssBtn');
const toast = document.getElementById('toast');

const typeBtns = document.querySelectorAll('.type-btn');
const dirBtns = document.querySelectorAll('.dir-btn');
const angleSlider = document.getElementById('angleSlider');
const angleDisplay = document.getElementById('angleDisplay');
const radialShapeBtns = document.querySelectorAll('.radial-shape-btn');
const presetPills = document.querySelectorAll('.preset-pill');

const directionControlGroup = document.getElementById('directionControlGroup');
const radialControlGroup = document.getElementById('radialControlGroup');

const randomizeBtn = document.getElementById('randomizeBtn');
const toggleBgBtn = document.getElementById('toggleBgBtn');

// App State
const state = {
    type: 'linear',           // 'linear' | 'radial' | 'conic'
    color1: '#6366f1',
    color2: '#ec4899',
    angle: 135,               // Degrees for linear / conic
    radialShape: 'circle',    // 'circle' | 'ellipse'
    isBodyBgApplied: false,
};

// Preset Palettes for Random Generator
const curatedPalettes = [
    { c1: '#6366f1', c2: '#ec4899' },
    { c1: '#ff6b6b', c2: '#556270' },
    { c1: '#4facfe', c2: '#00f2fe' },
    { c1: '#f857a6', c2: '#ff5858' },
    { c1: '#11998e', c2: '#38ef7d' },
    { c1: '#8a2387', c2: '#e94057' },
    { c1: '#f12711', c2: '#f5af19' },
    { c1: '#654ea3', c2: '#eaafc8' },
    { c1: '#00c6ff', c2: '#0072ff' },
    { c1: '#f7971e', c2: '#ffd200' },
    { c1: '#fc466b', c2: '#3f5efb' },
    { c1: '#3a1c71', c2: '#d76d77' }
];

/**
 * Generate CSS gradient string based on current state
 */
function buildGradientCSS() {
    if (state.type === 'linear') {
        return `linear-gradient(${state.angle}deg, ${state.color1}, ${state.color2})`;
    } else if (state.type === 'radial') {
        return `radial-gradient(${state.radialShape}, ${state.color1}, ${state.color2})`;
    } else if (state.type === 'conic') {
        return `conic-gradient(from ${state.angle}deg at 50% 50%, ${state.color1}, ${state.color2})`;
    }
    return `linear-gradient(${state.angle}deg, ${state.color1}, ${state.color2})`;
}

/**
 * Update UI, preview, code output and badges
 */
function updateGradient() {
    const gradientCss = buildGradientCSS();

    // 1. Update Preview Box
    gradientPreview.style.background = gradientCss;

    // 2. Update Code Output
    const fullCode = `background: ${gradientCss};`;
    cssCodeOutput.value = fullCode;

    // 3. Update Hex text
    hexAText.textContent = state.color1.toUpperCase();
    hexBText.textContent = state.color2.toUpperCase();

    // 4. Update preview badge label
    if (state.type === 'linear') {
        previewBadge.textContent = `${state.angle}° Linear`;
    } else if (state.type === 'radial') {
        previewBadge.textContent = `${capitalize(state.radialShape)} Radial`;
    } else if (state.type === 'conic') {
        previewBadge.textContent = `${state.angle}° Conic`;
    }

    // 5. Update Angle Display
    angleDisplay.textContent = `${state.angle}°`;

    // 6. If Body background is applied, update body style
    if (state.isBodyBgApplied) {
        document.body.style.background = gradientCss;
    }
}

/**
 * Capitalize first letter
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Switch Gradient Type
 */
function setGradientType(type) {
    state.type = type;

    typeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });

    if (type === 'radial') {
        directionControlGroup.classList.add('hidden');
        radialControlGroup.classList.remove('hidden');
    } else {
        directionControlGroup.classList.remove('hidden');
        radialControlGroup.classList.add('hidden');
    }

    updateGradient();
}

/**
 * Set Angle and update direction active states
 */
function setAngle(angleVal) {
    state.angle = parseInt(angleVal, 10);
    angleSlider.value = state.angle;

    // Check if angle matches any quick button
    dirBtns.forEach(btn => {
        const btnAngle = parseInt(btn.dataset.angle, 10);
        btn.classList.toggle('active', btnAngle === state.angle);
    });

    updateGradient();
}

/**
 * Swap Colors 1 and 2
 */
function swapColors() {
    const temp = state.color1;
    state.color1 = state.color2;
    state.color2 = temp;

    colorAInput.value = state.color1;
    colorBInput.value = state.color2;

    updateGradient();
}

/**
 * Generate random gradient
 */
function randomizeGradient() {
    const randomPalette = curatedPalettes[Math.floor(Math.random() * curatedPalettes.length)];
    const randomAngle = Math.floor(Math.random() * 8) * 45; // 0, 45, 90, ...

    state.color1 = randomPalette.c1;
    state.color2 = randomPalette.c2;
    colorAInput.value = state.color1;
    colorBInput.value = state.color2;

    setAngle(randomAngle);
}

/**
 * Copy CSS Code to Clipboard with Toast Notification
 */
let toastTimeout;
function copyCSS() {
    const code = cssCodeOutput.value;

    const showToast = () => {
        clearTimeout(toastTimeout);
        toast.classList.add('show');
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2200);
    };

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(showToast).catch(() => {
            fallbackCopy(code, showToast);
        });
    } else {
        fallbackCopy(code, showToast);
    }
}

/**
 * Fallback clipboard copy using textarea selection
 */
function fallbackCopy(text, callback) {
    cssCodeOutput.select();
    try {
        document.execCommand('copy');
        if (callback) callback();
    } catch (err) {
        console.error('Failed to copy code: ', err);
    }
}

/**
 * Toggle Body Background
 */
function toggleBodyBackground() {
    state.isBodyBgApplied = !state.isBodyBgApplied;

    if (state.isBodyBgApplied) {
        document.body.style.background = buildGradientCSS();
        toggleBgBtn.innerHTML = '<i class="fa-solid fa-compress"></i> Reset Body';
        toggleBgBtn.style.background = 'rgba(99, 102, 241, 0.3)';
    } else {
        document.body.style.background = '';
        toggleBgBtn.innerHTML = '<i class="fa-solid fa-expand"></i> Apply to Body';
        toggleBgBtn.style.background = '';
    }
}

// Event Listeners

// Color Pickers
colorAInput.addEventListener('input', (e) => {
    state.color1 = e.target.value;
    updateGradient();
});

colorBInput.addEventListener('input', (e) => {
    state.color2 = e.target.value;
    updateGradient();
});

// Swap Colors Button
swapColorsBtn.addEventListener('click', swapColors);

// Type Buttons
typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setGradientType(btn.dataset.type);
    });
});

// Direction Buttons
dirBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const angle = btn.dataset.angle;
        setAngle(angle);
    });
});

// Angle Slider
angleSlider.addEventListener('input', (e) => {
    setAngle(e.target.value);
});

// Radial Shape Buttons
radialShapeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        radialShapeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.radialShape = btn.dataset.shape;
        updateGradient();
    });
});

// Presets
presetPills.forEach(pill => {
    pill.addEventListener('click', () => {
        state.color1 = pill.dataset.c1;
        state.color2 = pill.dataset.c2;
        colorAInput.value = state.color1;
        colorBInput.value = state.color2;
        updateGradient();
    });
});

// Action Buttons
randomizeBtn.addEventListener('click', randomizeGradient);
toggleBgBtn.addEventListener('click', toggleBodyBackground);
copyCssBtn.addEventListener('click', copyCSS);

// Initial Setup
updateGradient();
