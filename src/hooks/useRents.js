import { useEffect, useState } from "react";

export const useRents = () => {
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
      alert("Ya rentaste la película seleccionada");
    } else {
      const today = new Date();
      const returnDate = new Date(today);
      returnDate.setMonth(today.getMonth() + 1);

      const newItem = {
        ...item,
        returnDate: returnDate.toISOString().split("T")[0],
      };

      setRents([...rents, newItem]);
    }
  }

  function returnMovie(id) {
    setRents((prevRents) => prevRents.filter((movie) => movie.id !== id));
  }

  return {
    rents,
    rentMovie,
    returnMovie,
  };
};
