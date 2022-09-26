import "./App.css";
import { Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import CheckoutAd from "./Components/CheckoutAd/CheckoutAd";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import ShoppingBasket from "./Components/ShoppingBasket/ShoppingBasket";

function App() {
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
