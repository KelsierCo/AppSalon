import { useState } from "react";

function InicioSesion() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(Correo);
    console.log(Contrasena);
  }

  const [Correo, setCorreo] = useState("");
  const [Contrasena, setContrasena] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <label>Correo</label>
      <input
        type="email"
        name="correo"
        
        onChange={(e) => {
          setCorreo(e.target.value);
        }}
      />

      <label>Contraseña</label>
      <input
        type="password"
        name="contraseña"
        onChange={(e) => {
          setContrasena(e.target.value);
        }}
      />

      <button type="submit">Iniciar</button>
    </form>
  );
}

export default InicioSesion;
