import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCarrito } from "../context/CarritoContext";

function Producto() {
  const { id } = useParams();
  const { añadirAlCarrito } = useCarrito();

  const producto = products.find((p) => p.id === id);

  if (!producto) {
    return (
      <div className="container text-center">
        <h2>Producto no encontrado</h2>
        <Link to="/catalogo" className="btn btn-primary-custom">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to="/catalogo" className="btn btn-outline-primary mb-3">
        ← Volver
      </Link>

      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid product-detail-img"
          />
        </div>

        <div className="col-md-6">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>

          <h3 className="price">{producto.precio.toFixed(2)} €</h3>

          <button
            className="btn btn-secondary-custom mt-3"
            onClick={() => añadirAlCarrito(producto)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Producto;