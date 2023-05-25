import { NavLink } from 'react-router-dom'
import "./navBar.css"
import { useContext } from 'react'
import {UsuarioContext} from "./Pagina"
import OpcionesLogout from './OpcionesLogout'
import OpcionesLogin from './OpcionesLogin'

function NavBar() {
  const {Usuario} = useContext(UsuarioContext)
  return (
    <nav>
      <NavLink to=''>Salon de Eventos</NavLink>
      <menu>
        <p>Decoracion</p>
        <p>Eventos</p>
        {Usuario && <p>mis eventos</p>}
        {Usuario ? <OpcionesLogout/> : <OpcionesLogin/>}
      </menu>
    </nav> 
  )
}

export default NavBar