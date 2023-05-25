const userRoles = ['user', 'admin', 'superadmin']

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', { //Donne le nom de la table exporté dans la base de donnée
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },       
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "L'adresse e-mail est déjà utilisée."
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: 'Ce champ doit être renseigné.'
                }
              }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: 'Ce champ doit être renseigné.'
                }
              }
        },
        lastName: {
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
               
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: 'Ce champ doit être renseigné.'
                }
              }
        },


        roles: {
            type: DataTypes.STRING,
            defaultValue: 'user',
            set(roles) {
              this.setDataValue('roles', roles.join());
            },
            get() {
              return this.getDataValue('roles').split(',');
            },
            validate: {
              areRolesValid(roles){
                if(!roles){
                  throw new Error('Un utilisateur doit avoir au moins un rôle')
                }
                roles.split(',').forEach(role => {
                  if(!userRoles.includes(role)){
                    throw new Error(`Les rôles d'un utilisateur doivent appartenir à la liste suivante : ${userRoles}`)
                  }
                })
              }
            }
          }
    }, {
        timestamps: true, // Nous ajoutons les timestamps par défaut sur le modèle (created_at, updated_at) qui seront gérés automatiquement par Sequelize et qui serveront à gérer les dates de création et de modification des utilisateurs
        createdAt: 'created', // Nous renommons le timestamp createdAt par created
        updatedAt: false, // Nous désactivons le timestamp updatedAt
        scopes: {  // Nous définissons un scope par défaut qui exclut le mot de passe des requêtes qui récupèrent des instances de ce modèle
            withoutPassword: { // Nous appelons ce scope "withoutPassword"
                attributes: { exclude: ['password'] }, // Nous spécifions que l'attribut password doit être exclu
            }
        }
    },
    )
}