import * as model from "./model.js";

export class View {
  constructor() {
    this.contentDisplay = document.querySelector(".content__display");
    this.featureDisplay = document.querySelector(".content__features");
    this.genresDisplay = document.querySelector(".genres-list");
    this.defaultDisplay = document.querySelector(".content");
    this.searchForm = document.querySelector(".search__form");
  }

  addHandlerClick(handler) {
    this.genresDisplay.addEventListener("click", function (e) {
      const btn = e.target.closest(".genres-list__button");
      if (!btn) return;
      const genres = btn.dataset.genres;
      handler(genres);
    });
  }

  addHandlerSingleClick(handler) {
    this.defaultDisplay.addEventListener("click", function (e) {
      const btn = e.target.closest(".content__display__card");
      if (!btn) return;
      const game = btn.dataset.game;
      handler(game);
    });
  }

  renderGenre(name, genreList) {
    const genreListMarkup = genreList
      .map(
        (game) => `
    <a class="content__display__card" href="${game.appid}">
      <img class="content__display__image" src="${game.header_image}" alt="" />
      <h2 class="content__display__title">${game.name}</h2>
    </a>
`
      )
      .join("");

    this.defaultDisplay.innerHTML = `<h1 class="content__title">${name.toUpperCase()}:</h1>   
        <div class="content__display">
        ${genreListMarkup}
        </div>`;
  }

  renderDefault(games, features) {
    const featureMarkup = features
      .map(
        (feature) => `
      <a class="content__display__card" data-game="${feature.appid}">
        <img class="content__display__image" src="${feature.header_image}" alt="" />
        <h2 class="content__display__title">${feature.name}</h2>
      </a>
`
      )
      .join("");

    const gamesMarkup = games
      .map(
        (game) => `
        <a class="content__display__card" data-game="${game.appid}">
          <img class="content__display__image" src="${game.header_image}" alt="" />
          <h2 class="content__display__title">${game.name}</h2>
        </a>
    `
      )
      .join("");

    this.defaultDisplay.innerHTML = `  <h1 class="content__title">Best of all time:</h1>
        <div class="content__features">
         ${featureMarkup} 
        </div>
        <h1 class="content__title">Search Result:</h1>
        <div class="content__display">
        ${gamesMarkup}
        </div>`;
  }

  renderGenres(genres) {
    const genresMarkup = genres
      .map(
        (genre) => `
        <li class="genres-list__item">
            <a class="genres-list__button" data-genres="${genre.name}">${genre.name}</a>
        </li>
    `
      )
      .join("");

    this.genresDisplay.innerHTML = genresMarkup;
  }

  getQuery() {
    const query = this.searchForm.querySelector(".search__input").value;
    // this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this.searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  renderSingleGame(singleGame) {
    const singleGameMarkup = `
        <div class="single">
        <div class="single__header">
          <h2 class="single__title">${singleGame.name}</h2>
          <p class="single__price">${
            singleGame.price === 0 ? "Free" : `$${singleGame.price}`
          }</p>
        </div>
        <div class="single__box">
          <img
            class="single__img"
            src="${singleGame.header_image}"
            alt="Poster ${singleGame.name}"
          />
          <div class="single__info">
            <p class="single__description">
              <strong>Description: </strong> ${singleGame.description}
            </p>
            <p class="single__detail">
              <strong>Positive Review 🌟:</strong> ${
                singleGame.positive_ratings
              }
            </p>
            <p class="single__detail">
              <strong>Negative Rating 🫠:</strong> ${singleGame.negative_ratings}
            </p>
            <p class="single__detail"><strong>Developer:</strong> ${singleGame.developer.join(
              ", "
            )}</p>
          </div>
        </div>
        <div class="single__tags">
          <h3>Genres:</h3>
          <ul>
         ${singleGame.genres
           .map((genre) => `<li><a>${genre.toUpperCase()}</a></li>`)
           .join("")}
           
          </ul>
        </div>
      </div>
    `;
    this.defaultDisplay.innerHTML = singleGameMarkup;
  }

  renderSearchResults(query, searchResult) {
    console.log(searchResult);
    const searchMarkup = searchResult
      .map(
        (search) => `
    <a class="content__display__card" data-game="${search.appid}">
      <img class="content__display__image" src="${search.header_image}" alt="" />
      <h2 class="content__display__title">${search.name}</h2>
    </a>
`
      )
      .join("");

    this.defaultDisplay.innerHTML = `  <h1 class="content__title">Results for "${query}":</h1>
      <div class="content__display">
      ${searchMarkup}
      </div>`;
  }
}
