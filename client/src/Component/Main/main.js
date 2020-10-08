import React from 'react';
import { useHistory } from 'react-router-dom';
import VS from '../../Assets/DesktopEnv.svg';

export default function Main() {
	let history = useHistory();
	const goTo = async () => {
		history.push('/laptop');
	};
	return (
		<>
			<div className="front-page-container">
				<div className="container">
					<div className="heading">
						<h3>New DeepPro</h3>
					</div>
					<div className="picture">
						<img src={VS} alt="" />
					</div>
					<div className="ontop-text">
						<span>Take this to the next level</span>
					</div>
					<button onClick={goTo}>Click here</button>
				</div>
			</div>
		</>
	);
}
