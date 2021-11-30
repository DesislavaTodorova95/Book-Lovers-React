import { useState, useEffect } from "react"
import Book from "../Book/Book"

const Favourites = ()=>{
   const [myBooks, setMyBooks] = useState([]);
   useEffect(()=>{

   }, [])

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
    

}
export default Favourites;