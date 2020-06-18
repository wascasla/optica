const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tiposUariosSchema = new Schema({
    rol: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    }

});

module.exports = mongoose.model('TiposUsuarios', tiposUariosSchema);