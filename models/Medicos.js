const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicosSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    apellido: {
        type: String,
        trim: true,
    },
    matricula: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Medicos', medicosSchema);