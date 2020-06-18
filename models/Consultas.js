const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consultasSchema = new Schema({
    medico: {
        type: Schema.ObjectId,
        ref: 'Medicos',
    },
    paciente: {
        type: Schema.ObjectId,
        ref: 'Pacientes',
    },
    fechaConsulta: {
        type: Date,

    },
    observaciones: {
        type: String,
        trim: false,
    },
});

module.exports = mongoose.model('Consultas', consultasSchema);