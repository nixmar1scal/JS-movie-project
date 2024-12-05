const movieListEl = document.querySelector(".movies");
const searcjInputEl = document.querySelector(".search-input");

function onSearchChange(event) {
  const searchQuery = event.target.value;
  main(searchQuery);
}

async function main(searchQuery) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=e1e9d522&s=${searchQuery}`
  );
  const moviesData = await response.json();
  const movies = moviesData.Search;
  
  movieListEl.innerHTML = movies.map((movie) => movieHTML(movie)).join("");
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
      `
}

searchInputEl.addEventListener("input", onSearchChange);

main();