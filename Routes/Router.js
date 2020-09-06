const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Storage = require('../models/storage');
const GPU = require('../models/graphics');
const RAM = require('../models/ram');
const Processor = require('../models/Processor');

router.get('/', (req, res) => {
	res.send('hello world');
});

router.get('/user', async (req, res) => {
	await User.findAll()
		.then((user) => {
			res.json(user);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
