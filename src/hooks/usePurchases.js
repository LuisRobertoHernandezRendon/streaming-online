import { useEffect, useState } from "react";
import { API_URL, userID } from "../data/data";

export const usePurchases = (showNotification) => {

  const [purchases, setPurchases] = useState([]);
  const [isProcessingPurchase, setIsProcessingPurchase] = useState(false);

  // Traer las rentas desde la API al montar el hook
  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await fetch(`${API_URL}/ms-operador/purchases/user/${userID}`);
        if (!response.ok) throw new Error("Error al obtener las compras");
        const data = await response.json();

        const purchases = await Promise.all(
          data.map(async (purchase) => {
            const movieRes = await fetch(`${API_URL}/ms-buscador/elastic/movies/${purchase.movieId}`);
            const movieData = await movieRes.json();
            return { ...purchase, movie: movieData };
          })
        );
        setPurchases(purchases);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPurchases();
  }, []);

  // funcion para realizar la compra de la pelicula
  async function purchaseMovie(item) {
    const itemExists = purchases.findIndex((movie) => movie.movieId === item.id);

    if (itemExists >= 0) {
      showNotification("Ya compraste la película seleccionada.", "error");
    } else {
      setIsProcessingPurchase(true);

      try {
        const bodyRequest = {
          "movieId": item.id,
          "userId": userID
        }

        const response = await fetch(`${API_URL}/ms-operador/purchases`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyRequest),
        });

        if(!response.ok) throw new Error("Error al comprar la película");

        const savedItem = await response.json();

        const purchase = {
          ...savedItem,
          movie: item,
        };

        setPurchases((prev) => [...prev, purchase]);

        showNotification(
          `¡Compra realizada con éxito!`,
          "success"
        );

      } catch (error) {
        console.error(error);
        showNotification("No se pudo comprar la película", "error");
      }finally{
        setIsProcessingPurchase(false);
      }
    }
  }

  return {
    purchases,
    purchaseMovie,
    isProcessingPurchase,
  };
};
