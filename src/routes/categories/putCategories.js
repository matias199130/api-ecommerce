const { Category } = require('../../db');


const putCategory = async(req, res, next) =>{
    const { idCategory } = req.params;
    const { name } = req.body;
    
    
    try{
        const eCategory= await Category.findOne({
            where:{
                idCategory: idCategory,         
                }
            })
            if(!eCategory){                                         // validamos si nos trae un arreglo vacio 
                return res.status(400).send("El ID de la categoria no existe");
            }else{
                let editCategory= await Category.update({           // editamos la categoria
                    name,
                    },{where:{
                        idCategory: idCategory
                    }
                });
                return res.send(editCategory)                       // mostramos en  pantalla la categoria editada
            }
    }catch(err){
        next(err)
    }
}

module.exports = {
    putCategory
}