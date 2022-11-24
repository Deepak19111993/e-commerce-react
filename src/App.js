import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import PrivateRoutes from "./Components/PrivateRoute/PrivateRoutes";
import PublicRoutes from "./Components/PublicRoutes/PublicRoutes";
import Slot from "./Components/Slot/Slot";
import Sidebar from "./Components/Sidebar/Sidebar";
import PdfUpload from "./Components/PdfUpload/PdfUpload";
import Stepper from "./Pages/Stepper/Stepper";

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
        <>
          <Header />
          <Sidebar />
        </>
      )}
      <div className="content">
        <Routes>
          <Route element={<PrivateRoutes />}>
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
            <Route exact path="/slot" element={<Slot />} />
            <Route exact path="/pdfupload" element={<PdfUpload />} />
            <Route exact path="/stepper" element={<Stepper />} />
          </Route>

          <Route element={<PublicRoutes />}>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Route>
          <Route exact path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
