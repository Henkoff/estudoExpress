const fs = require('fs');


// next faz a aplicação continuar rodando, ir para o proxima interação ou retorna mensagem de erro?
const log = (request, response, next) => {

    // adiciona novo conteudo ao arquivo, parametro é o nome do arquivo q vai receber os logs
    // cria o log.txt se não existir e adiciona mensagem no arquivo  
    fs.appendFileSync('log.txt', ` O usuario acessou a url: ${request.url + ' ' + Date.now()} \n`);
    // manda o usuario para o controller/ executa a proxima função(controller)
    next();

}

// exporta o middleware
module.exports = log;