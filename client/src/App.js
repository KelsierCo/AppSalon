import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ListaUsuarios from "./components/Admin/ListaUsuarios"
import Inicio from './components/general/Inicio';

const router = createBrowserRouter([
  { path: "/", element: <Inicio/>}
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
