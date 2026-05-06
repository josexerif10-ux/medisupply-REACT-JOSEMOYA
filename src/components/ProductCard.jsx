import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

function ProductCard({ producto }) {
  const { añadirAlCarrito } = useCarrito();

  return (
    <article className="card custom-card product-card h-100">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="product-img"
      />

      <div className="card-body">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span className="price">{producto.precio.toFixed(2)} €</span>

          <div className="d-flex gap-2 flex-wrap">
            <Link
              to={`/producto/${producto.id}`}
              className="btn btn-outline-primary"
            >
              Ver detalle
            </Link>

            <button
              className="btn btn-secondary-custom"
              onClick={() => añadirAlCarrito(producto)}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;