import React, { createContext, useReducer} from 'react';
import { CartReducer, CartTotalReducer } from './CartReducer';

export const CartContext = createContext();

export default function CartStoreContext(props) {
	const [Cart, dispatch] = useReducer(CartReducer, []);
	const [cartTotal, dispatch2] = useReducer(CartTotalReducer, []);

	return (
		<CartContext.Provider value={{ Cart, dispatch, cartTotal, dispatch2 }}>
			{props.children}
		</CartContext.Provider>
	);
}
