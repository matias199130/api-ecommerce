const express = require('express');
const router = express.Router();

router.use(express.json());

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const categoriesRoutes = require('./categories.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/categories', categoriesRoutes)



module.exports = router;
