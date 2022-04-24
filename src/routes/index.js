const express = require('express');
const router = express.Router();

router.use(express.json());

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const categoriesRoutes = require('./categories.js')
const getCategoryRoutes = require('./categories/getCategories');
const getCategoryById = require('./categories/getCategories.js');
const deleteCategory = require('./categories/deleteCategories.js')
const putCategory = require('./categories/putCategories.js')
const productRoutes = require ('./Products/products.js')
const cartRoutes = require ('./cart.js')
const wishlistRoutes = require('./wishlist.js');
const userRoutes = require('./users/user');

//const productController = require ('../controllers/products.js')
//const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/categories', categoriesRoutes);
router.use('/products', productRoutes);
router.use('/cart', cartRoutes);
router.use('/wishlist', wishlistRoutes);
router.use("/user", userRoutes);

module.exports = router;
