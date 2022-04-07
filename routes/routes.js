const { Router } = require('express');
const router = Router();
const controllers = require('../Controllers')
// const controllers = require('../controllers');

// router.get('/api', (req, res) => res.send('This is root!'));

// router.get('/data', controllers.getAllData);
// router.get('/data/:id', controllers.getdataById);
// router.post('/addData', controllers.createData);
// router.put('/updateData/:id', controllers.updateData);
// router.delete('/data/:id', controllers.deleteData);

// const { Router } = require('express');

// const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/products', controllers.getAllProducts)

router.get('/products/:id', controllers.getProductById)

router.get('/brands/:id', controllers.getBrandsById)

router.get('/brands', controllers.getAllBrands)

router.put('/products/:id', controllers.updateproduct)

router.post('/products/add/', controllers.createProduct)

router.delete('/products/:id', controllers.deleteproduct)

module.exports = router;