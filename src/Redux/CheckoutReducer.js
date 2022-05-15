import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    valueOne: "",
    valueTwo: "",
    valueThree: { price: 35, status: false },
    valueFour: "",
  },
  reducers: {
    chooseTopic: (state, action) => {
      state.valueOne = action.payload;
    },

    askQuestion: (state, action) => {
      state.valueTwo = action.payload;
    },

    offerValue: (state, action) => {
      state.valueThree = action.payload;
    },

    summary: (state, action) => {
      // debugger;
      state.valueFour = action.payload;
    },
  },
});

export const { chooseTopic, askQuestion, offerValue, summary } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
