const {Wishlist, Product, User} = require ('../db.js');
const Router = require ('express');
const router = Router();

const getWishlist = async () => {
    console.log('wishwishwish')
    const allWishes = await Wishlist.findAll({
        include:Product,
        order: [['id', 'ASC']]
    });
    return allWishes.map(c => {
        return {
            id: c.id,
            product: c.product
        }
    });
};

router.get('/', async (req, res) => {
    res.send(await getWishlist());
});

router.delete('/:id', async (req, res) => {
    const wishId = req.params.id;
    await Wish.destroy({ where: { id: wishId } });
    res.send(await getWishlist());
});

router.post('/', async (req, res)=>{

    const {idProduct, idUser}= req.body;


    /// que en esta tabla wishtlist no exista un idproducto con idusuario


    
    const newWish = await Wishlist.create({
        idUser: idUser,
        Idproduct: idProduct,
    });

    res.send(newWish)

})
module.exports = router;