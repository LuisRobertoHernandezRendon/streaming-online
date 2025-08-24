import "../styles/searchBar.css";

export default function SearchBar({ value, onSearch, filter, onFilterChange }) {
  return (
    <div className="search-bar">
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="title">Título</option>
        <option value="synopsis">Sinopsis</option>
        <option value="category">Categoría</option>
        <option value="year">Año</option>
        <option value="director">Director</option>
        <option value="language">Idioma</option>
        <option value="actors">Actores</option>
      </select>
      
      <input
        type="text"
        placeholder="Buscar película"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />

      {value && (
        <button
          className="search-bar__clear"
          onClick={() => onSearch("")}
          aria-label="Limpiar búsqueda"
        >
          &#10006;
        </button>
      )}
    </div>
  );
}
