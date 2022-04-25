const { Category, Product} = require('../../db.js');

async function editCategory(req, res){
    const idCategory = req.params.id;
    const categoryName = req.body.name;

    const oneCategory = await Category.findByPk(idCategory);

    if(!oneCategory) res.status(404).send('Categoría inexistente');
    else {
      oneCategory.name = categoryName;
      await oneCategory.save();
      res.send(oneCategory);
    }
}

module.exports = editCategory;