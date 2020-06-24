const Pacientes = require('../models/Pacientes');
const Personas = require('../models/Personas');
const Consultas = require('../models/Consultas');
const Medicos = require('../models/Medicos');

// agrega una nueva consulta
exports.nuevaConsulta = async(req, res, next) => {
    //const persona = new Personas(req.body)
    //const paciente = new Pacientes(req.body);
    const consulta = new Consultas(req.body);
    //fechaConsulta = new Date(req.body.fechaConsulta);
    //consulta.fechaConsulta = fechaConsulta;



    try {
        //almacenar el registro
        await consulta.save()

        res.json({ mensaje: 'Se agrego una nueva consulta', consulta });
    } catch (error) {
        // si hay un error, console.log y next para que no se
        // pare la aplicacion y siga al siguiente middleware
        res.send(error);
        next();
    }
};

//buscar consultas por ID paciente
exports.buscarConsultasPorIDPaciente = async(req, res, next) => {
    try {
        // obtener el query
        const { paciente } = req.body;
        const consulta = await Consultas.findOne({ paciente: paciente })
            .populate('paciente')
            .populate('medico')
            //console.log(paciente);

        if (consulta !== null) {
            res.json(consulta);
        } else {
            res.jason({ mensaje: "No se encuentran consultas con ese ID de paciente" });
        }


    } catch (error) {
        console.log(error);
        next();
    }
};