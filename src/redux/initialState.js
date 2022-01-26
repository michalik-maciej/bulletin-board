const initialState = {
  users: [],
  user: {
    logged: false,
  },
  posts: {
    loading: {
      active: false,
      error: false,
    },
    filter: false,
    currentPost: null,
    data: [],
  },
}

export default initialState
