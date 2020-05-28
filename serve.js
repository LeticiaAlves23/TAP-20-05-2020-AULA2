const express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

var mongoDB = 'mongodb://mongodb+srv://Users:LA5wQrhyZGWpQ3Lp@users-pow2f.mongodb.net/test?retryWrites=true&w=majority';

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async function(req, res) {

    let titulo = req.query.titulo;

    let articles = await Article.findAll().paginate({titulo: titulo}).exec();

    res.render('index', {
        articles: articles
    });
});

let server = app.listen(8080, function() {
    console.log('titulo')
});