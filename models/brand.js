const { Schema } = require('mongoose')

const Brand = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Brand