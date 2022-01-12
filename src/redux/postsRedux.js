import Axios from 'axios'
import { api } from '../settings'

/* selectors */
export const getAll = ({ posts }) => posts.data
export const getPostById = ({ posts, users }, postId) => {
  const post = posts.data.find((innerPost) => innerPost.id === postId)
  if (post) {
    post.author = users.find((user) => user.id === post.author.id)
    // post = JSON.parse(JSON.stringify(post))
  }
  return post
}
export const getLoadingState = ({ posts }) => posts.loading

/* action name creator */
const reducerName = 'posts'
const createActionName = (name) => `app/${reducerName}/${name}`

/* action types */
const FETCH_START = createActionName('FETCH_START')
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS')
const FETCH_ERROR = createActionName('FETCH_ERROR')
const CHANGE_STATUS = createActionName('CHANGE_STATUS')
const ADD_POST = createActionName('ADD_POST')
const UPDATE_POST = createActionName('UPDATE_POST')
const REMOVE_POST = createActionName('REMOVE_POST')

/* action creators */
const fetchStarted = (payload) => ({ payload, type: FETCH_START })
const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS })
const fetchError = (payload) => ({ payload, type: FETCH_ERROR })
const changeStatus = (payload) => ({ payload, type: CHANGE_STATUS })
export const addPost = (payload) => ({ payload, type: ADD_POST })
export const updatePost = (payload) => ({ payload, type: UPDATE_POST })
export const removePost = (payload) => ({ payload, type: REMOVE_POST })

/* thunk creators */
export const fetchFromAPI = () => (dispatch) => {
  dispatch(fetchStarted())

  Axios.get(`${api.url}/api/${api.posts}`)
    .then((res) => {
      dispatch(fetchSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchError(err.message || true))
    })
}

export const requestChangeStatus = (payload) => (dispatch) => {
  Axios.put(`${api.url}/api/${api.posts}/${payload.id}`, payload)
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
    case ADD_POST: {
      return { ...statePart, data: [...statePart.data, action.payload] }
    }
    case UPDATE_POST: {
      const index = statePart.data.findIndex(
        (item) => item.id === action.payload.id
      )
      const newData = [...statePart.data]
      newData[index] = action.payload

      return { ...statePart, data: newData }
    }
    case REMOVE_POST: {
      return {
        ...statePart,
        data: [...statePart.data.filter((post) => post.id !== action.payload)],
      }
    }
    default:
      return statePart
  }
}
