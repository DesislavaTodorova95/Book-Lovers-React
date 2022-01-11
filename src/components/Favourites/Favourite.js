import { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import baseUrl from "../../services/api";

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
      <h1 className="head">{myBooks.length< 1 ? 'You haven\'t liked any books yet!':'My Favourite Books'}</h1>
       
       {myBooks
          .sort((a, b) => {
            return a.title.localeCompare(b.title);
          })
          .map((book) => <Book key={book._id} {...book} />)
      }
      <style jsx>{`
      .head{
              
             
        margin-top:100px;
        
        text-transform: capitalize;
        width: 100%;
        position: absolute;
        border-bottom: 4px ridge #3D1C0B;
        background-color: #FFE4C4;
        margin-top: 0;
        padding-left: 30px;
        color: #3D1C0B;
        font-family: "Brush Script MT", cursive;
          }
      #favourites{
        display: block;
            margin-top: 100px;
              
                  }
     .LackOfBookS{
          display: block;
            margin-top: 100px;
          text-transform: capitalize;
          font-family: "Brush Script MT", cursive;
          text-align: center;
          font-size: 30px;
          font-style: bold;
          color: #FFE4C4;
        }     
              
             `}</style>
    </div>
  );

  // } else {
  //   return(
  //   <p>No favourites yet</p>)
  // }
};
export default Favourites;
