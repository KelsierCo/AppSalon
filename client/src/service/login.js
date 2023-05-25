const login = async (datos) => {
  const res = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(datos),
  });
  const data = await res.json();
  console.log(data)
  return data
};

export default login;
