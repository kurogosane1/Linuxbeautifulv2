import React from 'react';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';
import LaptopOption1 from './LaptopOption1';
import LaptopBuynow from './LaptopBuynow';
import Overview from './Overview';

import LaptopOption2 from './LaptopOption2';

export default function Laptop() {
	let { path, url } = useRouteMatch();

	return (
		<div className="laptopsection">
			<div className="sub-nav">
				<div className="sub-nav-left">
					<h2>DeepinPro</h2>
				</div>
				<div className="sub-nav-right">
					<ul className="sub-nav-ul">
						<li className="sub-nav-list">
							<NavLink className="tags blue" to={`${url}`}>
								Overview
							</NavLink>
						</li>
						{/* <li className="sub-nav-list">
							<NavLink className="tags blue" to={`${url}/DeepOS`}>
								DeepOS
							</NavLink>
						</li> */}
						<li className="sub-nav-list">
							<NavLink className="tags blue" to={`${url}/buynow`}>
								Buy Now
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className="sub-view">
				<Route exact path={`${path}`}>
					<Overview />
				</Route>
				{/* <Route exact path={`${path}/DeepOS`}>
					<LaptopDeep />
				</Route> */}
				<Route exact path={`${path}/buynow`}>
					<LaptopBuynow />
				</Route>
				<Route exact path={`${path}/buynow/option1`}>
					<LaptopOption1 />
				</Route>
				<Route exact path={`${path}/buynow/option2`}>
					<LaptopOption2 />
				</Route>
			</div>
		</div>
	);
}
