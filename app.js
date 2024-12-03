async function main() {
    const response = await fetch("https://www.omdbapi.com/?apikey=e1e9d522&s=avengers");
    const moviesData = await response.json();
    const movies = moviesData.Search;
    const movieListEl = document.querySelector(".movies");
    movieListEl.innerHTML = movies
      .map(
        (movie) => `
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
      )
      .join("");
  }
  
  main();
