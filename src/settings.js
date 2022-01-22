export const api = {
  url: `//${window.location.hostname}${
    window.location.hostname === 'localhost' ? ':8000' : ''
  }`,
  endpoints: {
    posts: `api/posts`,
    login: `auth/login/success`,
    authGoogle: `auth/google`,
  },
}

export const constants = {
  imagePlaceholder: 'https://via.placeholder.com/200?text=Image+placeholder',
}
