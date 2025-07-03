import { useParams } from "react-router-dom";
import { movies } from "../data/data";
import "../styles/movieDetail.css";

const MovieDetail = ({ rentMovie }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-detail__notfound">
        <h2>Película no encontrada</h2>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail__card">
        <div className="movie-detail__content">
          <div className="movie-detail__left">
            <img
              className="movie-detail__poster"
              src={movie.image}
              alt={movie.title}
            />
          </div>
          <div className="movie-detail__right">
            <h1 className="movie-detail__title">{movie.title}</h1>
            <p className="movie-detail__section">
              <strong>Director:</strong> {movie.director}
            </p>
            <p className="movie-detail__section">
              <strong>Año:</strong> {movie.year}
            </p>
            <p className="movie-detail__section">
              <strong>Duración:</strong> {movie.duration}
            </p>
            <p className="movie-detail__section">
              <strong>Idioma:</strong> {movie.language}
            </p>
            <p className="movie-detail__section">
              <strong>Sinopsis:</strong> {movie.synopsis}
            </p>
            <p className="movie-detail__section">
              <strong>Actores:</strong> {movie.actors.join(", ")}
            </p>
            <div className="movie-detail__actions">
              <button
                className="movie-detail__button"
                onClick={() => rentMovie(movie)}
              >
                Alquilar {movie.priceRental} MX
              </button>
              <button className="movie-detail__button">Comprar</button>
            </div>
          </div>
        </div>

        <div className="movie-detail__trailer">
          <h3>Tráiler</h3>
          <iframe
            src={movie.trailerUrl}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
