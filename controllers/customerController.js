const { Op, UniqueConstraintError, ValidationError } = require('sequelize');
const { CustomerModel } = require('../db/sequelize')



exports.findAllCustomer = (req, res) => { //exporter la fonction findAllCustomer
    CustomerModel.scope('withoutPassword').findAll() //sans le champ "mot de passe" pour ne pas compromettre la sécurité
        
    if(req.query.search){
        // notre recherche avec paramètres
        CustomerModel.findAll({ where: { name: {[Op.like] : `%${req.query.search}%`} } })
        .then((elements)=>{
            if(!elements.length){
                return res.json({message: "Aucun utilsateur ne correspond à votre recherche"})    
            }
            const msg = 'La liste des utilsateurs à bien été récupérée en base de données.'
            res.json({message: msg, data: elements})
        })
        .catch((error) => {
            const msg = 'Une erreur est survenue.'
            res.status(500).json({message: msg})
        })
    } else {
        CustomerModel.findAll()
        .then((elements)=>{
            const msg = 'La liste des utilsateurs a bien été récupérée en base de données.'
            res.json({message: msg, data: elements})
        })
        .catch((error) => {
            const msg = 'Une erreur est survenue.'
            res.status(500).json({message: msg})
        })
    }
}



exports.createCustomer = (req, res) => {
    let newCustomer = req.body;

    CustomerModel.create({
        username: newCustomer.username,
        password: newCustomer.password,
        firstName: newCustomer.firstName,
        lastName: newCustomer.lastName,
        address: newCustomer.address,
        phoneNumber: newCustomer.phoneNumber,
       
    }).then((el) => { //el = element
        const msg = 'Un utilisateur a bien été ajouté.' //msg = message et la variable msg contient le message à afficher
        res.json({ message: msg, data: el }) // res.json = réponse en format json avec

    }).catch(error => {
        if(error instanceof UniqueConstraintError || error instanceof ValidationError){ //Si l'erreur est une erreur de validation ou une erreur de contrainte unique
            return res.status(400).json({message: error.message, data: error}) //alors on renvoie une réponse avec le code 400 et le message d'erreur
        } 
        res.status(500).json(error) //
    })
}