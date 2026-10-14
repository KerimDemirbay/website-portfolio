function playPause(videoId) {
    const video = document.getElementById(videoId);
    if (!video) return;

    if (video.paused) {
        video.play().catch(err => console.warn("Playback blocked:", err));
    } else {
        video.pause();
    }
}