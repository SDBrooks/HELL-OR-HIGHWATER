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

app.get('/', (req, res) => res.send('This is root!'))

app.put('/updateproduct/:id', controllers.updateproduct)

app.delete('/product/:id', controllers.deleteproduct)

module.exports = router;