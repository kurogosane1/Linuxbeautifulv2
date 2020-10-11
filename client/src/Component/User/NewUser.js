import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Store/userStore';

export default function NewUser() {
	const { setUsers } = useContext(UserContext);
	let history = useHistory();
	const [user, setUser] = useState({
		firstname: '',
		lastname: '',
		streetaddress: '',
		state: '',
		zipcode: '',
		password: '',
		checkpassword: '',
	});
	const [passCorrect, setPass] = useState(true);

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const youtest = async () => {
		const User = {
			firstname: user.firstname,
			lastname: user.lastname,
			streetaddress: user.streetaddress,
			state: user.state,
			zipcode: user.zipcode,
			email: user.email,
			password: user.password,
		};
		await axios
			.post('/register', User)
			.then((res) => {
				localStorage.setItem('token', res.headers.authtoken);
				setUsers({ type: 'LOG_USER_IN' });
				history.push(`/${res.data.id}`);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="Login-Container new-user-form">
			<div className="newuser">
				<div className="new-user-heading">
					<h2>Create a new User</h2>
				</div>

				<div className="new-user-firstname">
					<input
						onChange={handleChange}
						type="text"
						name="firstname"
						placeholder="First Name"
					/>
				</div>
				<div className="new-user-lastname">
					<input
						onChange={handleChange}
						type="text"
						name="lastname"
						placeholder="Last Name"
					/>
				</div>
				<div className="new-user-address">
					<input
						type="text"
						name="streetaddress"
						placeholder="Street Address"
						onChange={handleChange}
					/>
				</div>
				<div className="new-user-state">
					<input
						onChange={handleChange}
						type="text"
						name="state"
						placeholder="State"
					/>
				</div>
				<div className="new-user-zipcode">
					<input
						onChange={handleChange}
						type="text"
						name="zipcode"
						placeholder="Zipcode"
					/>
				</div>
				<div className="new-user-email">
					<input
						onChange={handleChange}
						type="text"
						name="email"
						placeholder="Email"
					/>
				</div>
				<div className="new-user-password">
					<input
						onChange={handleChange}
						type="password"
						name="password"
						placeholder="Password"
					/>
				</div>
				<div className="new-user-checkpassword">
					<input
						onChange={handleChange}
						type="password"
						name="confirmpassword"
						placeholder="Confirm Password"
					/>
					{passCorrect === false ? <label>password does not match</label> : ''}
				</div>
				<div className="new-user-submit">
					<input type="button" value="Signup" onClick={youtest} />
				</div>

				<div className="new-user-redirect">
					<label>
						If your already registered then click <Link to="/login">Here</Link>
					</label>
				</div>
			</div>
		</div>
	);
}
