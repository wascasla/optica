const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historiasClinicaSchema = new Schema({
    fichero: {
        type: String,
        trim: false,
    },
    ficha: {
        type: String,
        trim: false,
    },
    paciente: {
        type: Schema.ObjectId,
        ref: 'Pacientes',
    },
});

module.exports = mongoose.model('HistoriasClinicas', historiasClinicaSchema);