const { Router } = require('express');

const { postCategory } = require('./categories/postCategories.js')

const { putCategory } = require('./categories/putCategories.js')
const getCategoryRoutes = require('./categories/getCategories.js');
const getCategoryById = require('./categories/getCategories.js');
const deleteCategory = require('./categories/deleteCategories.js');


const router = Router();


router.post('/', postCategory)
//router.put('/edit/:idCategory', putCategory)
router.get('/', getCategoryRoutes)
router.get('/:id', getCategoryById)
router.delete('/:id', deleteCategory)


module.exports = router

