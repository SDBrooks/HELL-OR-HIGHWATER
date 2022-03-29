const { Schema } = require('mongoose')

const Product = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    inStock: { type: Boolean, required: true },
    colorWay: { type: String, required: true }, 
    size: { type: String, required: true },
    itemCode: { type: String, required: true },
    image: { type: String, required: true},
    brand: { type: Schema.Types.ObjectId, ref: 'brands' }
    
  },
  { timestamps: true }
)

module.exports = Product