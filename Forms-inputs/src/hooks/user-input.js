import {useState, useReducer} from "react";

const inputreducer = (state, action) => {
  //previous sdtate snapshot

  if (action.type === "INPUT") {
    return {value: action.value, isTouched: state.isTouched};
  }
  if (action.type === "BLUR") {
    return {value: state.value, isTouched: true};
  }
  if (action.type === "RESET") {
    return {value: "", isTouched: false};
  }

  return {
    value: "",
    isTouched: false,
  };
};

const useInput = (validateValue) => {
  const [inputstate, dispatchinput] = useReducer(inputreducer, {
    value: "",
    isTouched: false,
  });

  const valueIsValid = validateValue(inputstate.value);
  const hasError = !valueIsValid && inputstate.isTouched;

  const valueChangeHandler = (event) => {
    dispatchinput({type: "INPUT", value: event.target.value});
  };

  const inputBlurHandler = (event) => {
    dispatchinput({type: "BLUR"});
  };

  const reset = () => {
    dispatchinput({type: "RESET"});
  };

  return {
    value: inputstate.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
