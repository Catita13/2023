function searchMovies() {
    const searchTerm = document.getElementById('searchInput').value;

    const apiKey = '2735b4972abe1c1a50fcf235e7bcc49e';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            data.results.forEach(movie => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';

                const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'no-poster-available.jpg';

                resultItem.innerHTML = `
                    <div>
                        <img src="${posterUrl}" alt="${movie.title} Poster" />
                    </div>
                    <div>
                        <h3>${movie.title}</h3>
                        <p>${movie.overview}</p>
                    </div>
                `;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            console.error('Error fetching data:', xhr.statusText);
            resultsContainer.innerHTML = '<p>Please, try again.</p>';
        }
    };
    xhr.onerror = function() {
        console.error('Error fetching data:', xhr.statusText);
        resultsContainer.innerHTML = '<p>Please, try again.</p>';
    };
    xhr.send();
}