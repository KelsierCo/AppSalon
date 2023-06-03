const express = require("express");
const {
    actualizarEvento,
    crearEvento,
    eliminarEvento,
    evento,
    eventos
} = require("../controller/eventos.controller");

const router = express.Router();

router.get("/eventos", eventos);

router.get("/evento/:id", evento);

router.post("/evento", crearEvento);

router.delete("/evento/:id", eliminarEvento);

router.put("/evento/:id", actualizarEvento);

module.exports = router;