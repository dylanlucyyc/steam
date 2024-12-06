import { View } from "./views.js";

class genreView extends View {
  _parentElementDisplay = document.querySelector(".genres-list");
  _parentElement = document.querySelector(".content");
  _errorMessage = "";
  _message = "";

  constructor() {
    super();
  }

  addHandlerClick(handler) {
    this.genresDisplay.addEventListener("click", function (e) {
      const btn = e.target.closest(".genres-list__button");
      if (!btn) return;
      const genres = btn.dataset.genres;
      handler(genres);
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

  renderGenres(genres) {
    this.renderSpinner();
    const genresMarkup = genres
      .map(
        (genre) => `
              <li class="genres-list__item">
                  <a class="genres-list__button" data-genres="${genre.name}">${genre.name}</a>
              </li>
          `
      )
      .join("");
    this._clear();
    this._parentElementDisplay.innerHTML = genresMarkup;
  }
}

export default new genreView();
