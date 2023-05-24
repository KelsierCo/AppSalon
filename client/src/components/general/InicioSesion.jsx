import { useState, useEffect } from "react";
import login from '../../service/login'

function InicioSesion() {
  const [Correo, setCorreo] = useState("");
  const [Contrasena, setContrasena] = useState("");
  const [nombre, setNombre] = useState("")

  const handleLogin = async(e) => {
    e.preventDefault();
    const datos = {
      correo: Correo,
      contrasena: Contrasena
    }
    const res = await login(datos)
    setNombre(res.nombre)
  }

  return (
    <form onSubmit={handleLogin}>
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
