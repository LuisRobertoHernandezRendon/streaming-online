import { Link } from "react-router-dom";
import "../styles/notFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="not-found__link">
        Volver al inicio
      </Link>
    </div>
  );
}
