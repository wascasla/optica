/*const Pedidos = require('../models/Pedidos');

//agregar un nuevo pedido
exports.nuevoPedido = async (req, res, next) => {
  const pedido = new Pedidos(req.body);

  try {
    //almacenar el registro
    await pedido.save();
    res.json({ mensaje: 'El pedido fue tomado con exito' });
  } catch (error) {
    console.log(error);
    next();
  }
};

//mostrar todos los pedidos
exports.mostrarPedidos = async (req, res, next) => {
  try {
    const pedidos = await Pedidos.find({}).populate('cliente').populate({
      path: 'pedido.producto',
      model: 'Productos',
    });
    res.json(pedidos);
  } catch (error) {
    console.log(error);
    next();
  }
};

//mostrar pedido por su ID
exports.mostrarPedido = async (req, res, next) => {
  try {
    const pedido = await Pedidos.findById(req.params.idPedido)
      .populate('cliente')
      .populate({
        path: 'pedido.producto',
        model: 'Productos',
      });
    if (!pedido) {
      res.json({ mensaje: 'El pedido no se encuentra' });
      return next();
    }
    res.json(pedido);
  } catch (error) {
    console.log(error);
    next();
  }
};

//actualizar un pedido por ID
exports.actualizarPedido = async (req, res, next) => {
  try {
    let pedido = await Pedidos.findByIdAndUpdate(
      { _id: req.params.idPedido },
      req.body,
      {
        new: true,
      }
    )
      .populate('cliente')
      .populate({
        path: 'pedido.producto',
        model: 'Productos',
      });

    res.json(pedido);
  } catch (error) {
    console.log(error);
    next();
  }
};

//eliminar un pedido por ID
exports.eliminarPedido = async (req, res, next) => {
  try {
    await Pedidos.findOneAndDelete({ _id: req.params.idPedido });
    res.json({ mensaje: 'El pedido fue eliminado con exito' });
  } catch (error) {
    console.log(error);
    next();
  }
};*/
