import React, { Component } from 'react';
import rootRoutes from './components/admin/rootRoutes';
import { Provider } from 'react-redux';
import login from './components/login/';
import store from './store';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import AdminPrivateRouter from './components/common/AdminPrivateRouter';
// import PrivateRoute from './components/auth/PrivateRoute';
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
			<div className="App">
				<BrowserRouter>
					{/* <NotificationContainer /> */}
					<Switch>
						<AdminPrivateRouter  path='/admin' component={rootRoutes} />
					</Switch>
					<Route path='/' component={login} />
				</BrowserRouter>
			</div>
	        </Provider>		
		);
	}
}

