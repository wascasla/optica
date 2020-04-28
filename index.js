const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

//para que lea los datos
const bodyParser = require('body-parser');

// conectar con mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapi', {
  useNewUrlParser: true,
});

//crear el servidor
const app = express();

// habilitar el bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//rutas de la app
app.use('/', routes());

//puerto
app.listen(5000);
