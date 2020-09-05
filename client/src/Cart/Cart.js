import React, { useContext, useEffect } from 'react';
import VS from '../Assets/DesktopEnv.svg';
import { CartContext } from '../Store/CartStore';

export default function Cart() {
	const { Cart, cartTotal, dispatch, dispatch2 } = useContext(CartContext);

	useEffect(() => {
		console.log(Cart);
	}, [Cart]);

	const removeListing = async (id) => {
		await dispatch({ type: 'DELETE_CART_ITEM', id });
		await dispatch2({ type: 'DELETE_CART_TOTAL', id });
	};
	return (
		<div className="options-given">
			<div className="options-heading">
				<h3>Your Cart</h3>
			</div>
			<div className="option1">
				<div className="">
					<ul>
						{Cart.map((cart) => {
							return (
								<li key={cart.id}>
									<div>
										<img src={VS} alt="something" />
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
												.filter((total) => total.id == cart.id)
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
				</div>
			</div>
			<div className="option2">
				<div className="option-img"></div>
			</div>
		</div>
	);
}
