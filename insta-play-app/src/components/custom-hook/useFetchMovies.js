import { useState, useCallback } from "react";

import { fetchMovies, fetchSearchedMovies } from "../../api/fetch-movie";
import { debounce } from "../../helper/movie-helper";

export const useFetchMovies = (searchText, selectedPage) => {
  const [movieData, setMovieData] = useState({
    movies: [],
    totalPages: 0,
    currentPage: 1,
  });
  const [isLoading, setLoading] = useState(false);

  const fetchSearchedMoviesData = async (text, page) => {
    setLoading(true);
    try {
      const data = await fetchSearchedMovies(text, page);
      if (data) {
        setMovieData({
          movies: data.results,
          totalPages: data.total_pages,
          currentPage: data.page,
        });
      }
    } catch (error) {
      console.error("Failed to fetch searched movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRegularMoviesData = async (page) => {
    setLoading(true);
    try {
      const data = await fetchMovies(page);
      if (data) {
        setMovieData({
          movies: data.results,
          totalPages: data.total_pages / 2,
          currentPage: data.page,
        });
      }
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearchedMovies = useCallback(
    debounce(fetchSearchedMoviesData, 500),
    []
  );

  const fetchMoviesData = () => {
    if (searchText) {
      debouncedSearchedMovies(searchText, selectedPage);
    } else {
      fetchRegularMoviesData(selectedPage);
    }
  };

  return {
    movieData,
    isLoading,
    fetchMoviesData,
  };
};
