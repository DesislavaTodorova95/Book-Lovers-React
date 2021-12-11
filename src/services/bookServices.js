import baseUrl from "./api" 

const getOne=(id) => {
    return fetch(`${baseUrl}/books/${id}`).then(res=> res.json())
      
      .catch((error) =>console.log(error));
  }; 

const bookServices = {
    getOne
}
export default bookServices