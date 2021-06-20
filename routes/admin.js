
const express = require('express'); // chama modulo express
const multer = require('multer'); //chama o modulo multer para a rota/ upload de arquivos na aplicação
const path = require('path'); // chama modulo path que faz o caminho dos arquivos
const router = express.Router(); // chama metodo que gerencia rotas
const servicosController = require('../controllers/servicosController');

    // configuração do multer
const storage = multer.diskStorage({
    // destino do upload
    destination: (req, file, cb) =>{
        // guarda arquivos na pasta uploads
        cb(null, path.join('uploads'));
    },
    // nome do upload
    filename: (req, file, cb) =>{                
            //   pega NOME, data e extensão do arquivo
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});

// usando configuração como storage do multer
const upload = multer({storage});


/* http://localhost:3000/admin */
router.get('/', (request, response) => {
    response.render('admin', { titulo: 'Painel Administrativo' });
});


/* http://localhost:3000/admin/servicos */
router.get('/servicos', servicosController.index);

/* http://localhost:3000/admin/servicos/cadastro */
router.get('/servicos/cadastro', servicosController.cadastro);

/* http://localhost:3000/admin/servicos/cadastro */
router.post('/servicos/cadastro', upload.single('ilustracao'), servicosController.salvar);


/* exporta as rotas */
module.exports = router;