const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'wishlist',
		{
			idProduct : {
				type       : DataTypes.UUID,
				allowNull  : false,
				primaryKey : true
			},
			idUser    : {
				type       : DataTypes.UUID,
				allowNull  : false,
				primaryKey : true
			}
		},
		{ timestamps: false, freezeTableName: true }
	);
};
