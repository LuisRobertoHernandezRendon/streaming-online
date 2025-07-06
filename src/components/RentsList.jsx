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
                src={movie.image}
                alt={movie.title}
                className="my-rents__poster"
              />
              <div className="my-rents__info">
                <h3>{movie.title}</h3>
                <p>
                  <strong>Director:</strong> {movie.director}
                </p>
                <p>
                  <strong>Año:</strong> {movie.year}
                </p>
                <p>
                  <strong>Fecha de renta:</strong> {movie.rentDate}
                </p>
                <p>
                  <strong>Devolución programada:</strong> {movie.returnDate}
                </p>
                <p>
                  <strong>Precio:</strong> ${movie.priceRental} MXN
                </p>
                <button
                  className="my-rents__button"
                  onClick={() => returnMovie(movie.id)}
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
