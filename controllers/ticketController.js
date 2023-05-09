let tickets = require('../mock-tickets');
const { Op, UniqueConstraintError, ValidationError, QueryTypes } = require('sequelize');
const { TicketModel, ReviewModel, sequelize } = require('../db/sequelize')


exports.findAllTickets = (req, res) => {
    if(req.query.search){
        // notre recherche avec paramètres
        TicketModel.findAll({ where: { name: {[Op.like] : `%${req.query.search}%`} } })
        .then((elements)=>{
            if(!elements.length){
                return res.json({message: "Aucun ticket ne correspond à votre recherche"})    
            }
            const msg = 'La liste des tickets à bien été récupérée en base de données.'
            res.json({message: msg, data: elements})
        })
        .catch((error) => {
            const msg = 'Une erreur est survenue.'
            res.status(500).json({message: msg})
        })
    } else {
        TicketModel.findAll()
        .then((elements)=>{
            const msg = 'La liste des tickets a bien été récupérée en base de données.'
            res.json({message: msg, data: elements})
        })
        .catch((error) => {
            const msg = 'Une erreur est survenue.'
            res.status(500).json({message: msg})
        })
    }
}

exports.findTicketByPk = (req, res) => {
    // Afficher le coworking correspondant à l'id en params, en le récupérant dans la bdd     findByPk()
    TicketModel.findByPk(req.params.id, {
        include: ReviewModel //---------------
    })
        .then(ticket => {
            if (ticket === null) {
                const message = `Le ticket demandé n'existe pas.`
                res.status(404).json({ message })
            } else {
                const message = "Un ticket a bien été trouvé."
                res.json({ message, data: ticket });
            }
        })
        .catch(error => {
            const message = `La liste des tickets n'a pas pu se charger. Reessayez ulterieurement.`
            res.status(500).json({ message, data: error })
        })
}

exports.findAllTicketsByReview = (req, res) => {
    const minRate = req.query.minRate || 4
    TicketModel.findAll({
        include: {
            model: ReviewModel, // ---------------
            where: {
                rating: { [Op.gte]: 4 }
            }
        }
    })
    .then((elements)=>{
        const msg = 'La liste des tickets à bien été récupérée en base de données.'
        res.json({message: msg, data: elements})
    })
    .catch((error) => {
        const msg = 'Une erreur est survenue.'
        res.status(500).json({message: msg})
    })
}

exports.findAllTicketsByReviewSQL = (req, res) => {
    return sequelize.query('SELECT name, rating FROM `tickets` LEFT JOIN `reviews` ON `tickets`.`id` = `reviews`.`ticketId`',
        {
            type: QueryTypes.SELECT
        }
    )
        .then(tickets => {
            const message = `Il y a ${tickets.length} tickets comme résultat de la requête en SQL pur.`
            res.json({ message, data: tickets })
        })
        .catch(error => {
            const message = `La liste des tickets n'a pas pu se charger. Reessayez ulterieurement.`
            res.status(500).json({ message, data: error })
        })
}

exports.updateTicket = (req, res) => {
    // Modifier le coworking en base de données qui correspond à l'id spécifé dans les params
    TicketModel.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then((ticket) => {
        if(ticket === null){
            const msg = "Le ticket demandé n'existe pas."
            res.json({message: msg})
        } else {
            const msg = "Le ticket a bien été modifié."
            res.json({message: msg, data: ticket})
        }
    }).catch((error) => {
        if(error instanceof UniqueConstraintError || error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        } 
        const msg = "Impossible de mettre à jour le ticket."
        res.status(500).json({message: msg})
    })
}

exports.deleteTicket = (req, res) => {
    TicketModel.findByPk(req.params.id)
        .then(ticket => {
            if (ticket === null) {
                const message = `Le ticket demandé n'existe pas.`
                return res.status(404).json({ message })
            }
            return TicketModel.destroy({
                where: {
                    id: req.params.id
                }
            })
                .then(() => {
                    const message = `Le ticket ${ticket.name} a bien été supprimé.`
                    res.json({ message, data: ticket });
                })
        })
        .catch(error => {
            const message = `Impossible de supprimer le ticket.`
            res.status(500).json({ message, data: error })
        })
}

exports.createTicket = (req, res) => {
    let newTicket = req.body;

    TicketModel.create({
        name: newTicket.name,
        price: newTicket.price,
        address: newTicket.address,
        picture: newTicket.picture,
        superficy: newTicket.superficy,
        capacity: newTicket.capacity
    }).then((el) => {
        const msg = 'Un ticket a bien été ajouté.'
        res.json({ message: msg, data: el })
    }).catch(error => {
        if(error instanceof UniqueConstraintError || error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        } 
        res.status(500).json(error)
    })
}