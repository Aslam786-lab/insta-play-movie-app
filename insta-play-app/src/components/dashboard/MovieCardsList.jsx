import React from "react";
import MovieCardsListItem from "./MovieCardsListItem";

const MovieCardsList = ({ movies }) => {
  return (
    <div className="movies-container">
      {movies.map((movie, index) => (
        <MovieCardsListItem key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCardsList;
