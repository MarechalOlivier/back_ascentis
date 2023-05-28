module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Technician', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },      

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Le nom de technicien est déjà pris !' // Le nom de client doit être unique
            },
            validate: {
                notEmpty: {
                  msg: 'Ce champ doit être renseigné.'
                }
              }
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isInt: {
                  msg: 'Ce champ doit être renseigné.'
                }
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
       
        role: {
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
                  throw new Error('Un technician doit avoir au moins un rôle')
                }
                roles.split(',').forEach(role => {
                  if(!userRoles.includes(role)){
                    throw new Error(`Les rôles d'un technicien doivent appartenir à la liste suivante : ${userRoles}`)
                  }
                })
              }
            }
          },

    }, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    })


}