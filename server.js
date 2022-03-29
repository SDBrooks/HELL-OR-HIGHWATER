const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3000
const db = require('./db')
const { Product } = require('./models')
const res = require('express/lib/response')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('HELL OR HIGHWATER!')
})

app.get('/products', async (req, res) => {
    const products = await Product.find()
    res.json(products)
  })

  app.get('/products/:id', async (req, res) => {
    try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) throw Error('Product not found')
    res.json(product)
  } catch (e) {
      console.log(e) 
          res.send('Product not found!')
  }
 })

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})