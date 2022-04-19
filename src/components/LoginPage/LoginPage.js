import axios from "axios";
import ErrorsContext from "../contexts/ErrorContext";
import React, {
  useContext,
  useState,
  useEffect,
} from "react/cjs/react.development";
import UserContext from "../contexts/UserContext";
import "./LoginPage.css";
import { Redirect } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setToken] = useState(null);
  const [, setUserId] = useState(null);
  const [ userInfo, setUserInfo ] = useContext(UserContext);
  const [ value, setValue ] = useContext(ErrorsContext);

  useEffect(() => {
    if (!userInfo) {
      localStorage.clear("sess-token");

      setToken(null);
      setUserId(null);
    } else {
      return <Redirect to="/" />;
    }
  }, [userInfo]);

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const  {data} = await axios
   
        .post(
          "https://murmuring-cliffs-61613.herokuapp.com/auth/login",
          { email, password },
          config
        )
        .catch((error) => {
        console.log(error)
         
          throw new Error(error.response.data)
        });
console.log('value must be null', value)
      setUserInfo(data);


      localStorage.setItem("sess-token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("email", data.email);
     
    } catch (error) {
      console.log('sec' +error)
      console.log(value)
     setValue(error.message)
    }
  };
if(userInfo){return <Redirect to="/"/>}
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form id="submitForm" onSubmit={onLoginSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" form="submitForm" className="loginBtnSubmit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
