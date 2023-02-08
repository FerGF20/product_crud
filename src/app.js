// Dependencies
const express = require('express')
const productRouter = require('./products/products.router')

// Initial configs
const app = express()
app.use(express.json())

// Get info or data of client

app.get('/', (req, res) => {
    res.json({
        message: "Server Ok!"
    })
})

// Rutas de productos
app.use('/api/v1/', productRouter)

app.listen(9000, () => {
    console.log('Server started at port 9000')
})