const Provincias = require('../models/Provincias');

//mostrar todos los provincias
exports.getProvincias = async (req, res, next) => {
    try {
        const provincias = await Provincias.find({});
        res.json(provincias);
    } catch (error) {
        console.log(error);
        next();
    }
};