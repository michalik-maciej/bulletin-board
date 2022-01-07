export const api = {
  url: `//${window.location.hostname}${
    window.location.hostname === 'localhost' ? ':3000' : ''
  }`,
}

export const constants = {
  imagePlaceholder: 'https://via.placeholder.com/200?text=Image+placeholder',
}
