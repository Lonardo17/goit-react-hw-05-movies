import axios from 'axios';

const KEY = 'e2bb6357fafcf90c43201415878c4138';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function popularMovies() {
  const fetch = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${KEY}&language=en-US&page=1`
  );

  return fetch.data;
}

export async function informationMovies(id) {
  const fetch = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
  );

  return fetch.data;
}

export async function creditsMovie(id) {
  const fetch = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US&page=1`
  );

  return fetch.data;
}

export async function reviewsMovie(id) {
  const fetch = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );

  return fetch.data;
}

export async function movieByName(name) {
  const fetch = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${name}&page=1&include_adult=false`
  );

  return fetch.data;
}