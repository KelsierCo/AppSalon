const { json } = require("express");
const pool = require("../database");

const getUsuarios = async (req, res) => {
  const result = await pool.query("SELECT * from usuario");
  res.json(result.rows);
};

const getUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * from usuario WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "usuario no encontrado",
      });

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const crearUsuario = async (req, res) => {
  const { tipo, nombre, correo, contrasena } = req.body;

  const query =
    "INSERT INTO usuario (tipo, nombre, correo, contrasena) VALUES ($1,$2,$3,$4) RETURNING *";
  const datos = [tipo, nombre, correo, contrasena];

  const result = await pool.query(query, datos);

  res.json(result.rows[0]);
};

const eliminarUsuario = async (req, res) => {
  const { id } = req.body;

  const result = await pool.query("DELETE from usuario WHERE id = $1", [id]);

  if (result.rows.length === 0)
    return res.status(404).json({
      message: "usuario no encontrado",
    });
  
    return res.sendStatus(204);
};

const cambiarContrasena = async (req, res) => {
  const { id } = req.params;
  const { contrasena } = req.body;

  const result = await pool.query(
    "UPDATE usuario SET contrasena = $1 WHERE id = $2 RETURNING *",
    [contrasena, id]
  );
  if (result.rows.length === 0)
  return res.status(404).json({
    message: "usuario no encontrado",
  });
  res.json(result.rows[0]);
};

const iniciarUsuario = async (req, res) =>{
  const { correo, contrasena } = req.body;

  const result = await pool.query(
    'SELECT nombre from usuario WHERE correo = $1 AND contrasena = $2',
    [correo, contrasena]
  );
  if (result.rows.length === 0)
  return res.status(404).json({
    message: "alguno de los datos no fue encontrado",
  });
  res.json(result.rows[0]);
}

module.exports = {
  getUsuarios,
  getUsuario,
  crearUsuario,
  eliminarUsuario,
  cambiarContrasena,
  iniciarUsuario
};
