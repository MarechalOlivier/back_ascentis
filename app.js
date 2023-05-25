const express = require('express')
const morgan = require('morgan')
const serveFavicon = require('serve-favicon')
const sequelize = require('./db/sequelize')
const cors = require('cors');
const colors = require('colors'); 
const app = express()
const port = 3005

// Middleware qui permet de gérer les erreurs CORS
app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


// Appel de la fonction initDb() du fichier sequelize.js qui permet de créer la base de donnée ascentis et d'y insérer les données du fichier mock-tickets.js
sequelize.initDb(); 


// Utilisation des middlewares
app 
    .use(morgan('dev')) // Affiche les requêtes dans la console
    .use(serveFavicon(__dirname + '/favicon.ico'))// Affiche le favicon
    .use(express.json())// Permet de parser les requêtes en JSON
    .use (cors()) // Permet de gérer les erreurs CORS

const ticketRouter = require('./routes/ticketRoutes') // Importation du fichier ticketRoutes.js
const userRouter = require('./routes/userRoute') // Importation du fichier userRoutes.js



app.use('/api/ticket', ticketRouter) // Utilisation des routes du fichier ticketRoutes.js
app.use('/api/user', userRouter) // Utilisation des routes du fichier userRoutes.js


// Ecoute du port 3005
app.listen(port, () => { 
    console.log(colors.magenta (`L'application écoute le port ${port}`)) 
})


