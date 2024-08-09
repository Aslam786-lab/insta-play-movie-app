import React from "react";
import "../../styles/MovieModal.css";
import { CrossIcon } from "../icons/icons";

const MovieModal = ({ close, trailerId }) => {
  const trailerLink = `https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`;

  return (
    <div className="movie-modal">
      <div className="close-btn" onClick={close}>
        <CrossIcon />
      </div>
      {trailerLink && (
        <iframe
          src={trailerLink}
          style={{ width: "inherit", height: "inherit", border: "none" }}
        ></iframe>
      )}
    </div>
  );
};

export default MovieModal;
