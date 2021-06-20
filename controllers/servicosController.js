/** módulo instalado para manipulação de arquivos */
const fs = require('fs');
const { url } = require('inspector');
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
        let ilustracao = request.file.filename;
        /** adiciona o novo serviço no array */
        servicos.push({ id: uuid(), nome, descricao, preco, ilustracao });
        /** converter o array para json */
        let dadosJson = JSON.stringify(servicos);
        /** salva json atualizado no arquivo */
        fs.writeFileSync(servicosPath, dadosJson);

        /* redireciona para lista de serviços */
        return response.redirect('/admin/servicos');
    },

    editar: (request, response) => {
        // pegando parametro por meio URL é usado o .params e pelo form é .body
        let {id} = request.params;

        // pegando servicos dentro do JSON e ver se é igual ao id que foi procurado na URL
        let servicoEncontrado = servicos.find(servico => servico.id == id);
        // renderiza a view e manda titulo e objeto do servico
        return response.render('servicosEditar', {titulo: 'Editar Servicos', servico: servicoEncontrado })

    },

    atualizar: (request, response) => {
        // pegando aporametro id da url
        let {id} = request.params;
        // trazendo informaçoes do formulario
        let {nome, descricao, preco} = request.body;
        // busca o servico pela id
        let servicoEncontrado = servicos.find(servico => servico.id == id);
        // atribuir os novos valores ao servicoEncontrado
        servicoEncontrado.descricao = descricao;
        // atribuir os novos valores ao servicoEncontrado
        servicoEncontrado.nome = nome;
        // atribuir os novos valores ao servicoEncontrado
        servicoEncontrado.preco = preco;
        
        // verifica se tem uma nova imagem antes de atribuir 
        if(request.file){
            servicoEncontrado.ilustracao = request.file.filename;
        }

                /** converter o array para json */
                let dadosJson = JSON.stringify(servicos);
                /** salva json atualizado no arquivo */
                fs.writeFileSync(servicosPath, dadosJson);
        
                /* redireciona para lista de serviços */
                return response.redirect('/admin/servicos');

    }

}

module.exports = servicosController;