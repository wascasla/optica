const Pacientes = require('../models/Pacientes');
const Personas = require('../models/Personas');

//buscar persona por nombre y apellido
exports.buscarPersonaXNombreYApellido = async (req, res, next) => {
    try {
        // obtener el query
        const { nombre, apellido } = req.body;

        //si no envia el dni puede enviar el nombre y/o el apellido
        if (nombre !== '' || apellido !== '') {
            //const paciente = await Personas.find({ nombre: new RegExp(nombre, 'i')  $and  apellido: new RegExp(apellido, 'i') });
            //const personas = await Personas.find({ $and: [{ nombre: new RegExp(nombre, 'i') }, { apellido: new RegExp(apellido, 'i') }] })

            const personas = await Personas.find({ $and: [{ nombre: new RegExp(nombre, 'i') }, { apellido: new RegExp(apellido, 'i') }] })

            // let pacientes = [];

            // for (persona in personas) {
            //     //const pac = await (await Pacientes.findById({ persona: persona._id })).populate('persona').execPopulate();
            //     const paciente = await Pacientes.findOne({ persona: persona._id })
            //         //.populate('persona')
            //         .populate({
            //             path: 'persona',
            //             model: 'Personas'
            //         })
            //     pacientes.push(paciente)
            // }

            if (personas.length > 0) {
                //si existe la persona busco el paciente
                //res.json(personas);
                //console.log(personas);
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

//eliminar una persona
exports.eliminarPersona = async (req, res, next) => {
    TODO: "se puede eliminar una persona???"
    try {
        await Personas.findByIdAndDelete({ _id: req.params.idPersona });
        res.json({ code: '1', mensaje: 'Paciente eliminado con exito' });
    } catch (error) {
        console.log(error);
        next();
    }
};