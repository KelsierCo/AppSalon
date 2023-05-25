import { createContext, useState } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

export const UsuarioContext = createContext(null);

export function Pagina() {
  const [Usuario, setUsuario] = useState(null)

  return (
    <UsuarioContext.Provider value={{Usuario, setUsuario}}>
        <NavBar/>
        <Outlet/>
    </UsuarioContext.Provider>
  )
}
