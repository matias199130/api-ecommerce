const express = require('express');
const router = express.Router();

router.use(express.json());

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const categoriesRoutes = require('./categories.js')

const productRoutes = require ('./products.js')
const cartRoutes = require ('./cart.js')
const productController = require ('../controllers/products.js')
//const router = Router();


const cartRoutes = require('./cart.js')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/categories', categoriesRoutes)
router.use('/products', productRoutes)
router.use('/cart', cartRoutes); 




module.exports = router;
