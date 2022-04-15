const {Product, Category} = require ('../db');
const {Router} = require ('express');
const router = Router();
const {Op} = require ('sequelize');


router.get("/", async (req, res)=>{
    
    const {name} = req.query;
    try {
        if(name){
            const productName = await Product.findAll({
                where:{
                    name: {[Op.iLike] : `%${name}%`}, // no distingue entre mayúsculasy minúsculas
                },
                include: Category,
            });
            productName.length?
            res.status(200).send(productName) :
            res.status(404).send('Product not found');
        }else{
            const allProducts = await Product.findAll({
                include: [
                    {
                        model: Category,
                    }
                ]
            });
            return res.status(200).send(allProducts);
        }
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
});

router.get("/:id", async (req, res)=>{
    console.log('daleeeeeeeeeeeeMabel')
    const {id} = req.params;
    try {
        const productId = await Product.findOne({
            where:{
                idProduct: id,
            },
            include:{
                model: Category,
            }
        });
        !productId
        ? res.status(404).send('Product not found')
        : res.status(200).send(productId) 
    } catch (error) {
        console.log(error)
        return res.status(404).send(error) 
    }
});

module.exports = router;