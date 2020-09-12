import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
export default function UserAccount() {
	const history = useHistory();

	useEffect(() => {
		let x = localStorage.getItem('token');
		if (x === null) {
			history.push('login');
		}
	},[]);
	return (
		<div>
			<h2>Hello from user side</h2>
		</div>
	);
}
