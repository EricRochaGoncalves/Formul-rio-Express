const express = require('express');
const { engine } = require('express-handlebars'); // Importação correta

const app = express();

// Configuração do Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Conexão com o banco de dados
const { Types } = require('mysql2');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro', 'root', 'Y@sp2006', {
    host: 'localhost',
    dialect: 'mysql',
});

// Rotas
app.get('/cad', function(req, res) {
    res.render('form');

});

app.listen(8081, function() {
    console.log('Servidor rodando na URL http://localhost:8081!');
});


