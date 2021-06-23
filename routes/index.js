const express = require('express');
const router = express.Router();
const institucionalController = require('../controllers/institucionalController');
const usuariosController = require('../controllers/usuariosController');

// rotas para paginas institucionais

// http://localhost:3000/
router.get('/', institucionalController.index);

// http://localhost:3000/sobre
router.get('/sobre', institucionalController.sobre);

// http://localhost:3000/servicos
router.get('/servicos', institucionalController.servicos);

// http://localhost:3000/contato
router.get('/contato', institucionalController.contato);

// http://localhost:3000/login
router.get('/login', usuariosController.login);

// http://localhost:3000/login
router.get('/login', usuariosController.cadastro);


module.exports = router;