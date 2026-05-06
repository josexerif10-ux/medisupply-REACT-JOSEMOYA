import { useEffect, useState } from "react";
import $ from "jquery";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  const productosFiltrados = products.filter((producto) => {
    const texto = busqueda.toLowerCase();

    const coincideTexto =
      producto.nombre.toLowerCase().includes(texto) ||
      producto.descripcion.toLowerCase().includes(texto);

    const coincideCategoria =
      categoria === "" || producto.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });

  useEffect(() => {
    $("#filtro-categoria").on("change", function () {
      const valor = $(this).val();
      setCategoria(valor);
    });

    return () => {
      $("#filtro-categoria").off("change");
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      $(".product-card").hide().fadeIn(500);
    }, 100);
  }, [busqueda, categoria]);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Catálogo completo</h2>
        <p className="text-center mb-4">
          Explora todos los productos disponibles en MediSupply.
        </p>

        <div className="row g-3 mb-4">
          <div className="col-12 col-md-6">
            <label htmlFor="busqueda" className="form-label">
              Buscar producto
            </label>
            <input
              id="busqueda"
              type="text"
              className="form-control"
              placeholder="Buscar producto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="filtro-categoria" className="form-label">
              Filtrar por categoría
            </label>
            <select
              id="filtro-categoria"
              className="form-select"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              <option value="crocs">Crocs sanitarios</option>
              <option value="fonendos">Fonendoscopios</option>
              <option value="libros">Libros de medicina</option>
              <option value="funkos">Funkos sanitarios</option>
              <option value="accesorios">Accesorios sanitarios</option>
            </select>
          </div>
        </div>

        <p className="small text-center mb-4">
          Resultados encontrados: {productosFiltrados.length}
        </p>

        {productosFiltrados.length === 0 ? (
          <div className="alert alert-warning text-center">
            No se han encontrado productos con esos filtros.
          </div>
        ) : (
          <div className="row g-4">
            {productosFiltrados.map((producto) => (
              <div className="col-12 col-sm-6 col-lg-4" key={producto.id}>
                <ProductCard producto={producto} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalogo;