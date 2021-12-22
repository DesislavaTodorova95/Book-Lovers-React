// import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react/cjs/react.development";
import Comment from "../Comment/Comment";
import bookServices from "../../services/bookServices";
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import baseUrl from "../../services/api";

const BookDetails = ({ match, history }) => {
  const { setValue } = useContext(ErrorsContext);
  const [book, setBook] = useState("");
  const { userInfo, setUserInfo } = useContext(UserContext);
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
    <div className="book">
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
          <button onClick={userInfo ? onLikeBtnClickHandler : ()=>{history.push('/auth/login')}} disabled={userInfo && hasLikedorIsCreator(JSON.parse(userInfo).userId, book) ? true: false} className="btn likeBtn">
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
            <button className="btn">Edit</button>
          </Link>
        ) : (
          ""
        )}
        {userInfo && JSON.parse(userInfo).userId === book.addedBy ? (
          <Link to={`/books/delete/${match.params.bookId}`}>
            <button className="btn">Delete</button>
          </Link>
        ) : (
          ""
        )}

        <div className="SectionComments">
          <h1 id="commentsHeader">Comments</h1>
          <Link to="/">
            <button className="btn">Add Comment</button>
          </Link>
          <Comment />
        </div>
      </div>
      <style jsx>{`
        .book {
          
          width: 90%;
          height: auto;
          display: flex;
          float: left;
          border: 4px solid #551a8b;
          margin: 110px 10px 10px 10px;
          border-radius: 12px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          background-color: #fbedd2;
        }
        .book-image {
          width: 200px;
          height: 260px;
          padding: 4px;
          display: block;
          border-right: 3px solid #551a8b;
        }

        .imgSection {
          float: right;
        }
        .author {
          text-align: left;
          padding-left: 25px;
        }
        .book-info {
          float: left;
          margin-left: 20px;
        }
        .btn {
          width: 90px;
          height: 40px;

          margin: 10px 5px;
          border: 2px solid #551a8b;
          border-radius: 3px;
          background-color: #551a8b;
          color: #fbedd2;
        }
        .btn:hover {
          background-color: #fbedd2;
          color: #551a8b;
        }

        .book-title {
          font-family: "Trattatello", fantasy;
          border-bottom: 1px solid #551a8b;
        }
        .btns-div {
          display: flex;
        }
        .material-icons {
          color: red;
        }
        .description {
          text-decoration: none;
          font-family: "Helvetica", sans-serif;
          font-size: 16px;
        }
        .likes-counter {
          text-align: center;
        }
        .SectionComments {
          float: right;
          
          border-top: 3px solid #551a8b;
        }
        .comment{
          display: flex;
          border: 4px solid #551a8b; 
          border-radius: 12px;
          margin:10px;
          padding: 3px;
        }
        .comment h3{
          float: left;
          padding-top: 0; 
          margin: 0;

        }
         .addedAt{
          float: right;
     margin:left: 2px;
     padding-left: 4px; 
     
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};
export default BookDetails;
