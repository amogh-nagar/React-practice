import {createSlice} from "@reduxjs/toolkit";

const initialcartstate = {items: [], totalquantity: 0};

const cartslice = createSlice({
  name: "cart",
  initialState: initialcartstate,
  reducers: {
    addtocart(state, action) {
      const item = action.payload;
    //   const existingitem = state.items.find((i) => i.id === item.id);

      const existingitemindex = state.items.findIndex((i) => i.id === item.id);
      state.totalquantity++;
      if (existingitemindex>=0) {

        // const existingitem = state.items[existingitemindex];
        state.items[existingitemindex].quantity += 1;
        state.items[existingitemindex].totalprice += item.price;
      } else {
        const q = 1;
        state.items.push({
          id: item.id,
          price: item.price,
          quantity: q,
          totalprice: item.price * q,
          name: item.title,
        });
      }
    },
    removefromcart(state, action) {
      state.totalquantity--;
      const id = action.payload;
      const existingitem = state.items.find((i) => i.id === id);
      if (existingitem.quantity === 1) {
        const items = state.items;

        const updateditems = items.filter((i) => i.id !== id);
        state.items = updateditems;
      } else {
        existingitem.quantity -= 1;
        existingitem.totalprice -= existingitem.price;
      }
    },
  },
});

export const cartsliceactions = cartslice.actions;

export default cartslice;
