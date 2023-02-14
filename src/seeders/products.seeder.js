const Products = require('../models/products.models')

try {
    Products.bulkCreate([
        {
            title: 'Xiaomi redmi 9a',
            price: 300,
            imageUrl: 'https://google.com/',
            categoryId: 1
        },
        {
            title: 'Lavadora LG',
            price: 500,
            imageUrl: 'https://google.com/',
            categoryId: 1
        },
        {
            title: 'Casita para perros',
            price: 300,
            imageUrl: 'https://google.com/',
            categoryId: 9
        },
        {
            title: 'Serrucho',
            price: 30,
            imageUrl: 'https://google.com/',
            categoryId: 10
        },
        {
            title: 'Escritotio',
            price: 70,
            imageUrl: 'https://google.com/',
            categoryId: 7
        },
        {
            title: 'Control Play Station 5',
            price: 60,
            imageUrl: 'https://google.com/',
            categoryId: 2
        }
    ])
    console.log('Productos agregados correctamente')
} catch (error) {
    console.log({message: 'Error en categories seeders', error})
}