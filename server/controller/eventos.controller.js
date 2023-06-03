const { json } = require("express");
const pool = require("../database");

const eventos = async (req, res) => {
  const result = await pool.query("SELECT * FROM eventos");
  res.json(result.rows);
};

const evento = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM eventos WHERE id = $1", [
      id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
};

const crearEvento = async (req, res) => {
  const { fecha, hora, cliente, personas, celebracion, decoracion, direccion, localidad } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO eventos (fecha, hora, id_cliente, cantidad_personas, id_celebracion, id_decoracion, direccion, id_localidad) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [fecha, hora, cliente, personas, celebracion, decoracion, direccion, localidad]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
};

const actualizarEvento = async (req, res) => {
  const { fecha, personas, direccion, localidad } = req.body;
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE eventos SET fecha = $1 WHERE id = $2 RETURNING *",
      [fecha, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
};

const eliminarEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM eventos WHERE id = $1", [
      id,
    ]);
    res.json(result.rowCount);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
    eventos,
    evento,
    crearEvento,
    actualizarEvento,
    eliminarEvento
};