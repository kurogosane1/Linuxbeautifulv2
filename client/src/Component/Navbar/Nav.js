import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { CartContext } from '../../Store/CartStore';
import { UserContext } from '../../Store/userStore';

export default function Nav() {
	const history = useHistory();
	const { Cart } = useContext(CartContext);
	const { users, setUsers } = useContext(UserContext);
	const [id, setId] = useState('');

	useEffect(() => {
		const data = localStorage.getItem('token');
		if (users.userLoggedIn === false && data !== null) {
			setUsers({ type: 'LOG_USER_IN' });
		}
		if (users.userLoggedIn === true && data === null) {
			setUsers({ type: 'LOG_USER-OUT' });
		} else {
		}
	}, [users.userLoggedIn]);

	const checkAuth = () => {
		const data = localStorage.getItem('token');

		if (data === null || data === '') {
			setUsers({ type: 'LOG_USER_OUT' });
		} else {
			axios
				.get('/login', { headers: { auth: data } })
				.then((res) => setId(res.data.id));

			setUsers({ type: 'LOG_USER_IN' });
			history.push(`/user/${id}`);
		}
	};

	return (
		<nav className="Nav-bar">
			<div className="nav-logo">
				<h2>LB</h2>
			</div>
			<div className="nav-menu">
			<NavLink className="tags" to="/">
				Main
			</NavLink>

			<NavLink className="tags" to="/laptop">
				Laptop
			</NavLink>

			<NavLink className="tags" to="/Tablet">
				iTablet
			</NavLink>

			<NavLink className="tags" exact to="/AllinOne">
				iDeep
			</NavLink>

			{users.userLoggedIn === false ? (
				<NavLink className="tags" to="/login" onClick={checkAuth}>
					SignIn
				</NavLink>
			) : (
				<NavLink className="tags" to={`/user/${id}`} onClick={checkAuth}>
					User
				</NavLink>
			)}

			{Cart.length > 0 ? (
				<NavLink className="tags" to="/Cart">
					{`Cart ${Cart.length}`}
				</NavLink>
			) : (
				''
			)}
			</div>
		</nav>
	);
}
