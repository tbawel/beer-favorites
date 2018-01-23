import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BeerList from './BeerList';
import BeerDetails from './BeerDetails';
import BeerUpdate from './BeerUpdate';
import Login from './Login';

// App.js only delegates the different routes
class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						{/* 
							In order to pass along properties to the component for a route needs to be attached 
							via the an anonymous render function.
						*/}
						<Route exact path="/" render={ ({ match, history }) => <BeerList match={ match } history={ history } />} />
						<Route exact path="/beers/:id" render={ ({ match, history }) => <BeerDetails match={ match } history={ history } />} />
						<Route exact path="/beers/update/:id" render={ ({ match, history }) => <BeerUpdate match={ match } history={ history } />} />
					</Switch>
				</BrowserRouter>
				{/* 
					Pass down setAccessToken method to the child component "Login" via "onLogin" property
				*/}
				{/* <Login onLogin={ this.setAccessToken }/> */}
			</div>
    );
	}
}

export default App;
