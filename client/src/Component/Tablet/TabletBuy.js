import React, { useState } from 'react';

import tab3 from '../../Assets/iTablet3.svg';

export default function TabletBuy() {
	const [click, setClick] = useState({
		id: '',
		cost: 0,
	});
	const [wifi, setWifi] = useState('');
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
		},
		LTE: {
			id: '6',
		},
	};

	const wasClicked = (e) => {
		const check = e.target.id;
		setClick({ id: check });
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
											value={specs.one.id}
											className="options-given option-spec"
											onChange={wasClicked}
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
											value={specs.two.id}
											onChange={wasClicked}
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
									<li>
										<label>
											Wi-Fi
											<input
												type="radio"
												key={specs.wifi.id}
												name="Connectivity"
												onChange={wasClicked}
											/>
										</label>
									</li>
									<li>
										<label>
											Wi-Fi + Cellular{' '}
											<input
												type="radio"
												key={specs.LTE.id}
												name="Connectivity"
												onChange={wasClicked}
											/>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
