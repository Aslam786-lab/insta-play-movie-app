import React, { useEffect } from "react";

import Pagination from "../pagination/Pagination";
import CircleLoader from "../loaders/CircleLoader";
import { useSearch } from "../../context/SearchContext";
import useSessionStorage from "../custom-hook/useSessionStorage";
import { usePrevious } from "../custom-hook/usePrevious";
import MovieCardsList from "./MovieCardsList";
import DashboardTitle from "./DashboardTitle";
import { useFetchMovies } from "../custom-hook/useFetchMovies";
import "../../styles/Dashboard.css";

const RESET_PAGE_NUM = 1;

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useSessionStorage("selectPage", 1);
  const { searchText } = useSearch();
  const prevSearchText = usePrevious(searchText);

  const { movieData, isLoading, fetchMoviesData } = useFetchMovies(
    searchText,
    selectedPage
  );
  const moviesListLen = movieData.movies.length;

  useEffect(() => {
    fetchMoviesData();
  }, [searchText, selectedPage]);

  useEffect(() => {
    if (prevSearchText && searchText !== prevSearchText) {
      setSelectedPage(RESET_PAGE_NUM);
    }
  }, [searchText]);

  return (
    <div
      className={`dashboard ${
        searchText && !moviesListLen ? "vh-height" : "percent-height"
      }`}
    >
      <img className="banner" src="/src/assets/banner.png" />
      <div className="dashbord-container">
        {!isLoading && (
          <DashboardTitle
            searchText={searchText}
            moviesListLen={moviesListLen}
          />
        )}
        {isLoading ? (
          <CircleLoader />
        ) : (
          moviesListLen && (
            <>
              <MovieCardsList movies={movieData.movies} />
              <Pagination
                totalPages={movieData.totalPages}
                currentPage={movieData.currentPage}
                setSelectedPage={setSelectedPage}
              />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
