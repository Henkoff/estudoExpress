const institucionalController = {
    index: (request, response) => {
        return response.render('index', { titulo: 'Home' });
    },
    sobre: (request, response) => {
        return response.render('sobre', { titulo: 'Sobre' });
    },
    servicos: (request, response) => {
        return response.render('servicos', { titulo: 'Serviços' });
    },
    contato: (request, response) => {
        return response.render('contato', { titulo: 'Contato' });
    }
}

module.exports = institucionalController;

//response é a resposta para o usuario
// o parametro é qual view vc quer renderizar tipo 'index', 'sobre', 'servicos' e etc...