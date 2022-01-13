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
