import { useSelector, useDispatch } from "react-redux";
import { decre, incre, removeCart } from "../../redux/data/action";
import "./ShoppingBasket.scss";

const ShoppingBasket = () => {
  const cartListData = useSelector((state) => state.counterReducer.cartList);

  const { count, id } = useSelector((state) => state.counterReducer);

  // console.log(count);

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
              {/* <div>{item.quantity} Quantity</div> */}
              <div>
                {/* {item.quantity} */}
                <div className="count">
                  <span
                    className="action"
                    onClick={() => dispatch(decre(item.id))}
                  >
                    -
                  </span>
                  <span className="qnt">{item.quantity}</span>
                  {/* <span className="qnt">{itemcount}</span> */}
                  <span
                    className="action"
                    onClick={() => dispatch(incre(item.id))}
                  >
                    +
                  </span>
                </div>
                {/* Quantity */}
              </div>
              <button
                onClick={() =>
                  // removeCart(item.id)
                  dispatch(removeCart(item.id))
                }
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingBasket;
