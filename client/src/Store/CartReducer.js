export const CartReducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CART_ITEM':
			return state.filter((cart) => cart.id !== action.id);
		case 'ADD_CART':
			return [...state, action.cart];
		//
		default:
			return state;
	}
};

export function CartTotalReducer(state, action) {
	switch (action.type) {
		case 'DELETE_CART_TOTAL':
			return state.filter((cartTotal) => cartTotal.id !== action.id);

		case 'ADD_CART_TOTAL':
			return [...state, action.cart];
		default:
			return state;
	}
}
