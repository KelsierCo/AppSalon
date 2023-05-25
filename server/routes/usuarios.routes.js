const express = require("express");
const {
  getUsuarios,
  crearUsuario,
  getUsuario,
  eliminarUsuario,
  cambiarContrasena,
} = require("../controller/usuario.controller");

const router = express.Router();

router.get("/usuarios", getUsuarios);

router.get("/usuario/:id", getUsuario);

router.post("/crearUsuario", crearUsuario);

router.delete("/usuario", eliminarUsuario);

router.put("/usuario/:id", cambiarContrasena);

module.exports = router;
