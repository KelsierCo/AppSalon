import { NavLink } from "react-router-dom"
import {UsuarioContext} from './Pagina'
import { useContext } from "react"

function OpcionesLogout() {
    const { setUsuario } = useContext(UsuarioContext)
  return (
    <ul>
        <li><NavLink to=''>Perfil</NavLink></li>
        <li><NavLink to='' onClick={()=>{setUsuario(null)}}>cerrar cesion</NavLink></li>
    </ul>
  )
}

export default OpcionesLogout