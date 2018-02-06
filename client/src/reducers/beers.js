import {
  ADD_BEER,
  DELETE_BEER,
  UPDATE_BEER,
  FETCH_BEERS_PENDING,
  FETCH_BEERS_FULFILLED,
  FETCH_BEERS_REJECTED
} from '../actions/beers'

const initialState = {
  beers: [],
  fetching: false,
  fetched: false,
  error: null
}

export default function beers(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEERS_PENDING:
      return { ...state, fetching: true }
    case FETCH_BEERS_FULFILLED:
      return { ...state, fetching: false, fetched: true, beers: action.payload.data }
    case FETCH_BEERS_REJECTED:
      return { ...state, fetching: false, error: action.payload }
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
    case UPDATE_BEER:
      return state.map( beer => {
        return beer.id === action.id ? action.beer : beer;
      })


    default:
      return state
  }
}