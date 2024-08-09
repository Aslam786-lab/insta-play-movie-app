import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/back.png";
import { getMovieLang, getRating, getYear } from "../../helper/movie-helper";

const MovieContentDetails = ({ movieDetails }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/movies");
  };

  return (
    <div className="movie-detail-info">
      <div className="back-btn">
        <img
          src={backArrow}
          alt="back-arrow"
          className="back-arrow"
          onClick={handleBack}
        />
      </div>
      <div className="movie-content-info">
        <h2 className="movie-name">{movieDetails.original_title}</h2>
        <span className="movie-rate">
          Rating: {getRating(movieDetails.vote_average)}/5
        </span>
        <p className="movie-desc">{movieDetails.overview}</p>
      </div>
      <div className="movie-meta">
        <div className="movie-date">
          <span>Release Date</span>
          <span>{getYear(movieDetails.release_date)}</span>
        </div>
        <div className="movie-lang">
          <span>Original Language</span>
          <div className="lang-list">
            <span>{getMovieLang(movieDetails.spoken_languages)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieContentDetails;
