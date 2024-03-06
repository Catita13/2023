// Load existing photos from local storage when the page loads
window.onload = function () {
    loadPhotos();
};

function uploadPhoto() {
    const photoInput = document.getElementById('photoInput');
    const commentInput = document.getElementById('commentInput');

    // Check if a photo is selected
    if (photoInput.files.length === 0) {
        alert("Please select a photo.");
        return;
    }

    // Create a photo object
    const photo = {
        src: URL.createObjectURL(photoInput.files[0]),
        comment: commentInput.value
    };

    // Save the photo to local storage
    savePhoto(photo);

    // Clear input values
    photoInput.value = '';
    commentInput.value = '';

    // Refresh the displayed photos
    loadPhotos();
}

function savePhoto(photo) {
    // Get existing photos from local storage
    const existingPhotos = JSON.parse(localStorage.getItem('photos')) || [];

    // Add the new photo
    existingPhotos.push(photo);

    // Save the updated photos to local storage
    localStorage.setItem('photos', JSON.stringify(existingPhotos));
}

function loadPhotos() {
    const photosSection = document.getElementById('uploadedPhotos');
    photosSection.innerHTML = ''; // Clear the existing content

    // Get photos from local storage
    const storedPhotos = JSON.parse(localStorage.getItem('photos')) || [];

    // Display each photo
    storedPhotos.forEach(function (photo) {
        const photoElement = document.createElement('div');
        photoElement.classList.add('photo');

        const imgElement = document.createElement('img');
        imgElement.src = photo.src;

        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = photo.comment;

        photoElement.appendChild(imgElement);
        photoElement.appendChild(commentElement);

        photosSection.appendChild(photoElement);
    });
}
