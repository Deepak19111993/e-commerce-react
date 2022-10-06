import React, { useEffect } from "react";
// import Rating from "../Rating/Rating";
import "./Card.scss";
// import { useStateValue } from "../../StateProvider";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/data/action";

const Card = ({ albumTitle, regularPrice, image, id }) => {
  const dispatch = useDispatch();

  const { cartList, users } = useSelector((state) => state.counterReducer);

  console.log("cartList", cartList);
  // console.log("users", users.products);

  // console.log(
  //   "id",
  //   cartList.map((data) => data.id)
  // );

  const token = localStorage.getItem("token");

  return (
    <div className="card">
      <div className="title">{albumTitle}</div>
      <div className="price">$ {regularPrice}</div>
      {/* <div className="starRating">
        <Rating rating={rating} />
      </div> */}
      <div className="imageHolder">
        <img src={image} alt="" />
      </div>
      {cartList.map((data) => data.id).includes(id) ? (
        <button
          className="disabled"
          onClick={() =>
            dispatch(addCart({ albumTitle, regularPrice, image, id }))
          }
        >
          Added
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch(addCart({ albumTitle, regularPrice, image, id }))
          }
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Card;
