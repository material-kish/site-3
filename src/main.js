window.showOverlay = function(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.display = 'flex'; // Makes the overlay visible
};

window.hideOverlay = function(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.display = 'none'; // Hides the overlay
};
