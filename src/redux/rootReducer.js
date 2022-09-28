import { combineReducers } from "redux";
import counterReducer from "./data/reducer";

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
