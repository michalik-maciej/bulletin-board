import Axios from 'axios'
import { api } from '../settings'

/* selectors */

/* action name creator */
const reducerName = 'users'
const createActionName = (name) => `app/${reducerName}/${name}`

/* action types */
const UPDATE = createActionName('UPDATE')

/* action creators */
export const updateUsers = (payload) => ({ payload, type: UPDATE })

/* thunk creators */
export const fetchAllUsers = () => (dispatch) => {
  Axios.get(`${api.url}/${api.endpoints.users}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  })
    .then((res) => {
      dispatch(updateUsers(res.data))
    })
    .catch((err) => {
      console.log('error fetchUsers: ', err)
    })
}

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE: {
      return [...action.payload]
    }
    default:
      return statePart
  }
}
