const express = require('express')
const morgan = require('morgan')
const serveFavicon = require('serve-favicon')
const sequelize = require('./db/sequelize')
const cors = require('cors');
const app = express()
const port = 3005
/////////////////////////////////////Config CORS//////////////////////////////////////////////
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
///////////////////////////////////////////////////////////////////////////////////
sequelize.initDb();

app
    .use(morgan('dev'))
    .use(serveFavicon(__dirname + '/favicon.ico'))
    .use(express.json())

const ticketRouter = require('./routes/ticketRoutes')
const customerRouter = require('./routes/customerRoute')
///////////////////////////////////////////////////////////////////////////////////

// const userRouter = require('./routes/userRoutes')
// const reviewRouter = require('./routes/reviewRoutes')


app.use('/api/customer', customerRouter)
app.use('/api/ticket', ticketRouter)
///////////////////////////////////////////////////////////////////////////////////


// app.use('/api/user', userRouter)
// app.use('/api/review', reviewRouter)




app.listen(port, () => {
    console.log(`L'application écoute le port ${port}`)
})


