const url = `http://localhost:5000/books`;

const getAll = () => {
  return fetch(url)
    .then((res) => res.json())

    .catch((error) => console.log(error));
};
const getOne = (bookId) => {
  return fetch(`${url}/${bookId}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
const bookServices = {
  getAll,
  getOne,
};
export default bookServices;
