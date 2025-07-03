import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import "./styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          {/* <Route path="/details/:id" element={<MovieDetailsPage />} />
          <Route path="/rentals" element={<RentalsPage />} />
          <Route path="/purchases" element={<PurchasesPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
