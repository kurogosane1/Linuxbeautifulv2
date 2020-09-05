import React, { useContext, useEffect } from "react";
import VS from "../Assets/DesktopEnv.svg";
import { CartContext } from "../Store/CartStore";

export default function Cart() {
  const { Cart, dispatch1 } = useContext(CartContext);
  useEffect(() => {
    console.log(Cart);
  }, [Cart]);
  return (
    <div className="options-given">
      <div className="options-heading">
        <h3>Your Cart</h3>
      </div>
      <div className="option1">
        <ul>
          {Cart.map((cart) => {
            return (
              <div key={cart.id}>
                <img src={VS} alt="something" />
                <li>{cart.Processor}</li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="option2">
        <div className="option-img"></div>
      </div>
    </div>
  );
}
