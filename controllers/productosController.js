const Productos = require('../models/Productos');

const multer = require('multer');
const shortid = require('shortid');

const configuracionMulter = {
  storage: (fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + '../../uploads/');
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split('/')[1];
      cb(null, `${shortid.generate()}.${extension}`);
    },
  })),
  fileFilter(req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Formato no válido'));
    }
  },
};

//pasar la configuracion y el campo del schema de base de datos
const upload = multer(configuracionMulter).single('imagen');

//sube un archivo
exports.subirArchivo = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      res.json({ mensaje: error });
    }
    return next();
  });
};

//agrega un nuevo producto
exports.nuevoProducto = async (req, res, next) => {
  const producto = new Productos(req.body);

  try {
    //guardar el nuevo producto
    if (req.file.filename) {
      producto.imagen = req.file.filename;
    }

    await producto.save();
    res.json({ mensaje: 'El producto fue guardado con exito' });
  } catch (error) {
    console.log(error);
    next();
  }
};

//mostrar todos los productos
exports.mostrarProductos = async (req, res, next) => {
  try {
    const productos = await Productos.find({});
    res.json(productos);
  } catch (error) {
    console.log(error);
    next();
  }
};

// mostrar un producto por su ID
exports.mostrarProducto = async (req, res, next) => {
  try {
    const producto = await Productos.findById(req.params.idProducto);

    if (!producto) {
      res.json({ mensaje: 'Este producto no existe' });
      return next();
    }
    res.json(producto);
  } catch (error) {
    console.log(error);
    next();
  }
};

// actualizar un producto
exports.actualizarProducto = async (req, res, next) => {
  try {
    //construir un nuevo producto
    const nuevoProducto = req.body;

    //verificar si hay una imagen nueva
    if (req.file) {
      nuevoProducto.imagen = req.file.filename;
    } else {
      const productoAnterior = await Productos.findById(req.params.idProducto);
      nuevoProducto.imagen = productoAnterior.imagen;
    }

    const producto = await Productos.findByIdAndUpdate(
      { _id: req.params.idProducto },
      nuevoProducto,
      {
        new: true,
      }
    );
    res.json(producto);
  } catch (error) {
    console.log(error);
    next();
  }
};

//eliminar un prodcuto

exports.eliminarProducto = async (req, res, next) => {
  try {
    // primero obtener el producto para eliminar el archivo de imagen
    const productoAnterior = await Productos.findById(req.params.idProducto);

    const newPath = __dirname + '../../uploads/' + productoAnterior.imagen;

    console.log(newPath);

    var fs = require('fs');

    fs.unlink(newPath, function (err) {
      if (err) throw err;

      console.log('archivo eliminado');
    });

    await Productos.findByIdAndDelete({ _id: req.params.idProducto });
    res.json({ mensaje: 'El producto se eliminado con exito' });
  } catch (error) {
    console.log(error);
    next();
  }
};
