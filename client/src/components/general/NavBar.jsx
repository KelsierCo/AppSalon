import { NavLink } from 'react-router-dom'
import "./navBar.css"

function NavBar() {
  return (
    <nav>
      <NavLink to=''>Salon de Eventos</NavLink>
      <menu>
        <p>Decoracion</p>
        <p>Eventos</p>
        <ul>
          <li><NavLink to='inicio-sesion'>iniciar sesion</NavLink></li>
          <li><NavLink to='registrar'>registrar</NavLink></li>
        </ul>
      </menu>
    </nav> 
  )
}

export default NavBar