const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Storage = require('../models/storage');
const GPU = require('../models/graphics');
const RAM = require('../models/ram');
const Processor = require('../models/Processor');
const auth = require('../Controller/authController');
const Users = require('../models/user');

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

router.post('/login', auth.login_post);
router.get('/login', auth.login_get);
router.post('/register', auth.signup_post);
router.get('/user/:id', auth.auth_user);

module.exports = router;
