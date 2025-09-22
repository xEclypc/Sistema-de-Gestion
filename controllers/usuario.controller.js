const usuarioService = require('../services/usuario.service');

const usuarioController = {
    async create(req, res){
        try{
            const userData = (req.body);
            const nuevoUsuario = await usuarioService.create(userData);

            res.status(201).json({
                message: "Usuario creado con éxito",
                data: nuevoUsuario
            });
        }catch(error){
            res.status(500).json({
                message: "Error al crear el usuario.",
                error: error.message
            });
        }
    }
};
module.exports = usuarioController;