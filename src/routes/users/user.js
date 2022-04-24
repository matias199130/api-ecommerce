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
});

router.put('/', async (req, res)=>{
    const {idUser, isAdmin, fullName, email, password, address, cp} = req.body;

    if(!idUser){
        res.status(400).send("Id is required")
    }else {
    
    const updateUser = await User.update({
        isAdmin,
        fullName,
        email,
        password, 
        address,
        cp,
    },
    {where: {idUser: idUser}})
    //console.log(updateUser)
    res.send(updateUser)
}
});

module.exports = router;