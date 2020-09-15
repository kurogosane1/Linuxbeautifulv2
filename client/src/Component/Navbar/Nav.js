import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Store/CartStore';
import { UserContext } from '../../Store/userStore';

export default function Nav() {
	const { Cart } = useContext(CartContext);
	const { users, setUsers } = useContext(UserContext);

	const checkAuth = () => {
		const data = localStorage.getItem('token');
		if (data === null || data === '') {
			setUsers({ type: 'LOG_USER_OUT' });
		} else {
			setUsers({ type: 'LOG_USER_IN' });
		}
	};

	return (
		<nav className="Nav-bar">
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
				<NavLink className="tags" exact to="/:id" onClick={checkAuth}>
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
		</nav>
	);
}
