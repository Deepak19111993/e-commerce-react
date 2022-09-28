import "./App.css";
import { Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import CheckoutAd from "./Components/CheckoutAd/CheckoutAd";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import ShoppingBasket from "./Components/ShoppingBasket/ShoppingBasket";
import { useEffect } from "react";
import { getFetchData } from "./redux/data/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchData());
  }, []);

  return (
    <div className="App">
      <Header />
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
      </Routes>
    </div>
  );
}

export default App;
