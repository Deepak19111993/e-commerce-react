import React, { useEffect } from 'react';
import Card from '../Card/Card';
import './ProductList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchData } from '../../redux/data/action';

const ProductList = () => {
  // const data = useStateValue();
  const dispatch = useDispatch();

  const { loading, cartList, users } = useSelector(
    (state) => state.counterReducer
  );
  const userData = users.products;

  // albumTitle, regularPrice, image,

  // console.log("users", userData);

  return (
    <>
      {loading ? <p style={{ textAlign: 'center' }}>Loading</p> : ''}
      <div className="product-list-wrapper">
        {userData?.map((item, index) => {
          return <Card key={index} {...item} id={index} added="false" />;
        })}
      </div>
    </>
  );
};

export default ProductList;
