import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { UserContext } from '../../Store/userStore';
export default function UserAccount() {
	const history = useHistory();
	const { setUsers } = useContext(UserContext);
	useEffect(() => {
		let x = localStorage.getItem('token');
		if (x === null) {
			history.push('/login');
		}
	}, []);

	const logUserOut = async () => {
		await localStorage.removeItem('token');
		await setUsers({ type: 'LOG_USER_OUT' });
		await history.push('/');
	};
	return (
		<div>
			<h2>Hello from user side</h2>
			<button onClick={logUserOut}>LogOut</button>
		</div>
	);
}
