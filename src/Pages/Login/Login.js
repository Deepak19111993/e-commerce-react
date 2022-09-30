import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import bgImg from "../../assets/images/amz-img.webp";

const Login = () => {
  const navigate = useNavigate();
  // const [value, setValue] = useState("");
  // const [name, setName] = useState("");
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  // const [logninUserData, setLogninUserData] = useState({});
  const [loginError, setLoginError] = useState({});
  // const [data, setData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
    setLoginError(lognValidate(loginUser));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginValue = Object.entries(loginUser).map(([key, value]) => !!value);
    let loginLatestError = lognValidate(loginUser);

    console.log(loginValue);
    console.log(loginLatestError, Object.keys(loginLatestError).length);

    if (loginValue.includes(false)) {
      setLoginError(lognValidate(loginUser));
      alert("please fill the form!");
    } else {
      const getUserArr = localStorage.getItem("signupform");

      // console.log("getUserValue", getUserArr);

      if (getUserArr && getUserArr.length) {
        const getUserData = JSON.parse(getUserArr);
        console.log(getUserData);
        const userFilter = getUserData.filter((e) => {
          return (
            e.email === loginUser.email && e.password === loginUser.password
          );
        });

        console.log(userFilter);

        console.log("lenth", loginLatestError.length);

        if (userFilter.length === 0) {
          if (Object.keys(loginLatestError).length !== 0) {
            alert("solve the error!");
          } else {
            alert("Invalid Details!");
          }
        } else {
          localStorage.setItem("token", JSON.stringify(userFilter));
          navigate("/");
        }
      }
    }

    // console.log(Object.keys(loginLatestError));

    // if (Object.keys(loginLatestError).length !== 0) {
    //   setLoginError(lognValidate(loginUser));
    //   console.log(loginLatestError);
    //   alert("please fill the form!");
    // } else {
    //   const getUserArr = localStorage.getItem("signupform");

    //   // console.log("getUserValue", getUserArr);

    //   if (getUserArr && getUserArr.length) {
    //     const getUserData = JSON.parse(getUserArr);
    //     // console.log(getUserData);
    //     const userFilter = getUserData.filter(
    //       (e) =>
    //         e.email === loginUser.email && e.password === loginUser.password
    //     );
    //     console.log(userFilter);
    //     if (userFilter.length === 0) {
    //       alert("Invalid Details!");
    //     } else {
    //       localStorage.setItem("token", "randomValue");
    //       navigate("/");
    //     }
    //   }
    // }
  };

  const lognValidate = (value) => {
    let loginValidateError = {};

    // email
    if (!value.email) {
      loginValidateError.email = "Email is Required!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
      loginValidateError.email = "Email is not valid!";
    }

    // password
    if (!value.password) {
      loginValidateError.password = "Password is Required!";
    } else if (value.password.length < 4) {
      loginValidateError.password = "must be more than 3 character!";
    }

    return loginValidateError;
  };

  return (
    <div className="loginWrapper">
      <img src={bgImg} alt="bgImg" />
      <div className="form-wrapper">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input
              onChange={handleChange}
              onBlur={handleChange}
              type="email"
              name="email"
              placeholder="Enter Last Name"
            />
            {loginError.email && <p className="error">{loginError.email}</p>}
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={handleChange}
              onBlur={handleChange}
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            {loginError.password && (
              <p className="error">{loginError.password}</p>
            )}
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
