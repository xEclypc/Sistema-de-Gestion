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
    },

    async findAll(){
        try{
            const obtenerUsuarios = await usuarioModel.findAll();
            return obtenerUsuarios;

        }catch(error){
            console.error('usuarioService.findAll', error.message);
            throw new Error('Error al obtener todos los usuarios');

        }
    },

    async findByPk(id){
        try{
            const obtenerUsuario = await usuarioModel.findByPk(id);
            if(!obtenerUsuario){throw new Error('usuario no encontrado.')};
            return obtenerUsuario;

        }catch(error){
            console.error('usuarioService.findByPk', error.message);
            throw new Error('Error al obtener el usuario');

        }
    },

async update(id, userData) {
        try {
            const [rowsUpdated] = await usuarioModel.update(userData, {
                where: { id: id }
            });

            if (rowsUpdated === 0) {
                throw new Error("Usuario no encontrado.");
            }

        } catch (error) {
            console.error('Error en usuarioService.update', error.message);
            throw new Error('Usuario no actualizado');
        }
    },

    async destroy(id){
        try{
            const usuarioEliminado = await usuarioModel.destroy({
                where: {id : id}
            });

            if(usuarioEliminado === 0) {throw new Error('Usuario no encontrado.')};
            return usuarioEliminado;

        }catch(error){
            console.error('usuarioService.destroy', error.message);
            throw new error('Usuario no eliminado');
        }
    }

};

module.exports = usuarioService;