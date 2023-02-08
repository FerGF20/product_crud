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

module.exports = {
    getAllProducts,
    getProductById,
    postNewProduct
}