import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from './Component/Navbar/Nav';
import Login from './Component/User/Login';
import NewUser from './Component/User/NewUser';
import LaptopStore from './Store/LaptopStore';
import Laptop from './Component/Laptop/Laptop';

import Cart from './Cart/Cart';
import CartStoreContext from './Store/CartStore';
import UserAccount from './Component/UserAccount/UserAccount';

import UserStoreContext from './Store/userStore';
import Tablet from './Component/Tablet/Tablet';
import AIO from './Component/AllinOne/iDeep';

function App() {
	return (
		<LaptopStore>
			<UserStoreContext>
				<CartStoreContext>
					<Router>
						<div className="App">
							<Nav />
							<div className="content">
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
									<Route path="/Tablet">
										<Tablet />
									</Route>
									<Route path="/AllinOne">
										<AIO />
									</Route>
									<Route path="/Cart">
										<Cart />
									</Route>
									<Route exact path="/user/:id">
										<UserAccount />
									</Route>
								</Switch>
							</div>
						</div>
					</Router>
				</CartStoreContext>
			</UserStoreContext>
		</LaptopStore>
	);
}

export default App;
