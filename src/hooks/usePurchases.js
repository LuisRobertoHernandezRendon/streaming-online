import { useEffect, useState } from "react";

export const usePurchases = () => {
  const initialPurchases = () => {
    const localStoragePurchases = localStorage.getItem("purchases");
    return localStoragePurchases ? JSON.parse(localStoragePurchases) : [];
  };

  const [purchases, setPurchases] = useState(initialPurchases);

  // para sincronizar con el localStrorage las compras que se hagan
  useEffect(() => {
    localStorage.setItem("purchases", JSON.stringify(purchases));
  }, [purchases]);

  // funcion para realizar la comopra de la pelicula
  function purchaseMovie(item) {
    const itemExists = purchases.findIndex((movie) => movie.id === item.id);

    if (itemExists >= 0) {
      alert("Ya compraste la película seleccionada.");
    } else {
      const today = new Date();

      const newItem = {
        ...item,
        purchaseDate: today.toISOString().split("T")[0],
        pricePaid: item.pricePurchase, // valor por defecto si no tienes precio
      };

      setPurchases([...purchases, newItem]);

      alert(`¡Compra realizada con éxito!`);
    }
  }

  return {
    purchases,
    purchaseMovie,
  };
};
