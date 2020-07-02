const Provincias = require('../models/Provincias');
const _ = require('lodash');
const Localidades = require('../models/Localidades');

const provloc = require('../models/argentina.json');

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

<<<<<<< HEAD
//mostrar todos los provincias
exports.importarLocalidades = async (req, res, next) => {
    try {

        _.each(provloc, (prov) => {
            /* _.each(authors, (author) => {
              if (book.authorId == author.id) {
                Object.assign(book, { author });
              }
            }); */
            const provincia = prov
            const provinciaDB = new Provincias({ nombre: provincia.provincia })
            //guardo en la bd la provincia
            provinciaDB.save()

            // recorro las localidades para crear las mismas en la bd
            provincia.localidad.map((localidad) => {
                const localidadDB = new Localidades({ nombre: localidad, provincia: provinciaDB._id })
                localidadDB.save()
                //console.log(localidadDB)
            })
            //console.log(provinciaDB)
        });

        const provincias = await Provincias.find({});
        //res.json({ "mensaje": existen + provincias.lenght + provincias })
        res.json({ mensaje: "termino la migracion" })

    } catch (error) {
        console.log(error);
        next();

    }

};
=======
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
>>>>>>> 5fd387579c2c7b965d03c2c72f93238c75160b9e
