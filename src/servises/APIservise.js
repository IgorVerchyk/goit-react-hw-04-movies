const apiKey = 'b04e212d2ef4d0344f463dce75b5d4cc';
const baseURL = 'https://api.themoviedb.org/3/';
const page = 1;

const fetchPopularMovies = () => {
  return fetch(`${baseURL}trending/movie/day?api_key=${apiKey}&page=${page}`)
    .then(res => res.json())
    .then(({ results }) => results);
};

const fetchByQuery = searchQuery => {
  return fetch(`${baseURL}search/movie?api_key=${apiKey}&query=${searchQuery}`)
    .then(res => res.json())
    .then(({ results }) => results);
};

const fetchMovieReviews = id => {
  return fetch(`${baseURL}movie/${id}/reviews?api_key=${apiKey}`)
    .then(res => res.json())
    .then(({ results }) => results);
};

const fetchMovieCast = id => {
  return fetch(`${baseURL}movie/${id}/credits?api_key=${apiKey}`)
    .then(res => res.json())
    .then(({ cast }) => cast);
};

const fetchMovieDetails = id => {
  return fetch(`${baseURL}movie/${id}?api_key=${apiKey}`).then(res =>
    res.json(),
  );
};

export default {
  fetchPopularMovies,
  fetchByQuery,
  fetchMovieReviews,
  fetchMovieCast,
  fetchMovieDetails,
};
