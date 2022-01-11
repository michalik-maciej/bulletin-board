/* selectors */
export const isLogged = ({ user }) => user.logged
export const getUserData = ({ user, users }) =>
  user.logged ? users.find((item) => item.id === user.id) : null

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
