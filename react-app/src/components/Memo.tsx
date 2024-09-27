import React, { useMemo, useState } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  const slowFunction = useMemo(() => {
    for (var i = 0; i < 1000000000; i++) {}
    return number * 2;
  }, [number]);

  // const slowFunction = () => {
  //   for (var i = 0; i < 1000000000; i++) {}
  //   return number * 2;
  // };

  return (
    <div style={{ background: "#cfe2ff" }}>
      <input
        value={number}
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyles}>{slowFunction}</div>
      {/* <div style={themeStyles}>{slowFunction()}</div> */}
      <div>
        useMemo hook returns memoized value. It is equivalent to caching. When
        the same argument is sent, it returns the previous calculated value.
        It's useful for optimizing expensive computations, such as data
        transformations or CPU extensive operations, that are being
        unnecessarily recalculated on every render. Here when theme was changed,
        it was forcing to recalculate the value and it was slow. Now we move the
        function inside useMemo and now even if the theme is changed we are
        getting the memoized value.
      </div>
    </div>
  );
};

export default Memo;
