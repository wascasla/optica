const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

//para que lea los datos
const bodyParser = require('body-parser');

//cors permite que un cliente se conecte a otro servidor para el intercambio de recursos
const cors = require('cors');

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

//habilitar cors
app.use(cors());

//rutas de la app
app.use('/', routes());

//carptea publica
app.use(express.static('uploads'));

//puerto
app.listen(5000);
