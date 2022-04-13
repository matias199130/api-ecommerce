const express = require('express');
const router = express();
const {getCategories} = require('../controllers/categories');


router.get('/', getCategories)


module.exports = router;





