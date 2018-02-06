import axios from 'axios';

let nextBeerId = 0;

export const FETCH_BEERS_PENDING = 'FETCH_BEERS_PENDING';
export const FETCH_BEERS_FULFILLED = 'FETCH_BEERS_FULFILLED';
export const FETCH_BEERS_REJECTED = 'FETCH_BEERS_REJECTED';
export const ADD_BEER = 'ADD_BEER';
export const DELETE_BEER = 'DELETE_BEER';
export const UPDATE_BEER = 'UPDATE_BEER';

export function fetchBeers() {
  return function(dispatch) {
    dispatch( {type: FETCH_BEERS_PENDING} );
		axios.get('/api/beers')
			.then( (response) => {
				dispatch( {type: FETCH_BEERS_FULFILLED, payload:response.data} );
			})
			.catch( (err) => {
				dispatch( {type:FETCH_BEERS_REJECTED, payload:err} );
      })
    }
}

export function addBeer(beer) {
  return {
    type: ADD_BEER,
    beer: Object.assign({}, beer, {id: ++nextBeerId})
  }
}

export function deleteBeer(id) {
  return {
    type: DELETE_BEER,
    id
  }
}

export function updateBeer(id, beer) {
  return {
    type: UPDATE_BEER,
    id,
    beer
  }
}