import Loader from "./Loader";
import "../styles/rentsList.css";

export default function RentsList({ rents, returnMovie, isProcessingRent }) {

  return (
    <div className="my-rents">
      <h2 className="my-rents__title">Mis Alquileres</h2>
      {rents.length === 0 ? (
        <p className="my-rents__empty">No tienes películas alquiladas.</p>
      ) : (
        <div className="my-rents__list">
          {rents.map((movie) => (
            <div className="my-rents__card" key={movie.rentalId}>
              <img
                src={movie.movie.image}
                alt={movie.movie.title}
                className="my-rents__poster"
              />
              <div className="my-rents__info">
                <h3>{movie.movie.title}</h3>
                <p>
                  <strong>Director:</strong> {movie.movie.director}
                </p>
                <p>
                  <strong>Año:</strong> {movie.movie.releaseYear}
                </p>
                <p>
                  <strong>Fecha de renta:</strong> {movie.rentedAt.split("T")[0]}
                </p>
                <p>
                  <strong>Devolución programada:</strong> {movie.returnAt.split("T")[0]}
                </p>
                <p>
                  <strong>Precio:</strong> ${movie.priceRental} MXN
                </p>
                <button
                  className="my-rents__button"
                  onClick={() => returnMovie(movie.rentalId)}
                  disabled={isProcessingRent}
                >
                  {isProcessingRent ? <Loader /> : "Devolver"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
