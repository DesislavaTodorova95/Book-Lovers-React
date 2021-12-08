import axios from "axios";
import ErrorsContext from "../contexts/ErrorContext";
import { useContext, useState, useEffect } from "react/cjs/react.development";
import UserContext from "../contexts/UserContext";

const LoginPage =({history})=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const { userInfo, setUserInfo } = useContext(UserContext);
  
  useEffect(() => { 

    if (!userInfo) {
      localStorage.clear("sess-token");

      setToken(null);
      setUserId(null);
     
    }
  }, [userInfo, history]);
  const { setValue } = useContext(ErrorsContext);
  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/auth/login",
        { email, password },
        config
      );

      setUserId(data.userId);
      setToken(data.token);
      setUserInfo({ userId, token });

      localStorage.setItem("sess-token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("email", data.email)
     
      history.push("/");
    } catch (error) {
      setValue(error.response.data);
    }
  };

        return (
          <div className="login-box">
          <h2>Login</h2>
          <form id="submitForm" onSubmit={onLoginSubmit}>
            <div className="user-box">
              <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
              <label htmlFor='email'>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="password" onChange={e=> setPassword(e.target.value)} value={password}/>
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" form="submitForm" className="btnSubmit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
          <style jsx>{`.login-box {
    position: absolute;
    top: 50%;
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
  .btnSubmit {
          background-color: black;

          border: none;
        }
  .login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #551A8B;
    text-align: center;
  }
  
  .login-box .user-box {
    position: relative;
  }
  
  .login-box .user-box input {
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
  .login-box .user-box label {
    position: absolute;
    top:0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }
  
  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #551A8B;
    font-size: 12px;
  }
  
  .login-box form .btnSubmit {
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
 
  .login-box .btnSubmit:hover {
    background: #ac76df;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #551A8B,
                0 0 25px #551A8B,
                0 0 50px #551A8B,
                0 0 100px #551A8B;
  }
  
  .login-box .btnSubmit span {
    position: absolute;
    display: block;
  }
  
  .login-box .btnSubmit span:nth-child(1) {
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
  
  .login-box .btnSubmit span:nth-child(2) {
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
  
  .login-box .btnSubmit span:nth-child(3) {
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
  
  .login-box .btnSubmit span:nth-child(4) {
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
        </div> )
    
}
export default LoginPage;
