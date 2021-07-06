import {useSelector, useDispatch} from "react-redux"; //it allow us to automatically select a part of our state managed by store
// import {Component} from "react";
import classes from "./Counter.module.css";
import {counteractions} from "../store/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const {counter, showcounter} = useSelector((state) => state.counter);

  const incrementhandler = (value) => {
    dispatch(counteractions.increment());
  };

  const increasehandler = (value) => {
    dispatch(counteractions.increase(value)); //create an action objects where {type:SOME_UNIQUE_IDENTIFIER,payload:value}
  };

  const decrementhandler = () => {
    dispatch(counteractions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counteractions.togglecounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showcounter && <div className={classes.value}>{counter}</div>}
      {/* <div>
        <button onClick={increasehandler.bind(null, 1)}>Increment</button>
        <button onClick={increasehandler.bind(null, 5)}>Increment by 5</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div> */}
      <div>
        <button onClick={incrementhandler}>Increment</button>
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
