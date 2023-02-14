const productControllers = require('./products.controlles')

const getAllProducts = (req, res) => {
    productControllers.findAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const getProductById = (req, res) => {
    const id = Number(req.params.id)

    productControllers.findProductById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({
                    message: "Invalid ID"
                })
            }
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const postNewProduct = (req, res) => {
    const productObj = req.body
    productControllers.CreateNewProduct(productObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const deleteProduct = (req, res) => {
    const id = req.params.id

    productControllers.deleteProducts(id)
        .then(data => {
            if(data){
                res.status(204).json()
            }else{
                res.status(404).json({message: 'Products not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const patchProduct = (req, res) => {
    const id = req.params.id
    const productObj = req.body
    productControllers.UpdateProduct(id, productObj)
        .then(data => {
            if(data){
                res.status(200).json({message: `Product with id: ${id} updated succesfully`})
            }else{
                res.status(404).json({message: 'Products not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const putProduct = (req, res) => {
    const id = req.params.id
    const productObj = req.body

    if(!productObj.title || !productObj.price || !productObj.imageUrl){
        return res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: 'String',
                price: 10.99,
                imageUrl: 'https:/google.com/image.png'
            }
        })
    }

    productControllers.UpdateProduct(id, productObj)
        .then(data => {
            if(data){
                res.status(200).json({message: `Product with id: ${id} updated succesfully`})
            }else{
                res.status(404).json({message: 'Products not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAllProducts,
    getProductById,
    postNewProduct,
    deleteProduct,
    patchProduct,
    putProduct
}