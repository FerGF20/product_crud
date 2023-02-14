// Dependencies
const express = require('express')
const productRouter = require('./products/products.router')
const db = require('./utils/database')
const initModels = require('./models/initModels')

// Initial configs
const app = express()

app.use(express.json())

db.authenticate() // Mostrar en consola de manera informativa si la conexion se hizo de manera correcta
    .then(() => {
        console.log('Las credenciales de la base de dato son correctas')
    })
    .catch(err => {
        console.log(err)
    })

db.sync() // Sincronizar nuestra base de datos con los modelos que tenemos definidos
    .then(() => {
        console.log('La base de datos se sincronizo correctamente')
    })
    .catch(err => {
        console.log(err)
    })

initModels()

// Get info or data of client
app.get('/', (req, res) => {
    res.json({
        message: "Server Ok!",
        password: process.env.MY_PASSWORD
    })
})

// Rutas de productos
app.use('/api/v1/', productRouter)

app.listen(9000, () => {
    console.log('Server started at port 9000')
})