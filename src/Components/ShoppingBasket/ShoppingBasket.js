import { useStateValue } from "../../StateProvider";
import "./ShoppingBasket.scss";

const ShoppingBasket = () => {
  const { myReducer } = useStateValue();

  const [state, dispatch] = myReducer;

  const removeCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
  return (
    <div className="shoppingBasket">
      <h2>Your Shopping Basket</h2>
      <hr />
      <ul className="list">
        {state.cartList.map((item, index) => (
          <li key={index}>
            <div className="imageHolder">
              <img src={item.imageURL} alt="" />
            </div>
            <div className="itemDeatils">
              <div>{item.title}</div>
              <p>
                <strong>{item.price}</strong>
              </p>
              <div>{item.rating}</div>
              <button onClick={() => removeCart(item.id)}>
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
