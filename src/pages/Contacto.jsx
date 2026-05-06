import { useState } from "react";
import avatar from "../assets/img/avatar.png";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.nombre.trim().length < 2) {
      setError("El nombre debe tener al menos 2 caracteres.");
      setOk("");
      return;
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      setError("Introduce un correo electrónico válido.");
      setOk("");
      return;
    }

    if (form.asunto.trim().length < 3) {
      setError("El asunto debe tener al menos 3 caracteres.");
      setOk("");
      return;
    }

    if (form.mensaje.trim().length < 10) {
      setError("El mensaje debe tener al menos 10 caracteres.");
      setOk("");
      return;
    }

    setError("");
    setOk("Mensaje enviado correctamente. Te responderemos lo antes posible.");

    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  }

  return (
    <section className="section contacto-page">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="text-center mb-5">
          ¿Tienes dudas sobre productos, pedidos o envíos? Escríbenos y te ayudaremos.
        </p>

        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-7">
            <div className="card custom-card h-100">
              <h3 className="mb-3">Envíanos un mensaje</h3>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="nombre" className="form-label">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="asunto" className="form-label">
                      Asunto
                    </label>
                    <input
                      id="asunto"
                      type="text"
                      name="asunto"
                      value={form.asunto}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Motivo de tu consulta"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="mensaje" className="form-label">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      className="form-control"
                      rows="5"
                      placeholder="Escribe tu mensaje..."
                    />
                  </div>

                  {error && (
                    <div className="col-12">
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    </div>
                  )}

                  {ok && (
                    <div className="col-12">
                      <div className="alert alert-success" role="alert">
                        {ok}
                      </div>
                    </div>
                  )}

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary-custom">
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <aside className="col-12 col-lg-5">
            <div className="card custom-card h-100 contacto-info">
              <h3>Información de contacto</h3>
              <img 
                src={avatar} 
                alt="Avatar del responsable de MediSupply"
                className="contact-avatar"
              />

              <p>
                <strong>Email:</strong>
                <br />
                contacto@medisupply2026.com
              </p>

              <p>
                <strong>Teléfono:</strong>
                <br />
                +34 600 000 000
              </p>

              <p>
                <strong>Ubicación:</strong>
                <br />
                Proyecto académico — España
              </p>

              <hr />

              <h4>Horario de atención</h4>
              <p>Lunes a viernes: 9:00 - 18:00</p>

              <p className="small text-muted">
                Este formulario es una simulación académica. No se almacenan datos reales.
              </p>
            </div>
          </aside>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="card custom-card reclamaciones-box">
              <h3>Formulario para reclamaciones</h3>
              <p>
                Para reclamaciones sobre pedidos, utiliza este apartado indicando el número
                de pedido y una descripción clara del problema.
              </p>

              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Número de pedido"
                  />
                </div>

                <div className="col-12 col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Motivo de la reclamación"
                  />
                </div>

                <div className="col-12 col-md-3">
                  <button className="btn btn-secondary-custom w-100">
                    Enviar reclamación
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contacto;