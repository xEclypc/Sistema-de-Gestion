const usuarioService = require('../services/usuario.service');

const usuarioController = {
    async create(req, res){
        try{
            const userData = (req.body);
            const nuevoUsuario = await usuarioService.create(userData);

            res.status(201).json({
                message: "Usuario creado con éxito.",
                data: nuevoUsuario
            });
        }catch(error){
            res.status(500).json({
                message: "Error al crear el usuario.",
                error: error.message
            });
        }
    },

    async findAll(req, res){
        try{
            const obtenerUsuarios = await usuarioService.findAll();

            res.status(200).json({
                message: "Usuarios obtenidos con éxito.",
                data: obtenerUsuarios
            });

        }catch(error){
            res.status(500).json({
                message: "Error al obtener el usuario.",
                error: error.message
            });

        }
    },

    async findByPk(req, res){
        try{
            const obtenerUsuario = await usuarioService.findByPk(req.params.id);

            res.status(200).json({
                message: "Usuario obtenido con éxito.",
                data: obtenerUsuario
            });

        }catch(error){
            res.status(500).json({
                message: "Error al obtener el usuario.",
                error: error.message
            });

        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const userData = req.body;
            const usuarioActualizado = await usuarioService.update(id, userData);

            res.status(200).json({
                message: "Usuario actualizado con éxito.",
                data: usuarioActualizado
            });
        } catch (error) {
            res.status(404).json({
                message: "Error: Usuario no encontrado."
            });
        }
    },

    async destroy(req, res){
        try{
            const id = req.params.id;
            await usuarioService.destroy(id);

            res.status(204).json({
                message: 'Usuario eliminado existosamente.'
            });

        }catch(error){
            if (error.message.includes("encontrado")) {
                res.status(404).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: "Error interno del servidor.",
                    error: error.message
                });
            }
        }
    }
};

module.exports = usuarioController;