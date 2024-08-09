import { useEffect, useState } from "react";

import play from "../../assets/play-movie.png";
import MovieModal from "./MovieModal";
import Portal from "./Poral";
import { notifyError } from "../../helper/toaster-helper";
import { fetchMovieTrailer } from "../../api/fetch-movie";

const MoviePlaySection = ({ backdropPath, movieId }) => {
  const [movieModal, setMovieModal] = useState(false);
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    const fetchTrailer = async () => {
      const id = await fetchMovieTrailer(movieId);
      if (id) {
        setTrailerId(id);
      }
    };
    fetchTrailer();
  }, []);

  const openModal = () => {
    if (!trailerId) {
      notifyError("The trailer is currently unavailable");
    }
    setMovieModal(true);
  };

  const closeModal = () => {
    setMovieModal(false);
  };

  return (
    <>
      <div className="movie-poster">
        <div
          className="movie-poster-img"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original//${backdropPath}')`,
          }}
        >
          <img
            src={play}
            alt="play-icon"
            className="play-icon"
            onClick={openModal}
          />
        </div>
      </div>
      {movieModal && trailerId && (
        <Portal id="movie-details">
          <MovieModal close={closeModal} trailerId={trailerId} />
        </Portal>
      )}
    </>
  );
};

export default MoviePlaySection;
