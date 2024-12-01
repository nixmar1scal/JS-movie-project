// "https://www.omdbapi.com/?apikey=e1e9d522&s=avengers"

async function main() {
  const response = await fetch("https://www.omdbapi.com/?apikey=e1e9d522&s=avengers");
  const moviesData = await response.json();
  console.log(moviesData);
  const movies = moviesData.Search;
  movies.map((movie) => {
    const movieElement = `
      <div class="movie">
        <figure class="movie__img--wrapper">
          <img 
            class="movie__img" 
            src="${movie.Poster}" 
            alt="${movie.Title}" 
          />
        </figure>
        <div class="movie__info">
          <p><b>Title:</b> ${movie.Title}</p>
          <p><b>Release date:</b> ${movie.Year}</p>
        </div>
      </div>`;
    
    document.body.innerHTML += movieElement;
  });
}

main();
