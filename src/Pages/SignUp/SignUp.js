import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import bgImg from "../../assets/images/amz-img.webp";

const SignUp = ({ open, setOpen }) => {
  const nodeRef = useRef();
  // const [value, setValue] = useState("");
  // const [name, setName] = useState("");
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(user);
  };

  console.log("userData", userData);

  return (
    <div className="signup-Wrapper">
      <img src={bgImg} alt="bgImg" />
      <div ref={nodeRef} className="signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>First Name</label>
            <input
              onChange={handleChange}
              type="name"
              name="firstname"
              placeholder="Enter the First Name"
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              onChange={handleChange}
              type="name"
              name="lastname"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmpassword"
              placeholder="Enter Confirm Password"
            />
          </div>
          <button type="submit">Submit</button>
          <div className="already-ac">
            have already an account? <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
