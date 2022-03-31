const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3000
const db = require('./db')
const { Product, Brand } = require('./models')
const res = require('express/lib/response')
const { Router } = require('react-router-dom')
// const controller = require('../controllers/Controller.js')


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

 app.get('/brands', async (req, res) => {
  const brand = await Brand.find()
  res.json(brand)
})

app.get('/brands/:id', async (req, res) => {
  try {
  const { id } = req.params
  const brand = await Brand.findById(id)
  if (!brand) throw Error('Product not found')
  res.json(brand)
} catch (e) {
    console.log(e) 
        res.send('Product not found!')
}
})
app.delete('/brands/:id',async (req, res) => {  
  try {    const { id } = req.params;  
    const deleted = await Brand.findByIdAndDelete(id);  
      if (deleted) {   
           return res.status(200).send('Brand deleted');    }   
            throw new Error('Brand not found');  }
             catch (error) {  
                return res.status(500).send(error.message);  }})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

