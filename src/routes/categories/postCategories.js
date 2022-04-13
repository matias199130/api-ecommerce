const { Category } = require('../../db')

const postCategory=async(req, res, next) => {
    const {name} = req.body
    try{
        const newCategory = await Category.findOrCreate(
            {
                where: {
                    name:name.charAt(0).toUpperCase()+name.slice(1),
                }
            }
        );
        return res.status(200).json(newCategory);

    }catch(err){
        next(err)
    }
}

module.exports = {
    postCategory
}

