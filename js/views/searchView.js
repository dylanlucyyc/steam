import { View } from "./views.js";

class searchView extends View {
  _parentElement = document.querySelector(".content");
  _errorMessage = "";
  _message = "";

  constructor() {
    super();
    this.searchForm = document.querySelector(".search__form");
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

    this._parentElement.innerHTML = `  <h1 class="content__title">Results for "${query}":</h1>
            <div class="content__display">
            ${searchMarkup}
            </div>`;
  }
}

export default new searchView();
