const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provinciasSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Provincias', provinciasSchema);