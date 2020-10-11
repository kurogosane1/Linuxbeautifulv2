import React from 'react';
import { useHistory } from 'react-router-dom';
import VS from '../../Assets/DesktopEnv.svg';
import iTablet from '../../Assets/iTablet2.svg';

export default function Main() {
	let history = useHistory();
	const goTo = async (e) => {
		const val = e.target.value;
		history.push(`/${val}`);
	};
	return (
		<>
			<div className="front-page-container">
				<div className="main-container">
					<div className="front-heading">
						<h3>New DeepPro</h3>
					</div>
					<div className="picture">
						<img src={VS} alt="" />
					</div>
					<div className="ontop-text">
						<span>Take this to the next level</span>
					</div>
					<button className="final-click" value="laptop" onClick={goTo}>
						Click here
					</button>
				</div>
				<br />
				<div className="main-container">
					<div className="front-heading">
						<h3>iTablet</h3>
					</div>
					<div className="picture">
						<img src={iTablet} alt="" />
					</div>
					<div className="ontop-text">
						<span>A FUTURE</span>
					</div>
					<button className="final-click" value="Tablet" onClick={goTo}>
						Click here
					</button>
				</div>
				<br />
				<div className="main-container">
					<div className="front-heading">
						<h3>AllinOne</h3>
					</div>
					<div className="picture">
						<img src={VS} alt="" />
					</div>
					<div className="ontop-text">
						<span>A powertool in a smaller package</span>
					</div>
					<button className="final-click" value="AllinOne" onClick={goTo}>
						Click here
					</button>
				</div>
			</div>
		</>
	);
}
