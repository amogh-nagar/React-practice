import {createSlice} from "@reduxjs/toolkit";

const uislice = createSlice({
  name: "ui",
  initialState: {cartisvisible: false,notification:null},
  reducers: {
    togglecart(state) {
      state.cartisvisible = !state.cartisvisible;
    },
    setnotification(state,action){
      state.notification={status:action.payload.status,title:action.payload.title,message:action.payload.message}
    },
    resetnotification(state){
      state.notification=null;
    }
  },
});

export const uisliceactions = uislice.actions;

export default uislice;
