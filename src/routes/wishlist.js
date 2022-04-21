const { Whishlist, User, Product } = require('../db');
const Router = require ('express');
const router = Router();

// const createAndAddWish = async (data, user) => {
//   try {
//     const {Idproduct } = data;
//     const foundUser = await User.findOne({ where: { idUser: user.idUser } });
//     const foundProduct = await Product.findOne({ where: { Idproduct: Idproduct } });
//     if (foundUser && foundProduct) {
//       const existingWish = await Whishlist.findOne({
//         where: { idUser: user.idUser, Idproduct: Idproduct },
//       });
//       if (existingWish) {
//         return "este producto ya esta en la lista de deseados";
//       } else {
//         const newWish = await Whishlist.create({
//             idUser: user.idUser,
//             Idproduct: Idproduct,
//         });
//         // await foundUser.addComment(newComment);
//         // await foundProduct.addComment(newComment);
//         return 'wishlist created';
//       }
//     }
//   } catch (err) {
//     console.log(err);
//     return { error: 'user / product not found' };
//   }
// };

router.post('/', async (req, res)=>{

    const {idProduct, idUser}= req.body;


    /// que en esta tabla wishtlist no exista un idproducto con idusuario


    
    const newWish = await Whishlist.create({
        idUser: idUser,
        Idproduct: idProduct,
    });

    res.send(newWish)

})




module.exports = router;

