// import {createStore} from "redux";
import {createSlice, configureStore} from "@reduxjs/toolkit";

// const increment="INCREMENT"  one method

const initialstate = {counter: 0, showcounter: true};

const counterslice = createSlice({
  name: "counter",
  initialState: initialstate,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
        
        // console.log(action.type)
      state.counter += action.payload;
    },
    togglecounter(state) {
      state.showcounter = !state.showcounter;
    },
  },
});



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
  reducer: counterslice.reducer, //redux wants one main reducer function
});




//will create a action method with a unique identifier same as the name of reducers
// counterslice.actions.togglecounter()


export const counteractions=counterslice.actions

export default store;
