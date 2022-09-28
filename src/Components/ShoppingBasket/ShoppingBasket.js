import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../../redux/data/action";
import "./ShoppingBasket.scss";

const ShoppingBasket = () => {
  const cartListData = useSelector((state) => state.counterReducer.cartList);
  const dispatch = useDispatch();
  return (
    <div className="shoppingBasket">
      <h2>Your Shopping Basket</h2>
      <hr />
      <ul className="list">
        {cartListData.length === 0 ? (
          <p style={{ textAlign: "center" }}>Cart is Empty</p>
        ) : (
          ""
        )}
        {cartListData.map((item, index) => (
          <li key={index}>
            <div className="imageHolder">
              <img src={item.image} alt="" />
            </div>
            <div className="itemDeatils">
              <div>{item.albumTitle}</div>
              <p>
                <strong>$ {item.regularPrice}</strong>
              </p>
              {/* <div>Rating - {item.rating}</div> */}
              <p>{item.quantity} Quantity</p>
              <button
                onClick={() =>
                  // removeCart(item.id)
                  dispatch(removeCart(item.id))
                }
              >
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingBasket;
