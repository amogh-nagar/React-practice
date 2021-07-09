import {useReducer, useCallback} from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.resdata,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }
};

const useHttp = (reqfunc, startwithpending = false) => {
  const [httpstate, dispatch] = useReducer(httpReducer, {
    status: startwithpending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestdata) => {
      dispatch({type: "SEND"});

      try {
        const resdata = await reqfunc(requestdata);
        dispatch({type: "SUCCESS", resdata});
      } catch (err) {
        dispatch({
          type: "ERROR",
          errorMessage: err.message || "Something went wrong!",
        });
      }
    },
    [reqfunc]
  );

  return {
    sendRequest,
    ...httpstate,
  };
};

export default useHttp;
