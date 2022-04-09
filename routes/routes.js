const { Router } = require('express');
const Controllers = require('../Controllers/Controller')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/products', Controllers.getAllProducts)

router.get('/products/:id', Controllers.getProductById)

router.get('/brands/:id', Controllers.getBrandById)

router.get('/brands', Controllers.getAllBrands)

router.put('/products/:id', Controllers.updateProduct)

// router.post('/products/add/', Controllers.createProduct)

router.delete('/products/:id', Controllers.deleteProduct)

module.exports = router;






// const controllers = require('../controllers');

// router.get('/api', (req, res) => res.send('This is root!'));

// router.get('/data', controllers.getAllData);
// router.get('/data/:id', controllers.getdataById);
// router.post('/addData', controllers.createData);
// router.put('/updateData/:id', controllers.updateData);
// router.delete('/data/:id', controllers.deleteData);

// const { Router } = require('express');

// const router = Router();