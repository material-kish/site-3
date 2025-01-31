window.showOverlay = function(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.display = 'flex'; // Makes the overlay visible
};

window.hideOverlay = function(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.display = 'none'; // Hides the overlay
};

// Add click event listener to all overlay containers
document.querySelectorAll('.project-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(event) {
        // If the click is directly on the overlay (not its children)
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

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
