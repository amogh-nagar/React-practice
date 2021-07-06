//Heart of redux
const redux = require("redux");

//Must return a new state object
//There shoul not be any side effects in this , it's a pure function
const reducerfunc = (state = {counter: 0}, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(reducerfunc);
console.log(store.getState());
const subscriber = () => {
  const lateststate = store.getState(); //Latest state is returned
  console.log(lateststate);
};

store.subscribe(subscriber);

store.dispatch({type: "INCREMENT"});
store.dispatch({type: "DECREMENT"});
