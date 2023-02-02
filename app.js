// Dependencies
const express = require('express')

// Initial configs
const app = express()

app.use(express.json())

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

// Get info or data of client

app.get('/', (req, res) => {
    res.json({
        message: "Server Ok!"
    })
})

// Create a route that shows all products

app.get('/products', (req, res) => {
    res.json(productDB)
})

// Create a route that shows a product depending on ID

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)

    const data = productDB.find((item) => id === item.id)

    if(data){
        res.json(data)
    }else{
        res.status(404).json({
            message: "Invalid ID"
        })
    }
})

// Create a route that add a new product

app.post('/products', (req, res) => {
    const data = req.body
    
    const newProduct = {
        id: baseID++,
        title: data.title,
        price: data.price,
        img_utl: data.img_url
    }
    productDB.push(newProduct)
    res.json(newProduct)
})



app.listen(9000, () => {
    console.log('Server started at port 9000')
})