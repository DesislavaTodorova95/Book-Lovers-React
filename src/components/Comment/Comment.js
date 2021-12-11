import { Link } from "react-router-dom"

const Comment = ()=>{



return(
     <div className="comment">
<h3>By: </h3>
<p>
  3 srfsdfsesflfsfadf loremipsnfkasnakfnkalfnlaknflfnalfnlafn;alflf
</p>
<br />
<div id="commentsBtnsSection">
  <Link to="/">
    <button className="btn">Edit Comment</button>
  </Link>
  <Link to="/">
    <button className="btn">Delete Comment</button>
  </Link>
</div>
<p className="addedAt">
  <small><bold>addedAt</bold></small>
  <br />
  <small>12920222</small>
</p>
</div>


)}
export default Comment;