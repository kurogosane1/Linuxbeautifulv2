const { Sequelize, DataTypes } = require('sequelize');
const db = require('../controller/Connection');

const GPU = db.define('GPU', {
	id: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	cost: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	// option: {
	// 	type: DataTypes.STRING,
	// 	allowNull: false,
	// },
});

// const gpu = GPU.bulkCreate([
// 	{
// 		id: 'gpu-1',
// 		name: 'Nvidia RTX 3050 with 6GB of GDDR8 memory',
// 		cost: 250,
// 	},
// 	{
// 		id: 'gpu-2',
// 		name: 'Nvidia RTX 3060 with 8GB of GDDR8 memory',
// 		cost: 300,
// 	},
// 	{
// 		id: 'gpu-3',
// 		name: 'Nvidia RTX 3060 Super with 8GB of GDDR8 memory',
// 		cost: 400,
// 	},
// 	{
// 		id: 'gpu-4',
// 		name: 'Nvidia RTX 3070 with 8GB of GDDR8 memory',
// 		cost: 700,
// 	},
// 	{
// 		id: 'gpu-5',
// 		name: 'Nvidia RTX 3080 with 8GB of GDDR8 memory',
// 		cost: 850,
// 	},
// ]);

GPU.sync().then(() => {
	GPU.bulkCreate([
		{
			id: 'gpu-1',
			name: 'Nvidia RTX 3050 with 6GB of GDDR8 memory',
			cost: 250,
		},
		{
			id: 'gpu-2',
			name: 'Nvidia RTX 3060 with 8GB of GDDR8 memory',
			cost: 300,
		},
		{
			id: 'gpu-3',
			name: 'Nvidia RTX 3060 Super with 8GB of GDDR8 memory',
			cost: 400,
		},
		{
			id: 'gpu-4',
			name: 'Nvidia RTX 3070 with 8GB of GDDR8 memory',
			cost: 700,
		},
		{
			id: 'gpu-5',
			name: 'Nvidia RTX 3080 with 8GB of GDDR8 memory',
			cost: 850,
		},
	]);
});
module.exports = GPU;
