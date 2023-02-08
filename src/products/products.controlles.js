const productDB = [
    {
        id: 1,
        title: "Xbox 360",
        price: "600 USD",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61zjj2sgXML._SL1500_.jpg"
    },
    {
        id: 2,
        title: "Play 5",
        price: "600 USD",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61zjj2sgXML._SL1500_.jpg"
    }
]

let baseID = 3

const findAllProducts = async () => {
    return await productDB
}

const findProductById = async (id) => {
    const productFilter = await productDB.find(product => product.id === id)
    return productFilter
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
    const newProduct = {
        id: baseID++,
        title: prodObj.title,
        price: prodObj.price,
        img_url: prodObj.img_url
    }
    await productDB.push(newProduct)
    return newProduct
}


module.exports = {
    findAllProducts,
    findProductById,
    CreateNewProduct
}