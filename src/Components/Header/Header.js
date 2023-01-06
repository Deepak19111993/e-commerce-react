import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useSelector } from 'react-redux';

const Header = ({ sidebarWidth, setCollapse, collapse }) => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const navigate = useNavigate();
  const headerRef = useRef();
  const cartListData = useSelector((state) => state.counterReducer.cartList);

  const token = localStorage.getItem('token');

  const tokenObj = JSON.parse(token);

  console.log(tokenObj);

  const signinClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  const handleHumbergur = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <header
        ref={headerRef}
        style={{ paddingLeft: collapse ? sidebarWidth + 20 : '70px' }}
      >
        <div className="humbergur-bar" onClick={handleHumbergur}>
          <span className="bar"></span>
        </div>
        <div className="header-search-bar">
          {tokenObj?.map((e, i) => (
            <input
              key={e.firstname}
              placeholder={`Hey ${e.firstname} Search Here !!!`}
              name="search"
            />
          ))}
          <span>Search</span>
        </div>
        <div className="header-navbar">
          <ul>
            <li className="nav-item user">
              {/* <span>Hello {token ? loginUserName : "Guest"} </span> */}
              {tokenObj?.map((e, i) => (
                <span key={e.firstname}>
                  Hey{' '}
                  <span style={{ color: '#009688' }}>
                    {e.firstname} {e.lastname}
                  </span>
                </span>
              ))}

              {localStorage.getItem('token') ? (
                <span onClick={handleLogout}>Log Out</span>
              ) : (
                <span onClick={signinClick}>Sign In</span>
              )}
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
    </>
  );
};

export default Header;
