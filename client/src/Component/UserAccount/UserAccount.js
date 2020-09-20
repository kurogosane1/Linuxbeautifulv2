import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { UserContext } from '../../Store/userStore';
import axios from 'axios';
// import { get } from '../../../../Routes/Router';

export default function UserAccount() {
	let history = useHistory();
	const { setUsers } = useContext(UserContext);
	const { id } = useParams();

	const [getUser, setgetUser] = useState({});

	useEffect(() => {
		checkUser();
	}, []);

	const checkUser = () => {
		let mounted = false;
		if (!mounted) {
			let x = localStorage.getItem('token');
			if (x === null) {
				history.push('/login');
			} else if (x !== null) {
				axios
					.get(`/${id}`)
					.then((res) => setgetUser(res.data))
					.catch((err) => console.log(err));
				setUsers({ type: 'LOG_USER_IN' });
			} else {
				console.log();
			}
		}
	};
	const logUserOut = async () => {
		await localStorage.removeItem('token');
		await setUsers({ type: 'LOG_USER_OUT' });
		await history.push('/');
	};
	return (
		<div>
			<h2>Hello from user side</h2>
			<h2>{getUser.firstname}</h2>
			<h3>{getUser.state}</h3>
			<h3>{getUser.zipcode}</h3>
			<h3>{getUser.streetaddress}</h3>

			<button onClick={logUserOut}>LogOut</button>
		</div>
	);
}
