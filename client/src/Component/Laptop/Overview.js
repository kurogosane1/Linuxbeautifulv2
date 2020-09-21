import React from 'react';
import VS from '../../Assets/DesktopEnv.svg';

export default function Overview() {
	return (
		<div className="container">
			<div className="main-heading">
				<h2 className="overview-heading">DeepinPro</h2>
			</div>
			<div className="sub-main-heading">
				<h3 className="overview-heading">Better Performance</h3>
				<h3 className="overview-heading">More Power</h3>
				<h3 className="overview-heading">More Pro</h3>
			</div>
			<img src={VS} alt="logo" id="macs" className="overview-img" />

			<div className="sub-container">
				<div className="col">
					<div className="overview-specs">
						<h3>
							New 10th Generation Intel Processors up to{' '}
							<strong>14 core</strong> processing power sustains higher
							performance for longer period of time. So whether your layering
							dozens of tracks and effects, rendering 3D models, or compiling
							and testing code, you'll be doing it in no time flat
						</h3>
					</div>
					<div className="overview-specs">
						<h3>
							The new DeepinPro features a stunning new display. Liquid crystal
							display in a Deepin notebook. It produces{' '}
							<strong>500 nits </strong>
							of brightness for a spectacular highlights and bright whites,
							while delivering deep blacks thanks to the prcesie photo alignment
							of liquid crystal moleculres. The <strong>P3</strong> wide color
							gamut enables brilliant, true-to-life images and video. So no
							matter where you are, you'll see your work in the best possible
							light
						</h3>
					</div>
				</div>
				<div className="col">
					<div className="overview-specs">
						<h3>Touch screen that works beautiful with the OS</h3>
					</div>
					<div className="overview-specs">
						<h3>Graphical Performance</h3>
					</div>
					<div className="overview-specs">
						<h3>
							DeepinPor and <strong>Nvidia</strong> provide you one of the best
							graphical performance ever. Its base model provides up to 2 times
							faster than last generation for seemless playback and faster
							rendering
						</h3>
						<h3>
							For working on graphics-intensive projects like 3D rending or
							high-end gaminng development, you can supercharge your DeepinPro
							with the optional Nvidia 3080. With its 10GB of{' '}
							<strong>High Bandwidth </strong>
							Memory, this powerhouse GPU brings a new level of desktop-class
							graphics power to DeepinPro{' '}
						</h3>
					</div>
				</div>
			</div>
			<div className="sub-container">
				<div className="sub-heading">
					<h1>Perfomance</h1>
				</div>
				<div className="overview-description">
					<h1>Great Power mean Greater Potential</h1>
					<h4>
						The Deepin Pro elevates the notebook to a whole new level of
						performance and portability. Where your ideas take you, you'll
						acheive it with performance that won't compromise thanks to its
						powerful Processor, fast-storage and more
					</h4>
					<h4>
						Code, Play, Design and more. Whereever your ideas take you, Deepin
						Pro will help you
					</h4>
				</div>
				<div className="sub-information">
					<div className="col">
						<h4>Up to</h4>
						<h1>128gb</h1>
						<h4>Memory</h4>
					</div>
					<div className="col">
						<h4>Up to</h4>
						<h1>14</h1>
						<h4>Core</h4>
					</div>
					<div className="col">
						<h4>Up to</h4>
						<h1>2.28G/s</h1>
						<h4>SSD read speeds</h4>
					</div>
					<div className="col">
						<h4>Up to</h4>
						<h1>10 hrs</h1>
						<h4>Battery Life</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
