import { useContext, useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";

const RegisterPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRepass] = useState("");

  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    if (!userInfo) {
      localStorage.clear("sess-token");
    }
  }, [userInfo, history]);
  const { setValue } = useContext(ErrorsContext);
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
      );

      setUserInfo(JSON.stringify(data));

      localStorage.setItem("sess-token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("email", data.email);

      history.push("/");
    } catch (error) {
      setValue(error.response.data);
    }
  };

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

        <button type="submit" form="submitForm" className="btnSubmit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
      <style jsx>{`
        .register-box {
          position: absolute;
          top: 58%;
          left: 50%;
          width: 400px;
          padding: 40px;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.5);
          box-sizing: border-box;
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
          border-radius: 10px;
          background-color: black;
        }
        .btnSubmit {
          background-color: black;

          border: none;
        }

        .register-box h2 {
          margin: 0 0 30px;
          padding: 0;
          color: #f5cb79;
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
          top: 0;
          left: 0;
          padding: 10px 0;
          font-size: 16px;
          color: #fff;
          pointer-events: none;
          transition: 0.5s;
        }

        .register-box .user-box input:focus ~ label,
        .register-box .user-box input:valid ~ label {
          top: -20px;
          left: 0;
          color: #f5cb79;
          font-size: 12px;
        }

        .register-box form button {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          color: #f5cb79;
          font-size: 16px;
          text-decoration: none;
          text-transform: uppercase;
          overflow: hidden;
          transition: 0.5s;
          margin-top: 40px;
          letter-spacing: 4px;
        }

        .register-box button:hover {
          background: #f5cb79;
          color: #fff;
          border-radius: 5px;
          box-shadow: 0 0 5px #f5cb79, 0 0 25px #f5cb79, 0 0 50px #f5cb79,
            0 0 100px #f5cb79;
        }

        .register-box button span {
          position: absolute;
          display: block;
        }

        .register-box button span:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f5cb79);
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

        .register-box button span:nth-child(2) {
          top: -100%;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, transparent, #f5cb79);
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

        .register-box button span:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(270deg, transparent, #f5cb79);
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

        .register-box button span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(360deg, transparent, #f5cb79);
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
      `}</style>
    </div>
  );
};

export default RegisterPage;
