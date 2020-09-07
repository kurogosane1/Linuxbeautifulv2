// import ModelManager from 'sequelize/types/lib/model-manager';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Users = require('../models/user.js');

dotenv.config();

module.exports.signup_post = async (req, res) => {
	//Hash Password
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	//check if email address exists
	const emailExists = await Users.findOne({ where: { email: req.body.email } });
	console.log(emailExists);

	if (emailExists === null) {
		Users.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			streetaddress: req.body.streetaddress,
			state: req.body.state,
			zipcode: req.body.zipcode,
			email: req.body.email,
			password: hashPassword,
		})
			.then((submit) => res.send(submit))
			.catch((err) => console.log(err));
	} else {
		return res.send('email already exists');
	}
};

module.exports.login_get = (req, res) => {
	res.send('This is get from Login side');
};

module.exports.login_post = async (req, res) => {
	console.log(req.body);
	const user = await Users.findOne({ where: { email: req.body.email } });
	if (user === null) {
		res.sendStatus(400).send('email not found');
	} else {
		const validPass = await bcrypt.compare(req.body.password, user.password);
		if (!validPass) {
			return res.status(400).send('Email is not found');
		} else {
			//Create ad assign a token
			const token = await jwt.sign(
				{ id: user.id, exp: Math.floor(Date.now() / 1000) - 30 },
				process.env.TOKEN_SECRET
			);
			await res.header('auth-token', token).send({token:token});
		}
	}
};
