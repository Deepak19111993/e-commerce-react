import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useStateValue } from "../../StateProvider";

const Header = () => {
  const { myReducer } = useStateValue();

  const [state, dispatch] = myReducer;

  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <span>E-Shop</span>
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
            <span>Sign In</span>
          </li>
          <li className="nav-item cart">
            <Link to="/checkout">
              <span>Cart</span>
              <span className="cart-number">{state.cartList.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
