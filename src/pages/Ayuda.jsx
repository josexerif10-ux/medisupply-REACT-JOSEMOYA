function Ayuda() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Ayuda y preguntas frecuentes</h2>

        <p className="text-center mb-5">
          En esta sección se recogen las dudas más habituales sobre el uso de
          MediSupply y se incluye un vídeo demostrativo del proyecto.
        </p>

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="card custom-card h-100">
              <h3>Vídeo demostrativo</h3>
              <p>
                Este vídeo simula una presentación del funcionamiento general
                de la tienda online.
              </p>

              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Vídeo demostrativo de MediSupply"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card custom-card h-100">
              <h3>Preguntas frecuentes</h3>

              <h4>¿Cómo puedo comprar?</h4>
              <p>
                Accede al catálogo, selecciona un producto y añádelo al carrito.
              </p>

              <h4>¿El pago es real?</h4>
              <p>
                No. Este proyecto es académico y no procesa pagos reales.
              </p>

              <h4>¿Se guardan datos personales?</h4>
              <p>
                No. Los formularios son simulados y solo se usan para mostrar
                validación de interfaz.
              </p>

              <h4>¿La web es responsive?</h4>
              <p>
                Sí. La interfaz se adapta a móviles, tablets y escritorio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ayuda;