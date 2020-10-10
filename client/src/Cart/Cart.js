import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import VS from '../Assets/DesktopEnv.svg';
import tab2 from '../Assets/iTablet3.svg';
import { CartContext } from '../Store/CartStore';

export default function Cart() {
	let history = useHistory();
	const { Cart, cartTotal, dispatch, dispatch2 } = useContext(CartContext);

	const [totalamt, setTotalamt] = useState(0);
	useEffect(() => {
		console.log(Cart);
		const amt = cartTotal
			.map((total) => total.Total)
			.reduce((a, b) => a + b, 0);
		setTotalamt(amt);
	}, [cartTotal]);

	const checkUser = async () => {
		const token = await localStorage.getItem('token');
		if (token === null || token === '') {
			history.push('/login');
		} else {
			console.log('There is something wrong');
		}
	};

	const removeListing = async (id) => {
		await dispatch({ type: 'DELETE_CART_ITEM', id });
		await dispatch2({ type: 'DELETE_CART_TOTAL', id });
	};
	return (
		<div className="cart-container">
			<div className="cart-heading">
				<h3>Your Cart</h3>
			</div>

			<ul className="cart-section">
				{Cart.map((cart) => {
					return (
						<li key={cart.id} className="cart-listing">
							<div className="cart-image">
								<img
									src={
										cart.Type === 'LAPTOP'
											? VS
											: cart.Type === 'TABLET'
											? tab2
											: VS
									}
									alt="something"
								/>
							</div>
							<div className="total">
								<h2>
									{cartTotal
										.filter((total) => total.id === cart.id)
										.map((total) => {
											return `$ ${total.Total}`;
										})}
								</h2>
							</div>
							<div className="remove">
								<input
									className="final-click"
									type="button"
									value="Remove Item"
									onClick={() => {
										removeListing(cart.id);
									}}
								/>
							</div>
						</li>
					);
				})}
			</ul>
			{totalamt === 0 ? (
				<div className="emptypayment">
					<h2>Your Cart is Empty</h2>
				</div>
			) : (
				<div className="totalpayment">
					<h2>Your total is $ ${totalamt.toLocaleString()}</h2>
					<div className=" proceed">
						<button className="final-click" onClick={checkUser}>
							Proceed to payment
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
