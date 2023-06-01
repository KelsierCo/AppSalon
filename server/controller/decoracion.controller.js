const { json } = require("express");
const pool = require("../database");

const decoraciones = async (req, res) => {
  const result = await pool.query("SELECT * FROM decoracion");
  res.json(result.rows);
};

const decoracion = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM decoracion WHERE id = $1", [
      id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
};

const crearDecoracion = async (req, res) => {
  const { id, decoracion } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO decoracion (id, decoracion) values ($1, $2) RETURNING *",
      [id, decoracion]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
};

const actualizarDecoracion = async (req, res) => {
  const { decoracion } = req.body;
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE decoracion SET decoracion = $1 WHERE id = $2 RETURNING *",
      [decoracion, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
};

const eliminarDecoracion = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM decoracion WHERE id = $1", [
      id,
    ]);
    res.json(result.rowCount);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  decoraciones,
  decoracion,
  crearDecoracion,
  actualizarDecoracion,
  eliminarDecoracion,
};
