const Pacientes = require('../models/Pacientes');

// agrega un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body);

    try {
        //almacenar el registro
        await cliente.save();
        res.json({ mensaje: 'Se agrego un nuevo cliente' });
    } catch (error) {
        // si hay un error, console.log y next para que no se
        // pare la aplicacion y siga al siguiente middleware
        res.send(error);
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