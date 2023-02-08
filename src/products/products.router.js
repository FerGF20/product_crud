const productServices = require('./products.services')

const router = require('express').Router()

router.get('/products', productServices.getAllProducts)

router.get('/products/:id', productServices.getProductById)

router.post('/products', productServices.postNewProduct)

module.exports = router