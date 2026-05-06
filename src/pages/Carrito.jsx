import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

function Carrito() {
  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
    totalPrecio,
  } = useCarrito();

  if (carrito.length === 0) {
    return (
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Carrito de compra</h2>
          <p>Tu carrito está vacío.</p>

          <Link to="/catalogo" className="btn btn-primary-custom">
            Ver catálogo
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Carrito de compra</h2>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="card custom-card table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acción</th>
                  </tr>
                </thead>

                <tbody>
                  {carrito.map((producto) => (
                    <tr key={producto.id}>
                      <td>{producto.nombre}</td>

                      <td>{producto.precio.toFixed(2)} €</td>

                      <td>
                        <div className="cantidad-control">
                          <button
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => disminuirCantidad(producto.id)}
                            aria-label={`Reducir cantidad de ${producto.nombre}`}
                          >
                            −
                          </button>

                          <span>{producto.cantidad}</span>

                          <button
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => aumentarCantidad(producto.id)}
                            aria-label={`Aumentar cantidad de ${producto.nombre}`}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td>
                        {(producto.precio * producto.cantidad).toFixed(2)} €
                      </td>

                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => eliminarDelCarrito(producto.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="col-12 col-lg-4">
            <div className="card custom-card">
              <h3>Resumen</h3>

              <p>
                <strong>Total:</strong> {totalPrecio.toFixed(2)} €
              </p>

              <button className="btn btn-primary-custom w-100 mb-2">
                Finalizar compra
              </button>

              <button
                className="btn btn-outline-danger w-100"
                onClick={vaciarCarrito}
              >
                Vaciar carrito
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Carrito;