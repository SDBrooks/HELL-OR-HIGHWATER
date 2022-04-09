  const  { Brand, Product }  = require("../models/index")


  const getAllProducts = ('/products', async (req, res) => {
      try {
    const products = await Product.find();
    return res.status(200).json({ products })
      }catch (error) {
          return res.status(500).send(error.message);
      }
  });

const getProductById =('/products/:id', async (req, res) => {
    try {
      const { id } = req.params
      const products = await Product.findById(id)
     
        return res.status(200).json({ products })
      
   
    } catch (error) {
      return res.status(500).send(error.message)
    }
  });
  
  const getAllBrands = async (req, res) => {
    try {
  const brands = await Brand.find();
  return res.status(200).json({ brands })
    }catch (error) {
        return res.status(500).send(error.message);
    }
};
const getBrandById = async (req, res) => {
    try {
      const { id } = req.params;
      const brands = await Brand.findById(id);
      if (brands) {
        return res.status(200).json({ brands });
      }
      return res.status(404).send('Brand with the specified ID does not exist');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const deleteBrand = async (req, res) => {
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
  };
  
  const deleteProduct =  async (req, res) => {
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
  };
  
  const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      await Data.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
        return res.status(200).json(data);
      });
    } catch (error) {}
  };
  

  module.exports = {
    getAllProducts,
    getProductById,
    getAllBrands,
    getBrandById,
    deleteBrand,
    deleteProduct,
    updateProduct
  }