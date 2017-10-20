import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BeerList from './BeerList';

class Navigation extends Component {
	
  render() {

    return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={BeerList} />
				</Switch>
			</BrowserRouter>
    );
  }
}

export default Navigation;
