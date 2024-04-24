function refreshPage() {
    window.location.reload();
}

const publications = [
    { id: 1, imageUrl: 'image1.jpg', comments: ['Great photo!', 'Awesome!', 'Love it!'], likes: 10 },
    { id: 2, imageUrl: 'image2.jpg', comments: ['Beautiful!', 'Amazing view!'], likes: 20 },
    { id: 3, imageUrl: 'image3.jpg', comments: ['Nice shot!', 'Incredible!'], likes: 15 },
];

function renderPublications() {
    const photosSection = document.getElementById('uploadedPhotos');
    photosSection.innerHTML = '';

    publications.forEach(publication => {
        const publicationElement = document.createElement('div');
        publicationElement.classList.add('publication');

        const imgElement = document.createElement('img');
        imgElement.src = publication.imageUrl;

        const commentSection = document.createElement('div');
        commentSection.classList.add('comment-section');

        publication.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.textContent = comment;
            commentSection.appendChild(commentElement);
        });

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.textContent = `Like (${publication.likes})`;
        likeButton.addEventListener('click', () => {
            publication.likes++;
            likeButton.textContent = `Like (${publication.likes})`;
        });

        publicationElement.appendChild(imgElement);
        publicationElement.appendChild(commentSection);
        publicationElement.appendChild(likeButton);

        photosSection.appendChild(publicationElement);
    });
}

renderPublications();