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

// agrega un nueva provincia
exports.nuevaProvincia = async (req, res, next) => {
    const provincia = new Provincias(req.body);
  
    try {
      //almacenar el registro
      await provincia.save();
      res.json({ mensaje: 'Se agrego un nuevo provincia' });
    } catch (error) {
      // si hay un error, console.log y next para que no se
      // pare la aplicacion y siga al siguiente middleware
      res.send(error);
      next();
    }
  };