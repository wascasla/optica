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

// agrega un nueva provincia
exports.nuevaLocalidad = async (req, res, next) => {
    const localidad = new Localidades(req.body);
  
    try {
      //almacenar el registro
      await localidad.save();
      res.json({ mensaje: 'Se agrego un nueva localidad' });
    } catch (error) {
      // si hay un error, console.log y next para que no se
      // pare la aplicacion y siga al siguiente middleware
      res.send(error);
      next();
    }
  };