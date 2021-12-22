import axios from "axios";
import { useContext, useEffect, useState } from "react/cjs/react.development";
import baseUrl from "../../services/api";
import bookServices from "../../services/bookServices";
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";
import imageBooks from "./static/books.jpg"
const EditBook = ({ match, history }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [book, setBook] = useState("");
  const { setValue } = useContext(ErrorsContext);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (userInfo) {
      bookServices
        .getOne(match.params.bookId)
        .then((res) => setBook(res))
        .catch((error) => console.log(error));
    } else {
      history.push("/books/allBooks");
    }
  }, [match.params.bookId, userInfo, history]);

  const onEditSubmitHandler = async (e) => {
    e.preventDefault();
    if (!userInfo) {
      history.push("/");
    }
    try {
      const accessToken = JSON.parse(userInfo).token;
      setToken(accessToken);
      console.log(accessToken);
      const bookId = match.params.bookId;
      const updatedBook = {
        ...book,
        title: e.target.title.value,
        author: e.target.author.value,
        genre: e.target.genre.value,
        imageUrl: e.target.imageUrl.value,
        description: e.target.description.value,
      };

      const editedBook = await axios
        .put(`${baseUrl}/books/edit/${bookId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(userInfo).token}`,
          },
          body: updatedBook,
        })
        .catch((error) => {
          if (error.response.data.message) {
            setValue(error.response.data.message);
          } else {
            console.log(error.response.data);
            setValue(error.response.data);
          }
        });
      if (editedBook) {
        history.push(`/books/details/${bookId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (<>
    <form id="editBookForm" onSubmit={onEditSubmitHandler}>
      <div className="book-box">
      <h1 className="editHead">Edit Book</h1>
        <p>
          <label htmlFor="title">Book Title</label>
          <input name="title" type="text" defaultValue={book.title} />
        </p>
        <p>
          <label htmlFor="author">Book Author</label>
          <input name="author" type="text" defaultValue={book.author} />
        </p>

        <p>
          <label htmlFor="genre">Book Genre</label>
          <input name="genre" type="text" defaultValue={book.genre} />
        </p>
        <p>
          <label htmlFor="imageUrl">Book Image</label>
          <input name="imageUrl" type="text" defaultValue={book.imageUrl} />
        </p>
        <p>
          <label htmlFor="description">Book Description</label>
          <textarea
            name="description"
            cols="30"
            rows="7"
            defaultValue={book.description}
            className="description"
          ></textarea>
        </p>
        <button type="submit" form="editBookForm" className="btnSubmit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </div>
      <div className="imgSection">
          <img src={imageBooks} alt="Book-Thought"></img>
      </div>
      </form>
      <style jsx>{`
 
.editBookForm{
  background-color: #F5CB79;
          width:100%;
        height: 100%;
        }

  .imgSection{
          right:0;
          position: absolute;
        }
      .imgSection img{
        position: fixed;
       top:100px;
        right:0;
        height:650px;
        width: 500px;
        border-left: 4px solid #F5CB79;
      }
   .editHead{
     color: #F5CB79;
     text-align: center;
   }    
.book-box {
  color: #F5CB79;
width: 450px;
height: 600px;
background-color: black;
position: absolute;
text-align: center;
top: 150px;
left: 300px;
border: 2px solid black;
  border-radius: 10px;
}

.description{
  background-color: black;
  color: #F5CB79;
}
.description:focus {
  background-color: #F5CB79;
  color: black;
}
form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #F5CB79;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  background-color: black;
 
}

form button:hover {
  background: #F5CB79;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #F5CB79, 0 0 25px #F5CB79, 0 0 50px #F5CB79,
    0 0 100px #F5CB79;
}

button span {
  position: absolute;
  display: block;
}

button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #F5CB79);
  animation: btn-anim1 1s linear infinite;
}
input{
  background-color: black;
color: #F5CB79; 
}
input:focus {
  background-color: #F5CB79;
  color: black;
}
@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #F5CB79);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #F5CB79);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #F5CB79);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

* {
  box-sizing: border-box;
}

/**************************************/

@media (min-width: 700px) {
  .form {
    width: 70%;
  }
}

form p {
  float: left;
  width: 49%;
}
form p:not(:nth-child(2n)) {
  margin-right: 2%;
}
form p:last-child {
  clear: both;
  width: 100%;
}
form p:nth-last-child(2) {
  clear: both;
  width: 100%;
}

/**************************************/

ul {
  list-style: none;
  padding: 0;
}

form label {
  display: block;
}

button,
input,
textarea {
  padding: 1em;
}



h3,
ul {
  margin: 0;
}
{.contain {
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
  } 
 @media (min-width: 600px) {
    .contain {
      padding: 0;
    }
  } 

h3,
ul {
  margin: 0;
}
input:focus,
textarea:focus {
  outline: 3px solid #F5CB79;
}

input,
textarea,
button {
  width: 100%;
  border: 3px solid #B26F3F;
}
`}</style>
    </>
  );
};

export default EditBook;
