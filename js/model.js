import {
  SINGLE_GAME,
  URL_ALLGAME,
  URL_FEATURES,
  URL_GENRES,
} from "./config.js";
import { AJAX } from "./helpers.js";

// export const state = {
//   display: "",
//   id: "",
//   genreList: "",
// };

export async function getGames() {
  const games = await AJAX(URL_ALLGAME);
  return games.data;
}

export async function getGenres() {
  const genres = await AJAX(URL_GENRES);
  return genres.data;
}

export async function getFeatures() {
  const features = await AJAX(URL_FEATURES);
  return features.data;
}

export async function genreList(name) {
  const genreList = await AJAX(`${URL_ALLGAME}?genres=${name}`);
  // state.genreList = genreList;
  return genreList.data;
}

export async function singleGame(id) {
  const singleGame = await AJAX(`${SINGLE_GAME}/${id}`);
  return singleGame.data;
}

export async function loadSearchResults(query) {
  const searchResult = await AJAX(`${URL_ALLGAME}?q=${query}`);
  return searchResult.data;
}
