import Axios from 'axios'
import { api } from '../settings'

/* selectors */
export const getUserId = ({ user, users }) =>
  user.logged ? users.find((item) => item.id === user.id).id : ''

export const getUserRole = ({ user, users }) =>
  user.logged ? users.find((item) => item.id === user.id).role : 'anonymous'

export const getIsAdmin = ({ user, users }) =>
  !!(getUserRole({ user, users }) === 'admin')

/* action name creator */
const reducerName = 'user'
const createActionName = (name) => `app/${reducerName}/${name}`

/* action types */
const CHANGE = createActionName('CHANGE')

/* action creators */
export const changeUser = (payload) => ({ payload, type: CHANGE })

/* thunk creators */
export const fetchUser = () => () => {
  Axios.get(`${api.url}/${api.endpoints.login}`, {
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log('error fetchUser: ', err)
    })
}

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE: {
      return {
        ...statePart,
        logged: action.payload,
      }
    }
    default:
      return statePart
  }
}
