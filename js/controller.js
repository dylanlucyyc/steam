import * as model from "./model.js";
import { View } from "./views.js";

class Controller {
  constructor() {
    this.view = new View();
  }

  async handleGenres(name) {
    // this.view.renderSingle(model.state.id);
    // console.log(id);
    const genreList = await model.genreList(name);
    // console.log(name, genreList);
    this.view.renderGenre(name, genreList);
  }

  async handleSingle(id) {
    const singleGame = await model.singleGame(id);
    this.view.renderSingleGame(singleGame);
  }

  async handleSearch() {
    const query = this.view.getQuery();
    console.log(query);
    if (!query) return;
    const searchResult = await model.loadSearchResults(query);
    this.view.renderSearchResults(query, searchResult);
  }

  init() {
    // Get data from the model
    const games = model.getGames();
    const genres = model.getGenres();
    const features = model.getFeatures();

    // Update the view with the data
    this.view.renderDefault(games, features);
    this.view.renderGenres(genres);
    this.view.addHandlerClick(this.handleGenres.bind(this));
    this.view.addHandlerSingleClick(this.handleSingle.bind(this));
    this.view.addHandlerSearch(this.handleSearch.bind(this));
  }
}

// Instantiate and initialize the controller
const controller = new Controller();
controller.init();
