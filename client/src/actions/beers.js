let nextBeerId = 0;

export const ADD_BEER = 'ADD_BEER';
export const DELETE_BEER = 'DELETE_BEER';
export const UPDATE_BEER = 'UPDATE_BEER';

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