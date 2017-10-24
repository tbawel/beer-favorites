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
		this.state = {
			accessToken: ""
		}
		this.setAccessToken = this.setAccessToken.bind(this);
	}

	setAccessToken(newAccessToken) {
		this.setState({
			accessToken: newAccessToken
		})
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={BeerList} />
						<Route exact path="/beers/:id" component={BeerDetails} />
						<Route exact path="/beers/update/:id" render={ ({ match, history }) => <BeerUpdate match={ match } history={ history } accessToken={ this.state.accessToken }/>} />
					</Switch>
				</BrowserRouter>
				<Login onLogin={ this.setAccessToken }/>
			</div>
    );
	}
}

export default App;
