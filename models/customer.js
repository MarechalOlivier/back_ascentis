const customerRoles = ['user', 'admin', 'superadmin']

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Customer', {
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
            defaultValue: 'user', // Par défaut, un utilisateur a le rôle "user"
            set(roles) { 
                this.setDataValue('roles', roles.join()); // On stocke les rôles sous forme d'une chaîne de caractères séparés par des virgules
            },
            get() {
                return this.getDataValue('roles').split(','); // On récupère les rôles sous forme d'un tableau
            },
            validate: { // On vérifie que les rôles stockés dans la base de données sont valides (ils doivent appartenir à la liste des rôles possibles)
                areRolesValid(roles) {
                    if (!roles) { // Si aucun rôle n'est spécifié, on ne fait rien
                        throw new Error('Un utilisateur doit avoir au moins un rôle')
                    }
                    roles.split(',').forEach(role => { // On vérifie que chaque rôle fait partie de la liste des rôles possibles
                        if (!customerRoles.includes(role)) { // Si le rôle n'est pas dans la liste, on lève une erreur
                            throw new Error(`Les rôles d'un utilisateur doivent appartenir à la liste suivante : ${customerRoles}`)// On lève une erreur
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