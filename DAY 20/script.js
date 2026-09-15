/**
 * Day 20: Star Rating Component & Feedback System
 * 30 Days 30 JavaScript Projects
 */

// --- Mood & Feedback Metadata ---
const RATING_DATA = {
    1: { emoji: "😡", label: "Terrible", desc: "We're sorry to hear that. Tell us what went wrong." },
    2: { emoji: "🙁", label: "Poor", desc: "Below expectations. How can we do better?" },
    3: { emoji: "😐", label: "Average", desc: "Satisfactory, but there's room for improvement." },
    4: { emoji: "😊", label: "Good", desc: "Great! Glad you had a positive experience." },
    5: { emoji: "🤩", label: "Excellent!", desc: "Fantastic! Absolute perfection." }
};

// Initial Seed data for Community Rating Breakdown
const DEFAULT_REVIEWS = [
    { rating: 5, tags: ["Speed", "UI/UX"], comment: "Super fast and clean UI!" },
    { rating: 5, tags: ["Ease", "Features"], comment: "Very intuitive to navigate." },
    { rating: 4, tags: ["Speed"], comment: "Great experience overall." },
    { rating: 5, tags: ["UI/UX", "Reliable"], comment: "Amazing design quality!" },
    { rating: 3, tags: ["Features"], comment: "Pretty good baseline." },
    { rating: 5, tags: ["Speed", "Ease"], comment: "Loved the responsiveness." }
];

// --- DOM References ---
const starButtons = document.querySelectorAll('.star-btn');
const feedbackEmoji = document.getElementById('feedback-emoji');
const feedbackLabel = document.getElementById('feedback-label');
const feedbackSub = document.getElementById('feedback-sub');
const feedbackDetails = document.getElementById('feedback-details');
const chipButtons = document.querySelectorAll('.chip-btn');
const commentInput = document.getElementById('feedback-comment');
const charCount = document.getElementById('char-count');
const btnSubmit = document.getElementById('btn-submit');
const formView = document.getElementById('rating-form-view');
const successView = document.getElementById('rating-success-view');
const successSummaryText = document.getElementById('success-summary-text');
const submittedStarsDisplay = document.getElementById('submitted-stars-display');
const submittedScoreText = document.getElementById('submitted-score-text');
const btnEdit = document.getElementById('btn-edit');
const btnNewRating = document.getElementById('btn-new-rating');
const sessionCountBadge = document.getElementById('session-count-badge');
const statsHeaderToggle = document.getElementById('stats-header-toggle');
const statsDrawer = document.querySelector('.stats-drawer');
const statAvgScore = document.getElementById('stat-avg-score');
const statAvgStars = document.getElementById('stat-avg-stars');
const statTotalCount = document.getElementById('stat-total-count');
const statsBars = document.getElementById('stats-bars');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// --- State Variables ---
let selectedRating = 0;
let hoveredRating = 0;
let selectedTags = new Set();
let toastTimeout = null;

// --- Load Reviews from LocalStorage ---
function getStoredReviews() {
    try {
        const stored = localStorage.getItem('day20_star_reviews');
        if (stored) return JSON.parse(stored);
    } catch (e) {}
    return [...DEFAULT_REVIEWS];
}

function saveReviews(reviews) {
    try {
        localStorage.setItem('day20_star_reviews', JSON.stringify(reviews));
    } catch (e) {}
}

// --- Toast Feedback Helper ---
function showToast(message) {
    if (toastTimeout) clearTimeout(toastTimeout);
    toastMessage.textContent = message;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

// --- Update Stars Visual State ---
function renderStars(activeCount, isHover = false) {
    starButtons.forEach(btn => {
        const rating = parseInt(btn.getAttribute('data-rating'), 10);
        btn.classList.remove('hover-active', 'active');
        if (rating <= activeCount) {
            btn.classList.add(isHover ? 'hover-active' : 'active');
        }
    });
}

// --- Update Feedback Text & Emoji ---
function updateFeedback(rating) {
    if (!rating || rating === 0) {
        feedbackEmoji.textContent = "✨";
        feedbackLabel.textContent = "Select your rating";
        feedbackSub.textContent = "Hover or click any star to begin";
        feedbackEmoji.style.transform = "scale(1)";
        return;
    }

    const data = RATING_DATA[rating];
    if (data) {
        feedbackEmoji.textContent = data.emoji;
        feedbackLabel.textContent = `${rating} Star${rating > 1 ? 's' : ''} - ${data.label}`;
        feedbackSub.textContent = data.desc;
        feedbackEmoji.style.transform = "scale(1.25)";
        setTimeout(() => { feedbackEmoji.style.transform = "scale(1)"; }, 200);
    }
}

// --- Handle Star Selection ---
function selectRating(rating) {
    selectedRating = rating;
    renderStars(selectedRating, false);
    updateFeedback(selectedRating);

    // Pop animation on selected star
    const targetStar = document.querySelector(`.star-btn[data-rating="${rating}"]`);
    if (targetStar) {
        targetStar.classList.add('animate-pop');
        setTimeout(() => targetStar.classList.remove('animate-pop'), 400);
    }

    // Unlock extra fields
    feedbackDetails.classList.add('enabled');
    btnSubmit.disabled = false;
}

// --- Handle Hover Effects ---
starButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        const rating = parseInt(btn.getAttribute('data-rating'), 10);
        hoveredRating = rating;
        renderStars(rating, true);
        updateFeedback(rating);
    });

    btn.addEventListener('click', () => {
        const rating = parseInt(btn.getAttribute('data-rating'), 10);
        selectRating(rating);
    });
});

document.getElementById('stars-track').addEventListener('mouseleave', () => {
    hoveredRating = 0;
    renderStars(selectedRating, false);
    updateFeedback(selectedRating);
});

// --- Chip Button Toggles ---
chipButtons.forEach(chip => {
    chip.addEventListener('click', () => {
        const tag = chip.getAttribute('data-tag');
        if (selectedTags.has(tag)) {
            selectedTags.delete(tag);
            chip.classList.remove('selected');
        } else {
            selectedTags.add(tag);
            chip.classList.add('selected');
        }
    });
});

// --- Character Counter ---
commentInput.addEventListener('input', () => {
    const len = commentInput.value.length;
    charCount.textContent = `${len} / 200`;
});

// --- Submission Handler ---
btnSubmit.addEventListener('click', () => {
    if (selectedRating === 0) return;

    const review = {
        rating: selectedRating,
        tags: Array.from(selectedTags),
        comment: commentInput.value.trim(),
        date: new Date().toISOString()
    };

    const reviews = getStoredReviews();
    reviews.push(review);
    saveReviews(reviews);

    // Render Success View
    renderSuccessView(review);
    updateCommunityStats();
    showToast('Thank you! Your review has been recorded.');
});

// --- Render Success State ---
function renderSuccessView(review) {
    formView.classList.add('hidden');
    successView.classList.remove('hidden');

    const data = RATING_DATA[review.rating];
    successSummaryText.textContent = `You rated this ${review.rating} out of 5 stars ("${data.label}").`;

    // Render submitted stars
    submittedStarsDisplay.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.className = i <= review.rating ? 'fa-solid fa-star' : 'fa-regular fa-star';
        star.style.opacity = i <= review.rating ? '1' : '0.3';
        submittedStarsDisplay.appendChild(star);
    }

    submittedScoreText.textContent = `${review.rating}.0 / 5.0`;
}

// --- Edit & New Rating Actions ---
btnEdit.addEventListener('click', () => {
    successView.classList.add('hidden');
    formView.classList.remove('hidden');
});

btnNewRating.addEventListener('click', () => {
    selectedRating = 0;
    selectedTags.clear();
    chipButtons.forEach(c => c.classList.remove('selected'));
    commentInput.value = '';
    charCount.textContent = '0 / 200';
    feedbackDetails.classList.remove('enabled');
    btnSubmit.disabled = true;

    renderStars(0, false);
    updateFeedback(0);

    successView.classList.add('hidden');
    formView.classList.remove('hidden');
});

// --- Community Stats Engine ---
function updateCommunityStats() {
    const reviews = getStoredReviews();
    sessionCountBadge.textContent = `${reviews.length} reviews logged`;

    const total = reviews.length;
    if (total === 0) return;

    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let sum = 0;

    reviews.forEach(r => {
        const score = Math.min(5, Math.max(1, r.rating || 5));
        counts[score] = (counts[score] || 0) + 1;
        sum += score;
    });

    const avg = (sum / total).toFixed(1);
    statAvgScore.textContent = avg;
    statTotalCount.textContent = `Based on ${total} reviews`;

    // Render average stars
    const avgNum = parseFloat(avg);
    statAvgStars.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const icon = document.createElement('i');
        if (i <= Math.floor(avgNum)) {
            icon.className = 'fa-solid fa-star';
        } else if (i - 0.5 <= avgNum) {
            icon.className = 'fa-solid fa-star-half-stroke';
        } else {
            icon.className = 'fa-regular fa-star';
            icon.style.opacity = '0.3';
        }
        statAvgStars.appendChild(icon);
    }

    // Render bars breakdown
    statsBars.innerHTML = '';
    for (let stars = 5; stars >= 1; stars--) {
        const count = counts[stars] || 0;
        const pct = Math.round((count / total) * 100);

        const row = document.createElement('div');
        row.className = 'bar-row';
        row.innerHTML = `
            <span class="bar-star-num">${stars} ★</span>
            <div class="bar-track">
                <div class="bar-fill" style="width: ${pct}%"></div>
            </div>
            <span class="bar-percent">${pct}%</span>
        `;
        statsBars.appendChild(row);
    }
}

// --- Toggle Stats Drawer ---
statsHeaderToggle.addEventListener('click', () => {
    statsDrawer.classList.toggle('open');
});

// --- Initialize on Page Load ---
window.addEventListener('DOMContentLoaded', () => {
    updateFeedback(0);
    updateCommunityStats();
});
