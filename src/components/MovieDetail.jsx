import { useParams } from "react-router-dom";
// import { movies } from "../data/data";
import Loader from "./Loader";
import "../styles/movieDetail.css";
import { useEffect, useState } from "react";
import { API_URL } from "../data/data";

const MovieDetail = ({ rentMovie, purchaseMovie, isProcessingRent, isProcessingPurchase }) => {
  
  const { id } = useParams();
  const[movie, setMovie] = useState(null);

  // Hook para traer los datos de la API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${API_URL}/ms-buscador/elastic/movies/${id}`); // <-- Cambia la URL
        if (!response.ok) throw new Error("Error al obtener las películas");
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [id]);

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
              <strong>Año:</strong> {movie.releaseYear}
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
              <strong>Actores:</strong> {movie.actors}
            </p>
            <div className="movie-detail__actions">
              <button
                className="movie-detail__button"
                onClick={() => rentMovie(movie)}
                disabled={isProcessingRent || isProcessingPurchase}
              >
                {isProcessingRent ? (
                  <Loader />
                ) : (
                  `Alquilar ${movie.priceRental} MX`
                )}
              </button>
              <button
                className="movie-detail__button"
                onClick={() => purchaseMovie(movie)}
                disabled={isProcessingPurchase || isProcessingRent}
              >
                {isProcessingPurchase ? (
                  <Loader />
                ) : (
                  `Comprar ${movie.pricePurchase} MX`
                )}
              </button>
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
