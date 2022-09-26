import React from "react";
import Rating from "../Rating/Rating";
import "./Card.scss";
import { useStateValue } from "../../StateProvider";

const Card = ({ title, price, rating, imageURL }) => {
  const { myReducer } = useStateValue();

  const [state, dispatch] = myReducer;

  const clickHadler = (selectedValue) => {
    const timeStamp = new Date().getTime();
    selectedValue = { ...selectedValue, id: timeStamp };
    dispatch({
      type: "ADD_TO_CART",
      payload: selectedValue,
    });
  };

  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="price">$ {price}</div>
      <div className="starRating">
        <Rating rating={rating} />
      </div>
      <div className="imageHolder">
        <img src={imageURL} alt="" />
      </div>
      <button onClick={() => clickHadler({ title, price, rating, imageURL })}>
        Add to Card
      </button>
    </div>
  );
};

export default Card;
