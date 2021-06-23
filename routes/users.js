const express = require('express');
const router = express.Router();
const institucionalController = require('../controllers/institucionalController');
const usuariosController = require('../controllers/usuariosController');

// http://localhost:3000/login
router.get('/login', usuariosController.login);

// http://localhost:3000/users/cadastro
router.post('/cadastro', usuariosController.salvar);

// http://localhost:3000/users/cadastro
router.get('/cadastro', usuariosController.cadastro);

module.exports = router;
