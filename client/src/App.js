import { useState } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ListaUsuarios from "./components/admin/ListaUsuarios"
import Inicio from './components/general/Inicio';
import {Pagina} from './components/principal/Pagina'
import NotFound from './components/general/NotFound'
import InicioSesion from './components/general/InicioSesion';
import Registrar from './components/general/Registrar';
import Decoracion from "./components/general/Decoracion";
import Eventos from "./components/general/Eventos";


const router = createBrowserRouter([
  {
    path: "",
    element: <Pagina/>,
    errorElement: <NotFound/>,
    children: [
      { path: "", element: <Inicio/>},
      { path: "inicio-sesion", element: <InicioSesion/>},
      { path: "registrar", element: <Registrar/>},
      { path: 'decoracion', element: <Decoracion/>},
      { path: 'eventos', element: <Eventos/>}
    ],
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
