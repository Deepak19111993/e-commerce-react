import React from "react";
import Card from "../Card/Card";
import "./ProductList.scss";
import { useStateValue } from "../../StateProvider";
// import { initialState } from "../../reducer";

const ProductList = () => {
  const data = useStateValue();

  const productListData = data.initialState.productList;
  return (
    <div className="product-list-wrapper">
      {productListData.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default ProductList;
