import axios from "axios";
import {
  REQUEST_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
} from "../actionType";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";
const DATALIST_REQUEST = "DATALIST_REQUEST";
const DATALIST_SUCCESS = "DATALIST_SUCCESS";
const DATALIST_ERROR = "DATALIST_ERROR";

const data = [
  {
    id: 1,
    title:
      "Do esse ad nisi dolor ullamco Lorem deserunt commodo do et excepteur.",
    price: "1.02",
    rating: "4",
    imageURL: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_SY400_.jpg",
    quantity: 0,
  },
  {
    id: 2,
    title:
      "Amet do fugiat officia exercitation exercitation eiusmod ad aliqua duis minim.",
    price: "2.03",
    rating: "3",
    imageURL: "https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY400_.jpg",
    quantity: 0,
  },
  {
    id: 3,
    title:
      "Consequat eiusmod cillum tempor cillum excepteur velit laboris veniam.",
    price: "3.04",
    rating: "2",
    imageURL:
      "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg.jpg",
    quantity: 0,
  },
  {
    id: 4,
    title:
      "Tempor in exercitation do elit deserunt non adipisicing proident adipisicing est.",
    price: "4.00",
    rating: "3",
    imageURL: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_SY400_.jpg",
    quantity: 0,
  },
  {
    id: 5,
    title:
      "Cupidatat aliquip laboris tempor eu eiusmod veniam velit cupidatat Lorem Lorem exercitation proident.",
    price: "5.00",
    rating: "1",
    imageURL: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY400_.jpg",
    quantity: 0,
  },
  {
    id: 6,
    title:
      "Quis officia culpa commodo ut laborum ex laboris elit aliqua irure mollit culpa dolore sunt.",
    price: "6.00",
    rating: "3",
    imageURL: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY400_.jpg",
    quantity: 0,
  },
  {
    id: 7,
    title:
      "Incididunt nisi aliqua elit nostrud dolore consequat deserunt nostrud laboris ipsum id deserunt commodo.",
    price: "7.00",
    rating: "4",
    imageURL: "https://m.media-amazon.com/images/I/818e+fq7+BL._AC_SY400_.jpg",
    quantity: 0,
  },
  {
    id: 8,
    title: "Voluptate aliqua qui deserunt cillum amet excepteur eu velit.",
    price: "8.00",
    rating: "2",
    imageURL: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_SY400_.jpg",
    quantity: 0,
  },
  {
    id: 9,
    title:
      "Est cillum ad incididunt id quis magna pariatur ullamco aliqua nisi.",
    price: "9.00",
    rating: "4",
    imageURL: "https://m.media-amazon.com/images/I/710jnzKlDTL._AC_SY400_.jpg",
    quantity: 0,
  },
];

// const idata = axios.get(
//   "https://api.bestbuy.com/v1/products?apiKey=jLG38zOafI7GWMQ8LDjpORdN&format=json"
// );

const initialState = {
  productList: data,
  cartList: [],
  error: "",
  loading: false,
  added: false,
  users: [],
};

const counterReducer = (state = initialState, action) => {
  // console.log("ss", state);
  console.log(state.cartList.findIndex((el) => el));
  switch (action.type) {
    case ADD_TO_CART:
      const abc = state.cartList.findIndex((el) => el.id === action.payload.id);
      console.log("qqac", action);

      let mainCart = [...state.cartList];
      console.log(mainCart);

      if (abc === -1) {
        mainCart = [...state.cartList, { ...action.payload, quantity: 1 }];
      } else {
        mainCart[abc].quantity = mainCart[abc].quantity + 1;
      }

      return {
        ...state,
        cartList: mainCart,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.payload),
      };
    case REQUEST_FETCH_DATA:
      return {
        ...state,
        loading: true,
      };

    case SUCCESS_FETCH_DATA:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case FAIL_FETCH_DATA:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default counterReducer;
