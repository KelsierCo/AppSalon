const jwt = require("jsonwebtoken")
const { json } = require("express");
const pool = require("../database");
const { firma } = require("../config")

const iniciarUsuario = async (req, res) => {
  const { correo, contrasena } = req.body;

  const result = await pool.query(
    "SELECT id, nombre from usuario WHERE correo = $1 AND contrasena = $2",
    [correo, contrasena]
  );
  if (result.rows.length === 0)
    return res.status(404).json({
      message: "alguno de los datos no fue encontrado",
    });
  const user = result.rows[0]

  const dataToken = {
    id: user.id,
    nombre: user.nombre
  }

  const token = jwt.sign(dataToken, firma.firma)

  res.json({id: user.id, nombre: user.nombre, token});
};

module.exports = {
  iniciarUsuario,
};
