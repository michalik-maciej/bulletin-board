import { applyMiddleware, combineReducers, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import tablesReducer from './tablesRedux'

// define initial state and shallow-merge initial data
const initialState = {
  tables: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
}

// define reducers
const reducers = {
  tables: tablesReducer,
}

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] === 'undefined') {
    reducers[item] = (statePart = null) => statePart
  }
})

const combinedReducers = combineReducers(reducers)

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export { store }
