import { NavLink } from "react-router-dom"

function OpcionesLogin() {
  return (
    <ul>
        <li><NavLink to='inicio-sesion'>iniciar sesion</NavLink></li>
        <li><NavLink to='registrar'>registrar</NavLink></li>
    </ul>
  )
}

export default OpcionesLogin