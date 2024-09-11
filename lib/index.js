const omdbapiUrl = "https://www.omdbapi.com/";
const apiKey = "adf1f2d7";

// Here is 2 other API key if the one above doesn't work anymore:
// - 48727053
// - 8691812a

// Your turn to code!
const movieInput = document.querySelector("#movie-name");
const submit = document.querySelector(".btn-primary");
const cardRow = document.querySelector("#movie-cards");

const defaultPosterUrl = "lib/default_poster.jpg"; // Path to your default image

const search = (event) => {
  if (event) { event.preventDefault(); }
  const searchType = "s";
  const url = `${omdbapiUrl}?${searchType}=${movieInput.value}&apikey=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      cardRow.innerHTML = "";
      data.Search.forEach((movie) => {
        const posterUrl = (movie.Poster === "N/A") ? defaultPosterUrl : movie.Poster; // Use default if poster is not available
        const newCard = `<div class="col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card mb-2">
              <img src="${posterUrl}" class="card-img-top" alt="${movie.Title}">
              <div class="card-body">
                <span class="badge bg-primary mb-2">${movie.Year}</span>
                <h5 class="card-title">${movie.Title}</h5>
                <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">see more</a>
              </div>
            </div>
          </div>`;
        cardRow.insertAdjacentHTML("beforeend", newCard);
      });
    });
};



submit.addEventListener("click", search);
movieInput.addEventListener("keyup", search);
