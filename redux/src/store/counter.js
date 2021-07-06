import {createSlice} from "@reactjs/toolkit";

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

//will create a action method with a unique identifier same as the name of reducers
// counterslice.actions.togglecounter()
export const counteractions = counterslice.actions;

export default counterslice.reducer;
