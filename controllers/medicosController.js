//const Pacientes = require('../models/Pacientes');
const Personas = require('../models/Personas');
//const Consultas = require('../models/Consultas');
const Medicos = require('../models/Medicos');

// agrega un nuevo paciente
exports.nuevoMedico = async(req, res, next) => {
    const persona = new Personas(req.body)
    const medico = new Medicos(req.body);
    medico.persona = persona._id;
    fechaNacimiento = new Date(persona.fechaNacimiento)
        //console.log("persona: " + persona);
        //console.log("paciente: " + paciente);

    TODO: "falta agregar la localidad al Medico"

    try {
        //almacenar el registro
        await persona.save()
        await medico.save();
        res.json({ mensaje: 'Se agrego un nuevo medico' });
    } catch (error) {
        // si hay un error, console.log y next para que no se
        // pare la aplicacion y siga al siguiente middleware
        res.send(error);
        next();
    }
};