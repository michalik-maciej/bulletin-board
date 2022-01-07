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
    {
      /* required fields */
      id: shortid(),
      email: 'a@b.c',
      password: '0000',
      /* optional fields */
      phonenumber: '123-456-789',
    },
  ],
  logged: {
    asAdmin: false,
    asUser: true,
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
        title: 'Lorem ipsum dolor sit amet',
        content:
          'Praesent et neque at nibh tincidunt cursus. Morbi eros mauris, bibendum et ex non, varius interdum elit. Donec pellentesque elementum nisl, ac scelerisque nisi dignissim id. Pellentesque sit amet cursus ligula. Morbi elementum laoreet consequat. Nullam tempor pellentesque venenatis.',
        publicationDate: '01-02-2022',
        lastUpdate: '01-02-2022',
        author: 'halniak24@gmail.com',
        status: 'draft', // published, closed
        /* optional fields */
        price: 100,
      },
      {
        id: shortid(),
        title: 'Volvo V50 2006',
        content:
          'Maecenas quis dui arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        publicationDate: '11-10-2021',
        lastUpdate: '31-12-2021',
        author: 'a@b.c',
        status: 'published', // published, closed
        /* optional fields */
        price: 2000,
        location: 'Podgórze, Krakow, Poland',
      },
    ],
  },
}

export default initialState
