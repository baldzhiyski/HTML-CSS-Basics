// Function to extract movie ID from URL query parameters
function getMovieIdFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

// Function to fetch movie details from the API
async function fetchMovieDetails(movieId) {
    const API_KEY = '09ddbcb047862577a7832d9c81c93eb6';// Replace with your API key
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}

// Function to update HTML content with movie details
function updateMovieDetails(movie) {
    document.getElementById('poster').src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    document.getElementById('title').textContent = movie.title;
    document.getElementById('overview').textContent = movie.overview;
    document.getElementById('release-date').textContent = `Release Date: ${movie.release_date}`;
    document.getElementById('genres').textContent = `Genres: ${movie.genres.map(genre => genre.name).join(', ')}`;
    document.getElementById('runtime').textContent = `Runtime: ${movie.runtime} minutes`;
    document.getElementById('vote-average').textContent = `Vote Average: ${movie.vote_average}`;
    document.getElementById('vote-count').textContent = `Vote Count: ${movie.vote_count}`;
}

// Main function to fetch movie details and update HTML content
async function main() {
    const movieId = getMovieIdFromURL();
    if (movieId) {
        const movie = await fetchMovieDetails(movieId);
        if (movie) {
            updateMovieDetails(movie);
        } else {
            console.error('Error fetching movie details.');
        }
    } else {
        console.error('Movie ID not found in URL.');
    }
}

// Call the main function to start the process
main();
