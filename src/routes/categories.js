const { Router } = require('express');

const { postCategory } = require('./categories/postCategories.js')

const { putCategory } = require('./categories/putCategories.js')
const {getCategories} = require('./categories/getCategories.js');


const router = Router();


router.post('/', postCategory)
//router.put('/edit/:idCategory', putCategory)
router.get('/', getCategories)


module.exports = router

