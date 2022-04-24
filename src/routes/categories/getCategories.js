const { Category, Product} = require('../../db.js');

async function getAllCategories(req, res) {
		const allCategories = await Category.findAll();
        allCategories.length ? res.status(200).send(allCategories) :
			res.status(401).send('error en el servidor, notifique al administrador');
}

async function getCategoryDetails(req, res){
	const idCategory  = req.params.id;
	 const oneCategory = await Category.findOne({
		where: {
		  idCategory: idCategory,		  
		},
	  });
	  !idCategory
		? res.status(404).send("Categoría no encontrada")
		: res.status(200).send(oneCategory);
}

module.exports = {
	getAllCategories, getCategoryDetails
}