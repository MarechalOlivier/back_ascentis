module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Ticket', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        client_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                  msg: 'Ce champ doit être renseigné et être un nombre entier.'
                }
              }
        },

        client_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Le nom de client existe déjà pris !' // Le nom de client doit être unique
            },
            validate: {
                notEmpty: {
                  msg: 'Ce champ doit être renseigné.'
                }
              }
        },
        
        // Exo, ajouter la validation de nombres entiers
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: 'Ce champ doit être renseigné.'
                }
              }
        },
       
        urgency: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: 'Ce champ doit être renseigné.'
                }
              }
        },

        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: 'Ce champ doit être renseigné.'
                }
              }
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: 'Ce champ doit être renseigné.'
                }
              }
        },

        address: {
            type: DataTypes.JSON,
        }

    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: true
    })
}