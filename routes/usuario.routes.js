const express = require("express");
const usuarioController = require("../controllers/usuario.controller");

const router = express.Router();

//crear un usuario:
router.post("/create", usuarioController.create);

module.exports = router;