const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');                  //Importantion du Module "sequelize" ORM
const colors = require('colors');                                       //Importation du Module "colors" permet de changer la couleur du texte dans le terminal
const UserModelSequelize = require('../models/user')                    //Importation du modèle "customer"
const TicketModelSequelize = require('../models/ticket')
const TechnicianModelSequelize = require('../models/technician')
const StatusModelSequelize = require('../models/status')
const users = require('../mock-users');
const tickets = require('../mock-tickets');                             //Importation du fichier "mock-tickets"
const cors = require('cors');

const sequelize = new Sequelize('ascentis', 'root', '', {               //Initialise la connexion avec la base de donnée ascentis, l'utilisateur root et pas de mot de passe
    host: 'localhost',                                                  //En local
    dialect: 'mariadb',                                                 //Système de gestion de base de données relationnelles (SGBDR) mariadb
    logging: false                                                      //Pas d'enregistrement de log
});

/////////////////////////Importation des modèles///////////////////////////////////
const TicketModel = TicketModelSequelize(sequelize, DataTypes) 
const UserModel = UserModelSequelize(sequelize, DataTypes)
const TechnicianModel = TechnicianModelSequelize(sequelize, DataTypes)
const StatusModel = StatusModelSequelize(sequelize, DataTypes)
// const StatusModel = StatusModelSequelize(sequelize, DataTypes)
////////////////////////////////////////////////////////////////////////////////////


//////////////////////////Configuration des clés étrangère//////////////////////////
UserModel.hasMany(TicketModel, {
    foreignKey: {
        allowNull: false,   
    }
  });
TicketModel.belongsTo(UserModel);

StatusModel.hasMany(TicketModel, {
    foreignKey: {
        allowNull: true
    }
  });
  TicketModel.belongsTo(StatusModel);

TechnicianModel.hasMany(TicketModel, {
    foreignKey: {
        allowNull: true
    }
  });
TicketModel.belongsTo(TechnicianModel);
////////////////////////////////////////////////////////////////////////////////////

                                                            

                                                                       
const initDb = () => { //
    return sequelize.sync() 
    .then(() => {
        // création des 5 tickets dans la bdd, avec une boucle, 
        // message à afficher en console : La liste des {5} tickets a bien été créée.
        
        // tickets.forEach((element) => {
        //     TicketModel.create({               
        //         client_name: element.client_name,
        //         client_number: element.client_number,
        //         type: element.type,
        //         urgency: element.urgency,
        //         category: element.category,
        //         subject: element.subject,
        //         description: element.description,
        //         // UserId: element.userId,       
        //     })
        // })

        // users.forEach((element) => {
        //     UserModel.create({
        //         username: element.username,
        //         password: bcrypt.hashSync(element.password, 12),//bcrypt.hashSync permet de crypter le mot de passe
        //         firstName: element.firstName,
        //         lastName: element.lastName,
        //         address: element.address,
        //         phoneNumber: element.phoneNumber,
        //     })
        // })

        // bcrypt.hash('Ascentis@33', 12) 
        //     .then((hash) => {
        //         UserModel.create({
        //             username: 'admin@ascentis.fr',
        //             password: hash,
        //             firstName: 'Admin',
        //             lastName: 'Ascentis',
        //             phoneNumber: '01',
        //             roles: ['admin']
        //         })
        //     })
        //     .catch(err => console.log(err))

        // bcrypt.hash('mdp', 12)
        // .then((hash) => {
        //     UserModel.create({
        //         username: 'user@ascentis.fr',
        //         password: hash,
        //         roles: ['user']
        //     })
        // })
        // .catch(err => console.log(err))
    })
    .catch(error => console.log (colors.yellow (`\nErreur d'importation ?`) + (colors.red (`\n${error}`)))) //Si la connexion est établie, affiche le message suivant
}


sequelize.authenticate()                                                //Permet d'établir la connexion avec la base de donnée en utilisant les information d'identification contenu dans variable "sequelize" 
    .then(() => console.log
    (colors.green('!----- La connexion à la base de données "Ascentis" a bien été établie -----!'))) //Si la connexion est établie, affiche le message suivant 
    .catch(error => console.error
        (colors.red(`*****Impossible de se connecter à la base de données*****         
*****${error}*****`)));                                                 //Sinon affiche ce message avec la problème rencontré


module.exports = {                                                      //Export les fonctionnalités d'un module pour d'autres module
    sequelize, TicketModel, UserModel, initDb
}

