const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personasSchema = new Schema({
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
    dni: {
        type: Number,
        trim: true,
    },
    cuil: {
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
});

module.exports = mongoose.model('Personas', personasSchema);