// Track download button clicks with Plausible when present
window.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-btn');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            if (window.plausible) {
                window.plausible('download-drumkit', { props: { source: 'downloads-page' } });
            }
        });
    }

    // Track first interaction with playlist embed (BUY page)
    const playlistOverlay = document.getElementById('playlist-overlay');
    if (playlistOverlay) {
        const fireOnce = () => {
            if (window.plausible) {
                window.plausible('playlist-opened');
            }
            playlistOverlay.removeEventListener('click', fireOnce);
            playlistOverlay.style.display = 'none';
        };
        playlistOverlay.addEventListener('click', fireOnce);
    }
});