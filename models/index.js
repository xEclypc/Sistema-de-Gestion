// Importando librerías
const { Sequelize, DataTypes, ENUM } = require('sequelize');
// Conexión a la base de datos
const sequelize = require('../config/database.config');

// Objeto contenedor
const db = {};

// Almacenando herramientas
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes;

// Cargando modelo y pasando herramientas
db.usuario = require('../models/usuario.model')(sequelize, DataTypes, ENUM);

// Verificando conexión
db.sequelize.authenticate()
    .then(() => {
        console.log('¡Conexión a la base de datos exitosa desde models/index.js!');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos desde models/index.js:', err);
    });

// Sincronizando modelos
db.sequelize.sync({ alter: true })
    .then(() => {
        console.log("¡Base de datos sincronizada con éxito!");
    })
    .catch(err => {
        console.log("Error al sincronizar:", err.message);
    });

// Exportando
module.exports = db;