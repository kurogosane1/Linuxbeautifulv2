export const usersReducer = (state, action) => {
	switch (action.type) {
		case 'LOG_USER_IN':
			return { userLoggedIn: true };
		case 'LOG_USER_OUT':
			return { userLoggedIn: false };
		default:
			return state;
	}
};
