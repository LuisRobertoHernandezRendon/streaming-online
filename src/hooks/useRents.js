import { useEffect, useState } from "react";

export const useRents = (showNotification) => {
  const initialRents = () => {
    const localStorageRents = localStorage.getItem("rents");
    return localStorageRents ? JSON.parse(localStorageRents) : [];
  };

  const [rents, setRents] = useState(initialRents);

  // para sincronizar con el localStrorage las rentas que se hagan
  useEffect(() => {
    localStorage.setItem("rents", JSON.stringify(rents));
  }, [rents]);

  // funcion para realizar la renta de la pelicula
  function rentMovie(item) {
    const itemExists = rents.findIndex((movie) => movie.id === item.id);

    if (itemExists >= 0) {
      showNotification("Ya rentaste la película seleccionada.", "error");
    } else {
      const today = new Date();
      const returnDate = new Date(today);
      returnDate.setMonth(today.getMonth() + 1);

      const newItem = {
        ...item,
        rentalId: `rnt-${Date.now()}`, // ID único de renta
        rentDate: today.toISOString().split("T")[0],
        returnDate: returnDate.toISOString().split("T")[0],
        priceRental: item.priceRental || 50, // valor por defecto si no tienes precio
      };

      setRents([...rents, newItem]);

      showNotification(
        `¡Has rentado "${item.title}" hasta el ${newItem.returnDate}!`,
        "success"
      );
    }
  }

  function returnMovie(id) {
    setRents((prevRents) => prevRents.filter((movie) => movie.id !== id));
    showNotification(`Has devuelto la película correctamente.`, "success");
  }

  return {
    rents,
    rentMovie,
    returnMovie,
  };
};
