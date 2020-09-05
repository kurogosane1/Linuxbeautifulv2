import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You submitted ");
  };
  return (
    <div className="login">
      <div className="input-heading">
        <h1>Please Sign in</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label>Username</label>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            id="user-input"
          />
          <div className="nothing">Wrong email address</div>
        </div>
        <div className="input">
          <label>Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            id="user-password"
          />
          <div className="nothing">incorrect password</div>
        </div>
        <div className="input-button">
          <button type="submit">Sign In</button>
        </div>
      </form>
      <div className="input-sign-up">
        <label>Forgot your username and password? Then click here</label>
        <br />
        <br />
        <label>
          If you are new user, then please click <Link to="/signup">Here</Link>
        </label>
      </div>
    </div>
  );
}
