const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('user', {
			idUser       : {
				type         : DataTypes.UUID,
				defaultValue : DataTypes.UUIDV4,
				allowNull    : false,
				primaryKey   : true
			},
			isAdmin  : {
				type      : DataTypes.BOOLEAN,
				allowNull : false
			},
			fullName : {
				type      : DataTypes.STRING,
				allowNull : false
			},
			email    : {
				type      : DataTypes.TEXT,
				allowNull : false
			},

			password : {
				type      : DataTypes.STRING,
				allowNull : false
			},
			address  : {
				type      : DataTypes.TEXT,
				allowNull : false
			},
			cp       : {
				type      : DataTypes.STRING,
				allowNull : false
			}
		},
		{ timestamps: false, freezeTableName: true }
	);
};
