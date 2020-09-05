import React from "react";
import VS from "../../Assets/DesktopEnv.svg";

export default function Overview() {
  return (
    <div className="container">
      <div className="main-heading">
        <h3 className="overview-heading">DeepinPro</h3>
        <h3 className="overview-heading">More Power</h3>
        <h3 className="overview-heading">More Performance</h3>
        <h3 className="overview-heading">More Pro</h3>
      </div>
      <img src={VS} alt="logo" id="macs" className="overview-img" />

      <div className="sub-container">
        <div className="col">
          <div className="overview-specs">
            New 10th Generation Intel Processors up to 14 core processors
          </div>
          <div className="overview-specs">
            Stunning Liquid Clear Display with up to 95% DCI-P Accuracy
          </div>
        </div>
        <div className="col">
          <div className="overview-specs">
            Touch screen that works beautiful with the OS
          </div>
          <div className="overview-specs">Graphical performance</div>
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
