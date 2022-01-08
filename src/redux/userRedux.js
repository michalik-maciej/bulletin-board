/* selectors */
export const getUser = ({ user }) => user

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
        user: { ...statePart.user, logged: action.payload },
      }
    }
    default:
      return statePart
  }
}
