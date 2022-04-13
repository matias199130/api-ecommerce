const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('product', {
		id   : {
			type         : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			allowNull    : false,
			primaryKey   : true
		},
		name : {
			type      : DataTypes.STRING,
			allowNull : false
		},
		price : {
			type      : DataTypes.FLOAT,
			allowNull : false
		},
		image : {
			type      : DataTypes.TEXT,
			allowNull : false
		},
		description : {
			type      : DataTypes.TEXT,
			allowNull : false
		},
		stock : {
			type      : DataTypes.INTEGER,
			allowNull : false
		},
		brand : {
			type      : DataTypes.STRING,
			allowNull : false
		}
	}, { timestamps: false, freezeTableName: true });
};
