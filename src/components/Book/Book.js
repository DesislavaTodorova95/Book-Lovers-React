import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {  useState } from "react/cjs/react.development";

const Book = ({_id,
  title, author, genre, description, imageUrl, likes, addedBy, comments,
})=>{
  
  const [showMore, setShowMore] = useState(false);
return(
<div className={showMore ? 'book book-flex': 'book'}>
  <div className="imgSection">
        <img className="book-image" src={imageUrl} alt="Harry Potter 1st book Cover"/>
        <p className="author"> <small>By { author}</small></p>
  </div>     
 <div className='book-info'>
    <h1 className='book-title'><strong>{title}</strong></h1>
    <h6 className="genre">Genre: {genre}</h6>
       <h3>
      Desicription</h3>
      <span className="description">
        <p>{showMore ? description : `${description.substring(0, 100)}`}</p>
        <button className="btn" onClick={()=>{setShowMore(!showMore)}}>{!showMore ? 'More': 'Less'}</button></span>
        <div className='btns-div'>
        
       <p>Likes</p>
          <p className="likes-counter"><i className="material-icons"><FaHeart /></i>{likes && likes.length >0? Number(likes.length): 0}</p></div>
         <Link to={`/books/details/${_id}`}>
         <button className='btn'>Details</button>
  </Link>
        
       
 </div>
   
 
<style jsx>{`.book {

  width: 48%;
 position:relative;
  height:510px;
  display: flex;
  float: left;
  border: 4px solid #3D1C0B;
  margin: 45px 10px 10px 10px;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #FFE4C4;
}
.book-flex{
  height: auto;
}
.genre{
  margin-top: 1px;
  padding:1px;
  font-size: 13px
}
.book-image{
  width: 200px;
  height: 260px;
  padding: 4px;
  display: block;
  border-right: 3px solid #3D1C0B;
}


.imgSection {
  float: right;
}
.author {
  text-align: left;
  padding-left: 25px;
}
.book-info {
  position: relative;
  display: inline-block;
  float: left;
  margin-left: 20px;
}
.btn{
  width: 90px;
  height: 40px;
  
  margin: 10px 5px;
  border: 2px solid #3D1C0B;
  border-radius: 3px;
  background-color: #3D1C0B;
  color: #FFE4C4;
}
.btn:hover{
 background-color: #FFE4C4;
 color: #3D1C0B;
}

.book-title{
  display: inline-block;
 font-family: 'Trattatello', fantasy;
border-bottom: 1px solid #3D1C0B;
}
.btns-div{
  display: flex;
}
.material-icons{
  
  color: red;
}
.description{

  display: inline-block;
  width: 200px;
  word-wrap: break-word;
  text-align: left;

  text-decoration: none;
  font-family:'Helvetica', sans-serif;
  font-size: 16px;
  border-bottom: 1px solid #3D1C0B 
}
.likes-counter{text-align: center;}
`}</style>

</div>  
)
}
export default Book;