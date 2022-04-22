const { Category} = require('../../db.js');
const { Router } = require("express");
const router = Router();


router.delete('/:id', async (req, res) => {
    const idCategory = req.params.id;
    await Category.destroy({ where: { idCategory: idCategory} });
    res.status(200).send("Borrado con éxito");
});

module.exports = router;