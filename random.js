document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById('cropped-image');
    var imageUrl = 'https://i.imgur.com/0SZjrzh.png'; // Replace this with the URL of your large image
    var containerWidth = 640; // Width of the image container
    var containerHeight = 640; // Height of the image container

    // Function to generate random crop coordinates
    function getRandomCropCoordinates() {
        var x = Math.floor(Math.random() * (image.naturalWidth - containerWidth));
        var y = Math.floor(Math.random() * (image.naturalHeight - containerHeight));
        return { x: x, y: y };
    }

    // Load event handler to set image source after dimensions are available
    image.addEventListener('load', function() {
        var cropCoordinates = getRandomCropCoordinates();
        var cropWidth = containerWidth;
        var cropHeight = containerHeight;
        image.style.objectPosition = `-${cropCoordinates.x}px -${cropCoordinates.y}px`;
        image.style.objectFit = 'none';
        image.style.width = cropWidth + 'px';
        image.style.height = cropHeight + 'px';
    });

    // Set initial image source
    image.src = imageUrl;
});
