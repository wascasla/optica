const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');

module.exports = function () {
  //agrega nuevos clientes via POST
  router.post('/clientes', clienteController.nuevoCliente);

  // obtener todos los clientes
  router.get('/clientes', clienteController.mostrarClientes);

  //obtener un cliente por id
  router.get('/clientes/:idCliente', clienteController.mostrarCliente);

  //Actualizar cliente
  router.put('/clientes/:idCliente', clienteController.actualizarCliente);

  //Eliminar cliente
  router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

  /** PRODCUTOS */

  //agrear nuevos productos
  router.post(
    '/productos',
    productosController.subirArchivo,
    productosController.nuevoProducto
  );

  //mostrar todos los prodcutos
  router.get('/productos', productosController.mostrarProductos);

  //mostrar un producto por id
  router.get('/productos/:idProducto', productosController.mostrarProducto);

  //actualizar un producto
  router.put(
    '/productos/:idProducto',
    productosController.subirArchivo,
    productosController.actualizarProducto
  );

  // eliminar un producto
  router.delete('/productos/:idProducto', productosController.eliminarProducto);

  return router;
};
