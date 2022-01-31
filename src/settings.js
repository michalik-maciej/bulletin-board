export const api = {
  url: `//${window.location.hostname}${
    window.location.hostname === 'localhost' ? ':8000' : ''
  }`,
  endpoints: {
    posts: `api/posts`,
    addPost: `api/posts/add`,
    editPost: `api/posts/edit`,
    users: `api/users`,
    login: `auth/login/success`,
    logout: `auth/logout`,
    authGoogle: `auth/google`,
  },
}

export const constants = {
  imagePlaceholder: 'https://via.placeholder.com/200?text=Image+placeholder',
}
