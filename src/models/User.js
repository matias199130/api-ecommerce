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
				defaultValue : false
			},
			fullName : {
				type      : DataTypes.STRING,
				defaultValue : "",
				
			},
			email    : {
				type      : DataTypes.TEXT,
				allowNull : false
			},

			password : {
				type      : DataTypes.STRING,
				defaultValue : "",
				
			},
			address  : {
				type      : DataTypes.TEXT,
				defaultValue : "",
				
			},
			cp       : {
				type      : DataTypes.STRING,
				defaultValue : "",
				
			}
		},
		{ timestamps: false, freezeTableName: true }
	);
};
