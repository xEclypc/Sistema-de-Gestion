module.exports = (sequelize, DataTypes, ENUM) => {
  const Usuario = sequelize.define("usuario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_Usuario'
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'nombre_Usuario'
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
      field: 'correo'
    },
    contrasena: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'contrasena'
    },
    rol: {
        type: ENUM('Tomador', 'despachador'),
        allowNull: false,
        field: 'rol' 
    }
  },{
    timestamps: true,
    tableName: 'usuario'
  });

  return Usuario;
};