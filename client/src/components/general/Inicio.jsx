import { useContext } from 'react'
import {UsuarioContext} from '../principal/Pagina'

function Inicio() {
  const { Usuario } = useContext(UsuarioContext);
  return Usuario ? <h1>hola, {Usuario.nombre}</h1> : <h1>Hola</h1>
}

export default Inicio