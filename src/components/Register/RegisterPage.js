import { Component } from "react";
import { Link } from "react-router-dom";

class RegisterPage extends Component{
render(){
    return (<div className="register-box">
    <h2>Register</h2>
    <form>
      <div className="user-box">
        <input type="text" name="" required=""/>
        <label>Email</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <div className="user-box">
        <input type="re-pass" name="" required=""/>
        <label>Repeat Password</label>
      </div>
      <Link to="/">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </Link>
    </form>
    <style jsx>{`.register-box {
    position: absolute;
    top: 58%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
    background-color: black;
 
  }
  
  .register-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #551A8B;
    text-align: center;
  }
  
  .register-box .user-box {
    position: relative;
  }
  
  .register-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  .register-box .user-box label {
    position: absolute;
    top:0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }
  
  .register-box .user-box input:focus ~ label,
  .register-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #551A8B;
    font-size: 12px;
  }
  
  .register-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #551A8B;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
  }
  
  .register-box a:hover {
    background: #ac76df;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #551A8B,
                0 0 25px #551A8B,
                0 0 50px #551A8B,
                0 0 100px #551A8B;
  }
  
  .register-box a span {
    position: absolute;
    display: block;
  }
  
  .register-box a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #551A8B);
    animation: btn-anim1 1s linear infinite;
  }
  
  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,100% {
      left: 100%;
    }
  }
  
  .register-box a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #551A8B);
    animation: btn-anim2 1s linear infinite;
    animation-delay: .25s
  }
  
  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,100% {
      top: 100%;
    }
  }
  
  .register-box a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #551A8B);
    animation: btn-anim3 1s linear infinite;
    animation-delay: .5s
  }
  
  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,100% {
      right: 100%;
    }
  }
  
  .register-box a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #551A8B);
    animation: btn-anim4 1s linear infinite;
    animation-delay: .75s
  }
  
  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,100% {
      bottom: 100%;
    }
  }
  `}</style>
  </div>
  )
}
}
export default RegisterPage;