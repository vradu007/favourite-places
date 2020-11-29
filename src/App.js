import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Redirect,
	Switch,
} from 'react-router-dom';
import NewPlace from './pages/NewPlace/NewPlace';
import Users from './pages/Users/Users';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Users} />
				<Route path="/places/new" component={NewPlace} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
};

export default App;
