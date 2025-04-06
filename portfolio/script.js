function playVideo(img) {
    // Hide the thumbnail image
    img.style.display = 'none';
    // Show the iframe
    img.nextElementSibling.style.display = 'block';
}