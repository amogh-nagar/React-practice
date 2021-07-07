import {configureStore} from "@reduxjs/toolkit";
import uislice from "./ui-slice";
import cartslice from "./cart";

const store = configureStore({
  reducer: {
    cart: cartslice.reducer,
    ui: uislice.reducer,
  },
});

export default store;
