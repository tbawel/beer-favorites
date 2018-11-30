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
						<Route exact path="/" render={ ({ match, history }) => <BeerList match={ match } history={ history } beers={ this.props.beers } fetchBeers={ this.props.actions.fetchBeers } addBeer={ this.props.actions.addBeer } deleteBeer={ this.props.actions.deleteBeer }  />} />
						<Route exact path="/beers/:id" render={ ({ match, history }) => <BeerDetails match={ match } history={ history } beers={ this.props.beers } />} />
						<Route exact path="/beers/update/:id" render={ ({ match, history }) => <BeerUpdate match={ match } history={ history } beers={ this.props.beers } updateBeer={ this.props.actions.updateBeer } />} />
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
  beers: state.beers.beers
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(beerActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
