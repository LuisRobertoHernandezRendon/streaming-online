import { useState } from "react";

export function useNotification() {
  const [notification, setNotification] = useState({
    message: "",
    type: "",
  });

  function showNotification(message, type = "success") {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  }

  function clearNotification() {
    setNotification({ message: "", type: "" });
  }

  return { notification, showNotification, clearNotification };
}
