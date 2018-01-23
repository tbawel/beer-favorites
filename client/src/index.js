import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import beers from './reducers/beers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import {
  addBeer
} from './actions/beers';

let store = createStore(beers);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
	console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addBeer({name: 'Test', brewery: 'Test Brewery', alcoholContent:5}))
store.dispatch(addBeer({name: 'Test 2', brewery: 'Test Brewery 2', alcoholContent:2}))

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
