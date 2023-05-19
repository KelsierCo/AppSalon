import './App.css';
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import ListaUsuarios from "./components/Admin/ListaUsuarios"
import Inicio from './components/general/Inicio';
import NavBar from './components/general/NavBar';
import NotFound from './components/general/NotFound'
import InicioSesion from './components/Usuario/InicioSesion';
import Registrar from './components/general/Registrar';


const Principal = ()=>{
  return (<>
    <header>
      <NavBar/>
    </header>
    <Outlet />
  </>)
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Principal/>,
    errorElement: <NotFound/>,
    children: [
      { path: "", element: <Inicio/>},
      { path: "inicio-sesion", element: <InicioSesion/>},
      { path: "registrar", element: <Registrar/>}
    ],
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
