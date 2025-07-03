import MovieCard from "./MovieCard";
import { movies } from "../data/data";
import "../styles/movieList.css";
import { useEffect, useState } from "react";

export default function MovieList({ rentMovie }) {
  const [moviesData, setMoviesData] = useState([]);
  // se agrega la data de peliculas
  useEffect(() => {
    setMoviesData(movies);
  });

  return (
    <div className="movie-list">
      {moviesData.map((movie) => (
        <MovieCard key={movie.id} movie={movie} rentMovie={rentMovie} />
      ))}
    </div>
  );
}
