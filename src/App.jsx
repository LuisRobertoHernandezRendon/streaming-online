import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import RentsList from "./components/RentsList";
import PurchasesList from "./components/PurchasesList";
import { useRents } from "./hooks/useRents";
import { usePurchases } from "./hooks/usePurchases";
import "./styles/app.css";

function App() {
  const { rents, rentMovie, returnMovie } = useRents();
  const { purchases, purchaseMovie } = usePurchases();

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
                  />
                }
              />
              <Route
                path="/rentals"
                element={<RentsList rents={rents} returnMovie={returnMovie} />}
              />
              <Route
                path="/purchases"
                element={<PurchasesList purchases={purchases} />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
