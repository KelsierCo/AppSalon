async function registro(datos) {
  const res = await fetch("http://localhost:3001/crearUsuario", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(datos),
  });
  const data = await res.json();
  return data

}

export default registro