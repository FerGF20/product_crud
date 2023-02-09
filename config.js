// Aqui vamos a definir todas las variables de entorno
require('dotenv').config()
const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        develpment: {
            dialect: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'root',
            database: 'products-db',
            define: {
                timestamps: true, // Va a utilizar por defecto el created at y updated at
                underscored: true, // Convierte camelcase a snakecase
                underscoredAll: true
            }
        },
        test: {

        },
        production: {

        }
    }
}

module.exports = configs