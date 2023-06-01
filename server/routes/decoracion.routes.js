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

router.delete("/decoracion/:id", eliminarDecoracion);

router.put("/decoracion/:id", actualizarDecoracion);

module.exports = router;
