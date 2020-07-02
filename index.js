const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

//para que lea los datos
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'variables.env' });

//cors permite que un cliente se conecte a otro servidor para el intercambio de recursos
const cors = require('cors');

// conectar con mongo
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

//crear el servidor
const app = express();

//carptea publica
app.use(express.static('uploads'));

// habilitar el bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Definir un dominio(s) para recibir las peticiones
const whitelist = [process.env.FRONTEND_URL]; // puden ser multiples urls
const corsOption = {
  origin: (origin, callback) => {
    // Revisar si la peticion viene de un servidor que esta en la lista whitelist
    const existe = whitelist.some(dominio => dominio === origin);
    if (existe) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  }
}

//habilitar cors
app.use(cors(corsOption));

//rutas de la app
app.use('/', routes());


const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

// iniciar app
app.listen(port, host, () => {
  console.log('el servidor esta funcionando')
});
