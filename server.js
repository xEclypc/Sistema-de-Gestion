// Cargar variables de entorno
require("dotenv").config();
// Importar la base de datos y modelos
const db = require('./models');
// Importar Express
const express = require("express");
const app = express();

// Usar middleware JSON
app.use(express.json());

// --- ACCESO A RUTAS ---
const usuarioRoutes = require("./routes/usuario.routes");
app.use("/api/usuario", usuarioRoutes);
// ----------------------

// --- SINCRONIZANDO MODELOS ---
db.sequelize.sync({ alter: true })
.then(() => {
  console.log("¡Base de datos sincronizada con éxito!");
})
.catch(err => {
  console.log("Error al sincronizar:", err.message);
});
// -----------------------------

// --- INICIAR SERVIDOR ---
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}.`);
});
// ------------------------