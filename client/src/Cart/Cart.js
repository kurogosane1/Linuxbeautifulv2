import React, { useContext, useEffect } from 'react';
import VS from '../Assets/DesktopEnv.svg';
import { CartContext } from '../Store/CartStore';

export default function Cart() {
	const { Cart, cartTotal } = useContext(CartContext);

	useEffect(() => {
		console.log(Cart);
	}, [Cart]);
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
								</li>
							);
						})}
					</ul>
				</div>
				<div className="">
					<ul>
						{cartTotal.map((total) => {
							return (
								<li key={total.id}>{`${
									total.Processor +
									total.GPU +
									total.RAM +
									total.storage +
									200 +
									200 +
									150
								}`}</li>
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
