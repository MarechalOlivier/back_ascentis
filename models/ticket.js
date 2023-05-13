module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Ticket', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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

        client_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                  msg: 'Ce champ doit être renseigné et être un nombre entier.'
                }
              }
        },
        
        
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

        subject: {
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
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Ce champ doit être renseigné.'
                },
                is: {
                    args: /^\+?\d{8,15}$/,
                    msg: 'Veuillez saisir un numéro de téléphone valide.'
                }
            }
        }   

    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: true
    })
}