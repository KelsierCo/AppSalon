import { useEffect, useState } from "react";
import registro from '../../service/registro'
import { useNavigate } from "react-router-dom";

function Registrar() {
  const navigate = useNavigate()
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contrasena, setContrasena] = useState(null);
  const [Recontrasena, setRecontrasena] = useState(null)
  const [Confirmacion, setConfirmacion] = useState(null)

  useEffect(() => {
    if (Confirmacion!== null){
      navigate("/inicio-sesion");
    } 
  }, [Confirmacion, navigate])
  

  const handleRegistro = async(e) => {
    e.preventDefault();
    const datos = {
      nombre: Nombre,
      correo: Correo,
      contrasena: Contrasena
    }
    if(Contrasena === Recontrasena){
      const res = await registro(datos)
      if(res.severity) return alert("Ya hay una cuenta asociada al correo")
      setConfirmacion(res)
      return alert("usuario "+ res.nombre +" correctamente")
    }
  };

  return (
    <form onSubmit={handleRegistro}>
      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        required
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      ></input>
      <label>Correo:</label>
      <input
        type="email"
        name="correo"
        required
        pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
        onChange={(e) => {
          setCorreo(e.target.value);
        }}
      ></input>
      <label>Contraseña:</label>
      <input
        type="password"
        name="contrasena"
        required
        onChange={(e) => {
          setContrasena(e.target.value);
        }}
      ></input>
      <label>Confirmar contraseña:</label>
      <input
        type="password"
        name="confirmar contrasena"
        required
        onChange={(e) => {
          setRecontrasena(e.target.value)}}
      ></input>
      <button type="submit">registrar</button>
    </form>
  );
}

export default Registrar;
