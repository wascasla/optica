const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicosSchema = new Schema({
    persona: {
        type: Schema.ObjectId,
        ref: 'Personas',
    },
    matricula: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Medicos', medicosSchema);