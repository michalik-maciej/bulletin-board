import shortid from 'shortid'

const initialState = {
  users: [
    {
      /* required fields */
      id: shortid(),
      email: 'halniak24@gmail.com',
      password: '123',
      /* optional fields */
      phonenumber: '123-456-789',
    },
  ],
  logged: {
    asAdmin: false,
    asUser: false,
  },
  posts: {
    loading: {
      active: false,
      error: false,
    },
    data: [
      {
        /* required fields */
        id: shortid(),
        title: 'minimum 10 characters',
        content: 'minimum 20 characters',
        publicationDate: '01-02-2022',
        lastUpdate: '01-02-2022',
        author: 'halniak24@gmail.com',
        status: 'draft', // published, closed
        /* optional fields */
        image: 'src',
        price: 100,
        location: 'pl',
      },
    ],
  },
}

export default initialState
