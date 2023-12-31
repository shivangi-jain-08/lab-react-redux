import React, { useReducer } from "react";
import likeCounterReducer from "./Reducer";

const LikeCounter = () => {
  const [state, dispatch] = useReducer(likeCounterReducer, { likeCount: 0 });

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Like Counter: {state.likeCount}</h1>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

export default LikeCounter;
