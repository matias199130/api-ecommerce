const { Category} = require('../../db.js');

async function deleteCategory(req, res) {
    const idCategory = req.params.id;
    await Category.destroy({ where: { idCategory: idCategory} });
    res.status(200).send("Borrado con éxito");
}

module.exports = deleteCategory;