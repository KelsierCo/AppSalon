const express = require("express");
const {
  actualizarDecoracion,
  crearDecoracion,
  decoraciones,
  eliminarDecoracion,
  decoracion,
} = require("../controller/decoracion.controller");

const router = express.Router();

router.get("/decoraciones", decoraciones);

router.get("/decoracion/:id", decoracion);

router.post("/decoracion", crearDecoracion);

router.delete("/decoracion", eliminarDecoracion);

router.put("/decoracion", actualizarDecoracion);

module.exports = router;
