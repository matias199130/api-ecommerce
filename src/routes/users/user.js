const { User } = require("../../db");
const { Router } = require("express");
const router = Router();

router.post('/', async (req, res)=>{
    const { email } = req.body;
    console.log(email, "email")
    const newUser = await User.findOrCreate({
        where:{
            email: email
        }
    });
    res.send(await newUser)
});

router.get('/', async (req, res)=>{
    const allUser = await User.findAll({
        order: [['idUser', 'ASC']]
    })
    res.send(await allUser)
}) 

module.exports = router;