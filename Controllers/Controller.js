const { Brand, Product } = require("../models")

// const deleteBrand = 

// module.exports={
//     deleteBrand
// }

// const updateProduct =

// module.exports={
//     updateProduct
// }


// app.get("/", (req, res) => {
//     res.send("HELL OR HIGHWATER!");
//   });
  
  const getAllProducts = ("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
  });
  
  const getProductById = ("/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (!product) throw Error("Product not found");
      res.json(product);
    } catch (e) {
      console.log(e);
      res.send("Product not found!");
    }
  });
  
  const getAllBrands = ("/brands", async (req, res) => {
    const brand = await Brand.find();
    res.json(brand);
  });
  
  const getBrandById = ("/brands/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const brand = await Brand.findById(id);
      if (!brand) throw Error("Product not found");
      res.json(brand);
    } catch (e) {
      console.log(e);
      res.send("Product not found!");
    }
  });
  const deleteBrand = ("/brands/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Brand.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("Brand deleted");
      }
      throw new Error("Brand not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });
  
  const deleteproduct = ("/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Product.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("Product deleted");
      }
      throw new Error("Product not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });
  
  const updateProduct = ("/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndUpdate(id, req.body, { new: true }, (err,data) => {
        return res.status(200).json(data);
      })
    } catch (error) {}
  });
