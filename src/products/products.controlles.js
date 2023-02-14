const Products = require('../models/products.models')
const Categories = require('../models/categories.models')

const findAllProducts = async () => {
    // return await productDB

    const data = await Products.findAll({
        attributes: ['id', 'title', 'price', 'imageUrl'],

        include: {
            model: Categories,
            attributes: ['id', 'name']
        }
    })
    return data
}

const findProductById = async (id) => {
    // const productFilter = await productDB.find(product => product.id === id)
    // return productFilter

    const data = await Products.findOne({
        where: {
            id: id
        }
    })
    return data
}

// const findProductByIdWithPromises = (id) => {
//     return new Promise((resolve, reject) => {
//         const productFilter = productDB.find(product => product.id === id)
//         if(productFilter){
//             resolve(productFilter)
//         }else{
//             reject('Invalid ID')
//         }
//     })
// }

const CreateNewProduct = async (prodObj) => {
    // const newProduct = {
    //     id: baseID++,
    //     title: prodObj.title,
    //     price: prodObj.price,
    //     img_url: prodObj.img_url
    // }
    // await productDB.push(newProduct)
    // return newProduct

    const newProduct = {
        title: prodObj.title,
        price: prodObj.price,
        imageUrl: prodObj.imageUrl
    }

    const data = await Products.create(newProduct)
    return data
}

const UpdateProduct = async (id, productObj) => {
    const data = await Products.update(productObj, {
        where: {
            id: id
        }
    })
    return data[0]
}

const deleteProducts = async (id) => {
    const data = await Products.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllProducts,
    findProductById,
    CreateNewProduct,
    UpdateProduct,
    deleteProducts
}