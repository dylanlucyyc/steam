import {
  SINGLE_GAME,
  URL_ALLGAME,
  URL_FEATURES,
  URL_GENRES,
} from "./config.js";
import { AJAX } from "./helpers.js";

export const state = {
  display: "",
  id: "",
};

const games = await AJAX(URL_ALLGAME);
const genres = await AJAX(URL_GENRES);
const features = await AJAX(URL_FEATURES);

export function getGames() {
  return games.data;
}

export function getGenres() {
  return genres.data;
}

export function getFeatures() {
  return features.data;
}

export async function genreList(name) {
  const genreList = await AJAX(`${URL_ALLGAME}?genres=${name}`);
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
