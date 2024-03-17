const express = require('express');
const router = express.Router();
const ProductController = require ('./Controller/Product.js');

router.post('/product' , ProductController.createProduct);
router.get('/product' , ProductController.getProduct);
router.get('/product/:id' , ProductController.getProductById);
router.put('/product/:id' , ProductController.updateProduct);
router.delete('/prodct/:id' , ProductController.deleteProduct);