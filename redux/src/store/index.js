import {createStore} from "redux";

const initialstate = {counter: 0, showcounter: true};

const reducer = (state = initialstate, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showcounter: state.showcounter,
    };
  }
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.value,
      showcounter: state.showcounter,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showcounter: state.showcounter,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      counter: state.counter,
      showcounter: !state.showcounter,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;
