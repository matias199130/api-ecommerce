const { Category } = require('../../db');


const putCategory = async (req, res, next)=>{
    try{
        const {idCategory} = req.params;
        const {name} = req.body;

            const searchId= await Category.findAll({                            // buscar el id de la categoria en el modelo categoria
                where:{
                    idCategory: idCategory
                }
            });

            if(!searchId[0]){                                                   // validamos si nos trae un arreglo vacio 
                return res.status(409).send("El ID de la categoria no existe");
            }else{
                const putCategory= await Category.update(
                    {                                                           // editamos la categoria
                        name,
                    },
                    {
                        where: {
                            idCategory: idCategory
                        }
                });
                return res.send(putCategory)                                     // mostramos en  pantalla la categoria editada
            }
    }
    catch(err){
        next(err)
    }
}

module.exports = {
    putCategory
}