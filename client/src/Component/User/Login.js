import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Store/userStore';
import { CartContext } from '../../Store/CartStore';

export default function Login() {
	const history = useHistory();
	const { setUsers } = useContext(UserContext);
	const { Cart } = useContext(CartContext);
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [alert] = useState(false);
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const check = localStorage.getItem('token');
		if (Cart === null && Cart === '' && check === null && check === '') {
			axios.post('/login', user).then((res) => {
				localStorage.setItem('token', res.headers.authtoken);
				history.push(`/user/${res.data.id}`);
				setUsers({ type: 'LOG_USER_IN' });
			});
		}
		if (check === null && Cart !== null) {
			axios.post('/login', user).then((res) => {
				localStorage.setItem('token', res.headers.authtoken);
				setUsers({ type: 'LOG_USER_IN' });
				history.goBack();
			});
		} if(check != null && Cart ===null) {
			axios.get('/login', { headers: { check } }).then((res) => {
				history.push(`/user/${res.data.id}`);
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
					{!alert ? <div className="nothing">incorrect password</div> : ''}
				</div>
				<div className="input-button">
					<input
						type="submit"
						value="Sign In"
						onClick={handleSubmit}
						className="final-click"
					/>
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
