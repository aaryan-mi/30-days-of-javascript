document.addEventListener("DOMContentLoaded", () => {
    const slides = [
        {
            video: "assets/videos/v1.webm",
            type: "video/webm",
            poster: "assets/images/thumb1.jpg",
            tag: "NATURE & LANDSCAPES",
            title: "Cascading Waterfalls",
            desc: "Experience the serene power of natural cascades rushing through lush wilderness valleys."
        },
        {
            video: "assets/videos/v2.webm",
            type: "video/webm",
            poster: "assets/images/thumb2.jpg",
            tag: "AFRICAN WILDLIFE",
            title: "Pride of the Savannah",
            desc: "Witness majestic lions interacting in their golden sunlit savannah habitat."
        },
        {
            video: "assets/videos/v3.webm",
            type: "video/webm",
            poster: "assets/images/thumb3.jpg",
            tag: "COASTAL HORIZON",
            title: "Golden Sunset Coast",
            desc: "Watch coastal horizons glow as ships navigate calm twilight waters."
        },
        {
            video: "assets/videos/v4.mp4",
            type: "video/mp4",
            poster: "assets/images/thumb4.jpg",
            tag: "FLORA & BOTANY",
            title: "Botanical Bloom",
            desc: "Admire the delicate unfolding of seasonal flowers in vibrant high definition."
        }
    ];

    let currentIndex = 0;

    const mainVideo = document.getElementById("main-video");
    const slideTag = document.getElementById("slide-tag");
    const slideTitle = document.getElementById("slide-title");
    const slideDesc = document.getElementById("slide-desc");

    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const thumbCards = document.querySelectorAll(".thumb-card");

    const btnPlayPause = document.getElementById("btn-play-pause");
    const playIcon = document.getElementById("play-icon");
    const pauseIcon = document.getElementById("pause-icon");
    const btnMute = document.getElementById("btn-mute");
    const muteIcon = document.getElementById("btn-mute svg");
    const btnFullscreen = document.getElementById("btn-fullscreen");
    const progressBar = document.getElementById("progress-bar");
    const progressContainer = document.getElementById("progress-container");
    const videoStage = document.getElementById("video-stage");

    function loadSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const data = slides[currentIndex];

        // Fade transition
        mainVideo.style.opacity = "0.2";

        setTimeout(() => {
            mainVideo.src = data.video;
            mainVideo.poster = data.poster;
            mainVideo.load();
            mainVideo.play().catch(() => {});

            slideTag.textContent = data.tag;
            slideTitle.textContent = data.title;
            slideDesc.textContent = data.desc;

            mainVideo.style.opacity = "1";
            updatePlayPauseState(true);
        }, 150);

        // Update Thumbnails Active Class
        thumbCards.forEach((card, idx) => {
            card.classList.toggle("active", idx === currentIndex);
        });
    }

    function updatePlayPauseState(isPlaying) {
        if (isPlaying) {
            playIcon.style.display = "none";
            pauseIcon.style.display = "block";
        } else {
            playIcon.style.display = "block";
            pauseIcon.style.display = "none";
        }
    }

    // Play / Pause Toggle
    btnPlayPause.addEventListener("click", () => {
        if (mainVideo.paused) {
            mainVideo.play();
            updatePlayPauseState(true);
        } else {
            mainVideo.pause();
            updatePlayPauseState(false);
        }
    });

    // Mute / Unmute Toggle
    btnMute.addEventListener("click", () => {
        mainVideo.muted = !mainVideo.muted;
        btnMute.style.color = mainVideo.muted ? "#f87171" : "#ffffff";
    });

    // Fullscreen Toggle
    btnFullscreen.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            videoStage.requestFullscreen().catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    });

    // Progress Bar Tracker
    mainVideo.addEventListener("timeupdate", () => {
        if (mainVideo.duration) {
            const percentage = (mainVideo.currentTime / mainVideo.duration) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    });

    // Seek on Progress Bar Click
    progressContainer.addEventListener("click", (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const clickPosition = (e.clientX - rect.left) / rect.width;
        if (mainVideo.duration) {
            mainVideo.currentTime = clickPosition * mainVideo.duration;
        }
    });

    // Next / Previous Navigation
    prevBtn.addEventListener("click", () => loadSlide(currentIndex - 1));
    nextBtn.addEventListener("click", () => loadSlide(currentIndex + 1));

    // Thumbnail Click Navigation
    thumbCards.forEach((card) => {
        card.addEventListener("click", () => {
            const targetIndex = parseInt(card.dataset.index, 10);
            loadSlide(targetIndex);
        });
    });

    // Keyboard Controls
    document.addEventListener("keydown", (e) => {
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

        if (e.key === "ArrowRight") {
            loadSlide(currentIndex + 1);
        } else if (e.key === "ArrowLeft") {
            loadSlide(currentIndex - 1);
        } else if (e.key === " " || e.code === "Space") {
            e.preventDefault();
            btnPlayPause.click();
        } else if (e.key === "m" || e.key === "M") {
            btnMute.click();
        } else if (e.key === "f" || e.key === "F") {
            btnFullscreen.click();
        }
    });

    // Initialize First Slide
    loadSlide(0);
});
