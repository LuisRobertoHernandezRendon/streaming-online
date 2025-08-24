import { useEffect, useState } from "react";
import { API_URL, userID } from "../data/data";

export const useRents = (showNotification) => {

  const [rents, setRents] = useState([]);

  const [isProcessingRent, setIsProcessingRent] = useState(false);

  // Traer las rentas desde la API al montar el hook
  useEffect(() => {
    const fetchRents = async () => {
      try {
        const response = await fetch(`${API_URL}/ms-operador/rentals/user/${userID}`);
        if (!response.ok) throw new Error("Error al obtener las rentas");
        const data = await response.json();

        const rents = await Promise.all(
          data.map(async (rent) => {
            const movieRes = await fetch(`${API_URL}/ms-buscador/elastic/movies/${rent.movieId}`);
            const movieData = await movieRes.json();
            return { ...rent, movie: movieData };
          })
        );
        setRents(rents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRents();
  }, []);

  // función para realizar la renta de la pelicula
  async function rentMovie(item) {

    const itemExists = rents.findIndex((movie) => movie.movieId === item.id);

    if (itemExists >= 0) {
      showNotification("Ya rentaste la película seleccionada.", "error");
    } else {
      setIsProcessingRent(true);

      try {
        const bodyRequest = {
          "movieId": item.id,
          "userId": userID
        }

        const response = await fetch(`${API_URL}/ms-operador/rentals`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyRequest),
        });

        if(!response.ok) throw new Error("Error al rentar la película");

        const savedItem = await response.json();

        const rent = {
          ...savedItem,
          movie: item,
        };

        setRents((prev) => [...prev, rent]);

        showNotification(
          `¡Has rentado "${item.title}" hasta el ${savedItem.returnAt.split("T")[0]}!`,
          "success"
        );

      } catch (error) {
        console.error(error);
        showNotification("No se pudo rentar la película", "error");
      }finally{
        setIsProcessingRent(false);
      }
    }
  }

  async function returnMovie(id) {
    setIsProcessingRent(true);

    try {

      const response = await fetch(`${API_URL}/ms-operador/rentals/${id}/return`, {
        method: "PUT",
      });

      if(!response.ok) throw new Error("Error al devolver la película");

      setRents((prevRents) => prevRents.filter((movie) => movie.rentalId !== id));

      showNotification(`Has devuelto la película correctamente.`, "success");

    } catch (error) {
      console.error(error);
      showNotification("No se pudo devolver la película", "error");
    }finally{
      setIsProcessingRent(false);
    }

  }

  return {
    rents,
    rentMovie,
    returnMovie,
    isProcessingRent,
  };
};
