import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import RentsList from "./components/RentsList";
import { useRents } from "./hooks/useRents";
import "./styles/app.css";

function App() {
  const { rents, rentMovie, returnMovie } = useRents();

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
                element={<MovieDetail rentMovie={rentMovie} />}
              />
              <Route
                path="/rentals"
                element={<RentsList rents={rents} returnMovie={returnMovie} />}
              />
              {/* <Route path="/purchases" element={<PurchasesPage />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
