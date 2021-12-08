import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

import baseUrl from "../../services/api"
const BookDetails = (props)=> {
 const [book, setBook]= useState(''); 
//  const [author, setAuthor]= useState('');
//  const [likes, setLikes] = useState(0);
//  const [description, setDescription] = useState('')
//  const [title, setTitle]= useState('')
//  const [imageUrl, setImageUrl] = useState('')
//  const [bookId, setBookId] = useState('')
//  const[comments, setComments] = useState('')
 const id =props.match.params.bookId
    useEffect(()=>{
      fetch(`${baseUrl}/books/${id}`).then(res=> res.json())
       .then((result)=> setBook({result}))
       .catch((error) => console.log(error));
      
     },[id])
     console.log(book)
//    setAuthor(book.author);
//    setLikes(book.likes);
//    setBookId(book._id);
//    setComments(book.comments);
//    setDescription(book.description)
   return( <div className="book">
    <div className="imgSection">
          <img className="book-image" value={book.imageUrl} alt="Harry Potter 1st book Cover"/>
          <p className="author"> <small value={book.author}></small></p>
    </div>     
   <div className='book-info'>
      <h1 className='book-title'><strong value={book.title}></strong></h1>
         <h3 className="description">
        {book.description}</h3>
          <div className='btns-div'>
          
          <button className="btn likeBtn">Like</button> 
            <p className="likes-counter"><i className="material-icons"><FaHeart /></i>{book.likes? Number(book.likes): 0}</p></div>
           <Link to={`/books/edit/${book.bookId}`}>
           <button className='btn'>Edit</button>
    </Link>
          
         
   </div>
   <style jsx>{`.book {
  width: 45%;
  height: auto;
  display: flex;
  float: left;
  border: 4px solid #551a8b;
  margin: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #FBEDD2;
}
.book-image{
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
.btn{
  width: 90px;
  height: 40px;
  
  margin: 10px 5px;
  border: 2px solid #551a8b;
  border-radius: 3px;
  background-color: #551a8b;
  color: #FBEDD2;
}
.btn:hover{
 background-color: #FBEDD2;
 color: #551a8b;
}

.book-title{
 font-family: 'Trattatello', fantasy;
border-bottom: 1px solid #551a8b;
}
.btns-div{
  display: flex;
}
.material-icons{
  
  color: red;
}
.description{
  text-decoration: none;
  font-family:'Helvetica', sans-serif;
  font-size: 16px;
}
.likes-counter{text-align: center;}
`}</style>

</div>  
)
}
export default BookDetails