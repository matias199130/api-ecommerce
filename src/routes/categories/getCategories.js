
const { Category, Product} = require('../../db.js');
const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {

		const allCategories = await Category.findAll();


        allCategories.length ? res.status(200).send(allCategories) :
			res.status(401).send('error en el servidor, notifique al administrador');

});

router.get("/:id", async (req, res) => {
	const idCategory  = req.params.id;
	 const oneCategory = await Category.findOne({
		where: {
		  idCategory: idCategory,		  
		},
	  });
	  !idCategory
		? res.status(404).send("Categoría no encontrada")
		: res.status(200).send(oneCategory);

  });

  module.exports = router;