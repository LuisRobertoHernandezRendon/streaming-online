import "../styles/purchasesList.css";

export default function PurchasesList({ purchases }) {
  return (
    <div className="my-purchases">
      <h2 className="my-purchases__title">Mis Compras</h2>
      {purchases.length === 0 ? (
        <p className="my-purchases__empty">No tienes películas compradas.</p>
      ) : (
        <div className="my-purchases__list">
          {purchases.map((movie) => (
            <div className="my-purchases__card" key={movie.purchaseId}>
              <img
                src={movie.movie.image}
                alt={movie.movie.title}
                className="my-purchases__poster"
              />
              <div className="my-purchases__info">
                <h3>{movie.title}</h3>
                <p>
                  <strong>Director:</strong> {movie.movie.director}
                </p>
                <p>
                  <strong>Año:</strong> {movie.movie.releaseYear}
                </p>
                <p>
                  <strong>Fecha de compra:</strong> {movie.movie.purchaseAt}
                </p>
                <p>
                  <strong>Precio pagado:</strong> {movie.pricePurchase} MXN
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
