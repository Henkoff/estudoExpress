const { response } = require("express");
const { request } = require("../app");
const bcrypt = require('bcrypt');
/** módulo instalado para manipulação de arquivos */
const fs = require('fs');
const { url } = require('inspector');
/** modulo nativo para manipulação de arquivos */
const path = require('path');
/** modulo instalado para gerar id */
const  { uuid }  = require('uuidv4');

/** caminho do arquivo json */
const servicosPath = path.join('usuarios.json');
/** lê conteúdo do arquivo json */
let usuarios = fs.readFileSync(usuariosPath, { encoding: 'utf-8' });
/** converte JSON para array */
usuarios = JSON.parse(usuarios);



const usuariosController = {


    cadastro: (request, response) => {

        response.render("cadastro", { titulo: "Cadastre-se"})

    },

    salvar: (request, response) =>{

        const {nome, email, senha} = request.body;
        const senhaCrypt = bcrypt.hashSync(senha, 10);
    },

    login: (request, response) => {
        response.render("login", {titulo: "Login"})
    }

}

module.exports = usuariosController;