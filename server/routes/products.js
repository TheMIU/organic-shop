var express = require('express');
var router = express.Router();
const productController = require('../controller/ProductsController');

/* GET all products listing. */
router.get('/all', productController.getAllProducts);

router.get('/find/:id', productController.getProduct);

router.post('/save', productController.saveProduct);

router.put('/update/:id', productController.updateProduct);

router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;