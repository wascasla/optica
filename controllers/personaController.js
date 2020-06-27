const Personas = require('../models/Personas');

//buscar persona por nombre y apellido
exports.buscarPersonaXNombreYApellido = async (req, res, next) => {
    try {
        // obtener el query
        const { nombre, apellido } = req.body;

        //si no envia el dni puede enviar el nombre y/o el apellido
        if (nombre !== '' || apellido !== '') {
            //const paciente = await Personas.find({ nombre: new RegExp(nombre, 'i')  $and  apellido: new RegExp(apellido, 'i') });
            const personas = await Personas.find({ $and: [{ nombre: new RegExp(nombre, 'i') }, { apellido: new RegExp(apellido, 'i') }] })
            // .populate('persona'); // i: it means insensitive no es case sensitivo
            //console.log(personas)
            if (personas.length > 0) {
                res.json(personas);
            } else {
                res.json({ mensaje: 'No existen pacientes con esos parametros' });
            }

        }


    } catch (error) {
        console.log(error);
        next();
    }
};

//buscar persona por dni
exports.buscarPersonaXDni = async (req, res, next) => {
    try {
        // obtener el query
        const { dni } = req.body;

        // primero consulto si el cliente envia el dni
        if (dni !== '') {
            const persona = await Personas.findOne({ dni: dni })

            if (persona !== null) {

                res.json(persona);

            } else {
                res.json({ mensaje: 'No existen persona con ese dni en el sistema' });
            }
        }


    } catch (error) {
        console.log(error);
        next();
    }
};


//actualizar un paciente
exports.actualizarPersona = async (req, res, next) => {
    try {
        console.log(req.body)
        // actualizar paciente
        /* const paciente = await Pacientes.findOneAndUpdate(
            { _id: req.params.idPaciente },
            req.body,
            {
                new: true, //aqui le decimos que almacene el valor nuevo
            }
        ); */

        //actualizar datos de la persona
        const persona = await Personas.findOneAndUpdate(

            { _id: req.params.idPersona },
            req.body,
            {
                new: true, //aqui le decimos que almacene el valor nuevo
            }
        );

        //const pacienteActualizado = await Pacientes.findOne({ _id: req.params.idPaciente }).populate('persona');

        //res.json(pacienteActualizado);
        res.json({ code: 1 });
    } catch (error) {
        res.send(error);
        next();
    }


};