import { useState, useEffect } from "react";

export function useMovieSearch(initialMovies) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(initialMovies);

  useEffect(() => {
    const lowerQuery = query.toLowerCase();

    const results = initialMovies.filter((movie) => {
      const { title, synopsis, category, year, director, language, actors } =
        movie;

      return (
        title.toLowerCase().includes(lowerQuery) ||
        synopsis.toLowerCase().includes(lowerQuery) ||
        (category && category.toLowerCase().includes(lowerQuery)) ||
        year.toString().includes(lowerQuery) ||
        director.toLowerCase().includes(lowerQuery) ||
        language.toLowerCase().includes(lowerQuery) ||
        actors.some((actor) => actor.toLowerCase().includes(lowerQuery))
      );
    });

    setFiltered(results);
  }, [query, initialMovies]);

  return { query, setQuery, filtered };
}
