function getDots(container) {
    // The dots live in a div that comes after the slideshow container
    let node = container.nextElementSibling;
    while (node && !node.querySelector(".dot")) {
        node = node.nextElementSibling;
    }
    return node ? node.querySelectorAll(".dot") : [];
}

document.querySelectorAll(".slideshow-container").forEach(container => {
    const slides = container.querySelectorAll(".mySlides");
    const dots = getDots(container);
    let index = 1;

    function show(n) {
        if (n > slides.length) n = 1;
        if (n < 1) n = slides.length;
        index = n;
        slides.forEach((slide, i) => {
            slide.style.display = i === index - 1 ? "block" : "none";
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index - 1);
        });
    }

    container.querySelector(".prev").addEventListener("click", () => show(index - 1));
    container.querySelector(".next").addEventListener("click", () => show(index + 1));
    dots.forEach((dot, i) => dot.addEventListener("click", () => show(i + 1)));

    show(1);
});

function playPause(videoId) {
    const video = document.getElementById(videoId);
    if (!video) return;

    if (video.paused) {
        video.play().catch(err => console.warn("Playback blocked:", err));
    } else {
        video.pause();
    }
}