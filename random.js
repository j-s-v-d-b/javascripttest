document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById('cropped-image');
    var imageUrl = 'https://i.imgur.com/0SZjrzh.png'; // Replace this with the URL of your large image
    var containerWidth = 640; // Width of the image container
    var containerHeight = 640; // Height of the image container

    // Function to generate random crop coordinates
    function getRandomCropCoordinates() {
        var maxWidth = image.naturalWidth - containerWidth;
        var maxHeight = image.naturalHeight - containerHeight;
        var x = Math.floor(Math.random() * maxWidth);
        var y = Math.floor(Math.random() * maxHeight);
        return { x: x, y: y };
    }

    // Function to update image source with a random part of the large image
    function updateImageSource() {
        var cropCoordinates = getRandomCropCoordinates();
        image.src = imageUrl + '#xywh=' + cropCoordinates.x + ',' + cropCoordinates.y + ',' + containerWidth + ',' + containerHeight;
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

    // Call the updateImageSource function to change the image source
    updateImageSource();
});
