import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Store/CartStore";

export default function Nav() {
  const { Cart } = useContext(CartContext);
  console.log(Cart);
  return (
    <nav className="Nav-bar">
      <NavLink className="tags" to="/">
        Main
      </NavLink>
      <NavLink className="tags" to="/laptop">
        Laptop
      </NavLink>
      <NavLink className="tags" to="/Tablet">
        iTablet
      </NavLink>
      <NavLink className="tags" to="/AllinOne">
        iDeep
      </NavLink>
      <NavLink className="tags" to="/login">
        Sign In
      </NavLink>
      {Cart.length > 0 ? (
        <NavLink className="tags" to="/Cart">
          {`Cart ${Cart.length}`}
        </NavLink>
      ) : (
        ""
      )}
    </nav>
  );
}
