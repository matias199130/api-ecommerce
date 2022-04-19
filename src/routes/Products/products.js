const { Product, Category } = require("../../db");
const { Router } = require("express");
const router = Router();
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const productName = await Product.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` }, // no distingue entre mayúsculasy minúsculas
        },
        include: Category,
      });
      productName.length
        ? res.status(200).send(productName)
        : res.status(404).send("Product not found");
    } else {
      const allProducts = await Product.findAll({
        include: [
          {
            model: Category,
          },
        ],
      });
      return res.status(200).send(allProducts);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

router.get("/:id", async (req, res) => {
  console.log("daleeeeeeeeeeeeMabel");
  const { id } = req.params;
  try {
    const productId = await Product.findOne({
      where: {
        idProduct: id,
      },
      include: {
        model: Category,
      },
    });
    !productId
      ? res.status(404).send("Product not found")
      : res.status(200).send(productId);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  const { name, price, image, description, stock, brand, categories } =
    req.body;

  const newProduct = await Product.create({
    name,
    price,
    image,
    description,
    stock,
    brand,
  });
  for (const c of categories) {
    const productCategory = await Category.findByPk(c);
    if (productCategory) {
      await newProduct.addCategory(productCategory);
    }
  }
  const fullProduct = await Product.findByPk(newProduct.idProduct, {
    include: Category,
  });
  res.status(200).send({
    ...fullProduct.dataValues,
    categories: fullProduct.categories.map((category) => {
      return { idCategory: category.idCategory, name: category.name };
    }),
  });
});

router.put("/:id", async (req, res) => {
  const { name, price, image, description, stock, brand, categories } =
    req.body;
  const idProduct = req.params.id;
  try {
    if (name && price && image && description && stock && brand) {
      
      const dbProduct = await Product.findByPk(idProduct);
      if(dbProduct){
      dbProduct.name = name;
      dbProduct.price = price;
      dbProduct.image = image;
      dbProduct.description = description;
      dbProduct.stock = stock;
      dbProduct.brand = brand;

      await dbProduct.save();
      await dbProduct.setCategories([]);
      
      for (const c of categories) {
        const productCategory = await Category.findByPk(c);
        if (productCategory) {
        await dbProduct.addCategory(productCategory);
          
        }
      }
      const fullProduct = await Product.findByPk(dbProduct.idProduct, {
        include: Category,
      });
      res.status(200).send({
        ...fullProduct.dataValues,
        categories: fullProduct.categories.map((category) => {
          return { idCategory: category.idCategory, name: category.name };
        }),
      });
      } else res.status(404).send();
    } else {
      res.status(400).send("Missing values");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
