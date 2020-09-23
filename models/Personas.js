const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personasSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    apellido: {
        type: String,
        trim: true,
        required: true,
    },
    fechaNacimiento: {
        type: Date,
        trim: true,
        required: true,
    },
    dni: {
        type: Number,
        trim: true,
        required: true,
        unique: true,
    },
    cuil: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
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
    fichero: {
        type: String,
        trim: true,
    },
    legajo: {
        type: Number,
        trim: true,
    },
});

module.exports = mongoose.model('Personas', personasSchema);