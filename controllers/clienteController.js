/*const Clientes = require('../models/Clientes');

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

//mostrar todos los clientes
exports.mostrarClientes = async (req, res, next) => {
  try {
    const clientes = await Clientes.find({});
    res.json(clientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

//obtener un cliente mediante su ID
exports.mostrarCliente = async (req, res, next) => {
  try {
    const cliente = await Clientes.findById(req.params.idCliente);

    if (!cliente) {
      res.json({ mensaje: 'Ese cliente no existe' });
      next();
    }

    res.json(cliente);
  } catch (error) {
    console.log(error);
    next();
  }
};

//actualizar un cliente
exports.actualizarCliente = async (req, res, next) => {
  try {
    const cliente = await Clientes.findOneAndUpdate(
      { _id: req.params.idCliente },
      req.body,
      {
        new: true, //aqui le decimos que almacene el valor nuevo
      }
    );
    res.json(cliente);
  } catch (error) {
    res.send(error);
    next();
  }
};

//eliminar un cliente
exports.eliminarCliente = async (req, res, next) => {
  try {
    await Clientes.findByIdAndDelete({ _id: req.params.idCliente });
    res.json({ mensaje: 'Cliente eliminado con exito' });
  } catch (error) {
    console.log(error);
    next();
  }
};*/
