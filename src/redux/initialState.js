import shortid from 'shortid'

const userOneId = shortid()
const userTwoId = shortid()
const initialState = {
  users: [
    {
      /* required fields */
      id: userOneId,
      email: 'halniak24@gmail.com',
      password: '123',
      role: 'user',
      /* optional fields */
      phone: '123-456-789',
    },
    {
      id: userTwoId,
      email: 'a@b.c',
      password: '0000',
      role: 'admin',
    },
  ],
  user: {
    logged: false,
    id: null,
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
