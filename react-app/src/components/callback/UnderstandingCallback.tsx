import React, { useCallback, useState } from "react";
import List from "./List";

const UnderstandingCallback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  return (
    <div style={themeStyles}>
      <h3 className="alert alert-primary">
        The React useCallback Hook returns a memoized callback function such as
        those passed to the child components, event handlers or timers. It helps
        improves the performance of the application by reducing unnecessary
        re-renders
      </h3>
      <p>
        To understand callback comment getItems function in
        UnderstandingCallback component and uncomment commented code.
      </p>
      <input
        value={number}
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        Change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UnderstandingCallback;
