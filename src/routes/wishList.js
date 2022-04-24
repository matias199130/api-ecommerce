const { Wishlist, Product, User } = require('../db.js');
const Router = require('express');
const router = Router();

const getAllWishlistbyUser = async (idUser) => {
	const allWishes = await Wishlist.findAll({
		where : { idUser: idUser }
		// order   : [ [ 'id', 'ASC' ] ]
	});
	const AllProducts = allWishes && allWishes.map((e) => e.idProduct);
	console.log(AllProducts);
	return AllProducts;
};
const createAndAddWish = async (idProduct, idUser) => {
	const arrayAllwishes = await getAllWishlistbyUser(idUser); //array
	// const existIdproduct = await Wishlist.findOne({
	// 	where : { idProduct: idProduct }});
	// const existIdUser = await Wishlist.findOne({
	// 	where : { idUser: idUser }});

	if (arrayAllwishes && arrayAllwishes.includes(idProduct)) {
		return 'el elemento ya existe';
	} else {
		const newWish = await Wishlist.create({
			idUser    : idUser,
			idProduct : idProduct
		});
		return newWish;
	}

	// if (existIdUser && existIdproduct) {
	// 	return ('el elemento ya existe');
	// } else {

	// 	// console.log(newWish)
	// 	return (newWish);
	// }
};

// const getWishlist = async (idUser) => {
// 	// console.log('wishwishwish');
// 	getAllWishlistbyUser(idUser);
// 	return(await getAllWishlistbyUser(idUser));
// };

router.get('/:id', async (req, res) => {
	const idUser = req.params.id;
	res.send(await getAllWishlistbyUser(idUser));
});

router.delete('/', async (req, res) => {
	const { idProduct, idUser } = req.body;
    
	await Wishlist.destroy({ where: { idProduct: idProduct, idUser: idUser} });
	res.send(await getAllWishlistbyUser(idUser));
});

router.post('/', async (req, res) => {
	const { idProduct, idUser } = req.body;
	//{idproduct id user}
	// cuando

	res.send(await createAndAddWish(idProduct, idUser));
});
module.exports = router;
