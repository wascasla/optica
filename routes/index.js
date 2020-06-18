const express = require('express');
const router = express.Router();
//const clienteController = require('../controllers/clienteController');
//const productosController = require('../controllers/productosController');
const pacientesController = require('../controllers/pacientesController');
const usuariosController = require('../controllers/usuariosController');

// middle para proteger las rutas
const auth = require('../middleware/auth');

module.exports = function () {
  //agrega nuevos clientes via POST
  /*  router.post('/clientes',
      auth,
      clienteController.nuevoCliente);
  
    // obtener todos los clientes
    router.get('/clientes',
      auth,
      clienteController.mostrarClientes
    );
  
    //obtener un cliente por id
    router.get('/clientes/:idCliente',
      auth,
      clienteController.mostrarCliente);
  
    //Actualizar cliente
    router.put('/clientes/:idCliente',
      auth,
      clienteController.actualizarCliente);
  
    //Eliminar cliente
    router.delete('/clientes/:idCliente',
      auth,
      clienteController.eliminarCliente);
  */
  /** PRODUCTOS */

  //agrear nuevos productos
  /*router.post(
    '/productos',
    auth,
    productosController.subirArchivo,
    productosController.nuevoProducto
  );

  //mostrar todos los productos
  router.get('/productos',
    auth,
    productosController.mostrarProductos);

  //mostrar un producto por id
  router.get('/productos/:idProducto',
    auth,
    productosController.mostrarProducto);

  //actualizar un producto
  router.put(
    '/productos/:idProducto',
    auth,
    productosController.subirArchivo,
    productosController.actualizarProducto
  );

  // eliminar un producto
  router.delete('/productos/:idProducto',
    auth,
    productosController.eliminarProducto);

  //Busqueda de productos
  router.post('/productos/busqueda/:query',
    auth,
    productosController.buscarProducto);
*/
  /** PEDIDOS */

  //agregar un nuevo pedido
  /*router.post('/pedidos/nuevo/:idUsuario',
    auth,
    pedidosController.nuevoPedido);

  //mostrar todos los pedidos
  router.get('/pedidos',
    auth,
    pedidosController.mostrarPedidos);

  //mostrar un pedido por ID
  router.get('/pedidos/:idPedido',
    auth,
    pedidosController.mostrarPedido);

  //actualizar un pedido por ID
  router.put('/pedidos/:idPedido',
    auth,
    pedidosController.actualizarPedido);

  //eliminar un pedido por ID
  router.delete('/pedidos/:idPedido',
    auth,
    pedidosController.eliminarPedido);
*/
  // Usuarios
  router.post('/crear-cuenta',
    auth,
    usuariosController.registrarUsuario);

  router.post('/iniciar-sesion', usuariosController.autenticarUsuario);

  //Pacientes
  //mostrar un mensaje
  router.get('/mensaje', pacientesController.mensaje);

  //agrega nuevos paciente via POST
  router.post('/pacientes',
    //auth,
    pacientesController.nuevoPaciente);

  //get all pacientes
  router.get('/pacientes',
    //auth,
    pacientesController.mostrarPacientes);

  //Busqueda de pacientes
  router.post('/pacientes/busqueda',
    //auth,
    pacientesController.buscarPaciente);

  return router;


};
