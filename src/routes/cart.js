const {Product, User, Cart} = require ('../db');
const Router = require ('express');
const router = Router();

const getCurrentCart = async () => {
    const allCart = await Cart.findAll();
    return allCart.map(c => {
        return {
            id: c.id,
            count: c.count,
            idProduct: c.productIdProduct
        }
    });
}

router.delete('/:id', async (req, res) => {
    const cartId = req.params.id;
    await Cart.destroy({ where: { id: cartId } });
    res.send(await getCurrentCart());
});

router.put('/:id', async (req, res) => {
    const cartId = req.params.id;
    const newCount = req.body.count;
    await Cart.update({count: newCount},{ where: { id: cartId }})
    res.send(await getCurrentCart());
});

router.get('/', async (req, res) => {
    res.send(await getCurrentCart());
});

router.post('/', async (req, res) => {
    const {count, idProduct} = req.body;
    const newCart = await Cart.create({count: count, productIdProduct: idProduct});
    res.send(await getCurrentCart());
})

module.exports = router;