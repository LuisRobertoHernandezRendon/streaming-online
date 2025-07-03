import { Link } from "react-router-dom";
import "../styles/movieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-card__image" />
      <h2 className="movie-card__title">{movie.title}</h2>
      <p className="movie-card__info">
        {movie.year} • {movie.category}
      </p>
      <Link className="movie-card__link" to={`/details/${movie.id}`}>
        Ver detalles
      </Link>
    </div>
  );
}
