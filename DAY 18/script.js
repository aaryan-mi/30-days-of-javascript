/**
 * Day 18: CSS Changer Studio
 * 30 Days 30 JavaScript Projects
 */

// --- Default Configuration ---
const DEFAULT_VALUES = {
    base: '#6366f1',
    padding: 18,
    'border-radius': 20,
    width: 85,
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    sepia: 0,
    'hue-rotate': 0,
    saturate: 100,
    invert: 0,
    rotate: 0,
    'shadow-blur': 25
};

// --- Presets Definition ---
const PRESETS = {
    default: { ...DEFAULT_VALUES },
    cyberpunk: {
        base: '#ec4899',
        padding: 24,
        'border-radius': 28,
        width: 85,
        blur: 0,
        brightness: 115,
        contrast: 140,
        grayscale: 0,
        sepia: 0,
        'hue-rotate': 290,
        saturate: 200,
        invert: 0,
        rotate: 2,
        'shadow-blur': 40
    },
    vintage: {
        base: '#b45309',
        padding: 20,
        'border-radius': 14,
        width: 82,
        blur: 0,
        brightness: 92,
        contrast: 115,
        grayscale: 15,
        sepia: 65,
        'hue-rotate': 15,
        saturate: 120,
        invert: 0,
        rotate: -1,
        'shadow-blur': 20
    },
    emerald: {
        base: '#10b981',
        padding: 22,
        'border-radius': 26,
        width: 85,
        blur: 0,
        brightness: 105,
        contrast: 125,
        grayscale: 0,
        sepia: 0,
        'hue-rotate': 90,
        saturate: 160,
        invert: 0,
        rotate: 0,
        'shadow-blur': 35
    },
    sunset: {
        base: '#f97316',
        padding: 20,
        'border-radius': 22,
        width: 85,
        blur: 0,
        brightness: 110,
        contrast: 125,
        grayscale: 0,
        sepia: 30,
        'hue-rotate': 340,
        saturate: 180,
        invert: 0,
        rotate: 0,
        'shadow-blur': 30
    },
    monochrome: {
        base: '#475569',
        padding: 16,
        'border-radius': 12,
        width: 80,
        blur: 0,
        brightness: 105,
        contrast: 150,
        grayscale: 100,
        sepia: 0,
        'hue-rotate': 0,
        saturate: 0,
        invert: 0,
        rotate: 0,
        'shadow-blur': 20
    },
    invert: {
        base: '#06b6d4',
        padding: 20,
        'border-radius': 28,
        width: 85,
        blur: 0,
        brightness: 100,
        contrast: 120,
        grayscale: 0,
        sepia: 0,
        'hue-rotate': 180,
        saturate: 150,
        invert: 85,
        rotate: 3,
        'shadow-blur': 35
    }
};

// --- DOM References ---
const inputs = document.querySelectorAll('.controls-panel input');
const previewImg = document.getElementById('preview-img');
const frameWrapper = document.getElementById('frame-wrapper');
const cssOutput = document.getElementById('css-output');
const btnCopyCss = document.getElementById('btn-copy-css');
const btnReset = document.getElementById('btn-reset');
const presetButtons = document.querySelectorAll('.preset-btn');
const thumbOptions = document.querySelectorAll('.thumb-option');
const customFileInput = document.getElementById('custom-file-input');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');

let toastTimer = null;

// --- Update Handler for CSS Properties ---
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    const name = this.name;
    const value = this.value;

    // Apply to CSS custom properties
    document.documentElement.style.setProperty(`--${name}`, value + suffix);

    // Update value badge in UI
    const badge = document.getElementById(`val-${name}`);
    if (badge) {
        badge.textContent = value + suffix;
    }

    // Refresh generated CSS snippet
    updateCssOutput();
}

// --- Refresh Generated CSS Output Block ---
function updateCssOutput() {
    const base = document.getElementById('base').value;
    const padding = document.getElementById('padding').value + 'px';
    const borderRadius = document.getElementById('border-radius').value + 'px';
    const width = document.getElementById('width').value + '%';
    const blur = document.getElementById('blur').value + 'px';
    const brightness = document.getElementById('brightness').value + '%';
    const contrast = document.getElementById('contrast').value + '%';
    const grayscale = document.getElementById('grayscale').value + '%';
    const sepia = document.getElementById('sepia').value + '%';
    const hueRotate = document.getElementById('hue-rotate').value + 'deg';
    const saturate = document.getElementById('saturate').value + '%';
    const invert = document.getElementById('invert').value + '%';
    const rotate = document.getElementById('rotate').value + 'deg';
    const shadowBlur = document.getElementById('shadow-blur').value + 'px';

    const cssText = 
`:root {
  --base: ${base};
  --padding: ${padding};
  --border-radius: ${borderRadius};
  --width: ${width};
  --blur: ${blur};
  --brightness: ${brightness};
  --contrast: ${contrast};
  --grayscale: ${grayscale};
  --sepia: ${sepia};
  --hue-rotate: ${hueRotate};
  --saturate: ${saturate};
  --invert: ${invert};
  --rotate: ${rotate};
  --shadow-blur: ${shadowBlur};
}

.image-frame {
  background-color: var(--base);
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: 0 12px var(--shadow-blur) var(--base);
  transform: rotate(var(--rotate));
}

.image-frame img {
  width: var(--width);
  border-radius: calc(var(--border-radius) * 0.7);
  filter: blur(var(--blur))
          brightness(var(--brightness))
          contrast(var(--contrast))
          grayscale(var(--grayscale))
          sepia(var(--sepia))
          hue-rotate(var(--hue-rotate))
          saturate(var(--saturate))
          invert(var(--invert));
}`;

    cssOutput.textContent = cssText;
}

// --- Apply Preset Values ---
function applyPreset(presetKey) {
    const config = PRESETS[presetKey];
    if (!config) return;

    Object.keys(config).forEach(key => {
        const input = document.getElementById(key);
        if (input) {
            input.value = config[key];
            const suffix = input.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${key}`, config[key] + suffix);

            const badge = document.getElementById(`val-${key}`);
            if (badge) {
                badge.textContent = config[key] + suffix;
            }
        }
    });

    // Update active preset button style
    presetButtons.forEach(btn => {
        if (btn.getAttribute('data-preset') === presetKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    updateCssOutput();
}

// --- Toast Notification ---
function showToast(message, isSuccess = true) {
    if (toastTimer) clearTimeout(toastTimer);

    toastMsg.textContent = message;
    const icon = toast.querySelector('i');
    if (isSuccess) {
        icon.className = 'fa-solid fa-circle-check';
        icon.style.color = 'var(--accent-emerald)';
        toast.style.borderColor = 'var(--accent-emerald)';
    } else {
        icon.className = 'fa-solid fa-circle-exclamation';
        icon.style.color = 'var(--accent-rose)';
        toast.style.borderColor = 'var(--accent-rose)';
    }

    toast.classList.add('show');
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

// --- Event Listeners Setup ---

// Inputs listeners (both 'input' for smooth dragging & 'change' for commits)
inputs.forEach(input => {
    input.addEventListener('input', handleUpdate);
    input.addEventListener('change', handleUpdate);
});

// Presets buttons
presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const presetKey = btn.getAttribute('data-preset');
        applyPreset(presetKey);
        showToast(`Preset: ${btn.textContent} applied`);
    });
});

// Gallery Thumbnails
thumbOptions.forEach(thumb => {
    thumb.addEventListener('click', () => {
        thumbOptions.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const newSrc = thumb.getAttribute('data-src');
        if (newSrc) {
            previewImg.src = newSrc;
        }
    });
});

// Custom Image Upload Handler
customFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            previewImg.src = event.target.result;
            thumbOptions.forEach(t => t.classList.remove('active'));
            showToast('Custom image loaded successfully!');
        };
        reader.readAsDataURL(file);
    }
});

// Copy CSS Handler
btnCopyCss.addEventListener('click', () => {
    const textToCopy = cssOutput.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalContent = btnCopyCss.innerHTML;
        btnCopyCss.classList.add('copied');
        btnCopyCss.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        showToast('CSS Code copied to clipboard!');

        setTimeout(() => {
            btnCopyCss.classList.remove('copied');
            btnCopyCss.innerHTML = originalContent;
        }, 2000);
    }).catch(() => {
        showToast('Failed to copy to clipboard', false);
    });
});

// Reset Handler
btnReset.addEventListener('click', () => {
    applyPreset('default');
    showToast('All CSS properties reset to defaults');
});

// Initial Setup on DOM Ready
window.addEventListener('DOMContentLoaded', () => {
    applyPreset('default');
});
