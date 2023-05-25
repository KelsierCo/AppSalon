function Registrar() {
  return (
    <form>
      <label>Nombre:</label>
      <input type="text"></input>
      <label>Correo:</label>
      <input type="email"></input>
      <label>Contraseña:</label>
      <input type="password"></input>
      <label>Confirmar contraseña:</label>
      <input type="password"></input>
      <button>registrar</button>
    </form>
  )
}

export default Registrar