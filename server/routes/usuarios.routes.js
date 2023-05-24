const express = require('express');
const { getUsuarios, crearUsuario, getUsuario, eliminarUsuario, cambiarContrasena, iniciarUsuario } = require('../controller/usuario.controller')

const router = express.Router();

router.get('/usuarios', getUsuarios)

router.get('/usuario/:id', getUsuario)

router.post('/usuario', iniciarUsuario)

router.post('/crearUsuario', crearUsuario)

router.delete('/usuario', eliminarUsuario)

router.put('/usuario/:id', cambiarContrasena)

module.exports = router;