const { Sequelize, DataTypes } = require('sequelize');
const db = require('../controller/Connection');

const Users = db.define('Users', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
	firstname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	streetaddress: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	state: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	zipcode: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},

	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
	},
	updatedAt: {
		allowNull: false,
		type: DataTypes.DATE,
	},
});

Users.sync().then(() => {
	Users.bulkCreate([
		{
			firstname: 'John',
			lastname: 'Doe',
			streetaddress: '1234 somewhere',
			state: 'TX',
			zipcode: '77777',
			email: 'jdoe@email.com',
			password: '123password',
		},
		{
			firstname: 'jay',
			lastname: 'leno',
			streetaddress: '2222 somewhere',
			state: 'NY',
			zipcode: '11111',
			email: 'jayl@email.com',
			password: 'password123',
		},
	]);
});
module.exports = Users;
