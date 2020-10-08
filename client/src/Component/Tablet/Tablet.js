import React from 'react';
import tab1 from '../../Assets/iTablet3.svg';

export default function Tablet() {
	return (
		<div className="tablet-section">
			<div className="main-heading">
				<h2 className="overview-heading">iTablet</h2>
			</div>
			<div className="sub-main-heading">
				<h3 className="overview-heading">Your</h3>
				<h3 className="overview-heading">Next</h3>
				<h3 className="overview-heading">Computer</h3>
			</div>

			<img src={tab1} alt="" className="overview-img" />
			<div className="sub-container">
                <div className="col">
                    
                </div>
            </div>
		</div>
	);
}
