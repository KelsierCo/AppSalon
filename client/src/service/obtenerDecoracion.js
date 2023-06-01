

async function obtenerDecoracion() {
    const res = await fetch("http://localhost:3001/decoraciones")
    const data = res.json()
    return data
}

export default obtenerDecoracion