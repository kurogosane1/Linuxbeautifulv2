import React from 'react';
import tab1 from '../../Assets/iTablet3.svg';
import tab3 from '../../Assets/iTablet1.svg';
import tab2 from '../../Assets/iTablet2.svg';
import tab4 from '../../Assets/iTablet4.svg';

export default function Tablet() {
	return (
		<>
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
					<div className="overview-specs">
						<h3>
							New ARM X13 processor that provides <strong>3 times </strong> the
							performance than leading tablets
						</h3>
					</div>
					<div className="overview-specs">
						<h3>
							Beautiful AMOLED edge-to-edge Dsiplay is not only gorgues and
							immersive, but also features incredibly advance technologies like
							the stunning smooth scroll look and everything feels responsive.
							Quite simply, this combination of features makes it the worlds
							morst advanced mobile display
						</h3>
					</div>
					<div className="image">
						<img src={tab3} alt="" />
					</div>
				</div>
			</div>
			<div className="sub-container">
				<div className="col">
					<div className="overview-specs">
						<h3>
							The ARM x13 processor is so fast it outpaces most advance tablets
							and even some PCs. It makes everything you do fast and fluid, from
							your everyday tasks to graphics-intensive workflows. And the
							8-core graphics processor means even more performance and realism
							for the apps and games where it matters most
						</h3>
					</div>
				</div>
			</div>
			<div className="sub-container">
				<div className="col another-version">
					<div className="overview-specs sub-col1">
						<span>
							iTablet is incredibly thin and so light you can carry it with you
							everywhere. And it has up to <strong>10 hours</strong> of battery
							life to keep you going all day. Stay connected on the go with fast
							Wi-Fi and up to Gigabit-class LTE. You can even print, project,
							and send files wirelessly
						</span>
					</div>
					<div className="sub-col2">
						<img src={tab2} alt="" />
					</div>
				</div>
			</div>
			<div className="sub-container">
				<div className="col">
					<div className="overview-specs">
						<h3>
							We believe technology is most powerful when it empowers everyone.
							That's why iTablet comes with accessibility features that support
							vision, hearing, mobility, and learning needs. Including Voice
							Control, which lets you command your iTablet with just your voice,
							and Switch Control , which lets you interact with iTablet without
							touching it
						</h3>
					</div>
					<img src={tab4} alt="" />
				</div>
			</div>
		</>
	);
}
