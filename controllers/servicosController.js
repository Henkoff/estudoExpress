/** módulo instalado para manipulação de arquivos */
const fs = require('fs');
/** modulo nativo para manipulação de arquivos */
const path = require('path');
/** modulo instalado para gerar id */
const  { uuid }  = require('uuidv4');

/** caminho do arquivo json */
const servicosPath = path.join('servicos.json');
/** lê conteúdo do arquivo json */
let servicos = fs.readFileSync(servicosPath, { encoding: 'utf-8' });
/** converte JSON para array */
servicos = JSON.parse(servicos);

const servicosController = {
    index: (request, response) => {
        /* renderiza a view adminServicos e passa informações dinamicas */
        return response.render('adminServicos', { titulo: 'servicos', servicos });
    },
    cadastro: (request, response) => {
        /* renderiza formulario de cadastro */
        return response.render('servicosCadastro', { titulo: 'Cadastrar Serviço'});
    },
    salvar: (request, response) => {
        let { nome, descricao, preco } = request.body;

        // pegando o nome do arquivo(upload)
        let ilustracao = request.file.path;
        /** adiciona o novo serviço no array */
        servicos.push({ id: uuid(), nome, descricao, preco, ilustracao });
        /** converter o array para json */
        let dadosJson = JSON.stringify(servicos);
        /** salva json atualizado no arquivo */
        fs.writeFileSync(servicosPath, dadosJson);

        /* redireciona para lista de serviços */
        return response.redirect('/admin/servicos');
    },

    show: (request, response) => {
        // console.log(request.params);
        // pegando parametro nome da rota /servicos/:nome
        const {nome} = request.params;

        return response.send(`exibindo detalhes do serviço ${nome}`);
    }
}

module.exports = servicosController;