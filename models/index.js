const{Sequelize, DataTypes, ENUM} = require('sequelize');
const sequelize = require('../config/database.config');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes;

db.usuario = require('../models/usuario.model')(sequelize, DataTypes);

db.sequelize.authenticate()
    .then(() => {
        console.log('¡Conexión a la base de datos exitosa desde models/index.js!');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos desde models/index.js:', err);
    });

module.exports = db;
