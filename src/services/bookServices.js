import baseUrl from "./api" 

const getOne=(id) => {
    return fetch(`${baseUrl}/books/${id}`).then(res=> res.json())
      
      .catch((error) =>console.log(error));
  }; 
// const updateBook=(bookData,token, id)=>{
//   return fetch(`${baseUrl}/books/edit${id}`, {method: 'PUT', headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`,
//   }, body: bookData,
//   }).catch(err=>{console.log(err)})
// }

const bookServices = {
    getOne,
    
    
}
export default bookServices