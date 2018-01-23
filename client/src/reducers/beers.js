import {
  ADD_BEER
} from '../actions/beers'

function beers(state = [], action) {
  switch (action.type) {
    case ADD_BEER:
      return [
        ...state,
        {
          name: action.beer.name,
          brewery: action.beer.brewery,
          alcoholContent: action.beer.alcoholContent
        }
      ]
    default:
      return state
  }
}

export default beers;