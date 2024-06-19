// Show a preview of the photo and comment
function showPreview() {
    const photoInput = document.getElementById('photoInput');
    const commentInput = document.getElementById('commentInput');
    const previewImage = document.getElementById('previewImage');
    const previewComment = document.getElementById('previewComment');

    // Show image preview if a file is selected
    if (photoInput.files && photoInput.files[0]) {
        previewImage.src = URL.createObjectURL(photoInput.files[0]);
        previewImage.style.display = 'block';
    } else {
        previewImage.src = '';
        previewImage.style.display = 'none';
    }

    // Show comment preview
    previewComment.textContent = commentInput.value;
}

// Upload the photo and save to local storage
function uploadPhoto() {
    const photoInput = document.getElementById('photoInput');
    const commentInput = document.getElementById('commentInput');

    // Check if a photo is selected
    if (photoInput.files.length === 0) {
        alert("Por favor, escolhe uma fotografia.");
        return;
    }

    // Create a photo object
    const photo = {
        id: Date.now(), // Unique ID for each photo
        src: URL.createObjectURL(photoInput.files[0]),
        comment: commentInput.value
    };

    // Save the photo to local storage
    savePhoto(photo);

    // Clear input values and preview
    photoInput.value = '';
    commentInput.value = '';
    document.getElementById('previewImage').style.display = 'none';
    document.getElementById('previewComment').textContent = '';

    // Refresh the displayed photos
    loadPhotos();
}

// Save the photo object to local storage
function savePhoto(photo) {
    // Get existing photos from local storage
    const existingPhotos = JSON.parse(localStorage.getItem('photos')) || [];

    // Add the new photo
    existingPhotos.push(photo);

    // Save the updated photos to local storage
    localStorage.setItem('photos', JSON.stringify(existingPhotos));
}

// Load photos from local storage
function loadPhotos() {
    const photosSection = document.getElementById('uploadedPhotos');
    if (photosSection) {
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

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                if (confirm('Are you sure you want to delete this photo?')) {
                    deletePhoto(photo.id);
                    loadPhotos(); // Reload photos after deletion
                }
            });

            photoElement.appendChild(imgElement);
            photoElement.appendChild(commentElement);
            photoElement.appendChild(deleteButton);

            photosSection.appendChild(photoElement);
        });
    }
}

// Delete a photo from local storage
function deletePhoto(id) {
    // Get existing photos from local storage
    const existingPhotos = JSON.parse(localStorage.getItem('photos')) || [];

    // Filter out the photo with the given ID
    const updatedPhotos = existingPhotos.filter(photo => photo.id !== id);

    // Save the updated photos to local storage
    localStorage.setItem('photos', JSON.stringify(updatedPhotos));
}

// Call loadPhotos on page load
window.onload = function () {
    loadPhotos();
};

// Refresh page function
function refreshPage() {
    window.location.reload();
}