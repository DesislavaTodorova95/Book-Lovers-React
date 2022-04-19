import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";
import "./RegisterPage.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRepass] = useState("");

  const [ userInfo, setUserInfo ] = useContext(UserContext);
  const [ value, setValue ] = useContext(ErrorsContext);
  useEffect(() => {
    if (!userInfo) {
      localStorage.clear("sess-token");
    }
  }, [userInfo]);
  
  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://murmuring-cliffs-61613.herokuapp.com/auth/register",
        { email, password, rePass },
        config
      ).catch((error)=>{
       throw new Error(error.response.data)
      });

      setUserInfo(data);

      localStorage.setItem("sess-token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("email", data.email);
    } catch (error) {
      console.log(value)
     setValue(error.message)
    }
  
  };
  if (userInfo) {
    return <Redirect to="/" />;
  }
  return (
    <div className="register-box">
      <h2>Register</h2>
      <form onSubmit={onRegisterSubmit} id="submitForm">
        <div className="user-box">
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="rePass"
            onChange={(e) => {
              setRepass(e.target.value);
            }}
            value={rePass}
          />
          <label htmlFor="rePass">Repeat Password</label>
        </div>

        <button type="submit" form="submitForm" className="regBtnSubmit">
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

export default RegisterPage;
