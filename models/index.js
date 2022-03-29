const mongoose = require('mongoose')
const ProductSchema = require('./Product')
const BrandSchema = require('./Brand')

const Product = mongoose.model('products', ProductSchema)
const Brand = mongoose.model('brands', BrandSchema)

module.exports = {
  Product,
  Brand
}