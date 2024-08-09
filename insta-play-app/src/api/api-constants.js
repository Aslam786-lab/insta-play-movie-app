const BASE_DOMAIN = "https://api.themoviedb.org/3";

const API_KEY = "019085ae8fd360fcd800ae1d44592de2";

export const accessTokenApi = `${BASE_DOMAIN}/authentication/token/new?api_key=${API_KEY}`;
export const loginApi = `${BASE_DOMAIN}/authentication/token/validate_with_login?api_key=${API_KEY}`;
export const fetchMovieApi = `${BASE_DOMAIN}/trending/movie/day?api_key=${API_KEY}`;
export const searchMovieApi = `${BASE_DOMAIN}/search/movie?api_key=${API_KEY}&language=en-US`;
export const fetchMovieDetailsApi = (movieId) =>
  `${BASE_DOMAIN}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

export const fetchMovieTrailerApi = (movieId) =>
  `${BASE_DOMAIN}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
