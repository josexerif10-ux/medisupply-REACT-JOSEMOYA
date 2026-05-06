import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

function Home() {
  const slides = [
  {
    titulo: "Material sanitario profesional",
    texto: "Productos pensados para estudiantes y profesionales de la salud.",
  },
  {
    titulo: "Crocs sanitarios",
    texto: "Comodidad y seguridad para largas jornadas de prácticas o trabajo.",
  },
  {
    titulo: "Libros y accesorios médicos",
    texto: "Recursos útiles para estudiar, trabajar y regalar.",
  },
];

const [slideActual, setSlideActual] = useState(0);

useEffect(() => {
  const intervalo = setInterval(() => {
    setSlideActual((prev) => (prev + 1) % slides.length);
  }, 4000);

  $(".slider-box").hide().fadeIn(600);

  return () => clearInterval(intervalo);
}, [slideActual]);
  
  return (
    <>
      <section className="home-slider">
  <div className="container">
    <div className="slider-box">
      <h2>{slides[slideActual].titulo}</h2>
      <p>{slides[slideActual].texto}</p>

      <div className="slider-controls">
        <button
          className="btn btn-light"
          onClick={() =>
            setSlideActual(
              slideActual === 0 ? slides.length - 1 : slideActual - 1
            )
          }
          aria-label="Slide anterior"
        >
          ‹
        </button>

        <button
          className="btn btn-light"
          onClick={() =>
            setSlideActual((slideActual + 1) % slides.length)
          }
          aria-label="Slide siguiente"
        >
          ›
        </button>
      </div>
    </div>
  </div>
</section>
      
      <section className="hero">
        <div className="container text-center">
          <h2>Todo lo que necesitas para tu día a día sanitario</h2>
          <p>
            Calzado cómodo, libros especializados, fonendoscopios y detalles
            personalizados para profesionales de la salud.
          </p>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/catalogo" className="btn btn-primary-custom">
              Ver catálogo
            </Link>

            <Link to="/contacto" className="btn btn-secondary-custom">
              Hablar conmigo
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Categorías principales</h2>

          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <article className="card custom-card h-100">
                <h3>Crocs sanitarios</h3>
                <img
                  src="/src/assets/img/croc celeste.png"
                  alt="Crocs sanitarios de color celeste"
                  className="category-img"
                />
                <p>Comodidad y seguridad para largas jornadas.</p>
              </article>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <article className="card custom-card h-100">
                <h3>Fonendoscopios</h3>
                <img
                  src="/src/assets/img/FONENDO.jfif"
                  alt="Fonendoscopio profesional"
                  className="category-img"
                />
                <p>Herramientas precisas para valoración clínica.</p>
              </article>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <article className="card custom-card h-100">
                <h3>Libros de medicina</h3>
                <img
                  src="/src/assets/img/fisiology.jfif"
                  alt="Libro de fisiología médica"
                  className="category-img"
                />
                <p>Apoyo académico para tus estudios y profesión.</p>
              </article>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <article className="card custom-card h-100">
                <h3>Funkos sanitarios</h3>
                <img
                  src="/src/assets/img/FUNKO.jfif"
                  alt="Figura Funko de temática sanitaria"
                  className="category-img"
                />
                <p>Detalles divertidos para taquillas y escritorios.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Productos destacados</h2>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <article className="card custom-card product-card h-100">
                <img
                  src="/src/assets/img/MCQUEEN.jfif"
                  alt="Crocs sanitarias rojas"
                  className="product-img"
                />
                <div className="card-body">
                  <h3>Crocs sanitarias rojas</h3>
                  <p>
                    Diseñadas para resistir turnos largos con máxima comodidad.
                  </p>
                  <span className="price">29,90 €</span>
                  <button className="btn btn-secondary-custom mt-3">
                    Añadir al carrito
                  </button>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <article className="card custom-card product-card h-100">
                <img
                  src="/src/assets/img/FONENDO.jfif"
                  alt="Fonendoscopio profesional"
                  className="product-img"
                />
                <div className="card-body">
                  <h3>Fonendoscopio profesional</h3>
                  <p>Acústica nítida para exploraciones precisas.</p>
                  <span className="price">65,00 €</span>
                  <button className="btn btn-secondary-custom mt-3">
                    Añadir al carrito
                  </button>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <article className="card custom-card product-card h-100">
                <img
                  src="/src/assets/img/TES.jfif"
                  alt="Funko TES sanitario"
                  className="product-img"
                />
                <div className="card-body">
                  <h3>Funko TES</h3>
                  <p>El regalo perfecto para estudiantes y profesionales.</p>
                  <span className="price">14,90 €</span>
                  <button className="btn btn-secondary-custom mt-3">
                    Añadir al carrito
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">¿Por qué MediSupply?</h2>

          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <article className="card custom-card h-100">
                <h3>Envíos en España</h3>
                <p>Envíos a toda la península con seguimiento.</p>
              </article>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <article className="card custom-card h-100">
                <h3>Calidad seleccionada</h3>
                <p>Productos elegidos por un profesional sanitario.</p>
              </article>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <article className="card custom-card h-100">
                <h3>Ofertas periódicas</h3>
                <p>Promociones especiales para estudiantes.</p>
              </article>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <article className="card custom-card h-100">
                <h3>Pago seguro</h3>
                <p>Pago con tarjeta y plataformas de confianza.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;