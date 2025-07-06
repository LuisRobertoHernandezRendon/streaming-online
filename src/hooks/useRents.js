import { useEffect, useState } from "react";

export const useRents = (showNotification) => {
  const initialRents = () => {
    const localStorageRents = localStorage.getItem("rents");
    return localStorageRents ? JSON.parse(localStorageRents) : [];
  };

  const [rents, setRents] = useState(initialRents);

  const [isProcessingRent, setIsProcessingRent] = useState(false);

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
      setIsProcessingRent(true);
      setTimeout(() => {
        const today = new Date();
        const returnDate = new Date(today);
        returnDate.setMonth(today.getMonth() + 1);

        const newItem = {
          ...item,
          rentalId: `rnt-${Date.now()}`, // ID único de renta
          rentDate: today.toISOString().split("T")[0],
          returnDate: returnDate.toISOString().split("T")[0],
          priceRental: item.priceRental,
        };

        setRents([...rents, newItem]);
        setIsProcessingRent(false);
        showNotification(
          `¡Has rentado "${item.title}" hasta el ${newItem.returnDate}!`,
          "success"
        );
      }, 3000);
    }
  }

  function returnMovie(id) {
    setIsProcessingRent(true);
    setTimeout(() => {
      setRents((prevRents) => prevRents.filter((movie) => movie.id !== id));
      setIsProcessingRent(false);
      showNotification(`Has devuelto la película correctamente.`, "success");
    }, 3000);
  }

  return {
    rents,
    rentMovie,
    returnMovie,
    isProcessingRent,
  };
};
