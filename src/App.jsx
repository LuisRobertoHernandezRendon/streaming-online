import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import RentsList from "./components/RentsList";
import PurchasesList from "./components/PurchasesList";
import Notifications from "./components/Notifications";
import { useRents } from "./hooks/useRents";
import { usePurchases } from "./hooks/usePurchases";
import { useNotification } from "./hooks/useNotifications";
import "./styles/app.css";

function App() {
  const { notification, showNotification, clearNotification } =
    useNotification();
  const { rents, rentMovie, returnMovie, isProcessingRent } =
    useRents(showNotification);
  const { purchases, purchaseMovie, isProcessingPurchase } =
    usePurchases(showNotification);

  return (
    <>
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route
                path="/details/:id"
                element={
                  <MovieDetail
                    rentMovie={rentMovie}
                    purchaseMovie={purchaseMovie}
                    isProcessingRent={isProcessingRent}
                    isProcessingPurchase={isProcessingPurchase}
                  />
                }
              />
              <Route
                path="/rentals"
                element={
                  <RentsList
                    rents={rents}
                    returnMovie={returnMovie}
                    isProcessingRent={isProcessingRent}
                  />
                }
              />
              <Route
                path="/purchases"
                element={<PurchasesList purchases={purchases} />}
              />
            </Routes>
          </main>
          <Notifications
            notification={notification}
            onClose={clearNotification}
          />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
