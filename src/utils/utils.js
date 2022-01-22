export const formatDate = {
  DDMMYYYY: (dateObj) =>
    dateObj.toISOString().slice(0, 10).split('-').reverse().join('-'),
}
