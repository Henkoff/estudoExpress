// middleware validação cadastro de formulario;
const servico = (request, response, next) => {

let { nome, preco, descricao } = request.body;

// esse "" = void 
if (nome == "" || preco == "" || descricao == "") {
    // retorna mensagem de erro
    response.send("preencha todos os campos obrigatorios!")
    // response.send( "servicoCadastro", {preencha todos os campos obrigatorios!"}) 


            // response.render("servicoCadastro", { erro: 'Preencha todos os campos obrigatórios!' });
        } else if (nome.length < 3 || nome.length > 15 || preco.length < 0) {
            response.send("Preencha os campos corretamente!");
}else{
    // executa proxima função/controller
    next();
}

}

module.exports = servico;