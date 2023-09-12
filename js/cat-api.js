import axios from "axios";

const BASE_URL = `https://api.thecatapi.com/v1/`;
const END_POINT = "breeds";
const API_KEY = "live_tPwwbnWP694gnm07CqjMHUl9HU1UtcKQoJwQw8smvtjUU8kPon5Y9KAhe51haAcJ";

axios.defaults.headers.common["x-api-key"] = API_KEY;
axios.defaults.baseURL = BASE_URL;

function fetchBreeds() {
  return axios.get(END_POINT);
}

function fetchCatByBreed(breedId) {
  return axios.get(`images/search?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };