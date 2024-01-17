function refreshPage() {
    window.location.reload();
}

function uploadPhoto() {
    const photoInput = document.getElementById('photoInput');
    const commentInput = document.getElementById('commentInput');

    // Create photo element
    const photoElement = document.createElement('div');
    photoElement.classList.add('photo');

    // Create image element
    const imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(photoInput.files[0]);

    // Create comment element
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.textContent = commentInput.value;

    // Append elements to photo element
    photoElement.appendChild(imgElement);
    photoElement.appendChild(commentElement);

    // Append photo element to photos section
    const photosSection = document.querySelector('.photos');
    photosSection.appendChild(photoElement);

    // Clear input values
    photoInput.value = '';
    commentInput.value = '';
}