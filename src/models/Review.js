const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'review',
		{
			idReview   : {
				type         : DataTypes.UUID,
				defaultValue : DataTypes.UUIDV4,
				allowNull    : false,
				primaryKey   : true
			},
			score : {
				type      : DataTypes.ENUM('1', '2', '3', '4', '5'),
				allowNull : false
			},
            description : {
                type: DataTypes.TEXT,
                allowNull: false,
            }
		},
		{ timestamps: true, freezeTableName: true }
	);
};