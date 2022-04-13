const express = require('express');
const router = express.Router();

router.use(express.json());


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categories = require('./categories.js');


router.use('/categories', categories);



module.exports = router;
