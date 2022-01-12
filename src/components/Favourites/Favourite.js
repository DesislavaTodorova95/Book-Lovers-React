import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import baseUrl from "../../services/api";
import './Favourites.css'
import Book from "../Book/Book";
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";

const Favourites = ({ history }) => {
  const [myBooks, setMyBooks] = useState([]);
  const { userInfo } = useContext(UserContext);
  const { setValue } = useContext(ErrorsContext);
 
  useEffect(() => {
    if (userInfo) {
      const userId = JSON.parse(userInfo).userId;
      fetch(`${baseUrl}/books/favourites/${userId}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(userInfo).token}`,
        },
      })
        .then((data) => data.json())
        .then((result) => setMyBooks(result))
        .catch((error) => {
          setValue(error.message);
        });
    } else {
      history.push("/");
    }
  }, [history, setValue, userInfo]);

  //when auth is done i must set this part
 
  return (
    <div id="favourites">
      <h1 className="headFavourites">{myBooks.length< 1 ? 'You haven\'t liked any books yet!':'My Favourite Books'}</h1>
       
       {myBooks
          .sort((a, b) => {
            return a.title.localeCompare(b.title);
          })
          .map((book) => <Book key={book._id} {...book} />)
      }
     
      
            
    </div>
  );

  // } else {
  //   return(
  //   <p>No favourites yet</p>)
  // }
};
export default Favourites;
