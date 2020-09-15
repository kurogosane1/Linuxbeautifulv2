import React, { useState, useContext, useEffect } from 'react';
import VS from '../Assets/DesktopEnv.svg';
import { CartContext } from '../Store/CartStore';


export default function Cart() {
	const { Cart, cartTotal, dispatch, dispatch2 } = useContext(CartContext);

	const [totalamt, setTotalamt] = useState(0);
	useEffect(() => {
		const amt = cartTotal
			.map((total) => {
				return (
					total.Processor +
					total.RAM +
					total.GPU +
					total.storage +
					200 +
					200 +
					150
				);
			})
			.reduce((a, b) => a + b, 0);
		setTotalamt(amt);
	}, [cartTotal]);

	useEffect(() => {});

	const removeListing = async (id) => {
		await dispatch({ type: 'DELETE_CART_ITEM', id });
		await dispatch2({ type: 'DELETE_CART_TOTAL', id });
	};
	return (
		<div className="cart-container">
			<div className="cart-heading">
				<h3>Your Cart</h3>
			</div>

			<ul>
				{Cart.map((cart) => {
					return (
						<li key={cart.id}>
							<div className="cart-image">
								<img src={VS} alt="something" />
							</div>
							<div className="cart-specs">
								<ul>
									<li>{cart.Processor}</li>
									<li>{cart.RAM}</li>
									<li>{cart.storage}</li>
									<li>{cart.GPU}</li>
								</ul>
							</div>
							<div className="total">
								<h2>
									{cartTotal
										.filter((total) => total.id === cart.id)
										.map((total) => {
											return (
												total.Processor +
												total.RAM +
												total.GPU +
												total.storage +
												200 +
												200 +
												150
											);
										})}
								</h2>
							</div>
							<div className="remove">
								<input
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
				<div className="totalpayment">
					<h2>Your Cart is Empty</h2>
				</div>
			) : (
				<div className="totalpayment">
					<h2>Your total is $ ${totalamt}</h2>
					<div className="proceed">
						<button>Proceed to payment</button>
					</div>
				</div>
			)}
		</div>
	);
}
