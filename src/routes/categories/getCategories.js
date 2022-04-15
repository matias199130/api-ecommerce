const { Category } = require('../../db.js');

const getCategories = async (req, res, next) => {
	try {
		const allCategories = await Category.findAll();

        allCategories.length ? res.status(200).send(allCategories) :
			res.status(401).send('error en el servidor, notifique al administrador');
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getCategories
};
