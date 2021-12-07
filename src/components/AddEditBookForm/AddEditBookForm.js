import { Component } from "react";

class AddEditBookForm extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return ( <form>
            <div className="book-box">
               
                  <p>
                    <label htmlFor="">Book Title</label>
                    <input type="text"/>
                  </p>
                  <p>
                    <label htmlFor="">Book Author</label>
                    <input type="text"/>
                  </p>
                  
                  <p>
                    <label htmlFor="">Book Genre</label>
                    <input type="text"/>
                  </p>
                  <p>
                    <label htmlFor="">Book Image</label>
                    <input type="text"/>
                  </p>
                  <p>
                    <label htmlFor="">Book Description</label>
                    <textarea name="" id="" cols="30" rows="7"></textarea>
                  </p>
                   <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                  </a>
  
                  </div>
     
  <style jsx>{`
       
.book-box {
  color: #551a8b;
}

.add-form .book-box {
  position: relative;
}
form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #551a8b;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

form a:hover {
  background: #ac76df;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #551a8b, 0 0 25px #551a8b, 0 0 50px #551a8b,
    0 0 100px #551a8b;
}

a span {
  position: absolute;
  display: block;
}

a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #551a8b);
  animation: btn-anim1 1s linear infinite;
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

a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #551a8b);
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

a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #551a8b);
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

a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #551a8b);
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

/* .contain {
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
  } */
/* @media (min-width: 600px) {
    .contain {
      padding: 0;
    }
  } */

h3,
ul {
  margin: 0;
}

input:focus,
textarea:focus {
  outline: 3px solid #8e66b1;
}

input,
textarea,
button {
  width: 100%;
  border: 3px solid #551a8b;
}
`}</style>
  </form>)
    }
}
export default AddEditBookForm;