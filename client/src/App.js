import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Nav from "./Component/Navbar/Nav";
import Login from "./Component/User/Login";
import NewUser from "./Component/User/NewUser";
import LaptopStore from "./Store/LaptopStore";
import Laptop from "./Component/Laptop/Laptop";
import main from "./Component/Main/main";
import Cart from "./Cart/Cart";
import CartStoreContext from "./Store/CartStore";

function App() {
  return (
    <LaptopStore>
      <CartStoreContext>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/">
                <main />
              </Route>
              <Route path="/laptop">
                <Laptop />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <NewUser />
              </Route>
              <Route path="/Cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </Router>
      </CartStoreContext>
    </LaptopStore>
  );
}

export default App;
