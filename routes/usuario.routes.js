const express = require("express");
const usuarioController = require("../controllers/usuario.controller");

const router = express.Router();

//crear un usuario:
router.post("/create", usuarioController.create);

//Obtener todos los usuarios:
router.get("/findAll", usuarioController.findAll);

//Obtener el usuario:
router.get("/findByPk/:id", usuarioController.findByPk);

//Actualizar un usuario:
router.put("/update/:id", usuarioController.update);

//Eliminar un usuario:
router.delete("/destroy/:id", usuarioController.destroy);
module.exports = router;