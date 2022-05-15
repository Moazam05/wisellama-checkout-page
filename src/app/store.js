import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "../Redux/rootReducer";

const store = configureStore({
  reducer,
});
export default store;
