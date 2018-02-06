import {
  ADD_BEER,
  DELETE_BEER
} from '../actions/beers'

const initialState = [
  {
		id: 0,
    name: 'Thunder Monkey',
		brewery: 'MAP Brewing',
		alcoholContent: 4.2

  }
]

export default function beers(state = initialState, action) {
  switch (action.type) {
    case ADD_BEER:
      return [
        ...state,
        {
          id: action.beer.id,
          name: action.beer.name,
          brewery: action.beer.brewery,
          alcoholContent: action.beer.alcoholContent
        }
      ]
    case DELETE_BEER:
      return state.filter(beer => {
        return beer.id !== action.id
      })
    default:
      return state
  }
}