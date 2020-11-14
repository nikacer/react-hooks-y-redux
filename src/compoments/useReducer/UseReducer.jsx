import React, { Fragment, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "COUNT_INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "COUNT_DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "TITLE_CHANGE":
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};

const UseReducerTest = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    title: "test useReducer",
  });

  const increment = () => {
    dispatch({ type: "COUNT_INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "COUNT_DECREMENT" });
  };

  return (
    <Fragment>
      <h1>{state.title}</h1>
      <p>{state.count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </Fragment>
  );
};

export { UseReducerTest };
