import Axios from 'axios'
import { api } from '../settings'

/* selectors */
export const getAll = ({ tables }) => tables.data
export const getLoadingState = ({ tables }) => tables.loading

/* action name creator */
const reducerName = 'tables'
const createActionName = (name) => `app/${reducerName}/${name}`

/* action types */
const FETCH_START = createActionName('FETCH_START')
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS')
const FETCH_ERROR = createActionName('FETCH_ERROR')
const CHANGE_STATUS = createActionName('CHANGE_STATUS')

/* action creators */
const fetchStarted = (payload) => ({ payload, type: FETCH_START })
const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS })
const fetchError = (payload) => ({ payload, type: FETCH_ERROR })
const changeStatus = (payload) => ({ payload, type: CHANGE_STATUS })

/* thunk creators */
export const fetchFromAPI = () => (dispatch) => {
  dispatch(fetchStarted())

  Axios.get(`${api.url}/api/${api.tables}`)
    .then((res) => {
      dispatch(fetchSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchError(err.message || true))
    })
}

export const requestChangeStatus = (payload) => (dispatch) => {
  Axios.put(`${api.url}/api/${api.tables}/${payload.id}`, payload)
    .then((res) => {
      dispatch(changeStatus(res.data))
    })
    .catch((err) => {
      dispatch(fetchError(err.message || true))
    })
}

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      }
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      }
    }
    case CHANGE_STATUS: {
      return {
        ...statePart,
        data: statePart.data.map((table) => {
          if (table.id !== action.payload.id) {
            return table
          }
          return action.payload
        }),
      }
    }
    default:
      return statePart
  }
}
