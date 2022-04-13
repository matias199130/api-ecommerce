const {Router} = require('express');
const router = Router();
const { postCategory } = require('./categories/postCategories.js')
const {putCategory} = require('./categories/putCategories.js')

router.post('/', postCategory)
router.put('/', putCategory)

module.exports = router