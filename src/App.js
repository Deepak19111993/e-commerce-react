import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import CheckoutAd from "./Components/CheckoutAd/CheckoutAd";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import ShoppingBasket from "./Components/ShoppingBasket/ShoppingBasket";
import { useEffect } from "react";
import { getFetchData } from "./redux/data/action";
import { useDispatch } from "react-redux";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchData());
  }, []);

  return (
    <div className="App">
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        ""
      ) : (
        <Header />
      )}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Banner />
              <ProductList />
            </>
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <>
              <CheckoutAd />
              <ShoppingBasket />
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
