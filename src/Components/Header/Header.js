import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
// import { useStateValue } from "../../StateProvider";
import { useSelector } from "react-redux";
import logo from "../../assets/images/online-shopping.png";

const Header = () => {
  const navigate = useNavigate();
  const cartListData = useSelector((state) => state.counterReducer.cartList);
  // const { myReducer } = useStateValue();

  // const [state, dispatch] = myReducer;
  // const [open, setOpen] = useState(false);

  const signinClick = () => {
    console.log("hey");
    // setOpen(true);
    navigate("/login");
  };

  return (
    <>
      <header>
        <div className="header-logo">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
            {/* <span>E-Shop</span> */}
          </Link>
        </div>
        <div className="header-search-bar">
          <input placeholder="Enter the your product" name="search" />
          <span>Search</span>
        </div>
        <div className="header-navbar">
          <ul>
            <li className="nav-item user">
              <span>Hello Guest</span>
              <span onClick={signinClick}>Sign In</span>
            </li>
            <li className="nav-item cart">
              <Link to="/checkout">
                <span>Cart</span>
                <span className="cart-number">{cartListData.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      {/* <SignInModal open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default Header;
