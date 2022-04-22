const { Wishlist, Product, User } = require('../db.js');
const Router = require('express');
const router = Router();

const getWishlist = async (idUser) => {
	console.log('wishwishwish');
	const allWishes = await Wishlist.findAll({
		where : { idUser: idUser }
		// order   : [ [ 'id', 'ASC' ] ]
	});
	const AllProducts = allWishes && allWishes.map((e) => e.idProduct);
	return AllProducts;
};

router.get('/:id', async (req, res) => {
	const idUser = req.params.id;
	res.send(await getWishlist(idUser));
});

router.delete('/', async (req, res) => {
    const { idProduct, idUser } = req.body;

	await Wishlist.destroy({ where: { idProduct: idProduct } });
	res.send(await getWishlist(idUser));
});

router.post('/', async (req, res) => {
	const { idProduct, idUser } = req.body;

    //{idproduct id user}
	existIdproduct = await Wishlist.findOne({
        where : { idProduct: idProduct }
	});
    
    
    //{idproduct id user}
	existIdUser = await Wishlist.findOne({
        where : { idUser: idUser }
	});
    console.log(existIdproduct,existIdUser )
    // cuando
	if (existIdUser && existIdproduct ) {
		res.status(401).send('el elemento ya existe');
	} else {
		const newWish = await Wishlist.create({
			idUser    : idUser,
			idProduct : idProduct
		});
		// console.log(newWish)
		res.send(newWish);
	}
});
module.exports = router;
