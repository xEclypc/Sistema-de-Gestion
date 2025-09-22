const db = require("../models/index");
const usuarioModel = db.usuario;

const usuarioService = {
    async create(userData)
    {
        try{
            const nuevoUsuario = await usuarioModel.create(userData);
            return nuevoUsuario;
        }catch(error){
            console.error('Error en usuarioService.create:', error.message);
            throw new Error('Error al crear el usuario.');
        }
    }
};

module.exports = usuarioService;