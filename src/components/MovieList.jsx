import MovieCard from "./MovieCard";
import { useMovieSearch } from "../hooks/useMovieSearch";
import "../styles/movieList.css";
import FiltersSidebar from "./FiltersSidebar";

export default function MovieList() {

  const { filters, updateFilter, movies, loading } = useMovieSearch();

  return (
    <div className="movie-list">
      <aside className="movie-list__sidebar">
        <FiltersSidebar filters={filters} onChange={updateFilter} />
      </aside>

      <main className="movie-list__content">
        {loading && <p className="movie-list__empty">Buscando películas...</p>}

        {!loading && movies.length > 0 ? (
          <div className="movie-list__grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          !loading && <p className="movie-list__empty">No se encontraron películas.</p>
        )}
      </main>
    </div>
  );
}
