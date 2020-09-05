import React, { createContext, useReducer, useEffect } from "react";
import { CartReducer, CartTotalReducer } from "./CartReducer";
import { useState } from "react";

export const CartContext = createContext();

export default function CartStoreContext(props) {
  const [Cart, dispatch] = useReducer(CartReducer, []);
  const [cartTotal, dispatch2] = useReducer(CartTotalReducer, []);

  // const [Cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cartTotal, Cart);
  }, [Cart, cartTotal]);

  
  

  return (
    <CartContext.Provider value={{ Cart, dispatch, cartTotal, dispatch2 }}>
      {props.children}
    </CartContext.Provider>
  );
}
