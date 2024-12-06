import { View } from "./views.js";

class singleGameView extends View {
  _parentElement = document.querySelector(".content");
  _errorMessage = "";
  _message = "";

  constructor() {
    super();
  }

  addHandlerSingleClick(handler) {
    this.defaultDisplay.addEventListener("click", function (e) {
      const btn = e.target.closest(".content__display__card");
      if (!btn) return;
      const game = btn.dataset.game;
      handler(game);
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
                    <strong>Negative Rating 🫠:</strong> ${
                      singleGame.negative_ratings
                    }
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
}

export default new singleGameView();
