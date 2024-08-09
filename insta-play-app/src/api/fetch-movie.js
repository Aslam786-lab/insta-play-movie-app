import {
  accessTokenApi,
  fetchMovieApi,
  fetchMovieDetailsApi,
  fetchMovieTrailerApi,
  loginApi,
  searchMovieApi,
} from "./api-constants";
import { fetchAPI } from "./fetch-helper";

export const fetchToken = async () => {
  try {
    const response = await fetchAPI({
      url: accessTokenApi,
    });
    const token = await response.json();
    return token.request_token;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await fetchAPI({
      method: "POST",
      url: loginApi,
      body: payload,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovies = async (pageNumber) => {
  try {
    const response = await fetchAPI({
      url: `${fetchMovieApi}&page=${pageNumber}`,
    });
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearchedMovies = async (searchText, pageNumber) => {
  try {
    const response = await fetchAPI({
      url: `${searchMovieApi}&query=${searchText}&page=${pageNumber}&include_adult=false`,
    });
    const searchResults = await response.json();
    return searchResults;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieDetails = async ({ movieId }) => {
  try {
    const response = await fetchAPI({
      url: fetchMovieDetailsApi(movieId),
    });
    const details = await response.json();
    return details;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieTrailer = async ({ movieId }) => {
  try {
    const response = await fetchAPI({
      url: fetchMovieTrailerApi(movieId),
    });

    const trailerList = await response.json();
    const trailerId = trailerList.results[0].key;
    return trailerId;
  } catch (error) {
    console.error(error);
  }
};
