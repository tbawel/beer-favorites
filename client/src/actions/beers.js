import axios from 'axios';

let nextBeerId = 0;

export const FETCH_BEERS = 'FETCH_BEERS';
export const FETCH_BEERS_PENDING = 'FETCH_BEERS_PENDING';
export const FETCH_BEERS_FULFILLED = 'FETCH_BEERS_FULFILLED';
export const FETCH_BEERS_REJECTED = 'FETCH_BEERS_REJECTED';
export const ADD_BEER = 'ADD_BEER';
export const DELETE_BEER = 'DELETE_BEER';
export const UPDATE_BEER = 'UPDATE_BEER';

export function fetchBeers() {
  return {
    type: FETCH_BEERS,
		payload: axios.get('/api/beers')
  }
}

export function addBeer(beer) {
  return {
    type: ADD_BEER,
    payload: axios.post('/api/beers', beer)
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