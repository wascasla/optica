const Pacientes = require('../models/Pacientes');
const Personas = require('../models/Personas');

// agrega un nuevo paciente
exports.nuevoPaciente = async (req, res, next) => {
    const persona = new Personas(req.body)
    const paciente = new Pacientes(req.body);
    paciente.persona = persona._id;
    fechaNacimiento = new Date(paciente.fechaNacimiento)
    //console.log("persona: " + persona);
    //console.log("paciente: " + paciente);

    TODO: "falta agregar la localidad al paciente"

    try {
        //almacenar el registro
        await persona.save()
        await paciente.save();
        res.json({ mensaje: 'Se agrego un nuevo paciente' });
    } catch (error) {
        // si hay un error, console.log y next para que no se
        // pare la aplicacion y siga al siguiente middleware
        res.send(error);
        next();
    }
};

//buscar paciente
exports.buscarPaciente = async (req, res, next) => {
    try {
        // obtener el query
        const { nombre, apellido, dni } = req.params;
        if (nombre && apellido) {
            const paciente = await Personas.find({
                nombre: new RegExp(nombre, 'i'), apellido: new RegExp(nombre, 'i')
            })
            //.populate('persona'); // i: it means insensitive no es case sensitivo
            res.json(paciente);
        } else {
            res.json({ mensaje: 'No existen pacientes con esos parametros' });
        }

    } catch (error) {
        console.log(error);
        next();
    }
};

//mostrar todos los pacientes
exports.mostrarPacientes = async (req, res, next) => {
    try {
        const pacientes = await Pacientes.find({})
            .populate('persona');
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
};

//obtener un Paciente mediante su ID
exports.mostrarPaciente = async (req, res, next) => {
    try {
        const paciente = await Pacientes.findById(req.params.idPaciente);

        if (!paciente) {
            res.json({ mensaje: 'Ese paciente no existe' });
            next();
        }

        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
};

//actualizar un paciente
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Pacientes.findOneAndUpdate(
            { _id: req.params.idPaciente },
            req.body,
            {
                new: true, //aqui le decimos que almacene el valor nuevo
            }
        );
        res.json(paciente);
    } catch (error) {
        res.send(error);
        next();
    }
};

//eliminar un paciente
exports.eliminarPaciente = async (req, res, next) => {
    TODO: "se puede eliminar un paciente???"
    try {
        await Pacientes.findByIdAndDelete({ _id: req.params.idPaciente });
        res.json({ mensaje: 'Paciente eliminado con exito' });
    } catch (error) {
        console.log(error);
        next();
    }
};


exports.mensaje = async (req, res, next) => {
    //const cliente = new Clientes(req.body);

    try {
        //almacenar el registro
        //await cliente.save();
        res.json({ mensaje: 'Hola qno' });
    } catch (error) {
        // si hay un error, console.log y next para que no se
        // pare la aplicacion y siga al siguiente middleware
        res.send(error);
        next();
    }
};