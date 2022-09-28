import React from "react";
import Rating from "../Rating/Rating";
import "./Card.scss";
import { useStateValue } from "../../StateProvider";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/data/action";

const Card = ({ albumTitle, regularPrice, image, id }) => {
  const dispatch = useDispatch();

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
      <button
        onClick={
          () => dispatch(addCart({ albumTitle, regularPrice, image, id }))
          // clickHadler({ title, price, rating, imageURL })
        }
      >
        Add to Cart
        {/* {added === "true" ? "Added" : "Add to Card"} */}
      </button>
    </div>
  );
};

export default Card;
