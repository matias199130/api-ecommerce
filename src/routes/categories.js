const { Router } = require('express');
const { postCategory } = require('./categories/postCategories.js')
const putCategory = require('./categories/putCategories.js');
const { getAllCategories, getCategoryDetails } = require('./categories/getCategories.js');
const deleteCategory = require('./categories/deleteCategories.js');

const router = Router();

router.post('/', postCategory)
router.put('/:id', putCategory)
router.get('/', getAllCategories)
router.get('/:id', getCategoryDetails)
router.delete('/:id', deleteCategory)

module.exports = router

