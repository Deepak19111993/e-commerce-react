import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./SignUp.scss";
import { json, Link, useNavigate } from "react-router-dom";
import bgImg from "../../assets/images/amz-img.webp";

const SignUp = () => {
  const navigate = useNavigate();
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
  const [error, setError] = useState({});
  const [data, setData] = useState([]);

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
    setError(validate(user));

    let updateLocalStorage =
      JSON.parse(localStorage.getItem("signupform")) || [];

    updateLocalStorage.push(...data, user);
    localStorage.setItem("signupform", JSON.stringify(updateLocalStorage));

    // setUser("");

    // navigate("/login");
  };

  const validate = (value) => {
    let validateError = {};

    if (!value.firstname) {
      validateError.firstname = "First Name is Required!";
    } else if (value.firstname.length < 2) {
      validateError.firstname = "must be more than 1 character";
    }

    if (!value.lastname) {
      validateError.lastname = "Last Name is Required!";
    } else if (value.lastname.length < 2) {
      validateError.lastname = "must be more than 1 character";
    }

    if (!value.email) {
      validateError.email = "Email is Required!";
    }

    if (!value.password) {
      validateError.password = "Password is Required!";
    }

    if (!value.confirmpassword) {
      validateError.confirmpassword = "Password is Required!";
    } else if (value.password !== value.confirmpassword) {
      validateError.confirmpassword = "password is not match";
    }

    return validateError;
  };

  console.log("error", error);

  console.log("userData", userData);

  return (
    <div className="signup-Wrapper">
      <img src={bgImg} alt="bgImg" />
      <div ref={nodeRef} className="signup">
        <h2>Sign Up</h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="field">
            <label>First Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="firstname"
              placeholder="Enter the First Name"
            />
            {error.firstname && <p className="error">{error.firstname}</p>}
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="lastname"
              placeholder="Enter Last Name"
            />
            {error.lastname && <p className="error">{error.lastname}</p>}
          </div>
          <div className="field">
            <label>Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter Last Name"
            />
            {error.email && <p className="error">{error.email}</p>}
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            {error.password && <p className="error">{error.password}</p>}
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmpassword"
              placeholder="Enter Confirm Password"
            />
            {error.confirmpassword && (
              <p className="error">{error.confirmpassword}</p>
            )}
          </div>
          <button type="submit">Sign Up</button>
          <div className="already-ac">
            have already an account? <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
