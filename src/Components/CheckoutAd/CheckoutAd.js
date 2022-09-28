import { useSelector } from "react-redux";
import { useStateValue } from "../../StateProvider";
import "./CheckoutAd.scss";

const CheckoutAd = () => {
  const cartListData = useSelector((state) => state.counterReducer.cartList);
  // const { myReducer } = useStateValue();

  // const [state, dispatch] = myReducer;

  const getTotalAmount = () => {
    let total = 0;

    cartListData.map((item) => {
      return (total =
        Number(total) +
        Number(
          item.quantity > 1
            ? item.regularPrice * item.quantity
            : item.regularPrice
        ));
    });
    return total.toFixed(2);
  };

  // const itemLength = () => {
  //   let item = 0;
  //   cartListData.map((i) => {
  //     return (item =
  //       i.quantity > 1
  //         ? cartListData.length * i.quantity
  //         : cartListData.length);
  //   });
  //   return item;
  // };

  return (
    <div className="checkoutAd">
      <div className="leftSide">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
      </div>
      <div className="rightSide">
        <div className="subtotal">
          <div>
            <div className="block">
              <strong> Subtotal </strong> ${getTotalAmount()}
            </div>
            <div className="block">
              <strong>Items</strong>
              {cartListData.length}
              {/* items {itemLength()} */}
            </div>
          </div>
          <p style={{ textAlign: "left" }}>
            <input type="checkbox" />
            This order contains a gift
          </p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAd;
