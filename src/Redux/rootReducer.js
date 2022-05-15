import { combineReducers } from "redux";

import CheckoutReducer from "../Redux/CheckoutReducer";

export const reducer = combineReducers({
  checkout: CheckoutReducer,
});
