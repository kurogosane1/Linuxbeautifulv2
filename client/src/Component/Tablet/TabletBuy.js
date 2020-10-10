import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import tab3 from '../../Assets/iTablet3.svg';
import { CartContext } from '../../Store/CartStore';
import { v4 as uuidv4 } from 'uuid';

export default function TabletBuy() {
	let history = useHistory();
	const { dispatch } = useContext(CartContext);
	const { dispatch2 } = useContext(CartContext);
	const specs = {
		one: {
			id: '1',
			storage: '128GB',
			cost: 799,
		},
		two: {
			id: '2',
			storage: '256GB',
			cost: 899,
		},
		three: {
			id: '3',
			storage: '512GB',
			cost: 1099,
		},
		four: {
			id: '4',
			storage: '1TB',
			cost: 1299,
		},
		wifi: {
			id: '5',
			cost: 0,
		},
		LTE: {
			id: '6',
			cost: 100,
		},
	};

	const [click, setClick] = useState({
		id: '1',
		cost: 799,
		type: '',
		Type: 'TABLET',
		storage: '128GB',
	});

	const [Cart, setCart] = useState({});

	const wasClicked = (e) => {
		const check = e.target.id;
		const cost = e.target.getAttribute('cost');
		const storage = e.target.value;
		setClick({ id: check, cost, storage, type: '', Type: 'TABLET' });
	};
	const addToCart = async () => {
		await setCart({
			...Cart,
			id: uuidv4(),
			storage: click.storage,
			type: click.type,
			Type: 'TABLET',
			Total:
				click.type === 'lte'
					? Number(click.cost) + Number(100)
					: Number(click.cost),
		});
		const Total = {
			id: click.id,
			Type: 'TABLET',
			storage: click.storage,
			Total: Number(click.cost),
		};
		await dispatch({ type: 'ADD_CART', cart: click });
		await dispatch2({ type: 'ADD_CART_TOTAL', cart: Total });
		await history.push('/Cart');
	};

	return (
		<div className="opt-container container">
			<div className="opt-heading sub-sub-main-heading">
				<h1>Customize your iTablet</h1>
			</div>
			<div className="options">
				<div className="opt-col1">
					<div className="opt-image">
						<img src={tab3} alt="" />
					</div>
				</div>

				<div className="opt-col2">
					<div className="section">
						<div className="opt-heading1 sub-sub-sub-heading">
							<h3>Storage</h3>
						</div>
						<div className="processor-option">
							<ul>
								<li
									key={specs.one.id}
									className={
										click.id === specs.one.id
											? 'options-listing-checked'
											: 'options-listing'
									}>
									<label>
										<input
											type="radio"
											name="storage"
											id={specs.one.id}
											value={specs.one.storage}
											className="options-given option-spec"
											onChange={wasClicked}
											cost={specs.one.cost}
										/>
										<h3>{specs.one.storage}</h3>
										<span>{`${specs.one.cost}`}</span>
									</label>
								</li>
								<li
									key={specs.two.id}
									className={
										click.id === specs.two.id
											? 'options-listing-checked'
											: 'options-listing'
									}>
									<label>
										<input
											className="options-given option-spec"
											type="radio"
											name="storage"
											id={specs.two.id}
											value={specs.two.storage}
											onChange={wasClicked}
											cost={specs.two.cost}
										/>
										<h3>{specs.two.storage}</h3>
										<span>{`${specs.two.cost}`}</span>
									</label>
								</li>
								<li
									key={specs.three.id}
									className={
										click.id === specs.three.id
											? 'options-listing-checked'
											: 'options-listing'
									}>
									<label>
										<input
											className="options-given option-spec"
											type="radio"
											name="storage"
											id={specs.three.id}
											value={specs.three.storage}
											onChange={wasClicked}
											cost={specs.three.cost}
										/>
										<h3>{specs.three.storage}</h3>
										<span>{`${specs.three.cost}`}</span>
									</label>
								</li>
								<li
									key={specs.four.id}
									className={
										click.id === specs.four.id
											? 'options-listing-checked'
											: 'options-listing'
									}>
									<label>
										<input
											className="options-given option-spec"
											type="radio"
											name="storage"
											id={specs.four.id}
											value={specs.four.storage}
											onChange={wasClicked}
											cost={specs.four.cost}
										/>
										<h3>{specs.four.storage}</h3>
										<span>{`${specs.four.cost}`}</span>
									</label>
								</li>
							</ul>
						</div>
						<div className="section">
							<div className="opt-heading1 sub-sub-sub-heading">
								<h3>Connectivity</h3>
							</div>
							<div className="processor-option">
								<ul>
									<li
										className={
											click.type === 'wifi'
												? 'options-listing-checked'
												: 'options-listing'
										}>
										<label>
											Wi-Fi
											<input
												className="options-given option-spec"
												type="radio"
												key={specs.wifi.id}
												name="Connectivity"
												onChange={() => setClick({ ...click, type: 'wifi' })}
												value="wifi"
											/>
										</label>
									</li>
									<li
										className={
											click.type === 'lte'
												? 'options-listing-checked'
												: 'options-listing'
										}>
										<label>
											Wi-Fi + Cellular{' '}
											<input
												className="options-given option-spec"
												type="radio"
												key={specs.LTE.id}
												name="Connectivity"
												value="lte"
												onChange={() => setClick({ ...click, type: 'lte' })}
											/>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="final-decision">
				<div className="total">
					<h1>
						{click.cost === 0
							? ''
							: click.type === 'lte'
							? Number(click.cost) + 100
							: `${click.cost}`}
					</h1>
				</div>
				<button onClick={addToCart} className="final-click">
					Add to Cart
				</button>
			</div>
		</div>
	);
}
