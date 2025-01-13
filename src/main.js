window.showOverlay = function(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.display = 'flex'; // Makes the overlay visible
};

window.hideOverlay = function(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.display = 'none'; // Hides the overlay
};

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Find all visible overlays and hide them
        document.querySelectorAll('.project-overlay').forEach(overlay => {
            if (overlay.style.display === 'flex') {
                overlay.style.display = 'none';
            }
        });
    }
});
