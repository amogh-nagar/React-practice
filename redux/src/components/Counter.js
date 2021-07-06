import {useSelector, useDispatch, connect} from "react-redux"; //it allow us to automatically select a part of our state managed by store
import {Component} from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const {counter, showcounter} = useSelector((state) => state);

  // const incrementhandler = (value) => {
  //   dispatch({type: "INCREMENT",value:value});
  // };

  const increasehandler = (value) => {
    dispatch({type: "INCREASE", value: value});
  };

  const decrementhandler = () => {
    dispatch({type: "DECREMENT"});
  };

  const toggleCounterHandler = () => {
    dispatch({type: "TOGGLE"});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showcounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increasehandler.bind(null, 1)}>Increment</button>
        <button onClick={increasehandler.bind(null, 5)}>Increment by 5</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementhandler() {
//     this.props.increment();
//   }

//   decrementhandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementhandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementhandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStatetoprops = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapdispatchtoprops = (dispatch) => {
//   return {
//     increment: () => dispatch({type: "INCREMENT"}),
//     decrement: () => dispatch({type: "DECREMENT"}),
//   };
// };

// export default connect(mapStatetoprops, mapdispatchtoprops)(Counter);
