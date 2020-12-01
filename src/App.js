import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace/NewPlace';
import Users from './user/pages/Users/Users';

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
