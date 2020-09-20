import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Store/userStore';

export default function Login() {
	const history = useHistory();
	const { setUsers } = useContext(UserContext);
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [alert, setAlert] = useState(false);
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user);
		const check = localStorage.getItem('token');
		if (check === null || check === '') {
			axios.post('/login', user).then((res) => {
				console.log(res.headers);
				if (res.status === 202) {
					localStorage.setItem('token', res.headers.authtoken);
					setUsers({ type: 'LOG_USER_IN' });
					history.push(`/${res.data.id}`);
				} else {
					setAlert(true);
				}
			});
		} else {
			axios.post('/login', user).then((res) => {
				history.push(`/${res.data.id}`);
			});
		}
	};
	return (
		<div className="login">
			<div className="input-heading">
				<h1>Please Sign in</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="input">
					<label>Username</label>
					<input
						type="text"
						onChange={handleChange}
						name="email"
						id="user-input"
					/>
					<div className="nothing">Wrong email address</div>
				</div>
				<div className="input">
					<label>Password</label>
					<input
						type="password"
						onChange={handleChange}
						name="password"
						id="user-password"
					/>
					{alert !== alert ? (
						<div className="nothing">incorrect password</div>
					) : (
						''
					)}
				</div>
				<div className="input-button">
					<button type="submit">Sign In</button>
				</div>
			</form>
			<div className="input-sign-up">
				<label>Forgot your username and password? Then click here</label>
				<br />
				<br />
				<label>
					If you are new user, then please click <Link to="/signup">Here</Link>
				</label>
			</div>
		</div>
	);
}
