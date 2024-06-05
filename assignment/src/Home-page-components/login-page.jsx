import React, { useState } from "react";
import image from "../images/amazon-logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = () => {
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/homepage");
    } else {
      alert("Please enter both username and password.");
    }
  };

  const signIn = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      alert("Sign in successful!");
      navigate("/homepage");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-page-img">
          <img src={image} alt="" onClick={() => navigate("/homepage")} />
        </div>
        <div className="login-page-container">
          <h1>Sign-in</h1>
          <form action="">
            <p className="login-page-heading">Username</p>
            <input
              type="text"
              className="login-page-text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="user name.."
            />

            <p className="login-page-heading">Password</p>
            <input
              type="password"
              className="login-page-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password.."
            />

            <button
              className="login-page-signin"
              type="button"
              onClick={signIn}
            >
              Sign In
            </button>
          </form>

          <p>
            By signing in, you agree to Amazon's Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice, and our
            Interest-Based Ads Notice.
          </p>

          <button className="login-page-register" onClick={register}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
