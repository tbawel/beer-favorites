export const ADD_BEER = 'ADD_BEER';

export function addBeer(beer) {
  return {
    type: ADD_BEER,
    beer: beer
  }
}