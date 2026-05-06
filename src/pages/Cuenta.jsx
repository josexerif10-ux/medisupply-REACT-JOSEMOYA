import { useState } from "react";

function Cuenta() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    password2: "",
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

    if (form.nombre.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
      setOk("");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Correo inválido");
      setOk("");
      return;
    }

    if (form.password.length < 6) {
      setError("La contraseña debe tener mínimo 6 caracteres");
      setOk("");
      return;
    }

    if (form.password !== form.password2) {
      setError("Las contraseñas no coinciden");
      setOk("");
      return;
    }

    setError("");
    setOk("Registro completado correctamente ✔");

    setForm({
      nombre: "",
      email: "",
      password: "",
      password2: "",
    });
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Crear cuenta</h2>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card custom-card">

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label>Repetir contraseña</label>
                  <input
                    type="password"
                    name="password2"
                    value={form.password2}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                {error && (
                  <div className="alert alert-danger">{error}</div>
                )}

                {ok && (
                  <div className="alert alert-success">{ok}</div>
                )}

                <button className="btn btn-primary-custom w-100">
                  Registrarme
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cuenta;