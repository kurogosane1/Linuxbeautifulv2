import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import VS from '../../Assets/DesktopEnv.svg';

export default function LaptopBuynow() {
	let history = useHistory();
	let { url } = useRouteMatch();

	const dothis = (e) => {
		let option = e.target.value;
		console.log(`${url}/${option}`);
		history.push(`${url}/${option}`);
	};

	return (
		<div className="option-given container">
			<div className="options-heading ">
				<h3 className="main-heading">15.6 inch DeepinPro</h3>
				<span className="small-span">
					We're here to help. Feel free to contact us
				</span>
				<h1>Choose your new DeepinPro</h1>
			</div>
			<div className="options">
				<div className="option1">
					<div className="option-img">
						<img src={VS} alt="" />
					</div>
					<div className="option-spec">
						<ul>
							<li>2.5GHz 12-Core Processor</li>
							<li>Turbo Boost up to 5Ghz</li>
							<li>Nvidia RTX 3050 with 8GB of GDDR8 memory</li>
							<li>16GB of 2666MHz DDR6 memory</li>
							<li>512GB of Storage</li>
							<li>
								15.6-inch Art Display with Thin bezels and blue light filter
							</li>
							<li>Facial Recognition and Finger print sensor</li>
							<li>Four Thunderbolt 4 ports</li>
						</ul>
					</div>
					<div className="buttons1">
						<button className="buttons" onClick={dothis} value="option1">
							Select
						</button>
					</div>
					<div className="message1 option-spec">
						<ul>
							<li>
								<span>Order today, delivers </span>
							</li>
							<li>
								<span>Delivery estimated time 2 weeks</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="option2">
					<div className="option-img">
						<img src={VS} alt="" />
					</div>
					<div className="option-spec">
						<ul>
							<li>2.2Ghz 16-Core Processor</li>
							<li>Turbo Boost up to 4.2Ghz</li>
							<li>Nvidia RTX 3080 with 8GB of GDDR8 memory</li>
							<li>16GB of 2666MHz DDR6 memory</li>
							<li> 1TB of SSD storage</li>
							<li>
								15.6-inch Art Display with Thin bezels and blue light filter
							</li>
							<li>Facial Recognition and Finger print sensor</li>
							<li>Four Thunderbolt 4 ports</li>
						</ul>
					</div>
					<div className="buttons2">
						<button onClick={dothis} value="option2" className="buttons">
							Select
						</button>
					</div>
					<div className="message2 option-spec">
						<ul>
							<li>
								<span>Order today, delivers </span>
							</li>
							<li>
								<span>Delivery estimated time 2 weeks</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
