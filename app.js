const movieListEl = document.querySelector(".movies");
const spinnerEl = document.querySelector(".spinner");

function init() {
  fetchMovies("avengers");
}

function onSearchChange(event) {
  const query = event.target.value;
  fetchMovies(query);
}

async function fetchMovies(query) {
  spinnerEl.classList.remove("hidden");
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=e1e9d522&s=${query}`
  );
  const moviesData = await response.json();
  const movies = moviesData.Search;

  movieListEl.innerHTML = movies.map((movie) => movieHTML(movie)).join("");
  spinnerEl.classList.add("hidden");
}

function movieHTML(movie) {
  return `
        <div class="movie">
          <figure class="movie_img--wrapper">
            <img 
              class="movie_img" 
              src="${movie.Poster}" 
              alt="${movie.Title}" 
            />
          </figure>
          <div class="movie_info">
            <p><b>Title:</b> ${movie.Title}</p>
            <p><b>Release date:</b> ${movie.Year}</p>
          </div>
        </div>
      `;
}

init();
