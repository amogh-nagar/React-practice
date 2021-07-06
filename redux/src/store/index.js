// import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import counterslicereducer from "./counter";
import authslicereducer from "./auth";
// const increment="INCREMENT"  one method

// const reducer = (state = initialstate, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showcounter: state.showcounter,
//     };
//   }
//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.value,
//       showcounter: state.showcounter,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showcounter: state.showcounter,
//     };
//   }

//   if (action.type === "TOGGLE") {
//     return {
//       counter: state.counter,
//       showcounter: !state.showcounter,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: {counter: counterslicereducer, auth: authslicereducer}, //redux wants one main reducer function
});

export default store;
