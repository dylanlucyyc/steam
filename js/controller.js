import * as model from "./model.js";
import defaultView from "./views/defaultView.js";
import genreView from "./views/genreView.js";
import searchView from "./views/searchView.js";
import singleGameView from "./views/singleGameView.js";

async function handleGenres(name) {
  try {
    genreView.renderSpinner();
    const genreList = await model.genreList(name);
    genreView.renderGenre(name, genreList);
  } catch (error) {}
}

async function handleSingle(id) {
  try {
    singleGameView.renderSpinner();
    const singleGame = await model.singleGame(id);
    singleGameView.renderSingleGame(singleGame);
  } catch (error) {}
}

async function handleSearch() {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    searchView.renderSpinner();
    const searchResult = await model.loadSearchResults(query);
    searchView.renderSearchResults(query, searchResult);
  } catch (error) {}
}

async function handleGenreList() {
  try {
    genreView.renderSpinner();
    const genres = await model.getGenres();
    genreView.renderGenres(genres);
  } catch (error) {}
}

async function getDefault() {
  try {
    defaultView.renderSpinner();
    const games = await model.getGames();
    const features = await model.getFeatures();
    defaultView.renderDefault(games, features);
  } catch (error) {}
}

const init = function () {
  handleGenreList();
  getDefault();
  handleSearch();
  searchView.addHandlerSearch(handleSearch);
  singleGameView.addHandlerSingleClick(handleSingle);
  genreView.addHandlerClick(handleGenres);
};

init();
