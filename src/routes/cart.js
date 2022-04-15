const {Product, User, Cart} = require ('../db');
const Router = require ('express');
const router = Router();

router.delete('/:id', async (req, res) => {
    const cartId = req.params.id;
    await Cart.destroy({ where: { id: cartId } });
    res.send();
});

router.put('/:id', async (req, res) => {
    const cartId = req.params.id;
    
    const newCount = req.body.count;
    const existingCart = await Cart.findByPk(cartId)
    if (existingCart){
        existingCart.count = newCount;
        await existingCart.save();
        res.send(existingCart);
    }else{
        res.status(404).send();
    }
});

module.exports = router

