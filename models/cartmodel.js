const { DataTypes } = require('sequelize');
const db = require('../controller/Connection');

const CARTMODEL = db.define('cartUser', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
	Type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Processor: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	RAM: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	GPU: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Storage: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Total: {
		type: DataTypes.DECIMAL,
		allowNull: false,
	},

	User_id: {
		type: DataTypes.UUID,
		references: {
			model: 'Users',
			key: 'id',
		},
	},
});

CARTMODEL.sync({ force: true });
module.exports = CARTMODEL;
