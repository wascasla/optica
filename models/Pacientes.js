const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacientesSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    apellido: {
        type: String,
        trim: true,
    },
    fechaNacimiento: {
        type: Date,
        trim: true,
    },
    nombreTutor: {
        type: String,
        trim: true,
    },
    telefonoTutor: {
        type: String,
        trim: true,
    },
    nombreAcompanante: {
        type: String,
        trim: true,
    },
    telefonoAcompanante: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    telefono: {
        type: String,
        trim: true,
    },
    localidad: {
        type: Schema.ObjectId,
        ref: 'Localidades',
    },
    direccion: {
        type: String,
        trim: true,
    },
    obraSocial: {
        type: String,
        trim: true,
    },
    planOS: {
        type: String,
        trim: true,
    },
    numeroAfiliado: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Pacientes', pacientesSchema);