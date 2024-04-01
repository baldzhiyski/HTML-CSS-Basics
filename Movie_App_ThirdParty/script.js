const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=09ddbcb047862577a7832d9c81c93eb6&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=09ddbcb047862577a7832d9c81c93eb6&query="'
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


getMovies(API_URL);

async function getMovies(url){
    const res = await fetch(url);

    const data = await res.json();
    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = '';
    movies.forEach((movie) =>{
        const {id,title, poster_path, vote_average, overview} = movie;

        const movieEl = document.createElement('div');

        movieEl.classList.add('movie');
        movieEl.dataset.movieId = id;
        
        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    ` ;
    movieEl.addEventListener('click', function() {

        // The id is interpolated into the URL string using template literals. This URL is constructed dynamically, with the id parameter appended as a query parameter.
        const fullMovieInfoURL = `movie-details.html?id=${id}`;
        // Redirect to the full movie info page and then access the id 
        window.location.href = fullMovieInfoURL;
    });
    main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if(vote >= 7) {
        return 'gold'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    }else{
        window.location.reload();
    }
})
