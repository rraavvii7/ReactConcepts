import { useReducer, useState } from "react";
import { ACTION_TYPES } from "./postActionType";
import { INITIAL_STATE, postReducer } from "./postReducer";

const Post = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const [count, setCount] = useState<number>(0);
  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    if (count % 2 !== 0) {
      dispatch({ type: ACTION_TYPES.FETCH_ERROR });
    } else {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
        })
        .catch((err) => {
          dispatch({ type: ACTION_TYPES.FETCH_ERROR });
        });
    }
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>
        useReducer is a React hook. When two or more state change together its
        better to change use useReducer hook. This reduces unwanted rendering of
        the DOM.
      </p>
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  );
};

export default Post;
