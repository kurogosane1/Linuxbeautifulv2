import React from 'react';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';
import Tablet from './Tablet';
import TabletBuy from './TabletBuy';

export default function TabletNav() {
	let { path, url } = useRouteMatch();
	return (
		<div className="tablet-section">
			<div className="sub-nav">
				<div className="sub-nav-left">
					<h2>iTablet</h2>
				</div>
				<div className="sub-nav-right">
					<ul className="sub-nav-ul">
						<li className="sub-nav-list">
							<NavLink className="tags blue" to={`${url}`}>
								Overview
							</NavLink>
						</li>
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
					<Tablet />
				</Route>
				<Route exact path={`${path}/buynow`}>
					<TabletBuy />
				</Route>
			</div>
		</div>
	);
}
