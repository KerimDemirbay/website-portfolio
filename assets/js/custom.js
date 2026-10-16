function getContainer(el) {
    // Arrows live inside the slideshow; dots live in a sibling div after it
    const inside = el.closest(".slideshow-container");
    if (inside) return inside;
    let node = el.parentElement.previousElementSibling;
    while (node && !node.classList.contains("slideshow-container")) {
        node = node.previousElementSibling;
    }
    return node;
}

function getDots(container) {
    let node = container.nextElementSibling;
    while (node && !node.querySelector(".dot")) {
        node = node.nextElementSibling;
    }
    return node ? node.querySelectorAll(".dot") : [];
}

function showSlides(container, n) {
    const slides = container.getElementsByClassName("mySlides");
    const dots = getDots(container);
    let index = n;
    if (index > slides.length) index = 1;
    if (index < 1) index = slides.length;

    for (const slide of slides) slide.style.display = "none";
    for (const dot of dots) dot.classList.remove("active");

    slides[index - 1].style.display = "block";
    if (dots[index - 1]) dots[index - 1].classList.add("active");
    container.dataset.index = index;
}

function plusSlides(el, n) {
    const container = getContainer(el);
    showSlides(container, Number(container.dataset.index || 1) + n);
}

function currentSlide(el, n) {
    showSlides(getContainer(el), n);
}

// Initialise every slideshow on the page
document.querySelectorAll(".slideshow-container").forEach(c => showSlides(c, 1));

function playPause(videoId) {
    const video = document.getElementById(videoId);
    if (!video) return;

    if (video.paused) {
        video.play().catch(err => console.warn("Playback blocked:", err));
    } else {
        video.pause();
    }
}