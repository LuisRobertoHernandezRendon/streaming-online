import { useState, useEffect } from "react";
import { API_URL } from "../data/data";

export function useMovieSearch(initialMovies) {
  // const [query, setQuery] = useState("");
  // const [filtered, setFiltered] = useState(initialMovies);

  // useEffect(() => {
  //   const lowerQuery = query.toLowerCase();

  //   const results = initialMovies.filter((movie) => {
  //     const { title, synopsis, category, year, director, language, actors } =
  //       movie;

  //     return (
  //       title.toLowerCase().includes(lowerQuery) ||
  //       synopsis.toLowerCase().includes(lowerQuery) ||
  //       (category && category.toLowerCase().includes(lowerQuery)) ||
  //       year.toString().includes(lowerQuery) ||
  //       director.toLowerCase().includes(lowerQuery) ||
  //       language.toLowerCase().includes(lowerQuery) ||
  //       actors.some((actor) => actor.toLowerCase().includes(lowerQuery))
  //     );
  //   });

  //   setFiltered(results);
  // }, [query, initialMovies]);

  // return { query, setQuery, filtered };

  const [filters, setFilters] = useState({
    title: "",
    synopsis: "",
    category: "",
    year: "",
    director: "",
    language: "",
    actors: "",
  });

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

   // Función para actualizar filtros desde el componente
  const updateFilter = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        let url = `${API_URL}/ms-buscador/elastic/movies`;

        if (filters.title)
          url = `${API_URL}/ms-buscador/elastic/movies/search/as-you-type/${filters.title}`;
        else if (filters.synopsis)
          url = `${API_URL}/ms-buscador/elastic/movies/search/full-text/${filters.synopsis}`;
        else if (filters.category)
          url = `${API_URL}/ms-buscador/elastic/movies/category/${filters.category}`;
        else if (filters.year)
          url = `${API_URL}/ms-buscador/elastic/movies/year/${filters.year}`;
        else if (filters.director)
          url = `${API_URL}/ms-buscador/elastic/movies/director/${filters.director}`;
        else if (filters.language)
          url = `${API_URL}/ms-buscador/elastic/movies/language/${filters.language}`;
        else if (filters.actors)
          url = `${API_URL}/ms-buscador/elastic/movies/actor/${filters.actors}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al obtener películas");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(fetchMovies, 400); // debounce de 400ms
    return () => clearTimeout(timeout);
  }, [filters]);

  return { filters, updateFilter, movies, loading };
}
