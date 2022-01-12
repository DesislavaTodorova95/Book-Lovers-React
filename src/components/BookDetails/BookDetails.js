// import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react/cjs/react.development";
import Comment from "../Comment/Comment";
import bookServices from "../../services/bookServices";
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import baseUrl from "../../services/api";
import './BookDetails.css'
const BookDetails = ({ match, history }) => {
  const { setValue } = useContext(ErrorsContext);
  const [book, setBook] = useState("");
  const { userInfo,  } = useContext(UserContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    bookServices.getOne(match.params.bookId).then((res) => setBook(res));
  }, [match.params.bookId]);

  if (error) {
    setValue(error);
    setError(null);
  }
  const onLikeBtnClickHandler = async (e) => {
    e.preventDefault();
    try {
     
      const bookId = match.params.bookId;
      const userId = JSON.parse(userInfo).userId;
    
      
      const LikedBook = await axios
        .put(`${baseUrl}/books/like/${bookId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(userInfo).token}`,
          },
          body: { book, userId },
        })
        .catch((error) => {
          console.log("reqerr", error);
          setValue(error.message);
        });

      if (LikedBook.data) {
        setBook(LikedBook.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
const  hasLikedorIsCreator= (userId, book)=>{
  
 if (userInfo){
  if(userId === book.addedBy){return true}
   const usersLiked = book.likes;
if(usersLiked){
   return usersLiked.find(x=> x=== userId)? true: false;
  }else { return true}
 }else {history.push('/')}
  
}
  return (
    <div className="bookDetailsDiv">
      <div className="imgSection">
        <img
          className="book-image"
          src={book.imageUrl}
          alt="Harry Potter 1st book Cover"
        />
        <p className="author">
          {" "}
          <small>By {book.author}</small>
        </p>
      </div>
      <div className="book-info">
        <h1 className="book-title">
          <strong>{book.title}</strong>
        </h1>
        <h6>{book.genre}</h6>
        <h3 className="description">{book.description}</h3>
        <div className="btns-div">
{userInfo && JSON.parse(userInfo).userId === book.addedBy ? '':
          <button onClick={userInfo ? onLikeBtnClickHandler : ()=>{history.push('/auth/login')}} disabled={userInfo && hasLikedorIsCreator(JSON.parse(userInfo).userId, book) ? true: false} className="btnCommon likeBtn">
            Like
          </button>}
          <p className="likes-counter">
            <i className="material-icons">
              <FaHeart />
            </i>
            {book.likes && book.likes.length > 0
              ? Number(book.likes.length)
              : 0}
          </p>
        </div>
        {userInfo && JSON.parse(userInfo).userId === book.addedBy ? (
          <Link to={`/books/edit/${match.params.bookId}`}>
            <button className="btnCommon">Edit</button>
          </Link>
        ) : (
          ""
        )}
        {userInfo && JSON.parse(userInfo).userId === book.addedBy ? (
          <Link to={`/books/delete/${match.params.bookId}`}>
            <button className="btnCommon">Delete</button>
          </Link>
        ) : (
          ""
        )}

        <div className="SectionComments">
          <h1 id="commentsHeader">Comments</h1>
          <Link to="/">
            <button className="btnCommon">Add Comment</button>
          </Link>
          <Comment />
        </div>
      </div>
      
     
      
    </div>
  );
};
export default BookDetails;
