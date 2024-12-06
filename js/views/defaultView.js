import { View } from "./views.js";

class defaultView extends View {
  _parentElement = document.querySelector(".content");
  _errorMessage = "";
  _message = "";

  constructor() {
    super();
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
}

export default new defaultView();
