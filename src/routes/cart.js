const {Product, User, Cart} = require ('../db');
const Router = require ('express');
const router = Router();

const getCurrentCart = async () => {
    const allCart = await Cart.findAll({
        include:Product,
        order: [['id', 'ASC']]
    });
    return allCart.map(c => {
        return {
            id: c.id,
            count: c.count,
            product: c.product
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
    const rawCount = req.body.count;
    const newCount = !rawCount?0 : rawCount < 1? 0 :rawCount

    if (newCount == 0)
        await Cart.destroy({ where: { id: cartId } });
    else
        await Cart.update({count: newCount},{ where: { id: cartId }})
    
    res.send(await getCurrentCart());
});

router.get('/', async (req, res) => {
    res.send(await getCurrentCart());
});

router.post('/', async (req, res) => {
    const {count, idProduct} = req.body;

    const existingItem = await Cart.findOne({where: { productIdProduct: idProduct}});

    if (existingItem!=null){
        existingItem.count++;
        await existingItem.save();
    }else{
        await Cart.create({count: count, productIdProduct: idProduct});
    }

    res.send(await getCurrentCart());
})

module.exports = router;