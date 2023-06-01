import { useEffect, useState } from "react";
import obtenerDecoracion from "../../service/obtenerDecoracion";

function Decoracion() {
  const [decoraciones, setDecoraciones] = useState([]);
  useEffect(() => {
    obtenerDecoracion().then((data) => {
      setDecoraciones(data);
    });
  }, []);

  return (
    <section>
      <h2>decoraciones</h2>
      {decoraciones.map((decoracion) => (
        <div key={decoracion.id}>
          <h3>{decoracion.decoracion}</h3>
          <img src={decoracion.url_img} alt={decoracion.decoracion}/>
        </div>
      ))}
    </section>
  );
}

export default Decoracion;
