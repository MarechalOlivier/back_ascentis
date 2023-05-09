const { Sequelize, DataTypes } = require('sequelize');                  //Importantion du Module "sequelize" ORM
const colors = require('colors');                                       //Importation du Module "colors" permet de changer la couleur du texte dans le terminal
const CustomerModelSequelize = require('../models/customer')            //Importation du modèle "customer"
const TicketModelSequelize = require('../models/ticket') 
const tickets = require('../mock-tickets');            

const sequelize = new Sequelize('ascentis', 'root', '', {               //Initialise la connexion avec la base de donnée ascentis, l'utilisateur root et pas de mot de passe
    host: 'localhost',                                                  //En local
    dialect: 'mariadb',                                                 //Système de gestion de base de données relationnelles (SGBDR) mariadb
    logging: false                                                      //Pas d'enregistrement de log
});


const CustomerModel = CustomerModelSequelize(sequelize, DataTypes)      //Création du modèle sequelize "CustomerModel" et de la fonction "CustomerModelSequelize" avec les objet sequelize et dataTypes 
const TicketModel = TicketModelSequelize(sequelize, DataTypes)          //Utilise la bibliothèque sequelize pour intéragir avec la base de donnée                                                             





                                                                        
const initDb = () => {
    return sequelize.sync() 
    .then(() => {
        // création des 5 tickets dans la bdd, avec une boucle, 
        // message à afficher en console : La liste des {5} tickets a bien été créée.
        
        tickets.forEach((element) => {
            TicketModel.create({
                client_number: element.client_number,
                client_name: element.client_name,
                type: element.type,
                urgency: element.urgency,
                category: element.category,
                description: element.description,
                address: element.address,
                
            })
        })

        // bcrypt.hash('mdp', 10)
        //     .then((hash) => {
        //         UserModel.create({
        //             username: 'paul',
        //             password: hash,
        //             roles: ['user', 'admin']
        //         })
        //     })
        //     .catch(err => console.log(err))

        // bcrypt.hash('mdp', 10)
        // .then((hash) => {
        //     UserModel.create({
        //         username: 'pierre',
        //         password: hash,
        //         roles: ['user']
        //     })
        // })
        // .catch(err => console.log(err))
    })
    .catch(error => console.log('Erreur'))
}


sequelize.authenticate()                                                //Permet d'établir la connexion avec la base de donnée en utilisant les information d'identification contenu dans variable "sequelize" 
    .then(() => console.log
    (colors.green('!----- La connexion à la base de données "Ascentis" a bien été établie -----!'))) //Si la connexion est établie, affiche le message suivant 
    .catch(error => console.error
        (colors.red(`*****Impossible de se connecter à la base de données*****         
*****${error}*****`)));                                                 //Sinon affiche ce message avec la problème rencontré


module.exports = {                                                      //Export les fonctionnalités d'un module pour d'autres module
    sequelize, CustomerModel, TicketModel, initDb
}

