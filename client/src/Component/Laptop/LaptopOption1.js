import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import VS from '../../Assets/DesktopEnv.svg';
import { LaptopContext } from '../../Store/LaptopStore';
import { CartContext } from '../../Store/CartStore';
import { v4 as uuidv4 } from 'uuid';

export default function LaptopOption1() {
	let history = useHistory();
	const { Processor, RAM, GPU, storage } = useContext(LaptopContext);
	const { dispatch } = useContext(CartContext);
	const { dispatch2 } = useContext(CartContext);

	const [Laptop, setLaptop] = useState({
		Processor: Processor[0].name,
		RAM: RAM[0].name,
		GPU: GPU[0].name,
		storage: storage[0].name,
		Total: 0,
		Type: 'LAPTOP',
		id: uuidv4(),
	});
	const [Total, setTotal] = useState({
		Processor: Processor[0].cost,
		RAM: RAM[0].cost,
		GPU: GPU[0].cost,
		storage: storage[0].cost,
		Type: 'LAPTOP',
		id: Laptop.id,
	});

	const handleClick = (e) => {
		setLaptop({ ...Laptop, [e.target.name]: e.target.value });
		setTotal({
			...Total,
			[e.target.name]: parseInt(e.target.getAttribute('cost')),
		});
	};

	const addToCart = async (e) => {
		const final = {
			id: Total.id,
			Type: Total.type,
			Total:
				Total.storage +
				Total.GPU +
				Total.Processor +
				Total.RAM +
				200 +
				200 +
				150,
		};
		await dispatch({ type: 'ADD_CART', cart: Laptop });
		await dispatch2({ type: 'ADD_CART_TOTAL', cart: final });
		await history.push('/Cart');
	};

	return (
		<div className="opt-container container">
			<div className="opt-heading sub-sub-main-heading">
				<h1>Customize your DeepinPro 15.6 inch Space Gray</h1>
			</div>
			<div className="options">
				<div className="opt-col1">
					<div className="opt-image">
						<img src={VS} alt="" />
					</div>
				</div>
				<div className="opt-col2">
					<div className="opt-spec-list option-spec">
						<ul>
							<li>
								<span>{Laptop.Processor}</span>
							</li>
							<li>
								<span>{Laptop.RAM}</span>
							</li>
							<li>
								<span>{Laptop.GPU}</span>
							</li>
							<li>
								<span>{Laptop.storage}</span>
							</li>
						</ul>
					</div>
					<div className="section">
						<div className="opt-heading1 sub-sub-sub-heading">
							<h3>Processor</h3>
							<span>Which processor is right for you</span>
						</div>
						<div className="processor-option">
							<ul>
								{Processor.filter((proc, index) => index < 2).map(
									(processor) => {
										return (
											<li
												key={processor.id}
												className={
													Laptop.Processor === processor.name
														? 'options-listing-checked'
														: 'options-listing'
												}>
												<label>
													{processor.name}
													<input
														type="radio"
														key={processor.id}
														className="options-given option-spec"
														name="Processor"
														value={processor.name}
														onChange={handleClick}
														cost={processor.cost}
													/>
												</label>
											</li>
										);
									}
								)}
							</ul>
						</div>
					</div>
					<div className="section">
						<div className="opt-heading1 sub-sub-sub-heading">
							<h3>RAM</h3>
							<span>Choose the Proper Memory for you</span>
						</div>
						<div className="processor-option">
							<ul>
								{RAM.filter((ra, index) => index < 3).map((ram) => {
									return (
										<li
											key={ram.id}
											className={
												Laptop.RAM === ram.name
													? 'options-listing-checked'
													: 'options-listing'
											}>
											<label>
												{ram.name}
												<input
													type="radio"
													key={ram.id}
													className="options-given option-spec"
													name="RAM"
													value={ram.name}
													onChange={handleClick}
													cost={ram.cost}
												/>
											</label>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="section">
						<div className="opt-heading1 sub-sub-sub-heading">
							<h3>Storage</h3>
							<span>Choose the correct amount of storage you require</span>
						</div>
						<div className="processor-option">
							<ul>
								{storage
									.filter((stor, index) => index < 3)
									.map((storage) => {
										return (
											<li
												key={storage.id}
												className={
													Laptop.storage === storage.name
														? 'options-listing-checked'
														: 'options-listing'
												}>
												<label>
													{storage.name}
													<input
														type="radio"
														key={storage.id}
														className="options-given option-spec"
														name="storage"
														value={storage.name}
														onChange={handleClick}
														cost={storage.cost}
													/>
												</label>
											</li>
										);
									})}
							</ul>
						</div>
					</div>
					<div className="section">
						<div className="opt-heading1 sub-sub-sub-heading">
							<h3>GPU</h3>
							<span>Select the require Graphical Power that you may need</span>
						</div>
						<div className="processor-option">
							<ul className="options-list">
								{GPU.filter((gpu, index) => index < 2).map((GPU) => {
									return (
										<li
											key={GPU.id}
											className={
												Laptop.GPU === GPU.name
													? 'options-listing-checked'
													: 'options-listing'
											}>
											<label>
												{GPU.name}
												<input
													type="radio"
													key={GPU.id}
													className="options-given option-spec"
													name="GPU"
													value={GPU.name}
													onChange={handleClick}
													cost={GPU.cost}
												/>
											</label>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="final-decision">
				<div className="total">
					<h1>{`Total : $${
						Total.Processor +
						Total.GPU +
						Total.RAM +
						Total.storage +
						200 +
						200 +
						150
					}`}</h1>
				</div>
				<button onClick={addToCart} className="final-click ">
					Add to Cart
				</button>
			</div>
		</div>
	);
}
