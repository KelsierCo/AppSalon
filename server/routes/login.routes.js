const express = require("express");
const { iniciarUsuario } = require("../controller/login.controller");

const router = express.Router();

router.post("/login", iniciarUsuario);

module.exports = router;
