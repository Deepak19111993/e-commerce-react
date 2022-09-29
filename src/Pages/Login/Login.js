import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import bgImg from "../../assets/images/amz-img.webp";

const Login = () => {
  return (
    <div className="loginWrapper">
      <img src={bgImg} alt="bgImg" />
      <div className="form-wrapper">
        <h2>Log In</h2>
        <form
        //   onSubmit={handleSubmit}
        >
          <div className="field">
            <label>Email</label>
            <input
              // onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              // onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
          <button type="submit">Log In</button>
          <div className="already-ac">
            if you don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
