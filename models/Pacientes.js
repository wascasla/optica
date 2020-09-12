const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacientesSchema = new Schema({
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
    obraSocial: {
        type: String,
        trim: true,
    },
    planObraSocial: {
        type: String,
        trim: true,
    },
    numeroAfiliado: {
        type: String,
        trim: true,
    },
    persona: {
        type: Schema.ObjectId,
        ref: 'Personas',
    },
    fichero: {
        type: String,
        trim: false,
    },
    fechaUltimaConsulta: {
        type: Date,
        trim: false,
    },
    medicoUltimaConsulta: {
        type: String,
        trim: false,
    },
    observacion: {
        type: String,
        trim: false,
    },
    legajo: {
        type: Number,
    },
});

module.exports = mongoose.model('Pacientes', pacientesSchema);