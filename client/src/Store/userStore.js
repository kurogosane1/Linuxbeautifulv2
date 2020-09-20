import React, { createContext, useReducer } from 'react';
import { usersReducer } from './userReducer';

export const UserContext = createContext();

export default function UserStoreContext(props) {
	const [users, setUsers] = useReducer(usersReducer, {
		userLoggedIn: false,
	});

	return (
		<UserContext.Provider value={{ users, setUsers }}>
			{props.children}
		</UserContext.Provider>
	);
}
