import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieContentDetails from "./MovieContentDetails";
import { fetchMovieDetails } from "../../api/fetch-movie";
import CircleLoader from "../loaders/CircleLoader";
import MoviePlaySection from "./MoviePlaySection";
import "../../styles/MovieDetails.css";

const MovieDetail = () => {
  const movieId = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovieDetails(movieDetails);
    };
    fetchDetails();
  }, []);

  return (
    <div id="movie-details">
      {Object.keys(movieDetails).length ? (
        <>
          <MovieContentDetails movieDetails={movieDetails} />
          <MoviePlaySection
            backdropPath={movieDetails.backdrop_path}
            movieId={movieId}
          />
        </>
      ) : (
        <div className="detail-loader">
          <CircleLoader />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
