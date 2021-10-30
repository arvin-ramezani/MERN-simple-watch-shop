import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CartState, IRemovePayload } from "../../interfaces/interfaces";
import { ICartProduct } from "../../interfaces/interfaces";

const initialState: CartState = {
  cartQuantity: 0,
  cartProducts: [],
  totalPrice: 0,
  status: "idle",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, { payload }: PayloadAction<ICartProduct>) => {
      state.cartProducts.push(payload);
      state.totalPrice += payload.price * payload.productQuantity;
      state.cartQuantity += 1;
    },

    editCartItem: (state, { payload }: PayloadAction<IRemovePayload>) => {
      state.cartProducts = state.cartProducts.map((p) => {
        if (p._id === payload._id) {
          state.totalPrice = 0;
          return { ...p, productQuantity: payload.quantity };
        } else {
          return p;
        }
      });

      // Total Price
      state.cartProducts.map((p) => {
        state.totalPrice += p.price * p.productQuantity;
        return state.totalPrice;
      });
    },

    removeFromCart: (
      state,
      { payload }: PayloadAction<IRemovePayload["_id"]>
    ) => {
      state.cartProducts.splice(
        state.cartProducts.findIndex((p) => p._id === payload),
        1
      );

      state.cartQuantity -= 1;

      // Total Price
      state.totalPrice = 0;
      state.cartProducts.map((p) => {
        if (p._id === payload) {
          state.totalPrice -= p.productQuantity * p.price;
        } else {
          state.totalPrice += p.price * p.productQuantity;
        }

        return state.totalPrice;
      });
    },
  },
});

export const { addToCart, removeFromCart, editCartItem } = cartSlice.actions;

// Cart Selector
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
