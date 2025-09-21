require("dotenv").config();
const db = require('./models');
const express = require("express");
const app = express();

app.use(express.json());

// Sincronizar modelos con la base de datos
db.sequelize.sync({ alter: true })
.then(() => {
  console.log("¡Base de datos sincronizada con éxito!");
})
.catch(err => {
  console.log("Error al sincronizar:", err.message);
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}.`);
});