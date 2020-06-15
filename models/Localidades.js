const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const localidadesSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    codigoPostal: {
        type: Number,
        trim: true,
    },
    provincia: {
        type: Schema.ObjectId,
        ref: 'Provincias',
    },
});

module.exports = mongoose.model('Localidades', localidadesSchema);