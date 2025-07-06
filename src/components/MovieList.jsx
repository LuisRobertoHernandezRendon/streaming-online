import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import { movies } from "../data/data";
import { useMovieSearch } from "../hooks/useMovieSearch";
import "../styles/movieList.css";

export default function MovieList({ rentMovie, purchaseMovie }) {
  const { query, setQuery, filtered } = useMovieSearch(movies);

  return (
    <div className="movie-list">
      <SearchBar value={query} onSearch={setQuery} />

      <div className="movie-list__grid">
        {filtered.length > 0 ? (
          filtered.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              rentMovie={rentMovie}
              purchaseMovie={purchaseMovie}
            />
          ))
        ) : (
          <p className="movie-list__empty">No se encontraron películas.</p>
        )}
      </div>
    </div>
  );
}
