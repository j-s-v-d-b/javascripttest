document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById('cropped-image');
    var imageUrl = 'https://i.imgur.com/0SZjrzh.png'; // Replace this with the URL of your large image

    // Function to generate random crop coordinates
    function getRandomCropCoordinates() {
        var maxWidth = image.naturalWidth - image.clientWidth;
        var maxHeight = image.naturalHeight - image.clientHeight;
        var x = Math.floor(Math.random() * maxWidth);
        var y = Math.floor(Math.random() * maxHeight);
        return { x: x, y: y };
    }

    // Set new crop coordinates and update image source
    var cropCoordinates = getRandomCropCoordinates();
    image.src = imageUrl + '#xywh=' + cropCoordinates.x + ',' + cropCoordinates.y + ',' + image.clientWidth + ',' + image.clientHeight;
});
