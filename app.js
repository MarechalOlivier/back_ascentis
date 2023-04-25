const express = require('express')
const morgan = require('morgan')
const serveFavicon = require('serve-favicon')
const sequelize = require('./db/sequelize')
const app = express()
const port = 3005





app
    .use(morgan('dev'))
    .use(serveFavicon(__dirname + '/img/favicon.png'))
    .use(express.json()) 

const customerRouter = require('./routes/customerRoute')

app.use('/api/customer', customerRouter)

app.listen(port, () => {
    console.log(`L'application écoute le port ${port}`)
})


