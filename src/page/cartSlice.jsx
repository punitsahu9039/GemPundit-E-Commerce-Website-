import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cards.find(item => item.id === action.payload.id);

      if (existingProduct) {
        alert("Product already exists in the cart");
      } else {
        state.cards.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      state.cards = state.cards.filter(item => item.id !== action.payload);
    },

    incProduct: (state, action) => {
      const product = state.cards.find(item => item.id === action.payload);
      if (product) product.qty += 1;
    },

    decProduct: (state, action) => {
      const product = state.cards.find(item => item.id === action.payload);
      if (product && product.qty > 1) {
        product.qty -= 1;
      }
    },
  },
});

export const { addToCart, removeItem, incProduct, decProduct } = cartSlice.actions;

export default cartSlice.reducer;
