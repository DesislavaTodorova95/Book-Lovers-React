import baseUrl from './api'

const getAll = () => {
  return fetch(`${baseUrl}/books`)
    .then((res) => res.json())

    .catch((error) => console.log(error));
};
const getOne = (bookId) => {
  return fetch(`${baseUrl}/books/${bookId}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
const bookServices = {
  getAll,
  getOne,
};
export default bookServices;
