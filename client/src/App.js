import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BeerList from './BeerList';
import BeerDetails from './BeerDetails';
import BeerUpdate from './BeerUpdate';

class App extends Component {

  render() {
    return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={BeerList} />
					<Route exact path='/beers/:id' component={BeerDetails} />
					<Route exact path='/beers/update/:id' component={BeerUpdate} />
				</Switch>
			</BrowserRouter>
    );
  }
}

export default App;
