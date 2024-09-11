const omdbapiUrl = "https://www.omdbapi.com/";
const apiKey = "adf1f2d7";

// Here is 2 other API key if the one above doesn't work anymore:
// - 48727053
// - 8691812a

// Your turn to code!
const movieInput = document.querySelector("#movie-name");
const submit = document.querySelector(".btn-primary");
const cardRow = document.querySelector("#movie-cards");

const search = (event) => {
  // console.log(`${omdbapiUrl}?s=${movieInput.value}&apikey=${apiKey}`)
  if (event) { event.preventDefault(); }
  const searchType = "s";
  // if (movieInput.value.length == 4 && (movieInput.value.charAt(0) == "1"
  // || movieInput.value.charAt(0) == "2")) {searchType = "sy"}
  const url = `${omdbapiUrl}?${searchType}=${movieInput.value}&apikey=${apiKey}`;
  // console.log(url);
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      cardRow.innerHTML = "";
      data.Search.forEach((movie) => {
        const newCard = `<div class="col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card mb-2">
              <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
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
