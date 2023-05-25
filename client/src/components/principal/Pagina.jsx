import { createContext, useState } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const UsuarioContext = createContext(null);

function Pagina() {
  const [Usuario, setUsuario] = useState(null)

  return (
    <UsuarioContext.Provider value={Usuario}>
        <NavBar/>
        <Outlet/>
    </UsuarioContext.Provider>
  )
}

export default Pagina