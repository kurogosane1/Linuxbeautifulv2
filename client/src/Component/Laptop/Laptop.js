import React from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";
import LaptopOption1 from "./LaptopOption1";
import LaptopBuynow from "./LaptopBuynow";
import Overview from "./Overview";
import LaptopDeep from "./LaptopDeep";
import LaptopOption2 from "./LaptopOption2";

export default function Laptop() {
  let { path, url } = useRouteMatch();
  
  return (
    <div className="laptopsection">
      <div className="sub-nav">
        <section className="sub-nav-left">
          <h2>DeepinPro</h2>
        </section>
        <div className="sub-nav-right">
          <ul className="sub-nav-ul">
            <li className="sub-nav-list">
              <NavLink className="tags" to={`${url}`}>
                Overview
              </NavLink>
            </li>
            <li className="sub-nav-list">
              <NavLink className="tags" to={`${url}/DeepOS`}>
                DeepOS
              </NavLink>
            </li>
            <li className="sub-nav-list">
              <NavLink className="tags" to={`${url}/buynow`}>
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
        <Route path={`${path}/DeepOS`}>
          <LaptopDeep />
        </Route>
        <Route exact path={`${path}/buynow`}>
          <LaptopBuynow />
        </Route>
        <Route path={`${path}/buynow/option1`}>
          <LaptopOption1 />
        </Route>
        <Route path={`${path}/buynow/option2`} component={LaptopOption2} />
      </div>
    </div>
  );
}
