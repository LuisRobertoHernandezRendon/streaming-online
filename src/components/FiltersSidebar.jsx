import { CATEGORIES, LANGUAGES } from "../data/data";
import "../styles/filtersSidebar.css";

export default function FiltersSidebar({ filters, onChange }) {
  return (
    <div className="filters">
      <h2 className="filters__title">Filtros</h2>

      <input
        type="text"
        placeholder="Título"
        value={filters.title}
        onChange={(e) => onChange("title", e.target.value)}
        className="filters__input"
      />

      <input
        type="text"
        placeholder="Sinopsis"
        value={filters.synopsis}
        onChange={(e) => onChange("synopsis", e.target.value)}
        className="filters__input"
      />

      <select
        value={filters.category}
        onChange={(e) => onChange("category", e.target.value)}
        className="filters__select"
      >
        <option value="">Todas las categorías</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Año"
        value={filters.year}
        onChange={(e) => onChange("year", e.target.value)}
        className="filters__input"
      />

      <input
        type="text"
        placeholder="Director"
        value={filters.director}
        onChange={(e) => onChange("director", e.target.value)}
        className="filters__input"
      />

      <select
        value={filters.language}
        onChange={(e) => onChange("language", e.target.value)}
        className="filters__select"
      >
        <option value="">Todos los idiomas</option>
        {LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Actores"
        value={filters.actors}
        onChange={(e) => onChange("actors", e.target.value)}
        className="filters__input"
      />
    </div>
  );
}
