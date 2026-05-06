import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Producto from "./pages/Producto";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Cuenta from "./pages/Cuenta";
import About from "./pages/About";
import { CarritoProvider } from "./context/CarritoContext";
import Ayuda from "./pages/Ayuda";
import './assets/styles/custom.css'

function App() {
  return (
    <BrowserRouter>
    <CarritoProvider>
      <Header />

      <main className= "main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cuenta" element={<Cuenta />} />
          <Route path="/about" element={<About />} />
          <Route path="/ayuda" element={<Ayuda />} />
        </Routes>
      </main>
    <BackToTop />
      <Footer />
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;