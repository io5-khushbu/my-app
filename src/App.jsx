import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import Infrastructre from "./pages/Infrastructre";
function App() {
  return (
    <>
      <div className="main-page">
        {" "}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/infrastructre" element={<Infrastructre />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
