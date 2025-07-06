import "../styles/searchBar.css";

export default function SearchBar({ value, onSearch }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon">🔍</span>
      <input
        type="text"
        placeholder="Buscar película (título, sinopsis, categoría, año, director, idioma y actores)"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      {value && (
        <button
          className="search-bar__clear"
          onClick={() => onSearch("")}
          aria-label="Limpiar búsqueda"
        >
          &#10006; {/* Unicode X */}
        </button>
      )}
    </div>
  );
}
