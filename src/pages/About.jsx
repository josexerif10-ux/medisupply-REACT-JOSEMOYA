import avatar from "../assets/img/avatar.png";

function About() {
  return (
    <section className="section">
      <div className="container">

        <h2 className="section-title">Sobre mí</h2>

        <div className="row align-items-center g-4">

          {/* TEXTO */}
          <div className="col-12 col-lg-7">
            <h3>Hola, soy José Antonio</h3>

            <p>
              Soy un profesional sanitario apasionado por la enfermería
              y el desarrollo web. Este proyecto combina ambos mundos,
              creando una tienda online enfocada en estudiantes y profesionales de la salud.
            </p>

            <p>
              MediSupply nace como un proyecto académico dentro del módulo
              de Diseño de Interfaces Web, aplicando tecnologías modernas
              como React, Bootstrap y jQuery.
            </p>

            <p>
              El objetivo es ofrecer una experiencia usable, accesible
              y visualmente atractiva.
            </p>
          </div>

          {/* IMAGEN */}
          <div className="col-12 col-lg-5 text-center">
            <img
              src={avatar}
              alt="Foto del creador de MediSupply"
              className="about-avatar"
            />
          </div>

        </div>

      </div>

      {/* VALORES */}
      <div className="section-gray mt-5">
        <div className="container">

          <h2 className="section-title">Valores del proyecto</h2>

          <div className="row g-4">

            <div className="col-12 col-md-4">
              <div className="card custom-card text-center">
                <h3>Cercanía</h3>
                <p>
                  Pensado para estudiantes y profesionales reales del sector sanitario.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card custom-card text-center">
                <h3>Calidad</h3>
                <p>
                  Productos seleccionados con criterio profesional.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card custom-card text-center">
                <h3>Accesibilidad</h3>
                <p>
                  Diseño usable y adaptado a todos los dispositivos.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default About;