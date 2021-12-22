import { Link } from "react-router-dom"

const Comment = ()=>{



return(
     <div className="comment">
<h3>By: Someone</h3>
<p>
  This is an amazing book. I love it...
</p>
<br />
<div id="commentsBtnsSection">
  
  <Link to="/">
    <button className="btn">Delete Comment</button>
  </Link>
</div>
<p className="addedAt">
  <small><bold>addedAt</bold></small>
  <br />
  <small>10.12.21</small>
</p>
</div>


)}
export default Comment;