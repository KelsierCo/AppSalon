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
        <NavLink to='/decoracion'><p>decoracion</p></NavLink>
        <NavLink to='/eventos'><p>eventos</p></NavLink>
        {Usuario && <p>mis eventos</p>}
        {Usuario ? <OpcionesLogout/> : <OpcionesLogin/>}
      </menu>
    </nav> 
  )
}

export default NavBar