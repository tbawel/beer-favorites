import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import BeerList from './BeerList';
import BeerDetails from './BeerDetails';
import BeerUpdate from './BeerUpdate';
import Login from './Login';
import * as beerActions from './actions/beers';
import { bindActionCreators } from 'redux';

// App.js only delegates the different routes
class App extends Component {
	constructor(props) {
		super(props);
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
						<Route exact path="/" render={ ({ match, history, beers, action }) => <BeerList match={ match } history={ history } beers={ this.props.beers } action={ this.props.actions.addBeer }/>} />
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

const mapStateToProps = state => ({
  beers: state.beers
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(beerActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
