import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { UserContext } from '../../Store/userStore';
import axios from 'axios';

export default function UserAccount() {
	const history = useHistory();
	const { setUsers } = useContext(UserContext);
	const { id } = useParams();

	const [getUser, setgetUser] = useState({});

	useEffect(() => {
		let x = localStorage.getItem('token');
		if (x === null) {
			history.push('/login');
		}
		axios.get(`/${id}`).then((res) => setgetUser(res.data));
		setUsers({ type: 'LOG_USER_IN' });
	}, [getUser]);

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
