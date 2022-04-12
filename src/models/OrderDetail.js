const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('orderDetail', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idProduct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idOrder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false, freezeTableName: true });
};
