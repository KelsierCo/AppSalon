import { useState, useEffect } from "react";
import login from "../../service/login";
import { useNavigate } from "react-router-dom";

function InicioSesion() {
  const navigate = useNavigate();
  const [Correo, setCorreo] = useState("");
  const [Contrasena, setContrasena] = useState("");
  const [Usuario, setUsuario] = useState(null)

  useEffect(() => {
    if (Usuario!== null){
      console.log(Usuario)
      navigate("/");
    } 
  }, [Usuario, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const datos = {
      correo: Correo,
      contrasena: Contrasena,
    };

    const res = await login(datos);
    if(!res.message) setUsuario(res);
  };

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
