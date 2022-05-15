import { createSlice } from '@reduxjs/toolkit';

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    valueOne: '',
    valueTwo: '',
    valueThree: { price: 35, status: false },
    valueFour: '',
    valueFive: '',
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

    account: (state, action) => {
      // debugger;
      state.valueFour = action.payload;
    },

    summary: (state, action) => {
      // debugger;
      state.valueFive = action.payload;
    },
  },
});

export const { chooseTopic, askQuestion, offerValue, account, summary } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
