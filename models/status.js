module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Statu', { //Donne le nom de la table exporté dans la base de donnée
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },       
        name: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        rank: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: 'Ce champ doit être renseigné.'
                }
              }
        },
        
    }, {
        timestamps: true, // Nous ajoutons les timestamps par défaut sur le modèle (created_at, updated_at) qui seront gérés automatiquement par Sequelize et qui serveront à gérer les dates de création et de modification des utilisateurs
        createdAt: false, // Nous renommons le timestamp createdAt par created
        updatedAt: false, // Nous désactivons le timestamp updatedAt
        
    });
   
}