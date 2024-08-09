import { useNavigate } from "react-router-dom";

import { HalfStarIcon, StarIcon } from "../icons/icons";
import play from "../../assets/play-movie.png";
import defaultImg from "../../assets/default-movie-img.png";
import "../../styles/MovieCardsListItem.css";
import { getStars } from "../../helper/movie-helper";
import Tooltip from "./Tooltip";

const MovieCardsListItem = ({ movie }) => {
  const { vote_average, title, backdrop_path, id } = movie;
  const rating = getStars(vote_average);
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="movie-card">
      <div className="movie-img">
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/original${backdrop_path}`
              : defaultImg
          }
          alt="movie-img"
        />
      </div>
      <div className="movie-info">
        <div className="movie-info-content">
          <span className="movie-title">{title}</span>
          {title.length > 22 && <Tooltip text={title} />}
          <div className="rating">
            <div className="movie-stars">
              {[...Array(rating.starCount)].map((_, index) => (
                <StarIcon key={index} />
              ))}
              {rating.isHalfStar ? <HalfStarIcon /> : null}
            </div>
            <span className="movie-rating">{rating.rate} / 5</span>
          </div>
        </div>
        <div onClick={handlePlay} className="play-movie">
          <img src={play} alt="play-movie" className="play-movie-img" />
        </div>
      </div>
    </div>
  );
};

export default MovieCardsListItem;
