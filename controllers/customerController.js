const { Op, UniqueConstraintError, ValidationError } = require('sequelize');
const { CustomerModel } = require('../db/sequelize')

exports.findAllUsers = (req, res) => {
    CustomerModel.scope('withoutPassword').findAll()
        .then((elements)=>{
            const msg = 'La liste des utilisateurs a bien été récupérée en base de données.'
            res.json({message: msg, data: elements})
        })
        .catch((error) => {
            const msg = 'Une erreur est survenue.'
            res.status(500).json({message: msg})
        })
}