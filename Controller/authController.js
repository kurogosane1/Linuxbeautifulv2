// import ModelManager from 'sequelize/types/lib/model-manager';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Users = require('../models/user.js');

dotenv.config();

module.exports.signup_post = async (req, res) => {
	console.log(req.body);
	//Hash Password
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	//check if email address exists
	const emailExists = await Users.findOne({
		where: { email: req.body.email },
	});
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
			.then((submit) => res.send({ id: submit.id }))
			.catch((err) => console.log(err));
	} else {
		return res.sendstatus(400);
	}
};

module.exports.login_get = (req, res) => {
	// verify token
	const token = req.headers.auth;
	try {
		var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
		res.send({ id: decoded.id });
	} catch (err) {
		console.log(err);
	}
};

module.exports.login_post = async (req, res) => {
	
	const user = await Users.findOne({ where: { email: req.body.email } });
	if (user === null) {
		res.sendStatus(400).send('email not found');
	} else {
		const validPass = await bcrypt.compare(req.body.password, user.password);
		if (!validPass) {
			return res.status(400).send('Email is not found');
		} else {
			//Create ad assign a token
			const token = await jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
				expiresIn: '1h',
			});
			await res.status(202).header('authToken', token).send({ id: user.id });
		}
	}
};

module.exports.auth_user = async (req, res) => {
	if (req.params.id !== null) {
		const user = await Users.findOne({
			where: { id: req.params.id },
		})
			.then((data) => {
				console.log(data);
				res.send({
					email: data.email,
					firstname: data.firstname,
					lastname: data.lastname,
					state: data.state,
					zipcode: data.zipcode,
					streetaddress: data.streetaddress,
				});
			})

			.catch((err) => console.log(err));
	}
};
