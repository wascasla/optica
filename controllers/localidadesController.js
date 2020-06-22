const Localidades = require('../models/Localidades');

//mostrar todos los localidades
exports.getLocalidades = async (req, res, next) => {
    try {
        const localidades = await Localidades.find({}).populate('provincia');
        res.json(localidades);
    } catch (error) {
        console.log(error);
        next();
    }
};