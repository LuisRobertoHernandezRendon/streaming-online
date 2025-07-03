import MovieCard from "./MovieCard";
import { movies } from "../data/data";
import "../styles/movieList.css";

export default function MovieList() {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
