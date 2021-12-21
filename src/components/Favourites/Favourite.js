import { useState, useEffect } from "react"
import { useContext } from "react/cjs/react.development";
import baseUrl from "../../services/api";
import bookServices from "../../services/bookServices";
import Book from "../Book/Book"
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";

const Favourites = ({history})=>{
   const [myBooks, setMyBooks] = useState([]);
   const {userInfo} = useContext(UserContext);
   const { setValue} = useContext(ErrorsContext);
   const [user, setUser]=useState('');
   useEffect( ()=>{
     if(userInfo){

     const userId= JSON.parse(userInfo).userId;
    fetch(`${baseUrl}/books/favourites/${userId}`, { headers: {
      
      "Authorization": `Bearer ${JSON.parse(userInfo).token}`,
    }}).then(data=>data.json()).then(result=>setMyBooks(result)).catch((error)=>{
setValue(error.message);
    })

  }else {history.push('/')}
      }, [history, setValue, userInfo])
  
  //  if(userInfo && user){
  // const myFav = [];
// user.favouriteBooks.forEach(b => {
//  bookServices.getOne(b).than(data=>myFav.push(data)).catch(error=>{
//     setValue(error.message);
//   });
  
// });
//  console.log(myFav);
//  user.favouriteBooks ?  user.favouriteBooks.forEach(b=>console.log(b))
// user.favouriteBooks.forEach(b=> console.log(b))
   
   //when auth is done i must set this part 
  const defaultBook = {_id: '2331323', title: 'Harry Potter second', author:" J.K Rowling", description: ' This is a wonderfull book for litttle ones and grown ones', imageUrl:'https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg', }
        return (
         <div id='favourites'>
             <h1 className='favourites-head'>My Favourite Books</h1>
            <Book key={defaultBook._id} {...defaultBook}/>
            <style jsx>{`.favourites-head {
            text-transform: capitalize;
            width: 100%;
            border-bottom: 4px ridge #551a8b;
            background-color: #fbedd2;
            margin-top: 0;
            padding-left: 30px;
            color: #551A8B;
            font-family: "Brush Script MT", cursive;
          }`}</style>
        </div>
           )
    

// } else {
//   return(
//   <p>No favourites yet</p>)
// }
}
export default Favourites;